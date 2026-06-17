"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { siteSettings } from "@/config/site-settings";

/** Contact page - details from config/site-settings.ts */
export default function ContactPage() {
  const { contact, social } = siteSettings;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
        <div className="mb-10 text-center">
          <h1 className="font-display text-3xl font-bold text-brand-navy dark:text-white md:text-4xl">
            Contact Us
          </h1>
          <p className="mt-2 text-gray-500">
            We&apos;d love to hear from you. Reach out anytime.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <Phone className="mt-1 h-5 w-5 text-brand-mint" />
              <div>
                <h3 className="font-bold">Phone</h3>
                <a href={`tel:${contact.phone}`} className="text-sm text-gray-600 hover:text-brand-mint">
                  {contact.phoneFormatted}
                </a>
                <br />
                <a href={`tel:${contact.phoneAlt}`} className="text-sm text-gray-600 hover:text-brand-mint">
                  {contact.phoneAltFormatted}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <Mail className="mt-1 h-5 w-5 text-brand-mint" />
              <div>
                <h3 className="font-bold">Email</h3>
                <a href={`mailto:${contact.email}`} className="text-sm text-gray-600 hover:text-brand-mint">
                  {contact.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <MapPin className="mt-1 h-5 w-5 text-brand-mint" />
              <div>
                <h3 className="font-bold">Location</h3>
                <p className="text-sm text-gray-600">
                  {contact.address}, {contact.city}, {contact.country}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <Clock className="mt-1 h-5 w-5 text-brand-mint" />
              <div>
                <h3 className="font-bold">Working Hours</h3>
                <p className="text-sm text-gray-600">{contact.workingHours}</p>
              </div>
            </div>
            <a
              href={social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="mb-4 text-xl font-bold">Send a Message</h2>
            {submitted ? (
              <p className="text-green-600 font-semibold">
                Thank you! We&apos;ll get back to you soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input label="Your Name" required />
                <Input label="Email" type="email" required />
                <Input label="Phone" type="tel" />
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:border-brand-mint focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <Button type="submit">
                  <Send className="h-4 w-4" /> Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
