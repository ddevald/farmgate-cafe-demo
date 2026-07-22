"use client";

import { Plus, Flame } from "lucide-react";
import type { MenuItem } from "@/lib/site-config";
import { formatPrice } from "@/lib/utils";
import { DietaryBadge } from "@/components/ui/DietaryBadge";
import { useCart } from "@/components/cart/CartContext";

export function MenuCard({ item }: { item: MenuItem }) {
  const { addItem } = useCart();

  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-espresso/10 bg-white/60 p-5 shadow-card transition-shadow hover:shadow-soft">
      <div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-snug text-espresso">
            {item.name}
          </h3>
          {item.popular && (
            <span className="mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-full bg-strawberry/15 px-2.5 py-1 text-[11px] font-semibold text-strawberry-dark">
              <Flame className="h-3 w-3" aria-hidden="true" /> Popular
            </span>
          )}
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-espresso/60">{item.description}</p>

        {item.dietary.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5" aria-label="Dietary information">
            {item.dietary.map((tag) => (
              <DietaryBadge key={tag} tag={tag} />
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="font-sans text-lg font-semibold text-espresso">
          {formatPrice(item.price)}
        </span>
        <button
          onClick={() => addItem(item)}
          className="flex items-center gap-1.5 rounded-full bg-espresso px-4 py-2 text-sm font-medium text-linen transition-transform hover:bg-espresso-light active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-espresso focus-visible:ring-offset-2 focus-visible:ring-offset-linen"
          aria-label={`Add ${item.name} to cart`}
        >
          <Plus className="h-4 w-4" aria-hidden="true" /> Add
        </button>
      </div>
    </article>
  );
}
