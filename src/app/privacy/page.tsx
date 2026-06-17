import { PageLayout } from "@/components/layout/PageLayout";
import { siteSettings } from "@/config/site-settings";

export default function PrivacyPage() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-3xl px-4 py-8 md:px-6 md:py-12">
        <h1 className="mb-8 font-display text-3xl font-bold text-brand-navy dark:text-white">
          Privacy Policy
        </h1>
        <div className="space-y-6 text-gray-600 dark:text-gray-300">
          <section>
            <h2 className="text-xl font-bold text-brand-navy dark:text-white">
              Information We Collect
            </h2>
            <p className="mt-2">
              When you place an order or contact us, we collect your name, email, phone number,
              and shipping address. This information is used solely to process and deliver your
              orders.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-brand-navy dark:text-white">
              How We Use Your Information
            </h2>
            <p className="mt-2">
              Your data is used to fulfill orders, communicate about your purchase, and improve
              our services. We do not sell your personal information to third parties.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-brand-navy dark:text-white">
              Data Storage
            </h2>
            <p className="mt-2">
              Order information is stored securely. In this demo version, data is stored locally
              in your browser. A production deployment would use secure server-side storage.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-brand-navy dark:text-white">
              Contact
            </h2>
            <p className="mt-2">
              For privacy-related inquiries, email {siteSettings.contact.email}.
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
