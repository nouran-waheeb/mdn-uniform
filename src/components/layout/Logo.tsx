import Link from "next/link";
import Image from "next/image";
import { siteSettings } from "@/config/site-settings";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/images/logo.svg"
        alt={siteSettings.brandName}
        width={48}
        height={48}
        className="h-10 w-10 md:h-12 md:w-12"
        priority
      />
      <div className="hidden sm:block">
        <span className="font-display text-lg font-bold leading-tight text-brand-navy dark:text-white">
          M.D.N
        </span>
        <span className="block text-[10px] font-medium uppercase tracking-widest text-brand-navy/70 dark:text-gray-400">
          Uniform Factory
        </span>
      </div>
    </Link>
  );
}
