import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { navLinks, site, whatsappLink } from "@/lib/site";
import Logo from "./Logo";
import { WhatsAppIcon } from "./WhatsAppButton";

const footerServices = [
  { label: "Gynecology", href: "/services#gynecology" },
  { label: "Obstetrics", href: "/services#obstetrics" },
  { label: "Sonography / Ultrasonography", href: "/services#sonography" },
  { label: "Ultrasound / Color Doppler", href: "/facilities#ultrasound" },
  { label: "Laboratory / Diagnostics", href: "/facilities#laboratory" },
  { label: "Pharmacy", href: "/facilities#pharmacy" },
  { label: "Emergency", href: "/facilities#emergency" },
  { label: "OPD", href: "/facilities#opd" },
  { label: "Private Rooms", href: "/facilities#private-rooms" },
  { label: "Inpatient Ward", href: "/facilities#inpatient-ward" },
  { label: "Operation Theatre", href: "/facilities#operation-theatre" },
];

const quick = [...navLinks, { href: "/appointment", label: "Appointment" }];

function ColTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-sm font-semibold tracking-[0.14em] text-white uppercase">{children}</h2>;
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-950 text-brand-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-32 size-[28rem] rounded-full bg-teal-500/10 blur-3xl"
      />
      <div className="container-page relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Logo tone="light" />
          <p className="mt-5 max-w-sm leading-relaxed text-brand-200">
            Private hospital focused primarily on gynecology, obstetrics, sonography and related healthcare
            services.
          </p>
          <Link href="/appointment" className="btn-primary mt-7 bg-teal-600 hover:bg-teal-700">
            Book an Appointment
          </Link>
        </div>

        <nav aria-label="Quick links" className="lg:col-span-2">
          <ColTitle>Quick Links</ColTitle>
          <ul className="mt-5 space-y-3">
            {quick.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services" className="lg:col-span-3">
          <ColTitle>Services</ColTitle>
          <ul className="mt-5 grid gap-3">
            {footerServices.map((s) => (
              <li key={s.label}>
                <Link href={s.href} className="transition-colors hover:text-white">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <ColTitle>Contact</ColTitle>
          <address className="mt-5 space-y-4 not-italic">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-teal-300" aria-hidden="true" />
              <span>
                <span className="block text-xs font-semibold tracking-wider text-brand-300 uppercase">Address</span>
                {site.address}
              </span>
            </p>
            <a href={`mailto:${site.email}`} className="flex gap-3 hover:text-white">
              <Mail className="mt-0.5 size-5 shrink-0 text-teal-300" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block text-xs font-semibold tracking-wider text-brand-300 uppercase">Email</span>
                <span className="break-all">{site.email}</span>
              </span>
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 hover:text-white"
            >
              <WhatsAppIcon className="mt-0.5 size-5 shrink-0 text-teal-300" />
              <span>
                <span className="block text-xs font-semibold tracking-wider text-brand-300 uppercase">
                  WhatsApp
                </span>
                {site.whatsappDisplay}
              </span>
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-sm text-brand-300 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Parveen Memorial Hospital. All Rights Reserved.</p>
          <p>This website is for information only and does not provide medical advice.</p>
        </div>
      </div>
    </footer>
  );
}
