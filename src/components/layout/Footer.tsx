/**
 * UPDATE FOOTER INFORMATION HERE (via config/site-settings.ts)
 * This component reads contact details from site-settings automatically.
 */
import Link from "next/link";
import { Phone, MapPin, Mail, Facebook, Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { footerNavigation } from "@/config/navigation";
import { siteSettings } from "@/config/site-settings";

export function Footer() {
  const { contact, social, brandFullName, tagline } = siteSettings;

  return (
    <footer className="border-t border-gray-100 bg-brand-navy text-white dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo className="mb-4 [&_span]:text-white [&_span]:dark:text-white" />
            <p className="mb-2 text-sm font-medium tracking-widest text-brand-mint">
              {tagline}
            </p>
            <p className="mb-6 max-w-sm text-sm text-gray-300">
              {siteSettings.description}
            </p>
            <div className="flex gap-3">
              <a
                href={social.facebook}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-mint hover:text-brand-navy"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={social.instagram}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-mint hover:text-brand-navy"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">
              Shop
            </h4>
            <ul className="space-y-2">
              {footerNavigation.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-brand-mint"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-2">
              {footerNavigation.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-brand-mint"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - pulled from site-settings.ts */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-start gap-2 text-sm text-gray-300 hover:text-brand-mint"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>
                    {contact.phoneFormatted}
                    <br />
                    {contact.phoneAltFormatted}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-brand-mint"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                {contact.address}, {contact.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} {brandFullName}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {footerNavigation.company.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-gray-400 hover:text-brand-mint"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
