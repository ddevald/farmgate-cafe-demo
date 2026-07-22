import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-matcha">
          {eyebrow}
        </p>
      )}
      <Tag className="text-balance font-display text-3xl font-semibold leading-[1.1] text-espresso sm:text-4xl lg:text-5xl">
        {title}
      </Tag>
      {description && (
        <p className="mt-4 text-balance font-sans text-base leading-relaxed text-espresso/70 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
