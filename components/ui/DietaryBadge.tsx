import type { DietaryTag } from "@/lib/site-config";
import { dietaryLabels } from "@/lib/utils";

export function DietaryBadge({ tag }: { tag: DietaryTag }) {
  return (
    <span
      className="inline-flex h-6 min-w-6 items-center justify-center rounded-full border border-matcha/30 bg-matcha/10 px-1.5 text-[10px] font-semibold text-matcha-dark"
      title={dietaryLabels[tag]}
      aria-label={dietaryLabels[tag]}
    >
      {tag}
    </span>
  );
}
