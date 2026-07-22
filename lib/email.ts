import nodemailer from "nodemailer";
import { siteConfig } from "./site-config";

export interface SendContactEmailParams {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

/**
 * Lazily creates a Nodemailer transport from env vars.
 * Returns null when email isn't configured yet, so the contact form
 * degrades gracefully in local/demo environments instead of throwing.
 *
 * Swap this for any SMTP provider (Resend, Postmark, SES, etc.) by
 * changing only the transport config — nothing else in the app needs to change.
 */
function getTransport() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) return null;

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

/**
 * Sends both the customer confirmation and the owner notification.
 * Designed to be called WITHOUT awaiting in the calling Server Action,
 * so a slow email provider never blocks the user-facing response.
 */
export async function sendContactEmails(params: SendContactEmailParams): Promise<void> {
  const transport = getTransport();

  if (!transport) {
    // No SMTP credentials configured — log and exit gracefully.
    // In production this would alert via monitoring instead of console.
    console.warn(
      "[email] GMAIL_USER / GMAIL_APP_PASSWORD not set — skipping email send. " +
        "See .env.example to enable outbound email."
    );
    return;
  }

  const ownerEmail = process.env.OWNER_NOTIFICATION_EMAIL || siteConfig.contact.email;
  const fromAddress = `"${siteConfig.business.name}" <${process.env.GMAIL_USER}>`;

  const ownerNotification = transport.sendMail({
    from: fromAddress,
    to: ownerEmail,
    replyTo: params.email,
    subject: `New enquiry: ${params.subject}`,
    text: [
      `New contact form submission from ${siteConfig.business.name} website.`,
      "",
      `Name: ${params.name}`,
      `Email: ${params.email}`,
      params.phone ? `Phone: ${params.phone}` : null,
      `Subject: ${params.subject}`,
      "",
      "Message:",
      params.message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  const customerConfirmation = transport.sendMail({
    from: fromAddress,
    to: params.email,
    subject: `We've received your message — ${siteConfig.business.name}`,
    text: [
      `Hi ${params.name},`,
      "",
      `Thanks for reaching out to ${siteConfig.business.name}! We've received your message and someone from our team will get back to you within 1–2 business days.`,
      "",
      "Your message:",
      `"${params.message}"`,
      "",
      `${siteConfig.business.name}`,
      siteConfig.contact.address.full,
      siteConfig.contact.phoneDisplay,
    ].join("\n"),
  });

  // Run in parallel; failures are logged, not thrown, so the form UX stays smooth.
  const results = await Promise.allSettled([ownerNotification, customerConfirmation]);
  results.forEach((result, i) => {
    if (result.status === "rejected") {
      console.error(`[email] Failed to send ${i === 0 ? "owner notification" : "customer confirmation"}:`, result.reason);
    }
  });
}
