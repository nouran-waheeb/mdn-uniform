import Image from "next/image";
import { PageLayout } from "@/components/layout/PageLayout";
import { siteSettings } from "@/config/site-settings";
import { Award, Leaf, Heart } from "lucide-react";

/** About page - content from config/site-settings.ts */
export default function AboutPage() {
  const { about, brandFullName, tagline } = siteSettings;

  return (
    <PageLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-mint">
              {tagline}
            </p>
            <h1 className="font-display text-4xl font-bold text-brand-navy dark:text-white">
              About {brandFullName}
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              {about.mission}
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/about-hero.svg"
              alt="M.D.N Uniform Factory"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <section className="mt-16">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-brand-navy dark:text-white">
            Why Choose M.D.N
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {about.highlights.slice(0, 3).map((text, i) => {
              const icons = [Leaf, Heart, Award];
              const Icon = icons[i];
              return (
                <div
                  key={text}
                  className="rounded-2xl border border-gray-100 bg-white p-8 text-center dark:border-gray-800 dark:bg-gray-900"
                >
                  <Icon className="mx-auto mb-4 h-10 w-10 text-brand-mint" />
                  <p className="font-semibold text-brand-navy dark:text-white">{text}</p>
                </div>
              );
            })}
          </div>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {about.highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-xl bg-brand-grey px-4 py-3 text-sm dark:bg-gray-800"
              >
                <span className="text-brand-mint">✓</span> {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </PageLayout>
  );
}
