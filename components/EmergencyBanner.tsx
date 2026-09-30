import Image from "next/image";
import Link from "next/link";
import { PhoneCall, Siren } from "lucide-react";
import { site } from "@/lib/site";
import WhatsAppButton from "./WhatsAppButton";

export default function EmergencyBanner({ id = "emergency" }: { id?: string }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="container-page py-6">
      <div
        data-reveal
        className="relative isolate overflow-hidden rounded-3xl bg-brand-950 px-6 py-12 sm:px-10 lg:px-14 lg:py-16"
      >
        <Image
          src="/images/facilities/emergency.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover opacity-45"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-950 via-brand-950/90 to-emergency/60"
        />
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-emergency px-3.5 py-1.5 text-xs font-bold tracking-[0.16em] text-white uppercase">
              <Siren className="size-4" aria-hidden="true" />
              Emergency
            </p>
            <h2 id={`${id}-title`} className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
              Need Medical Assistance?
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-brand-100">
              Parveen Memorial Hospital provides emergency services focused on its primary healthcare needs.
              Contact the hospital directly for assistance.
            </p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md">
            <p className="text-sm font-medium text-brand-100">WhatsApp</p>
            <p className="mt-1 text-3xl font-semibold tracking-tight text-white">{site.whatsappDisplay}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <Link href="/contact" className="btn bg-white text-brand-900 hover:bg-brand-50">
                <PhoneCall className="size-4" aria-hidden="true" />
                Contact Hospital
              </Link>
              <WhatsAppButton message="Hello Parveen Memorial Hospital, I need medical assistance." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
