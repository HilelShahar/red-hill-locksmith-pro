import { z } from "zod";

const name = z.string().trim().min(1, "Name is required").max(120);
const phone = z.string().trim().min(6, "Phone is required").max(40);
const message = z.string().trim().min(1, "Message is required").max(4000);
const optionalEmail = z
  .string()
  .trim()
  .max(120)
  .refine((value) => value === "" || z.string().email().safeParse(value).success, "Enter a valid email")
  .optional();
const honeypot = z.string().max(80).optional();

export const enquiryInputSchema = z.discriminatedUnion("mode", [
  z.object({
    mode: z.literal("quote"),
    name,
    phone,
    email: optionalEmail,
    service: z.string().trim().min(1, "Select a service").max(120),
    suburb: z.string().trim().min(1, "Suburb is required").max(120),
    message,
    company: honeypot,
  }),
  z.object({
    mode: z.literal("enquiry"),
    name,
    phone,
    email: z.string().trim().email("Enter a valid email").max(120),
    message,
    company: honeypot,
  }),
]);

export type EnquiryInput = z.infer<typeof enquiryInputSchema>;
