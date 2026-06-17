"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { homepageSections } from "@/config/homepage-sections";

export function TestimonialsSection() {
  const { testimonials: section } = homepageSections;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold text-brand-navy dark:text-white md:text-4xl">
            {section.title}
          </h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            {section.subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold text-brand-navy dark:text-white">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
