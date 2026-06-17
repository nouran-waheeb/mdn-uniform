"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, Shield, Clock, Heart, Tag, Award } from "lucide-react";
import { homepageSections } from "@/config/homepage-sections";

const iconMap = {
  leaf: Leaf,
  shield: Shield,
  clock: Clock,
  heart: Heart,
  tag: Tag,
  award: Award,
};

export function QualitySection() {
  const { quality } = homepageSections;

  return (
    <section className="bg-brand-grey py-16 dark:bg-gray-800/50 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-brand-navy dark:text-white md:text-4xl">
            {quality.title.split("|")[0]}
            <span className="text-brand-orange"> | </span>
            {quality.title.split("|")[1]}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {quality.features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm dark:bg-gray-900"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-mint/20">
                  <Icon className="h-6 w-6 text-brand-mint" />
                </div>
                <p className="text-sm font-medium text-brand-navy dark:text-gray-200">
                  {feature.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
