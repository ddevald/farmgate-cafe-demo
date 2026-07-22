import Image from "next/image";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const { business, googleReviews } = siteConfig;

  return (
    <section className="relative overflow-hidden bg-linen">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-strawberry/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-matcha/15 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-espresso/10 bg-white/60 px-4 py-2 text-sm font-medium text-espresso/80 backdrop-blur">
            <MapPin className="h-4 w-4 text-strawberry-dark" aria-hidden="true" />
            Clyde, Victoria
            <span className="text-espresso/30">•</span>
            <Star className="h-4 w-4 fill-strawberry text-strawberry" aria-hidden="true" />
            {googleReviews.rating} ({googleReviews.reviewCount}+ reviews)
          </div>

          <h1 className="mt-6 text-balance font-display text-5xl font-semibold leading-[1.05] text-espresso sm:text-6xl lg:text-7xl">
            Slow mornings,{" "}
            <span className="italic text-strawberry-dark">honest food.</span>
          </h1>

          <p className="mt-6 max-w-lg text-balance font-sans text-lg leading-relaxed text-espresso/70">
            {business.description}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/menu" size="lg">
              Order Click &amp; Collect <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="/menu" variant="outline" size="lg">
              View Menu
            </Button>
          </div>
        </div>

        <div className="relative animate-fade-in">
          <div className="relative aspect-[4/5] overflow-hidden rounded-4xl shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=1200&auto=format&fit=crop"
              alt="Barista pouring latte art into a flat white on a marble café counter"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden max-w-[220px] rounded-2xl border border-espresso/10 bg-white/90 p-4 shadow-card backdrop-blur sm:block">
            <p className="font-display text-2xl font-semibold text-espresso">
              {business.foundedYear}
            </p>
            <p className="text-sm text-espresso/60">Serving the Clyde community</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
