import { MapPin, Navigation } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function MapSection() {
  const { contact } = siteConfig;

  return (
    <section className="bg-linen">
      <Container className="py-16 lg:py-20">
        <SectionHeading eyebrow="Find Us" title="Come say hello" align="center" className="mx-auto" />

        <div className="mt-10 grid gap-6 overflow-hidden rounded-4xl border border-espresso/10 shadow-soft lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[320px] bg-espresso/5">
            <iframe
              title={`Map showing the location of ${siteConfig.business.name}`}
              src={contact.googleMapsEmbedSrc}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col justify-center gap-6 bg-white/60 p-8 sm:p-10">
            <div className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-strawberry-dark" aria-hidden="true" />
              <div>
                <p className="font-semibold text-espresso">Address</p>
                <p className="text-espresso/65">{contact.address.full}</p>
              </div>
            </div>
            <Button href={contact.googleMapsUrl} className="w-full sm:w-fit">
              <Navigation className="h-4 w-4" aria-hidden="true" /> Get Directions
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
