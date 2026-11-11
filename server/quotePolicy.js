import { emailError, phoneError } from "../src/lib/quoteFields.js";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 3;
const MIN_GAP_MS = 20 * 1000;
const attempts = new Map();

function text(value) {
  return typeof value === "string" ? value.trim() : "";
}

export function clientIp(req) {
  const header = req.headers?.["x-forwarded-for"] || req.headers?.["x-real-ip"] || "";
  const value = Array.isArray(header) ? header[0] : header;
  const ip = String(value).split(",")[0].trim();
  return ip || req.socket?.remoteAddress || "unknown";
}

export function quoteFieldError(body) {
  const name = text(body.name);
  const phone = text(body.phone);
  const service = text(body.service);
  const email = text(body.email);

  if (!name) return { field: "name", error: "Please enter your name." };
  if (name.length > 120) return { field: "name", error: "Please shorten your name." };

  const phoneProblem = phoneError(phone);
  if (phoneProblem) return { field: "phone", error: phoneProblem };

  const emailProblem = emailError(email);
  if (emailProblem) return { field: "email", error: emailProblem };

  if (!service) return { field: "service", error: "Please select a service." };
  if (service.length > 160) return { field: "service", error: "Please shorten the service." };
  if (text(body.company).length > 160) return { field: "company", error: "Please shorten the company name." };
  if (text(body.location).length > 160) return { field: "location", error: "Please shorten the suburb." };
  if (text(body.message).length > 2000) return { field: "message", error: "Please keep the message under 2000 characters." };
  return null;
}

function waitMessage(retryAfter) {
  if (retryAfter >= 60) {
    const minutes = Math.ceil(retryAfter / 60);
    return `You've sent a few quote requests. Please wait about ${minutes} minute${minutes === 1 ? "" : "s"} and try again, or call us.`;
  }
  return "Please wait a few seconds before sending another request.";
}

export function takeQuoteSlot(ip, now = Date.now()) {
  const key = ip || "unknown";
  const history = (attempts.get(key) || []).filter((time) => now - time < WINDOW_MS);
  const last = history[history.length - 1];

  if (last != null && now - last < MIN_GAP_MS) {
    const retryAfter = Math.ceil((MIN_GAP_MS - (now - last)) / 1000);
    attempts.set(key, history);
    return { ok: false, retryAfter, error: waitMessage(retryAfter) };
  }

  if (history.length >= MAX_ATTEMPTS) {
    const retryAfter = Math.ceil((WINDOW_MS - (now - history[0])) / 1000);
    attempts.set(key, history);
    return { ok: false, retryAfter, error: waitMessage(retryAfter) };
  }

  history.push(now);
  attempts.set(key, history);

  if (attempts.size > 5000) {
    for (const [storedIp, times] of attempts) {
      if (!times.some((time) => now - time < WINDOW_MS)) attempts.delete(storedIp);
    }
  }

  return { ok: true };
}

export function resetQuoteSlots() {
  attempts.clear();
}
