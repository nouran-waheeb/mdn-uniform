"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { schoolStages } from "@/data/categories";
import { homepageSections } from "@/config/homepage-sections";

export function ShopByStageSection() {
  const { shopByStage } = homepageSections;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold text-brand-navy dark:text-white md:text-4xl">
            {shopByStage.title}
          </h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            {shopByStage.subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {schoolStages.map((stage, index) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/shop?schoolStage=${stage.slug}`}
                className="group relative block overflow-hidden rounded-2xl bg-brand-grey dark:bg-gray-800"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={stage.image}
                    alt={stage.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{stage.name}</h3>
                  <p className="mt-1 text-sm text-gray-300">{stage.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-mint">
                    Shop Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
