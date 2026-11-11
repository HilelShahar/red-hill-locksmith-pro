export function sanitizePhoneInput(value) {
  const cleaned = String(value ?? "").replace(/[^\d+\s()-]/g, "");
  const hasLeadingPlus = cleaned.trimStart().startsWith("+");
  const withoutPlus = cleaned.replace(/\+/g, "");
  return `${hasLeadingPlus ? "+" : ""}${withoutPlus}`;
}

export function phoneError(value) {
  const phone = String(value ?? "").trim();
  if (!phone) return "Please enter a phone number.";
  if (!/^\+?[\d\s()-]+$/.test(phone)) return "Use digits only, with no letters.";

  const digits = phone.replace(/\D/g, "");
  if (digits.length < 8) return "That number looks too short. Include the area code, like 0412 345 678.";
  if (digits.length > 15) return "That number looks too long.";
  if (/^(\d)\1+$/.test(digits)) return "Enter a phone number we can call.";
  return "";
}

export function emailError(value) {
  const email = String(value ?? "").trim();
  if (!email) return "";
  if (email.length > 200 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Enter a valid email, or leave this blank.";
  }
  return "";
}
