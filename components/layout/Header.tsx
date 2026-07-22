"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Coffee } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CartButton } from "@/components/cart/CartButton";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-espresso/10 bg-linen/90 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-espresso focus-visible:ring-offset-2 focus-visible:ring-offset-linen"
        >
          <Coffee className="h-6 w-6 text-strawberry" aria-hidden="true" strokeWidth={1.75} />
          <span className="font-display text-2xl font-semibold text-espresso">
            {siteConfig.brand.logoText}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {siteConfig.navigation.main.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "font-sans text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-espresso rounded-sm",
                  isActive ? "text-strawberry-dark" : "text-espresso/80 hover:text-espresso"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <CartButton />
          <Button href="/menu" className="hidden sm:inline-flex" size="sm">
            Order Now
          </Button>

          {/* Mobile menu toggle */}
          <button
            className="flex h-11 w-11 items-center justify-center rounded-full text-espresso hover:bg-espresso/5 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-espresso"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile nav panel */}
      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-espresso/10 bg-linen transition-[max-height] duration-300 ease-in-out lg:hidden",
          mobileOpen ? "max-h-96" : "max-h-0 border-t-0"
        )}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col px-5 py-4">
          {siteConfig.navigation.main.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-2 py-3 font-sans text-base font-medium text-espresso/90 hover:bg-espresso/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-espresso"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/menu" onClick={() => setMobileOpen(false)} className="mt-3">
            Order Now
          </Button>
        </nav>
      </div>
    </header>
  );
}
