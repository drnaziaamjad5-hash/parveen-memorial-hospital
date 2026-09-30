import type { Metadata } from "next";
import { Mail, MapPin, Navigation } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import EmergencyBanner from "@/components/EmergencyBanner";
import WhatsAppButton, { WhatsAppIcon } from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Parveen Memorial Hospital, Swami Nagar Road, Muhammdi Muhallah, Lahore. WhatsApp 03238824540 or email info@parveenmemorialhospital.com.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Contact"
        title="Contact Parveen Memorial Hospital"
        intro="Reach the hospital through WhatsApp or email, or visit us in Lahore."
        image="/images/facilities/opd.jpg"
        imageAlt="A hospital reception and outpatient area"
      />

      <section aria-label="Contact details and form" className="container-page py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Get in Touch" title="We're here to help" />
            <address className="mt-8 space-y-4 not-italic" data-reveal>
              <div className="card flex gap-4 p-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <MapPin className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold tracking-wider text-teal-700 uppercase">Address</p>
                  <p className="mt-1 text-lg font-semibold text-brand-950">{site.address}</p>
                </div>
              </div>
              <div className="card flex gap-4 p-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Mail className="size-6" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold tracking-wider text-teal-700 uppercase">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 block text-lg font-semibold break-all text-brand-950 hover:text-brand-600"
                  >
                    {site.email}
                  </a>
                </div>
              </div>
              <div className="card flex gap-4 p-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-whatsapp/10 text-whatsapp">
                  <WhatsAppIcon className="size-6" />
                </span>
                <div>
                  <p className="text-sm font-semibold tracking-wider text-teal-700 uppercase">WhatsApp</p>
                  <p className="mt-1 text-lg font-semibold text-brand-950">{site.whatsappDisplay}</p>
                </div>
              </div>
            </address>

            <div className="mt-6 flex flex-wrap gap-3" data-reveal>
              <WhatsAppButton label="WhatsApp Us" />
              <a href={`mailto:${site.email}`} className="btn-outline">
                <Mail className="size-4" aria-hidden="true" />
                Email Us
              </a>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <Navigation className="size-4" aria-hidden="true" />
                Get Directions
              </a>
            </div>
          </div>

          <div data-reveal className="card p-6 sm:p-10">
            <h2 className="text-2xl font-semibold">Send us a message</h2>
            <p className="mt-2 text-muted">
              Your message is prepared in WhatsApp or your email app, where you can review and send it.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <div className="pb-14 lg:pb-20">
        <EmergencyBanner />
      </div>
    </>
  );
}
