import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.business.name} — how we collect, use, and protect your information.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  const { business, contact } = siteConfig;
  const lastUpdated = "22 July 2026";

  return (
    <section className="bg-linen py-16 lg:py-20">
      <Container className="max-w-3xl">
        <SectionHeading as="h1" eyebrow="Legal" title="Privacy Policy" />
        <p className="mt-4 text-sm text-espresso/50">Last updated: {lastUpdated}</p>

        <div className="prose-custom mt-10 space-y-8 text-espresso/80">
          <section>
            <h2 className="font-display text-xl font-semibold text-espresso">1. Introduction</h2>
            <p className="mt-3 leading-relaxed">
              {business.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your
              privacy and is committed to protecting your personal information. This policy
              explains what information we collect, how we use it, and the choices you have,
              in line with the Australian Privacy Principles under the Privacy Act 1988 (Cth).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-espresso">
              2. Information We Collect
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
              <li>Contact details you provide via our contact form (name, email, phone number).</li>
              <li>Order details when you place a click &amp; collect order.</li>
              <li>Newsletter subscription email addresses.</li>
              <li>Basic usage data collected through standard website analytics.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-espresso">
              3. How We Use Your Information
            </h2>
            <p className="mt-3 leading-relaxed">
              We use your information to respond to enquiries, process orders and event bookings,
              send newsletter updates you&rsquo;ve opted into, and improve our website and
              services. We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-espresso">
              4. Cookies &amp; Analytics
            </h2>
            <p className="mt-3 leading-relaxed">
              Our website may use cookies and similar technologies for basic functionality and
              anonymised analytics. You can control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-espresso">
              5. Data Security
            </h2>
            <p className="mt-3 leading-relaxed">
              We take reasonable technical and organisational measures to protect your
              information from unauthorised access, loss, or misuse.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-espresso">6. Your Rights</h2>
            <p className="mt-3 leading-relaxed">
              You may request access to, correction of, or deletion of your personal information
              at any time by contacting us at{" "}
              <a href={`mailto:${contact.email}`} className="font-medium text-espresso underline underline-offset-2">
                {contact.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-espresso">
              7. Contact Us
            </h2>
            <p className="mt-3 leading-relaxed">
              If you have questions about this policy, please contact us at{" "}
              <a href={`mailto:${contact.email}`} className="font-medium text-espresso underline underline-offset-2">
                {contact.email}
              </a>{" "}
              or {contact.phoneDisplay}.
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
