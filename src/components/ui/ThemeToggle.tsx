"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className={cn("h-9 w-9", className)} />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-brand-grey dark:hover:bg-white/10",
        className
      )}
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-brand-orange" />
      ) : (
        <Moon className="h-5 w-5 text-brand-navy" />
      )}
    </button>
  );
}
