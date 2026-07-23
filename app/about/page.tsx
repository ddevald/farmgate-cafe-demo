import type { Metadata } from "next";
import Image from "next/image";
import { Leaf, Users, Coffee, Heart } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { getBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description: `The story behind ${siteConfig.business.name} — a boutique café built on specialty coffee, seasonal food, and community in Clyde, VIC.`,
  alternates: { canonical: "/about" },
  openGraph: {
    url: `${siteConfig.seo.siteUrl}/about`,
    title: `About | ${siteConfig.business.name}`,
    description: siteConfig.business.description,
  },
};

const values = [
  {
    icon: Coffee,
    title: "Quality First",
    description: "Single-origin beans, roasted weekly, and food made from scratch daily.",
  },
  {
    icon: Leaf,
    title: "Seasonal & Local",
    description: "We work with local growers and change our menu with the seasons.",
  },
  {
    icon: Users,
    title: "Community",
    description: "A living room for the Clyde neighbourhood — events, workshops, and warmth.",
  },
  {
    icon: Heart,
    title: "Made with Care",
    description: "Every plate and every pour gets the same attention, every single day.",
  },
];

export default function AboutPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.seo.siteUrl },
    { name: "About", url: `${siteConfig.seo.siteUrl}/about` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />

      <section className="bg-linen py-16 lg:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-matcha">
              Our Story
            </p>
            <h1 className="text-balance font-display text-4xl font-semibold leading-tight text-espresso sm:text-5xl">
              Built on good coffee and better company
            </h1>
            <p className="mt-6 text-balance leading-relaxed text-espresso/70">
              {siteConfig.business.name} opened its doors in {siteConfig.business.foundedYear}{" "}
              with a simple idea: a neighbourhood café should feel like an extension of home.
              What started as a single espresso machine and a handful of regulars has grown into
              a gathering place for the whole Clyde community — but the idea hasn&rsquo;t
              changed.
            </p>
            <p className="mt-4 text-balance leading-relaxed text-espresso/70">
              Every bean is roasted with intention. Every dish is made from scratch, using
              seasonal, local produce wherever we can. And every person who walks through our
              door is treated like they&rsquo;ve been coming for years — because we hope they
              will be.
            </p>
            <Button href="/contact" className="mt-8">
              Get in Touch
            </Button>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-4xl shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1000&auto=format&fit=crop"
              alt="Café interior at Farmgate Café & Co. | Demo Café & Co. | Demo with warm natural light and timber furniture"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white/50">
        <Container className="py-16 lg:py-20">
          <SectionHeading
            eyebrow="What We Believe"
            title="The values behind every cup"
            align="center"
            className="mx-auto"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-espresso/10 bg-linen p-6 text-center shadow-card"
              >
                <value.icon className="mx-auto h-8 w-8 text-strawberry-dark" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-semibold text-espresso">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-espresso/65">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
