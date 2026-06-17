import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { siteSettings } from "@/config/site-settings";

/** Merge Tailwind classes safely */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format price in Egyptian Pounds */
export function formatPrice(amount: number): string {
  return `${amount.toLocaleString(siteSettings.locale)} ${siteSettings.currencySymbol}`;
}

/** Generate order number */
export function generateOrderNumber(): string {
  const prefix = siteSettings.orders.orderNumberPrefix;
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}-${timestamp}-${random}`;
}

/** Generate tracking number */
export function generateTrackingNumber(): string {
  return `TRK${Date.now()}${Math.floor(Math.random() * 1000)}`;
}

/** Calculate order totals */
export function calculateOrderTotals(
  subtotal: number,
  shippingCost: number,
  discount: number = 0
) {
  const discountedSubtotal = Math.max(0, subtotal - discount);
  const tax = Math.round(discountedSubtotal * siteSettings.orders.taxRate);
  const total = discountedSubtotal + shippingCost + tax;
  return { subtotal, discount, discountedSubtotal, shippingCost, tax, total };
}

/** Slugify text */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

/** Get average star rating display */
export function getStarRating(rating: number): string {
  return "★".repeat(Math.round(rating)) + "☆".repeat(5 - Math.round(rating));
}

/** Local storage helper with SSR safety */
export function getStorageItem<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
}

export function setStorageItem<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage full or unavailable
  }
}
