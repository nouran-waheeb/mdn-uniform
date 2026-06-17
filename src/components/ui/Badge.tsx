import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "new" | "sale" | "out-of-stock";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variants = {
    default: "bg-brand-navy text-white",
    new: "bg-brand-mint text-brand-navy",
    sale: "bg-brand-orange text-white",
    "out-of-stock": "bg-gray-400 text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
