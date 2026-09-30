"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CalendarCheck, ChevronRight, Mail, MapPin, Menu, Siren, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import Logo from "./Logo";
import WhatsAppButton from "./WhatsAppButton";

const links = [...navLinks, { href: "/appointment", label: "Appointment" }];

export default function MobileMenu({ isActive }: { isActive: (href: string) => boolean }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // The header uses backdrop-filter, which would trap a fixed drawer inside it,
  // so the drawer is portalled to <body> once mounted on the client.
  useEffect(() => setMounted(true), []);

  // Close on navigation
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a,button")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab" && panelRef.current) {
        const items = panelRef.current.querySelectorAll<HTMLElement>("a,button");
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Open menu"
        className="grid size-11 place-items-center rounded-full border border-line text-brand-900 transition-colors hover:bg-brand-50"
      >
        <Menu className="size-5" aria-hidden="true" />
      </button>

      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 ${
              open ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={!open}
          >
            <div className="absolute inset-0 bg-brand-950/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <div
              id="mobile-menu"
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              inert={!open}
              className={`absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-white shadow-lift transition-transform duration-300 ease-out ${
                open ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex h-[4.5rem] items-center justify-between border-b border-line px-4">
                <Logo />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid size-11 place-items-center rounded-full border border-line hover:bg-brand-50"
                >
                  <X className="size-5" aria-hidden="true" />
                </button>
              </div>

              <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 py-4">
                <ul className="space-y-1">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        aria-current={isActive(link.href) ? "page" : undefined}
                        className={`flex min-h-12 items-center justify-between rounded-xl px-4 text-[1.05rem] font-medium ${
                          isActive(link.href) ? "bg-brand-50 text-brand-700" : "text-brand-950 hover:bg-canvas"
                        }`}
                      >
                        {link.label}
                        <ChevronRight className="size-4 text-brand-300" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 space-y-2 border-t border-line pt-6 text-sm text-muted">
                  <p className="flex gap-2">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-teal-600" aria-hidden="true" />
                    {site.address}
                  </p>
                  <a href={`mailto:${site.email}`} className="flex gap-2 break-all hover:text-brand-700">
                    <Mail className="mt-0.5 size-4 shrink-0 text-teal-600" aria-hidden="true" />
                    {site.email}
                  </a>
                </div>
              </nav>

              <div className="grid gap-2 border-t border-line p-4">
                <Link href="/appointment" onClick={() => setOpen(false)} className="btn-primary w-full">
                  <CalendarCheck className="size-4" aria-hidden="true" />
                  Book an Appointment
                </Link>
                <div className="grid grid-cols-2 gap-2">
                  <Link href="/contact#emergency" onClick={() => setOpen(false)} className="btn-emergency px-3">
                    <Siren className="size-4" aria-hidden="true" />
                    Emergency
                  </Link>
                  <WhatsAppButton className="px-3" />
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
