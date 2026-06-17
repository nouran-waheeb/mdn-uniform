"use client";

import Link from "next/link";
import { Home, ShoppingBag, Heart, User, Search } from "lucide-react";
import { mobileBottomNav } from "@/config/navigation";
import { useCart } from "@/context/CartContext";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const iconMap = {
  home: Home,
  shop: Search,
  cart: ShoppingBag,
  heart: Heart,
  user: User,
};

export function MobileBottomNav() {
  const pathname = usePathname();
  const { itemCount } = useCart();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur-md md:hidden dark:border-gray-800 dark:bg-gray-900/95">
      <div className="flex items-center justify-around py-2">
        {mobileBottomNav.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative flex flex-col items-center gap-0.5 px-3 py-1 text-[10px] font-medium transition-colors",
                isActive
                  ? "text-brand-mint"
                  : "text-gray-500 dark:text-gray-400"
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
              {item.icon === "cart" && itemCount > 0 && (
                <span className="absolute -right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-brand-orange text-[9px] font-bold text-white">
                  {itemCount}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
