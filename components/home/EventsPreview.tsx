import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { EventCard } from "@/components/events/EventCard";

export function EventsPreview() {
  const upcoming = siteConfig.events.slice(0, 3);

  return (
    <section className="bg-matcha-light/40">
      <Container className="py-16 lg:py-20">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Community"
            title="Upcoming Events"
            description="Sip & paint nights, seasonal celebrations, and workshops — all held right here at Farmgate Café & Co. | Demo."
          />
          <Button href="/events" variant="outline" className="shrink-0">
            See All Events
          </Button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Container>
    </section>
  );
}
