"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Mail, CheckCircle2 } from "lucide-react";
import { subscribeToNewsletter, type NewsletterState } from "@/app/actions/newsletter";
import { Container } from "@/components/ui/Container";

const initialState: NewsletterState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="flex shrink-0 items-center justify-center rounded-full bg-espresso px-6 py-3.5 font-sans text-sm font-medium text-linen transition-colors hover:bg-espresso-light disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-espresso focus-visible:ring-offset-2 focus-visible:ring-offset-matcha-light"
    >
      {pending ? "Subscribing…" : "Subscribe"}
    </button>
  );
}

export function Newsletter() {
  const [state, formAction] = useFormState(subscribeToNewsletter, initialState);

  return (
    <section className="bg-matcha-light/50">
      <Container className="py-16 lg:py-20">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <Mail className="h-8 w-8 text-matcha-dark" aria-hidden="true" />
          <h2 className="font-display text-3xl font-semibold text-espresso sm:text-4xl">
            Never miss a seasonal menu drop
          </h2>
          <p className="text-espresso/65">
            New dishes, event invites, and the occasional free-coffee promo. No spam, unsubscribe
            any time.
          </p>

          {state.status === "success" ? (
            <p
              role="status"
              className="mt-2 flex items-center gap-2 rounded-full bg-white/70 px-5 py-3 font-medium text-matcha-dark"
            >
              <CheckCircle2 className="h-5 w-5" aria-hidden="true" /> {state.message}
            </p>
          ) : (
            <form action={formAction} className="mt-2 flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-full border border-espresso/15 bg-white px-5 py-3.5 text-espresso placeholder:text-espresso/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-espresso"
              />
              {/* Honeypot field — hidden from real users via CSS, bots fill it in */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
                aria-hidden="true"
              />
              <SubmitButton />
            </form>
          )}
          {state.status === "error" && (
            <p role="alert" className="text-sm font-medium text-strawberry-dark">
              {state.message}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
