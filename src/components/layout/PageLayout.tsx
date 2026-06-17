import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";

interface PageLayoutProps {
  children: React.ReactNode;
  hideMobileNav?: boolean;
}

export function PageLayout({ children, hideMobileNav }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen pb-20 md:pb-0">{children}</main>
      <Footer />
      {!hideMobileNav && <MobileBottomNav />}
    </>
  );
}
