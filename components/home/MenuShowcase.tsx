import { siteConfig, type MenuCategoryId } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MenuCard } from "@/components/menu/MenuCard";

interface MenuShowcaseProps {
  eyebrow: string;
  title: string;
  description: string;
  /** Filter to a specific category, or omit to show cross-category `featured` items. */
  category?: MenuCategoryId;
  tint?: "linen" | "dark";
}

export function MenuShowcase({ eyebrow, title, description, category, tint = "linen" }: MenuShowcaseProps) {
  const items = category
    ? siteConfig.menu.filter((item) => item.category === category).slice(0, 4)
    : siteConfig.menu.filter((item) => item.featured).slice(0, 4);

  return (
    <section className={tint === "dark" ? "bg-espresso" : "bg-linen"}>
      <Container className="py-16 lg:py-20">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            className={tint === "dark" ? "[&_p]:text-linen/60 [&_h2]:text-linen" : undefined}
          />
          <Button href="/menu" variant={tint === "dark" ? "secondary" : "outline"} className="shrink-0">
            View Full Menu
          </Button>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
