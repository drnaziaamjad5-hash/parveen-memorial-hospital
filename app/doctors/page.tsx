import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import DoctorCard from "@/components/DoctorCard";
import LeadershipCard from "@/components/LeadershipCard";
import CTASection from "@/components/CTASection";
import { doctors, leadership } from "@/lib/site";

export const metadata: Metadata = {
  title: "Doctors",
  description:
    "Meet the medical team at Parveen Memorial Hospital, Lahore: Asst. Prof. Dr. Ali Iftikhar, Dr. M. Asim Shafiq and Dr. Nazia Amjad.",
  alternates: { canonical: "/doctors" },
};

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        crumb="Doctors"
        eyebrow="Our Doctors"
        title="Meet Our Medical Team"
        intro="Consult the medical team for appropriate evaluation and care."
        image="/images/facilities/opd.jpg"
        imageAlt="A hospital reception and outpatient area"
      />

      <section aria-label="Medical team" className="container-page py-20 lg:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((d, i) => (
            <DoctorCard key={d.slug} doctor={d} index={i} />
          ))}
        </div>
      </section>

      <section aria-labelledby="profiles-title" className="bg-canvas py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading align="center" eyebrow="Profiles" title={<span id="profiles-title">Doctor Profiles</span>} />
          <div className="mx-auto mt-14 max-w-5xl space-y-16 lg:space-y-24">
            {doctors.map((d, i) => (
              <div key={d.slug}>
                <LeadershipCard person={d} label="Medical Team" reverse={i % 2 === 1} />
                <div className={`mt-6 flex ${i % 2 ? "md:justify-start" : "md:justify-end"} justify-center`}>
                  <Link href={`/appointment?doctor=${d.slug}`} className="btn-primary">
                    <CalendarCheck className="size-4" aria-hidden="true" />
                    Book with {d.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="leadership-title" className="container-page py-20 lg:py-28">
        <SectionHeading
          align="center"
          eyebrow="Administration"
          title={<span id="leadership-title">Hospital Leadership</span>}
        />
        <div className="mx-auto mt-14 max-w-5xl">
          <LeadershipCard person={leadership} label="Hospital Leadership" />
        </div>
      </section>

      <div className="pb-14 lg:pb-20">
        <CTASection />
      </div>
    </>
  );
}
