/**
 * UPDATE CONTACT INFORMATION HERE
 * All contact details across the website are pulled from this file.
 */
export const siteSettings = {
  brandName: "M.D.N Uniform",
  brandFullName: "M.D.N Uniform Factory",
  tagline: "WEAR · LEARN · PLAY",
  description:
    "Premium school uniforms made from 100% cotton. Comfortable, allergy-free, and built for active school days in Egypt.",
  currency: "EGP",
  currencySymbol: "EGP",
  locale: "en-EG",

  /** Contact details - shown in footer, contact page, and checkout */
  contact: {
    phone: "01126489029",
    phoneAlt: "01099602393",
    phoneFormatted: "+20 112 648 9029",
    phoneAltFormatted: "+20 109 960 2393",
    email: "info@mdnuniform.com",
    whatsapp: "201126489029",
    address: "Al Zahraa, Nasr City",
    city: "Cairo",
    country: "Egypt",
    mapUrl: "https://maps.google.com/?q=Al+Zahraa+Nasr+City+Cairo",
    workingHours: "Sat - Thu: 10:00 AM - 8:00 PM",
  },

  /** Social media links - set to "#" until real URLs are available */
  social: {
    facebook: "#",
    instagram: "#",
    whatsapp: "https://wa.me/201126489029",
  },

  /** SEO defaults */
  seo: {
    titleTemplate: "%s | M.D.N Uniform",
    defaultTitle: "M.D.N Uniform - Premium School Uniforms in Egypt",
    defaultDescription:
      "Shop premium 100% cotton school uniforms for FS1 to Year 7+. Standard, PE, training suits & winter collections. Cash on delivery across Egypt.",
    keywords: [
      "school uniform",
      "Egypt",
      "M.D.N Uniform",
      "IPS",
      "Nasr City",
      "cotton uniform",
    ],
  },

  /** Newsletter section text */
  newsletter: {
    title: "Stay Updated",
    description:
      "Subscribe for back-to-school offers, new arrivals, and uniform tips.",
    buttonText: "Subscribe",
  },

  /** About page content */
  about: {
    mission:
      "We want your children to succeed in school, not just get by. Because our children spend so much time in school uniform, they deserve to be comfortable and free of chemicals, especially if they have allergies or sensitive skin.",
    highlights: [
      "100% Cotton | 0% Polyester",
      "Allergy free for sensitive skin",
      "Free from scratchiness",
      "Best choice for longer school days",
      "More comfortable fit",
      "Reasonable prices",
      "High quality craftsmanship",
    ],
  },

  /** Order settings */
  orders: {
    taxRate: 0.14, // 14% VAT in Egypt
    freeShippingThreshold: 1000,
    orderNumberPrefix: "MDN",
  },
} as const;

export type SiteSettings = typeof siteSettings;
