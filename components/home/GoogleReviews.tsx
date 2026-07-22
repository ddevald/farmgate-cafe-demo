import { Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function GoogleReviews() {
  const { googleReviews, business } = siteConfig;

  return (
    <section className="bg-linen">
      <Container>
        <div className="flex flex-col items-center gap-5 rounded-4xl border border-espresso/10 bg-white/60 px-8 py-12 text-center shadow-card">
          <div className="flex gap-1" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-7 w-7 fill-strawberry text-strawberry" />
            ))}
          </div>
          <p className="font-display text-4xl font-semibold text-espresso">
            {googleReviews.rating} out of 5
          </p>
          <p className="max-w-md text-espresso/65">
            Based on {googleReviews.reviewCount}+ verified Google reviews from customers who
            love {business.name}.
          </p>
          <Button href={googleReviews.profileUrl} variant="outline">
            Read Reviews on Google
          </Button>
        </div>
      </Container>
    </section>
  );
}
