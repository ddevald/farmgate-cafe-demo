import type { DietaryTag } from "./site-config";

/** Merge class names, filtering out falsy values. Lightweight clsx replacement. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Format a number as AUD currency, e.g. 5 -> "$5.00" */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  }).format(price);
}

/** Format an ISO date string as a friendly long date, e.g. "Friday, 14 August 2026" */
export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-AU", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Format an ISO date string compactly, e.g. "14 Aug" */
export function formatDateShort(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
  });
}

export const dietaryLabels: Record<DietaryTag, string> = {
  V: "Vegetarian",
  VG: "Vegan",
  GF: "Gluten Free",
  DF: "Dairy Free",
  NF: "Nut Free",
};

/** Determine if the café is currently open, based on the given hours specification. */
export function isOpenNow(
  spec: ReadonlyArray<{ days: readonly string[]; opens: string; closes: string }>
): boolean {
  const now = new Date();
  const dayName = now.toLocaleDateString("en-AU", { weekday: "long" });
  const todaySpec = spec.find((s) => s.days.includes(dayName));
  if (!todaySpec) return false;

  const [openH, openM] = todaySpec.opens.split(":").map(Number);
  const [closeH, closeM] = todaySpec.closes.split(":").map(Number);
  const minutesNow = now.getHours() * 60 + now.getMinutes();
  const openMinutes = (openH ?? 0) * 60 + (openM ?? 0);
  const closeMinutes = (closeH ?? 0) * 60 + (closeM ?? 0);

  return minutesNow >= openMinutes && minutesNow < closeMinutes;
}

/** Simple slugify helper, useful for anchor links / IDs. */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
