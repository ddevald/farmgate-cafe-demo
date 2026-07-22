import { Coffee } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-linen">
      <Container className="flex flex-col items-center gap-6 py-20 text-center">
        <Coffee className="h-14 w-14 text-strawberry" aria-hidden="true" strokeWidth={1.5} />
        <p className="font-display text-6xl font-semibold text-espresso">404</p>
        <h1 className="text-balance font-display text-3xl font-semibold text-espresso">
          This table&rsquo;s not set.
        </h1>
        <p className="max-w-md text-espresso/65">
          The page you&rsquo;re looking for has moved, closed, or never existed. Let&rsquo;s get
          you back somewhere warm.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/">Back to Home</Button>
          <Button href="/menu" variant="outline">
            View Menu
          </Button>
        </div>
      </Container>
    </section>
  );
}
