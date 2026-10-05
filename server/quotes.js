import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const MAX_BODY_BYTES = 8 * 1024 * 1024;
const ALLOWED_PHOTO_TYPES = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
};

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        const error = new Error("Request is too large.");
        error.statusCode = 413;
        reject(error);
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
}

function text(value) {
  return typeof value === "string" ? value.trim() : "";
}

async function savePhoto(dir, id, photo) {
  const type = text(photo?.type);
  const extension = ALLOWED_PHOTO_TYPES[type];
  const dataUrl = typeof photo?.dataUrl === "string" ? photo.dataUrl : "";
  const match = dataUrl.match(/^data:([^;]+);base64,([A-Za-z0-9+/=\s]+)$/);
  if (!extension || !match || match[1] !== type) {
    const error = new Error("Please attach a JPG, PNG, WebP, or GIF image.");
    error.statusCode = 400;
    throw error;
  }

  const bytes = Buffer.from(match[2].replace(/\s/g, ""), "base64");
  if (!bytes.length || bytes.length > 5 * 1024 * 1024) {
    const error = new Error("Please use an image under 5 MB.");
    error.statusCode = 400;
    throw error;
  }

  const filename = `${id}.${extension}`;
  await writeFile(path.join(dir, filename), bytes);
  return filename;
}

export function attachQuoteApi(middlewares, rootDir) {
  middlewares.use(async (req, res, next) => {
    const url = req.url?.split("?")[0];
    if (url !== "/api/quotes" || req.method !== "POST") {
      next();
      return;
    }

    try {
      const raw = await readBody(req);
      const body = JSON.parse(raw || "{}");
      const name = text(body.name);
      const phone = text(body.phone);
      const service = text(body.service);

      if (!name || !phone || !service) {
        sendJson(res, 400, { error: "Name, phone and service are required." });
        return;
      }

      const id = randomUUID();
      const dir = path.join(rootDir, "data", "quotes");
      await mkdir(dir, { recursive: true });

      const photoFile = body.photo ? await savePhoto(dir, id, body.photo) : "";
      const record = {
        id,
        name,
        phone,
        email: text(body.email),
        company: text(body.company),
        service,
        location: text(body.location),
        message: text(body.message),
        photoFile,
        createdAt: new Date().toISOString(),
      };

      await writeFile(path.join(dir, `${id}.json`), JSON.stringify(record, null, 2));
      sendJson(res, 200, { ok: true, id });
    } catch (error) {
      const statusCode = error.statusCode || (error instanceof SyntaxError ? 400 : 500);
      sendJson(res, statusCode, {
        error: statusCode === 400 ? error.message : "Failed to save quote request.",
      });
    }
  });
}
