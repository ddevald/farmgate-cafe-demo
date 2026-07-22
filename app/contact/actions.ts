"use server";

import { validateContactForm, verifyTurnstile, type ContactFormData } from "@/lib/validation";
import { sendContactEmails } from "@/lib/email";
import type { ContactFormState } from "@/types";

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const data: ContactFormData = {
    name: String(formData.get("name") || ""),
    email: String(formData.get("email") || ""),
    phone: String(formData.get("phone") || ""),
    subject: String(formData.get("subject") || ""),
    message: String(formData.get("message") || ""),
    honeypot: String(formData.get("website") || ""), // hidden field, bots fill it
    turnstileToken: String(formData.get("cf-turnstile-response") || ""),
  };

  // Spam caught by honeypot — pretend success so bots don't learn otherwise
  if (data.honeypot.trim().length > 0) {
    return { status: "success", message: "Thanks! We'll be in touch soon." };
  }

  const { valid, errors } = validateContactForm(data);
  if (!valid) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      fieldErrors: errors as Record<string, string>,
    };
  }

  const turnstileOk = await verifyTurnstile(data.turnstileToken);
  if (!turnstileOk) {
    return {
      status: "error",
      message: "We couldn't verify you're human. Please try again.",
    };
  }

  // Fire-and-forget: don't block the user-facing response on email delivery.
  void sendContactEmails({
    name: data.name,
    email: data.email,
    phone: data.phone,
    subject: data.subject,
    message: data.message,
  });

  return {
    status: "success",
    message: "Thanks for reaching out! We'll reply within 1–2 business days.",
  };
}
