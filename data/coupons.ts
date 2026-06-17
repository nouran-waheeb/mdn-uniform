/**
 * EDIT DISCOUNT CODES / COUPONS HERE
 * Add new promotional codes for the checkout coupon system.
 */
export interface Coupon {
  code: string;
  discountType: "percentage" | "fixed";
  discountValue: number;
  minOrderAmount?: number;
  description: string;
  active: boolean;
}

export const coupons: Coupon[] = [
  {
    code: "WELCOME10",
    discountType: "percentage",
    discountValue: 10,
    minOrderAmount: 300,
    description: "10% off your first order (min 300 EGP)",
    active: true,
  },
  {
    code: "SCHOOL2025",
    discountType: "percentage",
    discountValue: 15,
    minOrderAmount: 500,
    description: "15% off back-to-school orders (min 500 EGP)",
    active: true,
  },
  {
    code: "SAVE50",
    discountType: "fixed",
    discountValue: 50,
    minOrderAmount: 400,
    description: "50 EGP off orders over 400 EGP",
    active: true,
  },
];

export function validateCoupon(
  code: string,
  subtotal: number
): { valid: boolean; coupon?: Coupon; error?: string } {
  const coupon = coupons.find(
    (c) => c.code.toUpperCase() === code.toUpperCase() && c.active
  );
  if (!coupon) {
    return { valid: false, error: "Invalid coupon code" };
  }
  if (coupon.minOrderAmount && subtotal < coupon.minOrderAmount) {
    return {
      valid: false,
      error: `Minimum order of ${coupon.minOrderAmount} EGP required`,
    };
  }
  return { valid: true, coupon };
}

export function calculateDiscount(subtotal: number, coupon: Coupon): number {
  if (coupon.discountType === "percentage") {
    return Math.round(subtotal * (coupon.discountValue / 100));
  }
  return Math.min(coupon.discountValue, subtotal);
}
