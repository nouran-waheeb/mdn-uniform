import { cn } from "@/lib/utils";
import { PackageOpen } from "lucide-react";
import { Button } from "./Button";
import Link from "next/link";

interface EmptyStateProps {
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  title,
  description,
  actionLabel,
  actionHref = "/shop",
  icon,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-16 text-center",
        className
      )}
    >
      <div className="mb-4 rounded-full bg-brand-grey p-6 dark:bg-gray-800">
        {icon || <PackageOpen className="h-12 w-12 text-brand-navy/40 dark:text-gray-500" />}
      </div>
      <h3 className="mb-2 text-xl font-bold text-brand-navy dark:text-white">
        {title}
      </h3>
      {description && (
        <p className="mb-6 max-w-md text-gray-500 dark:text-gray-400">
          {description}
        </p>
      )}
      {actionLabel && (
        <Link href={actionHref}>
          <Button>{actionLabel}</Button>
        </Link>
      )}
    </div>
  );
}
