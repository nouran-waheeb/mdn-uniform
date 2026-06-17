"use client";

import { useState } from "react";
import { paymentMethods } from "@/config/payment-methods";
import { cn } from "@/lib/utils";
import {
  Banknote,
  CreditCard,
  Wallet,
  Smartphone,
  Zap,
} from "lucide-react";
import type { PaymentMethodId } from "@/config/payment-methods";

const iconMap = {
  banknote: Banknote,
  "credit-card": CreditCard,
  wallet: Wallet,
  smartphone: Smartphone,
  zap: Zap,
};

interface PaymentMethodSelectorProps {
  selected: PaymentMethodId;
  onSelect: (id: PaymentMethodId) => void;
}

/** Payment methods loaded from config/payment-methods.ts */
export function PaymentMethodSelector({
  selected,
  onSelect,
}: PaymentMethodSelectorProps) {
  return (
    <div className="space-y-3">
      {paymentMethods
        .filter((m) => m.enabled)
        .map((method) => {
          const Icon = iconMap[method.icon as keyof typeof iconMap];
          return (
            <button
              key={method.id}
              type="button"
              onClick={() => onSelect(method.id)}
              className={cn(
                "flex w-full items-center gap-4 rounded-xl border-2 p-4 text-left transition-all",
                selected === method.id
                  ? "border-brand-mint bg-brand-mint/10"
                  : "border-gray-100 hover:border-gray-200 dark:border-gray-700 dark:hover:border-gray-600"
              )}
            >
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full",
                  selected === method.id
                    ? "bg-brand-mint text-brand-navy"
                    : "bg-brand-grey dark:bg-gray-800"
                )}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-brand-navy dark:text-white">
                  {method.name}
                </p>
                <p className="text-sm text-gray-500">{method.description}</p>
              </div>
            </button>
          );
        })}
    </div>
  );
}

/** Coupon input for checkout */
export function CouponInput({
  onApply,
}: {
  onApply: (code: string) => { success: boolean; message: string };
}) {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleApply = () => {
    const result = onApply(code);
    setMessage(result.message);
    setIsSuccess(result.success);
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter coupon code"
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          className="flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-sm uppercase focus:border-brand-mint focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
        />
        <button
          type="button"
          onClick={handleApply}
          className="rounded-xl bg-brand-navy px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-navy/90 dark:bg-brand-mint dark:text-brand-navy"
        >
          Apply
        </button>
      </div>
      {message && (
        <p
          className={cn(
            "text-sm",
            isSuccess ? "text-green-600" : "text-red-500"
          )}
        >
          {message}
        </p>
      )}
    </div>
  );
}
