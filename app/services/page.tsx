import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import WhatsAppButton from "@/components/WhatsAppButton";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Services at Parveen Memorial Hospital, Lahore: obstetrics, gynecology, sonography & ultrasonography, ultrasound / Color Doppler, laboratory diagnostics, emergency and OPD.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="Our Services"
        title="Gynecology, obstetric & diagnostic services"
        intro="Consult the medical team for appropriate evaluation and care."
        image="/images/services/sonography.jpg"
        imageAlt="A clinician seated at an ultrasound machine"
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/appointment" className="btn-primary">
            <CalendarCheck className="size-4" aria-hidden="true" />
            Book an Appointment
          </Link>
          <WhatsAppButton variant="ghost-light" label="WhatsApp Us" />
        </div>
      </PageHero>

      <nav aria-label="Services on this page" className="sticky top-[4.5rem] z-20 border-b border-line bg-white/90 backdrop-blur lg:top-20">
        <ul className="container-page flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
          {services.map((s) => (
            <li key={s.slug} className="shrink-0">
              <a
                href={`#${s.slug}`}
                className="inline-flex min-h-10 items-center rounded-full border border-line px-4 text-sm font-medium text-muted transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="container-page space-y-20 py-20 lg:space-y-28 lg:py-28">
        {services.map((s, i) => (
          <section
            key={s.slug}
            id={s.slug}
            aria-labelledby={`${s.slug}-title`}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <div data-reveal className={`relative ${i % 2 ? "lg:order-2" : ""}`}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lift">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <span
                aria-hidden="true"
                className="absolute -bottom-5 left-6 font-serif text-7xl leading-none text-brand-100 italic select-none"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div data-reveal>
              <span
                className={`grid size-14 place-items-center rounded-2xl ${
                  s.icon === "siren" ? "bg-emergency-50 text-emergency" : "bg-teal-50 text-teal-700"
                }`}
              >
                <Icon name={s.icon} className="size-7" />
              </span>
              <h2 id={`${s.slug}-title`} className="mt-6 text-3xl font-semibold sm:text-4xl">
                {s.title}
              </h2>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted">{s.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/appointment" className="btn-primary">
                  Book an Appointment
                </Link>
                <WhatsAppButton
                  variant="outline"
                  label="Ask on WhatsApp"
                  message={`Hello Parveen Memorial Hospital, I would like information about ${s.title}.`}
                />
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="space-y-6 pb-14 lg:pb-20">
        <EmergencyBanner id="services-emergency" />
        <CTASection />
      </div>
    </>
  );
}
