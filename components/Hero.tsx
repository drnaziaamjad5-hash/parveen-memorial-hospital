import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, MapPin, ScanLine, Siren } from "lucide-react";
import { site } from "@/lib/site";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-canvas">
      {/* Soft background wash */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 size-[36rem] rounded-full bg-brand-100/70 blur-3xl" />
        <div className="absolute top-1/3 -right-24 size-[28rem] rounded-full bg-teal-100/60 blur-3xl" />
        <svg className="absolute inset-0 size-full opacity-[0.35]" aria-hidden="true">
          <defs>
            <pattern id="hero-dots" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.2" fill="#b3cdea" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>
      </div>

      <div className="container-page grid items-center gap-12 pt-10 pb-24 sm:pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-20 lg:pb-32">
        <div>
          <p className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-teal-100 bg-white/80 px-3.5 py-1.5 text-sm font-medium text-teal-700 shadow-card">
            <span className="size-2 rounded-full bg-teal-500" aria-hidden="true" />
            Private Hospital · Gynecology & Obstetrics · Lahore
          </p>

          <h1
            id="hero-title"
            className="mt-6 animate-fade-up text-[2.6rem] leading-[1.04] font-semibold [animation-delay:80ms] sm:text-6xl lg:text-[4.1rem]"
          >
            Compassionate Care for{" "}
            <span className="font-serif font-normal text-brand-600 italic">Women &amp; Families</span>
          </h1>

          <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-muted [animation-delay:160ms] sm:text-xl">
            Comprehensive gynecology, obstetric and diagnostic care with essential hospital facilities under
            one roof.
          </p>

          <div className="mt-9 flex animate-fade-up flex-wrap gap-3 [animation-delay:240ms]">
            <Link href="/appointment" className="btn-primary">
              <CalendarCheck className="size-4" aria-hidden="true" />
              Book an Appointment
            </Link>
            <WhatsAppButton label="WhatsApp Us" />
            <Link
              href="/contact#emergency"
              className="btn border border-emergency/25 bg-white text-emergency hover:bg-emergency hover:text-white"
            >
              <Siren className="size-4" aria-hidden="true" />
              Emergency Care
            </Link>
          </div>

          <p className="mt-8 flex animate-fade-up items-start gap-2 text-[0.95rem] text-muted [animation-delay:320ms]">
            <MapPin className="mt-0.5 size-4 shrink-0 text-teal-600" aria-hidden="true" />
            {site.address}
          </p>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-xl animate-fade-up [animation-delay:200ms] lg:max-w-none">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-lift sm:aspect-[4/3.4] lg:rounded-[2.5rem]">
            <Image
              src="/images/hero/hospital-hero.jpg"
              alt="A doctor in a white coat speaking with an expectant mother in a bright consultation room"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[35%_center]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-950/25 to-transparent" />
          </div>

          <div className="absolute -bottom-8 left-4 hidden w-60 overflow-hidden rounded-2xl border-4 border-white shadow-lift sm:block lg:-left-10">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/hospital/womens-care.jpg"
                alt="An expectant mother forming a heart shape with her hands over her bump"
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute -top-5 right-3 flex items-center gap-3 rounded-2xl border border-line bg-white/95 px-4 py-3 shadow-lift backdrop-blur sm:right-6 lg:-right-6">
            <span className="grid size-10 place-items-center rounded-xl bg-teal-50 text-teal-700">
              <ScanLine className="size-5" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-brand-950">Sonography &amp; Ultrasound</span>
              <span className="text-xs text-muted">Color Doppler available</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
