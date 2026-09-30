import Image from "next/image";
import Link from "next/link";
import { CalendarCheck } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

type Props = {
  title?: string;
  text?: string;
};

export default function CTASection({
  title = "Request an Appointment",
  text = "Share your details and preferred doctor, and continue the request with the hospital through WhatsApp.",
}: Props) {
  return (
    <section aria-labelledby="cta-title" className="container-page py-6">
      <div
        data-reveal
        className="relative isolate grid overflow-hidden rounded-3xl bg-teal-50 lg:grid-cols-2"
      >
        <div className="px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <p className="eyebrow">
            <span aria-hidden="true" className="h-px w-6 bg-teal-600" />
            Appointments
          </p>
          <h2 id="cta-title" className="mt-3 text-3xl font-semibold sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">{text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/appointment" className="btn-primary">
              <CalendarCheck className="size-4" aria-hidden="true" />
              Book an Appointment
            </Link>
            <WhatsAppButton label="WhatsApp Us" variant="outline" />
          </div>
        </div>
        <div className="relative min-h-64 lg:min-h-full">
          <Image
            src="/images/hospital/newborn.jpg"
            alt="A newborn baby sleeping peacefully wrapped in a soft blanket"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-teal-50 via-transparent to-transparent lg:bg-gradient-to-r"
          />
        </div>
      </div>
    </section>
  );
}
