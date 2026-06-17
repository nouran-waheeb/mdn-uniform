"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import type { WishlistItem } from "@/types";
import { getStorageItem, setStorageItem } from "@/lib/utils";

const WISHLIST_KEY = "mdn-wishlist";

interface WishlistContextType {
  items: WishlistItem[];
  addItem: (item: WishlistItem) => void;
  removeItem: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  toggleItem: (item: WishlistItem) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setItems(getStorageItem<WishlistItem[]>(WISHLIST_KEY, []));
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) setStorageItem(WISHLIST_KEY, items);
  }, [items, mounted]);

  const addItem = useCallback((item: WishlistItem) => {
    setItems((prev) => {
      if (prev.some((i) => i.productId === item.productId)) return prev;
      return [...prev, item];
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId));
  }, []);

  const isInWishlist = useCallback(
    (productId: string) => items.some((i) => i.productId === productId),
    [items]
  );

  const toggleItem = useCallback((item: WishlistItem) => {
    setItems((prev) => {
      if (prev.some((i) => i.productId === item.productId)) {
        return prev.filter((i) => i.productId !== item.productId);
      }
      return [...prev, item];
    });
  }, []);

  return (
    <WishlistContext.Provider
      value={{ items, addItem, removeItem, isInWishlist, toggleItem }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context)
    throw new Error("useWishlist must be used within WishlistProvider");
  return context;
}
