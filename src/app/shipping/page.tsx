import { PageLayout } from "@/components/layout/PageLayout";
import { ShippingForm } from "@/components/checkout/ShippingForm";
import { siteSettings } from "@/config/site-settings";
import { calculateShipping, getDeliveryEstimate, governorates } from "@/data/shipping";
import { MapPin, Truck, Clock } from "lucide-react";

/** Shipping Information Page - fees editable in data/shipping.ts */
export default function ShippingPage() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-4xl px-4 py-8 md:px-6 md:py-12">
        <h1 className="mb-2 font-display text-3xl font-bold text-brand-navy dark:text-white">
          Shipping Information
        </h1>
        <p className="mb-8 text-gray-500">
          We deliver to all {governorates.length} governorates across Egypt.
        </p>

        <div className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <Truck className="mb-3 h-8 w-8 text-brand-mint" />
            <h3 className="font-bold">Nationwide Delivery</h3>
            <p className="mt-1 text-sm text-gray-500">
              From Cairo to Aswan — we ship everywhere in Egypt.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <Clock className="mb-3 h-8 w-8 text-brand-mint" />
            <h3 className="font-bold">Fast Delivery</h3>
            <p className="mt-1 text-sm text-gray-500">
              Cairo/Giza: {getDeliveryEstimate("Cairo")}. Other regions: 5-7 days.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <MapPin className="mb-3 h-8 w-8 text-brand-mint" />
            <h3 className="font-bold">Free Shipping</h3>
            <p className="mt-1 text-sm text-gray-500">
              Free on orders over {siteSettings.orders.freeShippingThreshold} EGP.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-4 text-xl font-bold">Shipping Address Form Preview</h2>
          <p className="mb-4 text-sm text-gray-500">
            This is the same form used at checkout. Base shipping from Cairo:{" "}
            {calculateShipping(0)} EGP.
          </p>
          <ShippingForm
            onSubmit={() => {}}
            submitLabel="Preview Only"
          />
        </div>
      </div>
    </PageLayout>
  );
}
