import Image from "next/image";
import { Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function InstagramFeed() {
  const { instagram } = siteConfig;

  return (
    <section className="bg-linen">
      <Container className="py-16 lg:py-20">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Follow Along"
            title="Life at Farmgate"
            description={`Tag us ${instagram.handle} for a chance to be featured.`}
          />
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-espresso px-6 py-3 font-sans text-base font-medium text-espresso transition-colors hover:bg-espresso hover:text-linen focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-espresso focus-visible:ring-offset-2 focus-visible:ring-offset-linen"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" /> {instagram.handle}
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {instagram.posts.map((post) => (
            <a
              key={post.id}
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-espresso focus-visible:ring-offset-2"
              aria-label={`View on Instagram: ${post.alt}`}
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                sizes="(min-width: 1024px) 16vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
