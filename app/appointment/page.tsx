import type { Metadata } from "next";
import { ClipboardList, MessageCircle, PhoneCall } from "lucide-react";
import PageHero from "@/components/PageHero";
import AppointmentForm from "@/components/AppointmentForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Request an appointment at Parveen Memorial Hospital, Lahore. Fill in your details and continue the request through WhatsApp.",
  alternates: { canonical: "/appointment" },
};

const steps = [
  { icon: ClipboardList, title: "Fill in the form", text: "Add your details, preferred doctor, date and reason for visit." },
  { icon: MessageCircle, title: "Continue on WhatsApp", text: "Your request opens in WhatsApp, ready to send to the hospital." },
  { icon: PhoneCall, title: "Arrange your visit", text: "Continue the conversation with the hospital on WhatsApp to arrange your visit." },
];

export default function AppointmentPage() {
  return (
    <>
      <PageHero
        crumb="Appointment"
        eyebrow="Appointments"
        title="Request an Appointment"
        intro="Your request is prepared for WhatsApp so you can send it directly to the hospital."
        image="/images/hero/hospital-hero.jpg"
        imageAlt="A doctor speaking with an expectant mother"
      />

      <section aria-label="Appointment request" className="container-page py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-14">
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <ol className="card divide-y divide-line">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-4 p-5">
                  <span className="relative grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <s.icon className="size-5" aria-hidden="true" />
                    <span className="absolute -top-1.5 -right-1.5 grid size-5 place-items-center rounded-full bg-teal-600 text-[0.7rem] font-bold text-white">
                      {i + 1}
                    </span>
                  </span>
                  <div>
                    <h2 className="font-semibold">{s.title}</h2>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="rounded-2xl bg-brand-950 p-6 text-white">
              <p className="text-sm text-brand-200">Prefer to message directly?</p>
              <p className="mt-1 text-2xl font-semibold">{site.whatsappDisplay}</p>
              <WhatsAppButton label="WhatsApp Us" className="mt-5 w-full" />
            </div>
          </aside>

          <div className="card p-6 sm:p-10">
            <h2 className="text-2xl font-semibold">Appointment details</h2>
            <p className="mt-2 text-muted">
              Fields marked <span className="text-emergency">*</span> are required.
            </p>
            <div className="mt-8">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
