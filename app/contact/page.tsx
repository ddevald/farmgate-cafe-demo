import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { getBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.business.name} — ask about orders, events, or catering. Visit us at ${siteConfig.contact.address.full}.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    url: `${siteConfig.seo.siteUrl}/contact`,
    title: `Contact | ${siteConfig.business.name}`,
    description: "Ask about orders, events, or catering — we'd love to hear from you.",
  },
};

export default function ContactPage() {
  const { contact, openingHours } = siteConfig;
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.seo.siteUrl },
    { name: "Contact", url: `${siteConfig.seo.siteUrl}/contact` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />

      <section className="bg-linen py-16 lg:py-20">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Get in Touch"
            title="We'd love to hear from you"
            description="Questions about orders, events, or catering? Send us a message and we'll reply within 1–2 business days."
            align="center"
            className="mx-auto"
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-6">
              <div className="rounded-2xl border border-espresso/10 bg-white/60 p-6 shadow-card">
                <h2 className="font-display text-lg font-semibold text-espresso">
                  Contact Details
                </h2>
                <ul className="mt-4 space-y-4 text-sm text-espresso/75">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-strawberry-dark" aria-hidden="true" />
                    <a href={contact.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-espresso rounded-sm">
                      {contact.address.full}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-strawberry-dark" aria-hidden="true" />
                    <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-espresso rounded-sm">
                      {contact.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-strawberry-dark" aria-hidden="true" />
                    <a href={`mailto:${contact.email}`} className="hover:text-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-espresso rounded-sm">
                      {contact.email}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-espresso/10 bg-white/60 p-6 shadow-card">
                <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-espresso">
                  <Clock className="h-4 w-4 text-strawberry-dark" aria-hidden="true" /> Opening Hours
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-espresso/75">
                  {openingHours.map((entry) => (
                    <li key={entry.day} className="flex justify-between gap-4">
                      <span>{entry.day}</span>
                      <span className="text-espresso/50">{entry.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="overflow-hidden rounded-2xl border border-espresso/10 shadow-card">
                <iframe
                  title={`Map showing the location of ${siteConfig.business.name}`}
                  src={contact.googleMapsEmbedSrc}
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-espresso/10 bg-white/60 p-6 shadow-card sm:p-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
