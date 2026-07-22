import Link from "next/link";
import { Coffee, Instagram, Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const { business, contact, openingHours, social, navigation } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-espresso/10 bg-espresso text-linen/90">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <Coffee className="h-6 w-6 text-strawberry" aria-hidden="true" strokeWidth={1.75} />
            <span className="font-display text-2xl font-semibold text-linen">
              {business.name}
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-linen/60">
            {business.tagline} A boutique café in the heart of Clyde, Victoria.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${business.name} on Instagram`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-linen/20 hover:bg-linen/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-linen"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${business.name} on Facebook`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-linen/20 hover:bg-linen/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-linen"
            >
              <Facebook className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-linen/50">
            Explore
          </h3>
          <ul className="mt-4 space-y-3">
            {navigation.footer.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-linen/75 hover:text-linen focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-linen rounded-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-linen/50">
            Visit Us
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-linen/75">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-strawberry" aria-hidden="true" />
              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-linen focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-linen rounded-sm"
              >
                {contact.address.full}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-strawberry" aria-hidden="true" />
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="hover:text-linen focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-linen rounded-sm"
              >
                {contact.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-strawberry" aria-hidden="true" />
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-linen focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-linen rounded-sm"
              >
                {contact.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-linen/50">
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-strawberry" aria-hidden="true" /> Opening Hours
            </span>
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-linen/75">
            {openingHours.map((entry) => (
              <li key={entry.day} className="flex justify-between gap-4">
                <span>{entry.day}</span>
                <span className="text-linen/50">{entry.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-linen/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-linen/50 sm:flex-row">
          <p>
            &copy; {year} {business.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-linen focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-linen rounded-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-linen focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-linen rounded-sm">
              Terms of Service
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
