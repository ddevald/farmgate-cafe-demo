import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="bg-espresso">
      <Container className="flex flex-col items-center gap-6 py-20 text-center">
        <h2 className="max-w-2xl text-balance font-display text-4xl font-semibold text-linen sm:text-5xl">
          Hungry already? Order ahead and skip the queue.
        </h2>
        <p className="max-w-md text-linen/60">
          Click &amp; collect is ready when you are — order online and we&rsquo;ll have it
          waiting.
        </p>
        <Button href="/menu" variant="secondary" size="lg">
          Start Your Order <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </Container>
    </section>
  );
}
