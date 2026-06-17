import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { siteSettings } from "@/config/site-settings";

export default function ReturnsPage() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-3xl px-4 py-8 md:px-6 md:py-12">
        <h1 className="mb-8 font-display text-3xl font-bold text-brand-navy dark:text-white">
          Returns & Exchanges
        </h1>
        <div className="space-y-6 text-gray-600 dark:text-gray-300">
          <section className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="text-xl font-bold text-brand-navy dark:text-white">
              14-Day Exchange Policy
            </h2>
            <p className="mt-2">
              Unworn items with original tags attached can be exchanged within 14 days of delivery.
              Items must be in original condition with no signs of wear or washing.
            </p>
          </section>
          <section className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="text-xl font-bold text-brand-navy dark:text-white">
              Size Exchanges
            </h2>
            <p className="mt-2">
              Wrong size? We offer free size exchanges within 14 days for Cairo and Giza customers.
              Other governorates may incur return shipping fees.
            </p>
          </section>
          <section className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="text-xl font-bold text-brand-navy dark:text-white">
              Defective Items
            </h2>
            <p className="mt-2">
              If you receive a defective item, contact us within 48 hours with photos. We will
              arrange a replacement or full refund at no extra cost.
            </p>
          </section>
          <section className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="text-xl font-bold text-brand-navy dark:text-white">
              How to Return
            </h2>
            <ol className="mt-2 list-decimal space-y-2 pl-5">
              <li>Contact us at {siteSettings.contact.phone} or via WhatsApp</li>
              <li>Provide your order number and reason for return</li>
              <li>We will arrange pickup or provide return instructions</li>
              <li>Refund or exchange processed within 5-7 business days</li>
            </ol>
          </section>
          <p>
            Questions? Visit our{" "}
            <Link href="/contact" className="text-brand-mint hover:underline">
              Contact page
            </Link>{" "}
            or check the{" "}
            <Link href="/faq" className="text-brand-mint hover:underline">
              FAQ
            </Link>
            .
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
