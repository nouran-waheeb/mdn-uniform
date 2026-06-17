export interface CartItem {
  productId: string;
  slug: string;
  name: string;
  price: number;
  size: string;
  quantity: number;
  image: string;
}

export interface WishlistItem {
  productId: string;
  slug: string;
  name: string;
  price: number;
  image: string;
}

export interface ShippingAddress {
  customerName: string;
  phone: string;
  altPhone: string;
  email: string;
  governorate: string;
  city: string;
  district: string;
  street: string;
  buildingNumber: string;
  floor: string;
  apartmentNumber: string;
  postalCode: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  trackingNumber: string;
  items: CartItem[];
  shipping: ShippingAddress;
  paymentMethod: string;
  subtotal: number;
  shippingCost: number;
  tax: number;
  discount: number;
  couponCode?: string;
  total: number;
  status: "pending" | "confirmed" | "processing" | "shipped" | "delivered";
  createdAt: string;
  estimatedDelivery: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}
