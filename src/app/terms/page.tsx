import { PageLayout } from "@/components/layout/PageLayout";
import { siteSettings } from "@/config/site-settings";

export default function TermsPage() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-3xl px-4 py-8 md:px-6 md:py-12">
        <h1 className="mb-8 font-display text-3xl font-bold text-brand-navy dark:text-white">
          Terms & Conditions
        </h1>
        <div className="prose prose-sm max-w-none space-y-6 text-gray-600 dark:text-gray-300 dark:prose-invert">
          <section>
            <h2 className="text-xl font-bold text-brand-navy dark:text-white">1. General</h2>
            <p>
              By using the {siteSettings.brandFullName} website and placing orders, you agree to
              these terms and conditions. Please read them carefully before making a purchase.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-brand-navy dark:text-white">2. Products</h2>
            <p>
              All products are subject to availability. We reserve the right to discontinue any
              product at any time. Prices are listed in Egyptian Pounds (EGP) and include applicable
              taxes at checkout.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-brand-navy dark:text-white">3. Orders & Payment</h2>
            <p>
              Orders are confirmed upon successful placement. We accept Cash on Delivery, Credit
              Card, Debit Card, Vodafone Cash, and InstaPay. Payment must be completed as per the
              selected method.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-brand-navy dark:text-white">4. Shipping</h2>
            <p>
              Delivery times vary by governorate. We deliver to all 27 governorates in Egypt.
              Shipping fees are calculated at checkout based on your location.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-brand-navy dark:text-white">5. Returns</h2>
            <p>
              Please refer to our Returns & Exchanges page for detailed return policies. Unworn
              items with tags may be exchanged within 14 days of delivery.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-brand-navy dark:text-white">6. Contact</h2>
            <p>
              For questions about these terms, contact us at {siteSettings.contact.email} or call{" "}
              {siteSettings.contact.phoneFormatted}.
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
