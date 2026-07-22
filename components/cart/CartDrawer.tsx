"use client";

import { useEffect, useRef, useState } from "react";
import { Minus, Plus, ShoppingBag, Trash2, X, CheckCircle2 } from "lucide-react";
import { useCart } from "./CartContext";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function CartDrawer() {
  const { lines, isOpen, closeCart, updateQuantity, removeItem, subtotal, clear } = useCart();
  const [checkedOut, setCheckedOut] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape, trap focus, restore focus to trigger on close
  useEffect(() => {
    if (!isOpen) return;
    closeButtonRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeCart();
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  const gst = subtotal * 0.1;

  function handleCheckout() {
    setCheckedOut(true);
  }

  function handleClose() {
    closeCart();
    setTimeout(() => setCheckedOut(false), 300);
  }

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Shopping cart">
      {/* Backdrop */}
      <button
        aria-label="Close cart"
        onClick={handleClose}
        className="absolute inset-0 bg-espresso/40 backdrop-blur-sm animate-fade-in"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-linen shadow-soft animate-fade-up"
        style={{ animationDuration: "0.35s" }}
      >
        <div className="flex items-center justify-between border-b border-espresso/10 px-6 py-5">
          <h2 className="flex items-center gap-2 font-display text-2xl font-semibold text-espresso">
            <ShoppingBag className="h-5 w-5" aria-hidden="true" /> Your Order
          </h2>
          <button
            ref={closeButtonRef}
            onClick={handleClose}
            className="flex h-9 w-9 items-center justify-center rounded-full text-espresso hover:bg-espresso/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-espresso"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {checkedOut ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <CheckCircle2 className="h-14 w-14 text-matcha" aria-hidden="true" />
            <h3 className="font-display text-2xl font-semibold text-espresso">
              Order request received!
            </h3>
            <p className="text-espresso/70">
              This is a demo checkout. In production, this order is sent straight to Square
              for payment and kitchen preparation.
            </p>
            <span className="mt-2 rounded-full bg-matcha/10 px-4 py-1.5 text-sm font-medium text-matcha-dark">
              Square integration ready
            </span>
            <Button
              variant="outline"
              onClick={() => {
                clear();
                handleClose();
              }}
              className="mt-4"
            >
              Done
            </Button>
          </div>
        ) : lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-8 text-center">
            <ShoppingBag className="h-12 w-12 text-espresso/20" aria-hidden="true" />
            <p className="text-espresso/60">Your cart is empty.</p>
            <Button variant="outline" href="/menu" onClick={handleClose}>
              Browse the menu
            </Button>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-6 py-4">
              {lines.map((line) => (
                <li
                  key={line.item.id}
                  className="flex items-start gap-4 border-b border-espresso/10 py-4 last:border-none"
                >
                  <div className="flex-1">
                    <p className="font-sans font-semibold text-espresso">{line.item.name}</p>
                    <p className="text-sm text-espresso/60">{formatPrice(line.item.price)} each</p>

                    <div className="mt-2 flex items-center gap-3">
                      <div className="flex items-center rounded-full border border-espresso/15">
                        <button
                          onClick={() => updateQuantity(line.item.id, line.quantity - 1)}
                          className="flex h-8 w-8 items-center justify-center text-espresso hover:bg-espresso/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-espresso rounded-full"
                          aria-label={`Decrease quantity of ${line.item.name}`}
                        >
                          <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                        <span
                          className="w-6 text-center text-sm font-medium text-espresso"
                          aria-live="polite"
                        >
                          {line.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(line.item.id, line.quantity + 1)}
                          className="flex h-8 w-8 items-center justify-center text-espresso hover:bg-espresso/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-espresso rounded-full"
                          aria-label={`Increase quantity of ${line.item.name}`}
                        >
                          <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(line.item.id)}
                        className="flex items-center gap-1 text-xs font-medium text-espresso/50 hover:text-strawberry-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-espresso rounded"
                        aria-label={`Remove ${line.item.name} from cart`}
                      >
                        <Trash2 className="h-3.5 w-3.5" aria-hidden="true" /> Remove
                      </button>
                    </div>
                  </div>

                  <p className="font-sans font-semibold text-espresso">
                    {formatPrice(line.item.price * line.quantity)}
                  </p>
                </li>
              ))}
            </ul>

            <div className="border-t border-espresso/10 px-6 py-5">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-espresso/70">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-espresso/70">
                  <span>GST (incl.)</span>
                  <span>{formatPrice(gst)}</span>
                </div>
                <div className="flex justify-between pt-2 font-display text-lg font-semibold text-espresso">
                  <span>Total</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
              </div>

              <Button className="mt-4 w-full" size="lg" onClick={handleCheckout}>
                Checkout — Click &amp; Collect
              </Button>
              <p className="mt-2 text-center text-xs text-espresso/50">
                Payment is not processed on this demo. Square integration ready.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
