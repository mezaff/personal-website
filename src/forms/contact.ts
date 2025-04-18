import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string({ message: "Full name is required" }),
  email: z.string({ message: "Email is required" }),
  phone: z.string({ message: "Phone number is required" }),
  message: z.string({ message: "Message is required" }),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
