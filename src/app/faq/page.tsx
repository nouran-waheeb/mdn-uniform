"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { faqItems } from "@/data/faq";
import { cn } from "@/lib/utils";

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id || null);

  return (
    <PageLayout>
      <div className="mx-auto max-w-3xl px-4 py-8 md:px-6 md:py-12">
        <h1 className="mb-2 text-center font-display text-3xl font-bold text-brand-navy dark:text-white">
          Frequently Asked Questions
        </h1>
        <p className="mb-10 text-center text-gray-500">
          Find answers to common questions about our uniforms and services.
        </p>

        <div className="space-y-3">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800"
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="flex w-full items-center justify-between bg-white px-6 py-4 text-left dark:bg-gray-900"
              >
                <span className="font-semibold text-brand-navy dark:text-white">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 transition-transform",
                    openId === item.id && "rotate-180"
                  )}
                />
              </button>
              {openId === item.id && (
                <div className="border-t border-gray-100 bg-brand-grey/50 px-6 py-4 dark:border-gray-800 dark:bg-gray-800/50">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
