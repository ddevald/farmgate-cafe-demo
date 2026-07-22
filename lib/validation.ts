export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  honeypot: string; // must stay empty — bots fill every field
  turnstileToken?: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates contact form submissions server-side.
 * Never trust client-side validation alone — this is the source of truth.
 */
export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: ValidationResult["errors"] = {};

  // Honeypot — if filled, it's a bot. Silently treat as invalid.
  if (data.honeypot && data.honeypot.trim().length > 0) {
    errors.honeypot = "Spam detected.";
  }

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  } else if (data.name.trim().length > 100) {
    errors.name = "Name is too long.";
  }

  if (!data.email || !EMAIL_REGEX.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (data.phone && data.phone.trim().length > 0) {
    const digits = data.phone.replace(/[^\d]/g, "");
    if (digits.length < 8 || digits.length > 12) {
      errors.phone = "Please enter a valid phone number.";
    }
  }

  if (!data.subject || data.subject.trim().length < 2) {
    errors.subject = "Please select or enter a subject.";
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Please enter a message of at least 10 characters.";
  } else if (data.message.trim().length > 2000) {
    errors.message = "Message is too long (max 2000 characters).";
  }

  return { valid: Object.keys(errors).length === 0, errors };
}

/**
 * Verifies a Cloudflare Turnstile token server-side.
 * No-ops (returns true) when Turnstile isn't configured, so the form
 * still works with just the honeypot until a client enables Turnstile.
 */
export async function verifyTurnstile(token: string | undefined): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET;
  if (!secret) return true; // Turnstile not configured — skip
  if (!token) return false;

  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });
    const data = (await res.json()) as { success: boolean };
    return data.success === true;
  } catch {
    // Fail closed on network errors to avoid silently accepting spam
    return false;
  }
}
