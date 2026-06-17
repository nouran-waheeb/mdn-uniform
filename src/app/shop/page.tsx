import type { Metadata } from "next";
import { Suspense } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { ProductGridSkeleton } from "@/components/ui/Skeleton";
import ShopPageClient from "./ShopPageClient";

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse all M.D.N Uniform school uniforms. Filter by stage, category, and price.",
};

export default function ShopPage() {
  return (
    <PageLayout>
      <Suspense fallback={<ProductGridSkeleton />}>
        <ShopPageClient />
      </Suspense>
    </PageLayout>
  );
}
