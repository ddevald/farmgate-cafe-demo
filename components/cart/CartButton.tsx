"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "./CartContext";

export function CartButton() {
  const { totalItems, openCart } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      className="relative flex h-11 w-11 items-center justify-center rounded-full border border-espresso/15 text-espresso transition-colors hover:bg-espresso/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-espresso focus-visible:ring-offset-2 focus-visible:ring-offset-linen"
      aria-label={`Open cart, ${totalItems} item${totalItems === 1 ? "" : "s"}`}
    >
      <ShoppingBag className="h-5 w-5" aria-hidden="true" strokeWidth={1.75} />
      {totalItems > 0 && (
        <span
          className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-strawberry px-1 text-[11px] font-bold text-espresso"
          aria-hidden="true"
        >
          {totalItems}
        </span>
      )}
    </button>
  );
}
