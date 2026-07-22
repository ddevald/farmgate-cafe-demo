import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Hero } from "@/components/home/Hero";
import { MenuShowcase } from "@/components/home/MenuShowcase";
import { EventsPreview } from "@/components/home/EventsPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { GoogleReviews } from "@/components/home/GoogleReviews";
import { MapSection } from "@/components/home/MapSection";
import { CTASection } from "@/components/home/CTASection";
import { Newsletter } from "@/components/home/Newsletter";

export const metadata: Metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    url: siteConfig.seo.siteUrl,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <MenuShowcase
        eyebrow="Fan Favourites"
        title="Straight from the pass"
        description="A taste of what keeps regulars coming back, week after week."
      />

      <MenuShowcase
        eyebrow="Coffee"
        title="Roasted with care"
        description="Single-origin beans, dialled in fresh every morning by our baristas."
        category="coffee"
        tint="dark"
      />

      <MenuShowcase
        eyebrow="Brunch"
        title="Worth the sleep-in"
        description="Seasonal, generous, and made from scratch — served all day."
        category="breakfast"
      />

      <EventsPreview />
      <Testimonials />
      <InstagramFeed />
      <GoogleReviews />
      <MapSection />
      <CTASection />
      <Newsletter />
    </>
  );
}
