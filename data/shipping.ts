/**
 * EDIT SHIPPING SETTINGS HERE
 * Change shipping fees, governorates, and delivery estimates.
 */
import { siteSettings } from "@/config/site-settings";

/** Base shipping cost in EGP */
export const baseShippingCost = 50;

/** Express shipping cost in EGP */
export const expressShippingCost = 80;

/** Shipping cost by governorate - edit fees per region */
export const governorateShippingFees: Record<string, number> = {
  Cairo: 50,
  Giza: 50,
  Qalyubia: 55,
  Alexandria: 70,
  Sharqia: 65,
  Dakahlia: 70,
  Gharbia: 70,
  Monufia: 70,
  Beheira: 75,
  Kafr: 75,
  "Kafr El Sheikh": 75,
  Damietta: 75,
  "Port Said": 80,
  Ismailia: 80,
  Suez: 80,
  Fayoum: 85,
  "Beni Suef": 90,
  Minya: 95,
  Assiut: 100,
  Sohag: 105,
  Qena: 110,
  Luxor: 115,
  Aswan: 120,
  "Red Sea": 120,
  "New Valley": 130,
  Matrouh: 130,
  "North Sinai": 130,
  "South Sinai": 130,
};

/** All Egyptian governorates for checkout dropdown */
export const governorates = [
  "Cairo",
  "Giza",
  "Alexandria",
  "Dakahlia",
  "Sharqia",
  "Gharbia",
  "Monufia",
  "Qalyubia",
  "Beheira",
  "Kafr El Sheikh",
  "Damietta",
  "Port Said",
  "Ismailia",
  "Suez",
  "Fayoum",
  "Beni Suef",
  "Minya",
  "Assiut",
  "Sohag",
  "Qena",
  "Luxor",
  "Aswan",
  "Red Sea",
  "New Valley",
  "Matrouh",
  "North Sinai",
  "South Sinai",
] as const;

export type Governorate = (typeof governorates)[number];

/** Calculate shipping cost based on subtotal and governorate */
export function calculateShipping(
  subtotal: number,
  governorate: string = "Cairo",
  express: boolean = false
): number {
  if (subtotal >= siteSettings.orders.freeShippingThreshold) {
    return 0;
  }
  const baseFee = governorateShippingFees[governorate] ?? baseShippingCost;
  return express ? baseFee + (expressShippingCost - baseShippingCost) : baseFee;
}

/** Estimated delivery days by governorate */
export function getDeliveryEstimate(governorate: string): string {
  const local = ["Cairo", "Giza", "Qalyubia"];
  if (local.includes(governorate)) return "2-3 business days";
  if (["Alexandria", "Sharqia", "Dakahlia", "Gharbia"].includes(governorate))
    return "3-5 business days";
  return "5-7 business days";
}
