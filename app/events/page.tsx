import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { getBreadcrumbSchema, getEventSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EventCard } from "@/components/events/EventCard";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Community events at Farmgate Café & Co. — sip & paint nights, high teas, trivia, and workshops in Clyde, VIC.",
  alternates: { canonical: "/events" },
  openGraph: {
    url: `${siteConfig.seo.siteUrl}/events`,
    title: `Events | ${siteConfig.business.name}`,
    description: "Sip & paint nights, seasonal celebrations, and workshops in Clyde, VIC.",
  },
};

export default function EventsPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.seo.siteUrl },
    { name: "Events", url: `${siteConfig.seo.siteUrl}/events` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      {siteConfig.events.map((event) => (
        <JsonLd key={event.id} data={getEventSchema(event)} />
      ))}

      <section className="bg-linen py-16 lg:py-20">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Community"
            title="Upcoming Events"
            description="From paint nights to barista workshops — Farmgate is more than a café, it's a gathering place. Bookings are made through our contact form."
            align="center"
            className="mx-auto"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
