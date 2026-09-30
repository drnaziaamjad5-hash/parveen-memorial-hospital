import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { facilities } from "@/lib/site";

export const metadata: Metadata = {
  title: "Facilities",
  description:
    "Facilities at Parveen Memorial Hospital, Lahore: emergency, OPD, pharmacy, ultrasound / Color Doppler, laboratory, private rooms, inpatient ward and operation theatre.",
  alternates: { canonical: "/facilities" },
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        crumb="Facilities"
        eyebrow="Facilities"
        title="Essential hospital facilities under one roof"
        intro="From diagnostics to inpatient care and surgery, the hospital's facilities support its focus on women's healthcare."
        image="/images/facilities/operation-theatre.jpg"
        imageAlt="An operation theatre with surgical table and lights"
      />

      <section aria-label="All facilities" className="container-page py-20 lg:py-28">
        <div className="grid gap-6 md:grid-cols-2">
          {facilities.map((f, i) => (
            <article
              key={f.slug}
              id={f.slug}
              data-reveal
              style={{ "--reveal-delay": `${(i % 2) * 90}ms` } as React.CSSProperties}
              className="group card overflow-hidden"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-brand-50">
                <Image
                  src={f.image}
                  alt={f.imageAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-start gap-5 p-6 sm:p-7">
                <span
                  className={`grid size-12 shrink-0 place-items-center rounded-xl ${
                    f.icon === "siren" ? "bg-emergency-50 text-emergency" : "bg-brand-50 text-brand-600"
                  }`}
                >
                  <Icon name={f.icon} className="size-6" />
                </span>
                <div>
                  <h2 className="text-2xl font-semibold">{f.title}</h2>
                  <p className="mt-2 text-lg leading-relaxed text-muted">{f.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="space-y-6 pb-14 lg:pb-20">
        <EmergencyBanner id="facilities-emergency" />
        <CTASection />
      </div>
    </>
  );
}
