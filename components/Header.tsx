"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CalendarCheck, Mail, MapPin, Siren } from "lucide-react";
import { navLinks, site, whatsappLink } from "@/lib/site";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import WhatsAppButton, { WhatsAppIcon } from "./WhatsAppButton";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      {/* Utility bar */}
      <div className="hidden bg-brand-950 text-[0.85rem] text-brand-100 lg:block">
        <div className="container-page flex h-10 items-center justify-between gap-6">
          <p className="flex items-center gap-2">
            <MapPin className="size-4 text-teal-300" aria-hidden="true" />
            {site.address}
          </p>
          <div className="flex items-center gap-6">
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white">
              <Mail className="size-4 text-teal-300" aria-hidden="true" />
              {site.email}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white"
            >
              <WhatsAppIcon className="size-4 text-teal-300" />
              WhatsApp {site.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 border-b bg-white/90 backdrop-blur-md transition-[box-shadow,border-color] duration-300 supports-[backdrop-filter]:bg-white/80 ${
          scrolled ? "border-line shadow-[0_6px_24px_-16px_rgb(11_31_51/0.35)]" : "border-transparent"
        }`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-lift"
        >
          Skip to main content
        </a>
        <div className="container-page flex h-[4.5rem] items-center justify-between gap-4 lg:h-20">
          <Logo />

          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-0.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`relative inline-block rounded-full px-3 py-2 text-[0.95rem] font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-brand-700"
                        : "text-muted hover:bg-brand-50 hover:text-brand-800"
                    }`}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-3 bottom-0.5 h-0.5 rounded-full bg-teal-500"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="/contact#emergency"
              className="btn min-h-11 border border-emergency/25 bg-emergency-50 px-4 text-emergency hover:bg-emergency hover:text-white"
            >
              <Siren className="size-4" aria-hidden="true" />
              Emergency
            </Link>
            <WhatsAppButton variant="outline" className="min-h-11 px-4 xl:max-2xl:w-11 xl:max-2xl:px-0 xl:max-2xl:[&>span]:sr-only" />
            <Link href="/appointment" className="btn-primary min-h-11 px-5">
              <CalendarCheck className="size-4" aria-hidden="true" />
              Book an Appointment
            </Link>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <Link
              href="/contact#emergency"
              aria-label="Emergency contact"
              className="grid size-11 place-items-center rounded-full bg-emergency-50 text-emergency lg:hidden"
            >
              <Siren className="size-5" aria-hidden="true" />
            </Link>
            <MobileMenu isActive={isActive} />
          </div>
        </div>
      </header>
    </>
  );
}
