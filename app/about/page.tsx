import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FacilityCard from "@/components/FacilityCard";
import LeadershipCard from "@/components/LeadershipCard";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { doctors, facilities, leadership, type IconName } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Parveen Memorial Hospital, a private hospital in Lahore focused on gynecology, obstetrics and women's healthcare, with diagnostic, emergency, inpatient and surgical facilities.",
  alternates: { canonical: "/about" },
};

const focus: { title: string; text: string; icon: IconName }[] = [
  { title: "Gynecology", text: "Gynecology-focused healthcare and consultation.", icon: "venus" },
  { title: "Obstetrics", text: "Healthcare services related to pregnancy and obstetric care.", icon: "baby" },
  { title: "Women's Healthcare", text: "The hospital's primary area of focus.", icon: "stethoscope" },
  { title: "Sonography / Ultrasonography", text: "Sonography, ultrasound and Color Doppler.", icon: "scan" },
  { title: "Diagnostic Services", text: "Laboratory and diagnostic facility.", icon: "flask" },
];

const owner = doctors.find((d) => d.slug === "nazia-amjad")!;

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="About Us"
        title="About Parveen Memorial Hospital"
        intro="A private hospital focused primarily on gynecological, obstetric and women's healthcare."
        image="/images/hospital/womens-care.jpg"
        imageAlt="An expectant mother forming a heart shape with her hands"
      />

      <section aria-labelledby="intro-title" className="container-page py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Who We Are" title={<span id="intro-title">A private hospital for women and families</span>} />
            <div data-reveal className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                Parveen Memorial Hospital is a private hospital located on Swami Nagar Road, Muhammdi Muhallah,
                Lahore. Its primary focus is gynecology, obstetrics and women&apos;s healthcare, including
                gynecological and obstetric emergency care.
              </p>
              <p>
                Patient care is supported by sonography and ultrasonography, Color Doppler, a laboratory and
                diagnostic facility, OPD, emergency, pharmacy, private rooms, an inpatient ward and an operation
                theatre.
              </p>
              <p className="text-base">Consult the medical team for appropriate evaluation and care.</p>
            </div>
          </div>
          <div data-reveal className="grid grid-cols-2 gap-4">
            <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-3xl shadow-card">
              <Image
                src="/images/services/sonography.jpg"
                alt="A clinician at an ultrasound machine"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-card">
              <Image
                src="/images/services/obstetrics.jpg"
                alt="A mother holding her newborn in a hospital bed"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="focus-title" className="bg-canvas py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Our Healthcare Focus"
            title={<span id="focus-title">Our Healthcare Focus</span>}
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {focus.map((f, i) => (
              <li
                key={f.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
                className="card p-6 text-center"
              >
                <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                  <Icon name={f.icon} className="size-7" />
                </span>
                <h3 className="mt-5 font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="fac-title" className="container-page py-20 lg:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Facilities" title={<span id="fac-title">Hospital Facilities</span>} />
          <Link href="/facilities" className="btn-outline shrink-0" data-reveal>
            View Facilities
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((f, i) => (
            <FacilityCard key={f.slug} item={f} index={i} variant="compact" />
          ))}
        </div>
      </section>

      <section aria-labelledby="people-title" className="bg-canvas py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Our People"
            title={<span id="people-title">Hospital Leadership &amp; Ownership</span>}
          />
          <div className="mx-auto mt-14 max-w-5xl space-y-16 lg:space-y-24">
            <LeadershipCard person={leadership} label="Hospital Leadership" />
            <LeadershipCard person={owner} label="Hospital Owner" reverse />
          </div>
        </div>
      </section>

      <div className="py-14 lg:py-20">
        <CTASection />
      </div>
    </>
  );
}
