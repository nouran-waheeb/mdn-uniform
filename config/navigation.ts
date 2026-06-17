/**
 * EDIT NAVIGATION LINKS HERE
 * Add, remove, or reorder menu items without touching component code.
 */
export const mainNavigation = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const shopNavigation = [
  { label: "All Products", href: "/shop" },
  { label: "FS1 & FS2", href: "/shop?schoolStage=fs1-fs2" },
  { label: "Year 1-6", href: "/shop?schoolStage=year-1-6" },
  { label: "Year 7+", href: "/shop?schoolStage=year-7-plus" },
  { label: "PE Collection", href: "/shop?category=pe-uniform" },
  { label: "Winter Collection", href: "/shop?category=winter-uniform" },
  { label: "Training Suits", href: "/shop?category=training-suit" },
] as const;

export const footerNavigation = {
  shop: [
    { label: "All Products", href: "/shop" },
    { label: "New Arrivals", href: "/shop?sort=newest" },
    { label: "Winter Collection", href: "/shop?category=winter-uniform" },
    { label: "PE Uniform", href: "/shop?category=pe-uniform" },
    { label: "Training Suits", href: "/shop?category=training-suit" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Returns & Exchanges", href: "/returns" },
    { label: "Order Tracking", href: "/order-tracking" },
    { label: "Shipping Info", href: "/shipping" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  account: [
    { label: "My Account", href: "/account" },
    { label: "Order History", href: "/order-history" },
    { label: "Wishlist", href: "/wishlist" },
    { label: "Login", href: "/login" },
  ],
} as const;

export const mobileBottomNav = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Shop", href: "/shop", icon: "shop" },
  { label: "Cart", href: "/cart", icon: "cart" },
  { label: "Wishlist", href: "/wishlist", icon: "heart" },
  { label: "Account", href: "/account", icon: "user" },
] as const;
