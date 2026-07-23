import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { getBreadcrumbSchema, getMenuSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MenuBrowser } from "@/components/menu/MenuBrowser";
import { dietaryLabels } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse the full Farmgate Café & Co. | Demo Café menu — coffee, cold drinks, breakfast, lunch, kids' plates, and desserts. Order click & collect in Clyde, VIC.",
  alternates: { canonical: "/menu" },
  openGraph: {
    url: `${siteConfig.seo.siteUrl}/menu`,
    title: `Menu | ${siteConfig.business.name}`,
    description: "Coffee, brunch, lunch, and dessert — order click & collect today.",
  },
};

export default function MenuPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.seo.siteUrl },
    { name: "Menu", url: `${siteConfig.seo.siteUrl}/menu` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={getMenuSchema()} />

      <section className="bg-linen py-16 lg:py-20">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="The Menu"
            title="Made fresh, served with care"
            description="Everything below is available for dine-in or click & collect. Add anything to your order — checkout is a demo, but ordering is real practice for the real thing."
            align="center"
            className="mx-auto"
          />

          <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-espresso/60" aria-label="Dietary key">
            {Object.entries(dietaryLabels).map(([tag, label]) => (
              <li key={tag} className="flex items-center gap-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-matcha/30 bg-matcha/10 text-[10px] font-semibold text-matcha-dark">
                  {tag}
                </span>
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <MenuBrowser />
          </div>
        </Container>
      </section>
    </>
  );
}
