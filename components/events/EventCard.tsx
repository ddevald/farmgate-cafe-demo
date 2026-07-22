import Image from "next/image";
import { CalendarDays, Clock, Users, Ticket } from "lucide-react";
import type { CafeEvent } from "@/lib/site-config";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function EventCard({ event }: { event: CafeEvent }) {
  return (
    <article
      id={event.id}
      className="flex flex-col overflow-hidden rounded-3xl border border-espresso/10 bg-white/70 shadow-card transition-shadow hover:shadow-soft"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-espresso/5">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
        />
        {event.spotsLeft !== undefined && event.spotsLeft <= 6 && (
          <span className="absolute right-3 top-3 rounded-full bg-strawberry px-3 py-1 text-xs font-semibold text-espresso shadow-card">
            Only {event.spotsLeft} spots left
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-espresso">{event.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-espresso/65">
          {event.description}
        </p>

        <dl className="mt-4 space-y-2 text-sm text-espresso/70">
          <div className="flex items-center gap-2">
            <dt className="sr-only">Date</dt>
            <CalendarDays className="h-4 w-4 text-matcha" aria-hidden="true" />
            <dd>{formatDate(event.date)}</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="sr-only">Time</dt>
            <Clock className="h-4 w-4 text-matcha" aria-hidden="true" />
            <dd>{event.time}</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="sr-only">Price</dt>
            <Ticket className="h-4 w-4 text-matcha" aria-hidden="true" />
            <dd>{event.price}</dd>
          </div>
          {event.spotsLeft !== undefined && (
            <div className="flex items-center gap-2">
              <dt className="sr-only">Availability</dt>
              <Users className="h-4 w-4 text-matcha" aria-hidden="true" />
              <dd>{event.spotsLeft} spots remaining</dd>
            </div>
          )}
        </dl>

        <Button href="/contact" variant="outline" className="mt-5 w-full">
          {event.bookingRequired ? "Request a Booking" : "Learn More"}
        </Button>
      </div>
    </article>
  );
}
