import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PageLayout>
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <p className="text-8xl font-bold text-brand-mint">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-brand-navy dark:text-white">
          Page Not Found
        </h1>
        <p className="mt-2 text-gray-500">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/" className="mt-6">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </PageLayout>
  );
}
