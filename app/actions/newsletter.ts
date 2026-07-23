"use server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface NewsletterState {
  status: "idle" | "success" | "error";
  message?: string;
}

/**
 * Handles newsletter signups. Swap the TODO below for a real ESP call
 * (Mailchimp, Klaviyo, Brevo, etc.) — the form contract stays the same.
 */
export async function subscribeToNewsletter(
  _prevState: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  const email = String(formData.get("email") || "").trim();
  const honeypot = String(formData.get("company") || "");

  if (honeypot) {
    // Silently succeed for bots so they don't learn the honeypot worked
    return { status: "success", message: "Thanks for subscribing!" };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  // TODO: integrate with a real email service provider at deploy time.
  console.log(`[newsletter] New subscriber: ${email}`);

  return { status: "success", message: "You're on the list — welcome to Farmgate Café & Co. | Demo!" };
}
