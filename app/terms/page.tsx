import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.business.name}'s website, ordering, and event bookings.`,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  const { business, contact } = siteConfig;
  const lastUpdated = "22 July 2026";

  return (
    <section className="bg-linen py-16 lg:py-20">
      <Container className="max-w-3xl">
        <SectionHeading as="h1" eyebrow="Legal" title="Terms of Service" />
        <p className="mt-4 text-sm text-espresso/50">Last updated: {lastUpdated}</p>

        <div className="mt-10 space-y-8 text-espresso/80">
          <section>
            <h2 className="font-display text-xl font-semibold text-espresso">
              1. Acceptance of Terms
            </h2>
            <p className="mt-3 leading-relaxed">
              By accessing or using the {business.name} website, you agree to be bound by these
              Terms of Service. If you do not agree, please do not use this website.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-espresso">
              2. Click &amp; Collect Orders
            </h2>
            <p className="mt-3 leading-relaxed">
              Orders placed through this website are order requests only; payment is processed
              in-store or via our point-of-sale system at collection unless otherwise stated.
              We reserve the right to decline or modify orders due to ingredient availability.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-espresso">
              3. Event Bookings
            </h2>
            <p className="mt-3 leading-relaxed">
              Event enquiries submitted via our contact form are requests, not confirmed
              bookings, until you receive written confirmation from our team. Cancellation
              policies will be provided at the time of booking.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-espresso">
              4. Website Content
            </h2>
            <p className="mt-3 leading-relaxed">
              Menu items, prices, and event details are subject to change without notice. We
              make reasonable efforts to keep this website accurate and up to date, but do not
              guarantee that all content is error-free at all times.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-espresso">
              5. Intellectual Property
            </h2>
            <p className="mt-3 leading-relaxed">
              All content on this website, including text, images, and branding, is owned by or
              licensed to {business.name} and may not be reproduced without permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-espresso">
              6. Limitation of Liability
            </h2>
            <p className="mt-3 leading-relaxed">
              To the extent permitted by Australian Consumer Law, {business.name} is not liable
              for indirect or consequential loss arising from use of this website.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-espresso">7. Governing Law</h2>
            <p className="mt-3 leading-relaxed">
              These terms are governed by the laws of Victoria, Australia.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-espresso">8. Contact</h2>
            <p className="mt-3 leading-relaxed">
              Questions about these terms can be directed to{" "}
              <a href={`mailto:${contact.email}`} className="font-medium text-espresso underline underline-offset-2">
                {contact.email}
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
