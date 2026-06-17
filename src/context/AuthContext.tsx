"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import type { User, Order, ShippingAddress } from "@/types";
import { getStorageItem, setStorageItem } from "@/lib/utils";

const USER_KEY = "mdn-user";
const ORDERS_KEY = "mdn-orders";

interface AuthContextType {
  user: User | null;
  orders: Order[];
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, phone: string, password: string) => boolean;
  logout: () => void;
  addOrder: (order: Order) => void;
  getOrderByNumber: (orderNumber: string) => Order | undefined;
  getOrderByTracking: (trackingNumber: string) => Order | undefined;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setUser(getStorageItem<User | null>(USER_KEY, null));
    setOrders(getStorageItem<Order[]>(ORDERS_KEY, []));
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setStorageItem(USER_KEY, user);
      setStorageItem(ORDERS_KEY, orders);
    }
  }, [user, orders, mounted]);

  const login = useCallback((email: string, _password: string) => {
    const mockUser: User = {
      id: "user-1",
      name: email.split("@")[0],
      email,
      phone: "01126489029",
    };
    setUser(mockUser);
    return true;
  }, []);

  const register = useCallback(
    (name: string, email: string, phone: string, _password: string) => {
      const newUser: User = { id: `user-${Date.now()}`, name, email, phone };
      setUser(newUser);
      return true;
    },
    []
  );

  const logout = useCallback(() => setUser(null), []);

  const addOrder = useCallback((order: Order) => {
    setOrders((prev) => [order, ...prev]);
  }, []);

  const getOrderByNumber = useCallback(
    (orderNumber: string) =>
      orders.find((o) => o.orderNumber === orderNumber),
    [orders]
  );

  const getOrderByTracking = useCallback(
    (trackingNumber: string) =>
      orders.find((o) => o.trackingNumber === trackingNumber),
    [orders]
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        orders,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        addOrder,
        getOrderByNumber,
        getOrderByTracking,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}

export type { ShippingAddress };
