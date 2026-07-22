"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { siteConfig, type MenuCategoryId } from "@/lib/site-config";
import { MenuCard } from "./MenuCard";
import { cn } from "@/lib/utils";

type FilterId = "all" | MenuCategoryId;

export function MenuBrowser() {
  const [activeCategory, setActiveCategory] = useState<FilterId>("all");
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return siteConfig.menu.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const matchesQuery =
        q.length === 0 ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const tabs: Array<{ id: FilterId; label: string }> = [
    { id: "all", label: "All" },
    ...siteConfig.menuCategories.map((c) => ({ id: c.id, label: c.label })),
  ];

  return (
    <div>
      {/* Search */}
      <div className="relative mx-auto max-w-md">
        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-espresso/40"
          aria-hidden="true"
        />
        <label htmlFor="menu-search" className="sr-only">
          Search the menu
        </label>
        <input
          id="menu-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search dishes or drinks…"
          className="w-full rounded-full border border-espresso/15 bg-white py-3 pl-11 pr-11 text-espresso placeholder:text-espresso/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-espresso"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-espresso/50 hover:bg-espresso/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-espresso"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>

      {/* Category tabs */}
      <div
        role="tablist"
        aria-label="Menu categories"
        className="mt-8 flex flex-wrap justify-center gap-2"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeCategory === tab.id}
            onClick={() => setActiveCategory(tab.id)}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-espresso focus-visible:ring-offset-2 focus-visible:ring-offset-linen",
              activeCategory === tab.id
                ? "bg-espresso text-linen"
                : "bg-white/60 text-espresso/70 hover:bg-white"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="mt-10" aria-live="polite">
        {filteredItems.length === 0 ? (
          <p className="py-16 text-center text-espresso/50">
            No items match &ldquo;{query}&rdquo;. Try a different search.
          </p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
