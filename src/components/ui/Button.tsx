import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const variants = {
      primary:
        "bg-brand-navy text-white hover:bg-brand-navy/90 dark:bg-brand-mint dark:text-brand-navy dark:hover:bg-brand-mint/90",
      secondary:
        "bg-brand-orange text-white hover:bg-brand-orange/90",
      outline:
        "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white dark:border-brand-mint dark:text-brand-mint dark:hover:bg-brand-mint dark:hover:text-brand-navy",
      ghost:
        "text-brand-navy hover:bg-brand-grey dark:text-white dark:hover:bg-white/10",
      danger: "bg-red-600 text-white hover:bg-red-700",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-5 py-2.5 text-sm",
      lg: "px-8 py-3.5 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-mint focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 active:scale-[0.98]",
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export { Button };
