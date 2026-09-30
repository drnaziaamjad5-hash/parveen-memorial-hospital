import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, HeartHandshake, Microscope, UsersRound } from "lucide-react";
import Hero from "@/components/Hero";
import QuickInfoBar from "@/components/QuickInfoBar";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import FacilityCard from "@/components/FacilityCard";
import DoctorCard from "@/components/DoctorCard";
import LeadershipCard from "@/components/LeadershipCard";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import ContactPreview from "@/components/ContactPreview";
import Icon from "@/components/Icon";
import { doctors, facilities, leadership, services } from "@/lib/site";

const featured = services.slice(0, 3);
const more = services.slice(3);

const reasons = [
  {
    icon: HeartHandshake,
    title: "Focused on women's healthcare",
    text: "Gynecology, obstetrics and women's healthcare are the hospital's primary focus.",
  },
  {
    icon: Microscope,
    title: "Diagnostics in one place",
    text: "Sonography, ultrasound, Color Doppler and laboratory services on site.",
  },
  {
    icon: Building2,
    title: "Complete hospital facilities",
    text: "OPD, emergency, pharmacy, private rooms, inpatient ward and operation theatre.",
  },
  {
    icon: UsersRound,
    title: "A dedicated medical team",
    text: "Including a pathologist and a medical specialist in sonography & ultrasonography.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <QuickInfoBar />

      {/* About */}
      <section aria-labelledby="about-title" className="container-page py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div data-reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lift">
              <Image
                src="/images/facilities/private-room.jpg"
                alt="A clean private hospital room with a patient bed and visitor seating"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -right-3 -bottom-6 max-w-[16rem] rounded-2xl bg-brand-600 p-5 text-white shadow-lift sm:-right-6">
              <p className="text-xs font-semibold tracking-[0.16em] text-brand-200 uppercase">Private Hospital</p>
              <p className="mt-2 leading-snug font-medium">
                Women&apos;s healthcare with diagnostic, inpatient and surgical support.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="About Us"
              title={
                <span id="about-title">
                  About Parveen Memorial <span className="font-serif font-normal italic text-brand-600">Hospital</span>
                </span>
              }
            />
            <div data-reveal className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                Parveen Memorial Hospital is a private hospital focused primarily on gynecological, obstetric and
                women&apos;s healthcare.
              </p>
              <p>
                Our care is supported by sonography and ultrasonography, Color Doppler, laboratory diagnostics,
                emergency, OPD, pharmacy, private rooms, an inpatient ward and an operation theatre.
              </p>
            </div>
            <Link href="/about" className="btn-outline mt-8" data-reveal>
              Learn More About Us
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section aria-labelledby="services-title" className="bg-canvas py-20 lg:py-28">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Our Services"
              title={<span id="services-title">Care centred on women and families</span>}
              intro="Gynecology, obstetrics and diagnostic services, supported by the hospital's facilities."
            />
            <Link href="/services" className="btn-outline shrink-0" data-reveal>
              All Services
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((s, i) => (
              <ServiceCard key={s.slug} item={s} index={i} />
            ))}
          </div>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {more.map((s, i) => (
              <li
                key={s.slug}
                data-reveal
                style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
              >
                <Link
                  href={`/services#${s.slug}`}
                  className="group card flex h-full items-center gap-4 p-5 transition-shadow hover:shadow-lift"
                >
                  <span
                    className={`grid size-12 shrink-0 place-items-center rounded-xl ${
                      s.icon === "siren" ? "bg-emergency-50 text-emergency" : "bg-teal-50 text-teal-700"
                    }`}
                  >
                    <Icon name={s.icon} className="size-6" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold text-brand-950">{s.title}</span>
                    <span className="block text-sm text-muted">{s.short}</span>
                  </span>
                  <ArrowRight
                    className="ml-auto size-4 shrink-0 text-brand-300 transition-transform group-hover:translate-x-1 group-hover:text-brand-600"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Facilities */}
      <section aria-labelledby="facilities-title" className="container-page py-20 lg:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Facilities"
            title={<span id="facilities-title">Essential hospital facilities under one roof</span>}
          />
          <Link href="/facilities" className="btn-outline shrink-0" data-reveal>
            Explore Facilities
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((f, i) => (
            <FacilityCard key={f.slug} item={f} index={i} />
          ))}
        </div>
      </section>

      {/* Why */}
      <section aria-labelledby="why-title" className="relative isolate overflow-hidden bg-brand-950 py-20 lg:py-28">
        <div aria-hidden="true" className="absolute -top-40 -left-40 -z-10 size-[32rem] rounded-full bg-brand-600/30 blur-3xl" />
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              tone="light"
              eyebrow="Why Choose Us"
              title={<span id="why-title">Why Parveen Memorial Hospital</span>}
              intro="Consult the medical team for appropriate evaluation and care."
            />
            <div data-reveal className="relative mt-10 hidden aspect-[16/10] overflow-hidden rounded-3xl lg:block">
              <Image
                src="/images/hospital/compassion.jpg"
                alt="Two people holding hands in a gesture of support and reassurance"
                fill
                sizes="40vw"
                className="object-cover"
              />
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <li
                key={r.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:bg-white/10"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-teal-500/15 text-teal-300 ring-1 ring-teal-300/25">
                  <r.icon className="size-6" aria-hidden="true" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{r.title}</h3>
                <p className="mt-2 leading-relaxed text-brand-200">{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Medical team */}
      <section aria-labelledby="team-title" className="container-page py-20 lg:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Medical Team"
            title={<span id="team-title">Meet Our Medical Team</span>}
          />
          <Link href="/doctors" className="btn-outline shrink-0" data-reveal>
            View All Doctors
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((d, i) => (
            <DoctorCard key={d.slug} doctor={d} index={i} />
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section aria-labelledby="leadership-title" className="bg-canvas py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Administration"
            title={<span id="leadership-title">Hospital Leadership</span>}
          />
          <div className="mx-auto mt-12 max-w-5xl">
            <LeadershipCard person={leadership} label="Hospital Leadership" />
          </div>
        </div>
      </section>

      <div className="space-y-6 py-14 lg:py-20">
        <EmergencyBanner id="home-emergency" />
        <CTASection />
      </div>

      {/* Contact preview */}
      <section aria-labelledby="contact-title" className="container-page pb-20 lg:pb-28">
        <SectionHeading eyebrow="Contact" title={<span id="contact-title">Get in touch</span>} />
        <div className="mt-10">
          <ContactPreview />
        </div>
      </section>
    </>
  );
}
