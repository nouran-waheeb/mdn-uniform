"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, ShoppingBag, Heart, Menu, X, User } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { mainNavigation, shopNavigation } from "@/config/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { itemCount } = useCart();
  const { items: wishlistItems } = useWishlist();
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
      setMobileOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/95">
      {/* Top bar */}
      <div className="hidden bg-brand-navy py-1.5 text-center text-xs text-white md:block">
        <span className="opacity-90">
          100% Cotton | Free shipping on orders over 1,000 EGP
        </span>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {mainNavigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-navy transition-colors hover:text-brand-mint dark:text-gray-200 dark:hover:text-brand-mint"
            >
              {link.label}
            </Link>
          ))}
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium text-brand-navy dark:text-gray-200">
              Shop <span className="text-xs">▾</span>
            </button>
            <div className="invisible absolute left-0 top-full z-50 mt-2 w-56 rounded-xl border border-gray-100 bg-white py-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100 dark:border-gray-700 dark:bg-gray-800">
              {shopNavigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-sm text-brand-navy hover:bg-brand-grey dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1 md:gap-2">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-brand-grey dark:hover:bg-white/10"
            aria-label="Search"
          >
            <Search className="h-5 w-5 text-brand-navy dark:text-white" />
          </button>
          <ThemeToggle />
          <Link
            href="/account"
            className="hidden h-9 w-9 items-center justify-center rounded-full hover:bg-brand-grey dark:hover:bg-white/10 sm:flex"
          >
            <User className="h-5 w-5 text-brand-navy dark:text-white" />
          </Link>
          <Link
            href="/wishlist"
            className="relative flex h-9 w-9 items-center justify-center rounded-full hover:bg-brand-grey dark:hover:bg-white/10"
          >
            <Heart className="h-5 w-5 text-brand-navy dark:text-white" />
            {wishlistItems.length > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-orange text-[10px] font-bold text-white">
                {wishlistItems.length}
              </span>
            )}
          </Link>
          <Link
            href="/cart"
            className="relative flex h-9 w-9 items-center justify-center rounded-full hover:bg-brand-grey dark:hover:bg-white/10"
          >
            <ShoppingBag className="h-5 w-5 text-brand-navy dark:text-white" />
            {itemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-mint text-[10px] font-bold text-brand-navy">
                {itemCount}
              </span>
            )}
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-brand-grey lg:hidden dark:hover:bg-white/10"
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-brand-navy dark:text-white" />
            ) : (
              <Menu className="h-5 w-5 text-brand-navy dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Search bar */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          searchOpen ? "max-h-20 border-t border-gray-100 dark:border-gray-800" : "max-h-0"
        )}
      >
        <form onSubmit={handleSearch} className="mx-auto max-w-7xl px-4 py-3 md:px-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Search uniforms, polo shirts, jackets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-gray-200 bg-brand-grey py-2.5 pl-11 pr-4 text-sm focus:border-brand-mint focus:outline-none focus:ring-2 focus:ring-brand-mint/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              autoFocus={searchOpen}
            />
          </div>
        </form>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-gray-100 transition-all duration-300 lg:hidden dark:border-gray-800",
          mobileOpen ? "max-h-[80vh]" : "max-h-0"
        )}
      >
        <nav className="mx-auto max-w-7xl space-y-1 px-4 py-4 md:px-6">
          {[...mainNavigation, ...shopNavigation].map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-brand-navy hover:bg-brand-grey dark:text-gray-200 dark:hover:bg-gray-800"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
