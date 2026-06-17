"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { siteSettings } from "@/config/site-settings";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { newsletter } = siteSettings;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="bg-brand-navy py-16 md:py-20">
      <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Mail className="mx-auto mb-4 h-10 w-10 text-brand-mint" />
          <h2 className="font-display text-3xl font-bold text-white">
            {newsletter.title}
          </h2>
          <p className="mt-2 text-gray-300">{newsletter.description}</p>

          {submitted ? (
            <p className="mt-6 text-brand-mint font-semibold">
              Thank you for subscribing!
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button variant="secondary" type="submit">
                {newsletter.buttonText}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
