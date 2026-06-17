/**
 * MODIFY HOMEPAGE SECTIONS HERE
 * Edit hero text, CTAs, and section titles for the home page.
 */
export const homepageSections = {
  hero: {
    title: "Making your",
    highlight: "child's world",
    titleEnd: "Better",
    subtitle:
      "Premium 100% cotton school uniforms. Comfortable, allergy-free, and built for active school days.",
    ctaPrimary: "Shop Now",
    ctaPrimaryHref: "/shop",
    ctaSecondary: "View Collections",
    ctaSecondaryHref: "/shop?schoolStage=fs1-fs2",
    image: "/images/hero-banner.svg",
  },
  featured: {
    title: "Featured Products",
    subtitle: "Our most popular uniforms loved by parents across Egypt",
  },
  shopByStage: {
    title: "Shop by School Stage",
    subtitle: "Find the perfect uniform for your child's year group",
  },
  newArrivals: {
    title: "New Arrivals",
    subtitle: "Latest additions to our uniform collection",
  },
  winter: {
    title: "Winter Collection",
    subtitle: "Stay warm with our premium winter uniforms",
    href: "/shop?category=winter-uniform",
  },
  pe: {
    title: "PE Collection",
    subtitle: "Active wear for sports and physical education",
    href: "/shop?category=pe-uniform",
  },
  training: {
    title: "Training Suits",
    subtitle: "Complete sports sets with jacket and sweatpants",
    href: "/shop?category=training-suit",
  },
  quality: {
    title: "100% Cotton | 0% Polyester",
    features: [
      { icon: "leaf", text: "Allergy free for sensitive skin" },
      { icon: "shield", text: "Free from scratchiness" },
      { icon: "clock", text: "Best for longer school days" },
      { icon: "heart", text: "More comfortable fit" },
      { icon: "tag", text: "Reasonable prices" },
      { icon: "award", text: "High quality craftsmanship" },
    ],
  },
  testimonials: {
    title: "What Parents Say",
    subtitle: "Trusted by families across Egypt",
  },
  newsletter: {
    // Text pulled from site-settings.ts newsletter section
  },
};
