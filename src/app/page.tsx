import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/home/HeroSection";
import { ShopByStageSection } from "@/components/home/ShopByStageSection";
import { ProductSection } from "@/components/home/ProductSection";
import { QualitySection } from "@/components/home/QualitySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { homepageSections } from "@/config/homepage-sections";
import {
  getFeaturedProducts,
  getNewArrivals,
  getProductsByCategory,
} from "@/data/products";

/** Home Page - section content editable in config/homepage-sections.ts */
export default function HomePage() {
  const featured = getFeaturedProducts(8);
  const newArrivals = getNewArrivals(4);
  const winter = getProductsByCategory("winter-uniform").slice(0, 4);
  const pe = getProductsByCategory("pe-uniform").slice(0, 4);
  const training = getProductsByCategory("training-suit").slice(0, 4);

  return (
    <PageLayout>
      <HeroSection />
      <ProductSection
        title={homepageSections.featured.title}
        subtitle={homepageSections.featured.subtitle}
        products={featured}
        href="/shop"
      />
      <ShopByStageSection />
      <ProductSection
        title={homepageSections.newArrivals.title}
        subtitle={homepageSections.newArrivals.subtitle}
        products={newArrivals}
        href="/shop?sort=newest"
      />
      <ProductSection
        title={homepageSections.winter.title}
        subtitle={homepageSections.winter.subtitle}
        products={winter}
        href={homepageSections.winter.href}
      />
      <ProductSection
        title={homepageSections.pe.title}
        subtitle={homepageSections.pe.subtitle}
        products={pe}
        href={homepageSections.pe.href}
      />
      <ProductSection
        title={homepageSections.training.title}
        subtitle={homepageSections.training.subtitle}
        products={training}
        href={homepageSections.training.href}
      />
      <QualitySection />
      <TestimonialsSection />
      <NewsletterSection />
    </PageLayout>
  );
}
