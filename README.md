# M.D.N Uniform — E-Commerce Website

Premium school uniform e-commerce store built with **Next.js 15**, **React**, **TypeScript**, and **Tailwind CSS**.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy

### Vercel (Recommended)
1. Push to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Deploy — works out of the box

### GitHub Pages
1. In `next.config.ts`, uncomment `output: "export"` and set `basePath` if needed
2. Run `npm run build`
3. Deploy the `out/` folder

---

## Maintenance Guide (For Non-Developers)

All easy-to-edit files are in **`/data`**, **`/config`**, and **`/public/products`**.

### Edit Product Prices
📁 **`data/products.ts`** — look for `price:` on each product

### Add New Products
📁 **`data/products.ts`** — copy an existing product block and change id, name, price, etc.

### Edit Product Descriptions
📁 **`data/products.ts`** — edit `description` and `longDescription` fields

### Change Product Images
📁 **`public/products/`** — replace `.svg` files (or add `.jpg`/`.png` and update paths in `data/products.ts`)

Each product uses: `/products/{product-id}.svg`

### Edit Categories & School Stages
📁 **`data/categories.ts`**

### Change Shipping Fees
📁 **`data/shipping.ts`** — edit `baseShippingCost` and `governorateShippingFees`

### Change Payment Methods
📁 **`config/payment-methods.ts`**

### Change Brand Colors
📁 **`config/theme.ts`** — also update `src/app/globals.css` CSS variables

### Update Contact Information
📁 **`config/site-settings.ts`** — phone, email, address, social links

### Edit Navigation Links
📁 **`config/navigation.ts`**

### Modify Homepage Sections
📁 **`config/homepage-sections.ts`**

### Edit Discount Coupons
📁 **`data/coupons.ts`**

### Edit FAQ
📁 **`data/faq.ts`**

### Edit Testimonials
📁 **`data/testimonials.ts`**

---

## Project Structure

```
├── config/           ← Site settings, theme, navigation, homepage
├── data/             ← Products, categories, shipping, coupons
├── public/
│   ├── products/     ← Product images (replace here!)
│   └── images/       ← Logo, hero, category images
├── src/
│   ├── app/          ← All pages (routing)
│   ├── components/   ← Reusable UI components
│   ├── context/      ← Cart, wishlist, auth state
│   ├── lib/          ← Utilities
│   └── types/        ← TypeScript types
```

## Pages

| Page | URL |
|------|-----|
| Home | `/` |
| Shop | `/shop` |
| Product Details | `/product/[slug]` |
| Cart | `/cart` |
| Checkout | `/checkout` |
| Shipping Info | `/shipping` |
| Order Confirmation | `/order-confirmation` |
| Order Tracking | `/order-tracking` |
| Wishlist | `/wishlist` |
| Contact | `/contact` |
| About | `/about` |
| FAQ | `/faq` |
| Terms | `/terms` |
| Privacy | `/privacy` |
| Returns | `/returns` |
| Account | `/account` |
| Login | `/login` |
| Register | `/register` |
| Order History | `/order-history` |
| Admin (Demo) | `/admin` |

## Features

- Full shopping cart with localStorage persistence
- Product filtering, search, and sorting
- Egyptian checkout with all 27 governorates
- Cash on Delivery + 4 digital payment methods
- Coupon/discount system
- Dark mode
- Responsive design with mobile bottom navigation
- 33 products across 3 school stages and 4 categories
- Order tracking and order history

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- next-themes (dark mode)
- lucide-react (icons)

## Future Expansion

The architecture supports adding:
- New schools (add `school` field to products)
- New year groups (add to `data/categories.ts`)
- Real backend API (replace context localStorage)
- Payment gateway integration
- Shipping provider integration

---

**M.D.N Uniform Factory** · WEAR · LEARN · PLAY · Al Zahraa, Nasr City, Cairo
