import { Star, Quote } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="bg-linen">
      <Container className="py-16 lg:py-20">
        <SectionHeading
          eyebrow="Kind Words"
          title="What our regulars say"
          align="center"
          className="mx-auto"
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.testimonials.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col rounded-2xl border border-espresso/10 bg-white/60 p-6 shadow-card"
            >
              <Quote className="h-6 w-6 text-strawberry/60" aria-hidden="true" />
              <div className="mt-3 flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < t.rating ? "fill-strawberry text-strawberry" : "text-espresso/15"}`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-espresso/75">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-espresso">
                {t.name}{" "}
                <span className="font-normal text-espresso/50">via {t.source}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
