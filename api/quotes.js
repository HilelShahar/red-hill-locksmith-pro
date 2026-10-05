const BUSINESS_EMAIL = "info@redhillsecuritylocksmith.com.au";
const ALLOWED_PHOTO_TYPES = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
};

function text(value) {
  return typeof value === "string" ? value.trim() : "";
}

function photoAttachment(photo) {
  if (!photo) return null;
  const type = text(photo.type);
  const extension = ALLOWED_PHOTO_TYPES[type];
  const dataUrl = typeof photo.dataUrl === "string" ? photo.dataUrl : "";
  const match = dataUrl.match(/^data:([^;]+);base64,([A-Za-z0-9+/=\s]+)$/);
  if (!extension || !match || match[1] !== type) {
    const error = new Error("Please attach a JPG, PNG, WebP, or GIF image.");
    error.statusCode = 400;
    throw error;
  }

  const content = match[2].replace(/\s/g, "");
  if (!content || content.length > 3_500_000) {
    const error = new Error("Please use an image under 3 MB.");
    error.statusCode = 400;
    throw error;
  }

  return { filename: `lock-photo.${extension}`, content };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const name = text(body.name);
    const phone = text(body.phone);
    const service = text(body.service);
    const email = text(body.email);
    const company = text(body.company);
    const location = text(body.location);
    const message = text(body.message);

    if (!name || !phone || !service) {
      res.status(400).json({ error: "Name, phone and service are required." });
      return;
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (!apiKey) {
      res.status(500).json({ error: "Quote emails are not configured yet." });
      return;
    }

    const attachment = photoAttachment(body.photo);
    const from =
      process.env.ENQUIRY_FROM_EMAIL?.trim() || "Red Hill Security <onboarding@resend.dev>";
    const to = process.env.ENQUIRY_TO_EMAIL?.trim() || BUSINESS_EMAIL;
    const textBody = [
      `New quote request from ${name}`,
      "",
      `Phone: ${phone}`,
      `Email: ${email || "—"}`,
      `Company: ${company || "—"}`,
      `Service: ${service}`,
      `Location: ${location || "—"}`,
      "",
      "Message:",
      message || "—",
    ].join("\n");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject: `New Quote Request — ${service}`,
        text: textBody,
        ...(email ? { reply_to: email } : {}),
        ...(attachment ? { attachments: [attachment] } : {}),
      }),
    });

    if (!response.ok) {
      console.error("Resend quote error", response.status);
      res.status(502).json({ error: "Failed to send quote request." });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (error) {
    const statusCode = error.statusCode || (error instanceof SyntaxError ? 400 : 500);
    res.status(statusCode).json({
      error: statusCode === 400 ? error.message : "Failed to send quote request.",
    });
  }
}
