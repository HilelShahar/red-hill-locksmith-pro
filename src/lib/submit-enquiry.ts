import { createServerFn } from "@tanstack/react-start";
import { business } from "@/lib/site";
import { enquiryInputSchema, type EnquiryInput } from "@/lib/enquiry";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function visitorEmail(input: EnquiryInput) {
  const email = "email" in input ? input.email?.trim() : "";
  return email || undefined;
}

function buildEmail(input: EnquiryInput) {
  const isQuote = input.mode === "quote";
  const subject = isQuote
    ? `Free quote request — ${input.service}`
    : "Website enquiry";

  const rows: Array<[string, string]> = [
    ["Name", input.name],
    ["Phone", input.phone],
    ["Email", visitorEmail(input) ?? "Not provided"],
  ];

  if (isQuote) {
    rows.push(["Service needed", input.service], ["Suburb", input.suburb]);
  }

  const text = [
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    input.message,
  ].join("\n");

  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:4px 12px 4px 0;color:#555">${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  const html = `
    <div style="font-family:system-ui,sans-serif;font-size:16px;line-height:1.5;color:#111">
      <p>New ${isQuote ? "quote request" : "enquiry"} from the website.</p>
      <table>${htmlRows}</table>
      <p style="white-space:pre-wrap;margin-top:16px">${escapeHtml(input.message)}</p>
    </div>
  `;

  return { subject, text, html };
}

export const submitEnquiry = createServerFn({ method: "POST" })
  .validator(enquiryInputSchema)
  .handler(async ({ data }) => {
    if (data.company?.trim()) {
      return { ok: true as const };
    }

    const apiKey = process.env["RESEND_API_KEY"]?.trim();
    if (!apiKey) {
      throw new Error("Quote emails are not configured yet.");
    }

    const from =
      process.env["ENQUIRY_FROM_EMAIL"]?.trim() || "Red Hill Security <onboarding@resend.dev>";
    const to = process.env["ENQUIRY_TO_EMAIL"]?.trim() || business.email;
    const { subject, text, html } = buildEmail(data);
    const replyTo = visitorEmail(data);

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      text,
      html,
      ...(replyTo ? { replyTo } : {}),
    });

    if (error) {
      console.error("Resend enquiry error", error);
      throw new Error("Failed to send enquiry email.");
    }

    return { ok: true as const };
  });
