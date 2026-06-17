/**
 * MODIFY PAYMENT METHODS HERE
 * Add or remove payment options shown at checkout.
 */
export const paymentMethods = [
  {
    id: "cod",
    name: "Cash on Delivery",
    description: "Pay when your order arrives at your doorstep",
    icon: "banknote",
    enabled: true,
  },
  {
    id: "credit-card",
    name: "Credit Card",
    description: "Visa, Mastercard (mock payment for demo)",
    icon: "credit-card",
    enabled: true,
  },
  {
    id: "debit-card",
    name: "Debit Card",
    description: "Meeza and local debit cards (mock payment for demo)",
    icon: "wallet",
    enabled: true,
  },
  {
    id: "vodafone-cash",
    name: "Vodafone Cash",
    description: "Pay via Vodafone Cash mobile wallet",
    icon: "smartphone",
    enabled: true,
  },
  {
    id: "instapay",
    name: "InstaPay",
    description: "Instant bank transfer via InstaPay",
    icon: "zap",
    enabled: true,
  },
] as const;

export type PaymentMethodId = (typeof paymentMethods)[number]["id"];
