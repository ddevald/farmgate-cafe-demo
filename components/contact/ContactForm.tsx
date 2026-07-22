"use client";

import { useFormState, useFormStatus } from "react-dom";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { submitContactForm } from "@/app/contact/actions";
import type { ContactFormState } from "@/types";

const initialState: ContactFormState = { status: "idle" };

const subjects = [
  "General enquiry",
  "Click & collect order",
  "Event booking",
  "Catering enquiry",
  "Feedback",
  "Other",
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-full bg-espresso px-6 py-3.5 font-sans text-base font-medium text-linen transition-colors hover:bg-espresso-light disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-espresso focus-visible:ring-offset-2 focus-visible:ring-offset-linen sm:w-auto"
    >
      {pending ? "Sending…" : "Send Message"}
    </button>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-espresso">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-sm text-strawberry-dark" role="alert">
          <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" /> {error}
        </p>
      )}
    </div>
  );
}

const inputClasses =
  "w-full rounded-xl border border-espresso/15 bg-white px-4 py-3 text-espresso placeholder:text-espresso/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-espresso";

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const errors = state.fieldErrors || {};

  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-2xl border border-matcha/20 bg-matcha/10 p-10 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-matcha-dark" aria-hidden="true" />
        <p className="font-display text-xl font-semibold text-espresso">Message sent!</p>
        <p className="text-espresso/70">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" error={errors.name}>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClasses} />
        </Field>
        <Field id="email" label="Email address" error={errors.email}>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClasses} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="phone" label="Phone (optional)" error={errors.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClasses} />
        </Field>
        <Field id="subject" label="Subject" error={errors.subject}>
          <select id="subject" name="subject" required defaultValue="" className={inputClasses}>
            <option value="" disabled>
              Select a subject
            </option>
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="message" label="Message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us a little about what you need…"
          className={inputClasses}
        />
      </Field>

      {/* Honeypot — hidden from sighted users and screen readers, bots fill it in */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {turnstileSiteKey && (
        <div
          className="cf-turnstile"
          data-sitekey={turnstileSiteKey}
          data-theme="light"
          aria-label="Human verification"
        />
      )}

      {state.status === "error" && !Object.keys(errors).length && (
        <p role="alert" className="flex items-center gap-2 text-sm font-medium text-strawberry-dark">
          <AlertCircle className="h-4 w-4" aria-hidden="true" /> {state.message}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}
