"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { homepageSections } from "@/config/homepage-sections";

export function HeroSection() {
  const { hero } = homepageSections;

  return (
    <section className="relative overflow-hidden bg-brand-navy">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:px-6 md:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-white"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-mint">
            WEAR · LEARN · PLAY
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            {hero.title}{" "}
            <span className="inline-block rounded-lg bg-brand-orange px-3 py-1 text-brand-navy">
              {hero.highlight}
            </span>{" "}
            {hero.titleEnd}
          </h1>
          <p className="mt-4 max-w-lg text-lg text-gray-300">{hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={hero.ctaPrimaryHref}>
              <Button variant="secondary" size="lg">
                {hero.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href={hero.ctaSecondaryHref}>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-navy">
                {hero.ctaSecondary}
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src={hero.image}
              alt="M.D.N Uniform - School uniforms"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-2xl bg-brand-orange px-6 py-4 shadow-xl">
            <p className="text-2xl font-bold text-white">100%</p>
            <p className="text-sm font-medium text-white/90">Cotton</p>
          </div>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full fill-white dark:fill-gray-900">
          <path d="M0,32L60,37.3C120,43,240,53,360,48C480,43,600,21,720,21.3C840,21,960,43,1080,48C1200,53,1320,43,1380,37.3L1440,32L1440,60L0,60Z" />
        </svg>
      </div>
    </section>
  );
}
