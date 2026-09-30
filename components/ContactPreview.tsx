import Link from "next/link";
import { ArrowRight, Mail, MapPin, Navigation } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppButton";

export default function ContactPreview() {
  const items = [
    {
      icon: <MapPin className="size-6" aria-hidden="true" />,
      label: "Address",
      value: site.address,
      action: { href: site.mapsUrl, text: "Get Directions", external: true },
    },
    {
      icon: <WhatsAppIcon className="size-6" />,
      label: "WhatsApp",
      value: site.whatsappDisplay,
      action: { href: whatsappLink(), text: "WhatsApp Us", external: true },
    },
    {
      icon: <Mail className="size-6" aria-hidden="true" />,
      label: "Email",
      value: site.email,
      action: { href: `mailto:${site.email}`, text: "Email Us", external: false },
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item, i) => (
        <div
          key={item.label}
          data-reveal
          style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
          className="card flex flex-col p-6"
        >
          <span className="grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-600">{item.icon}</span>
          <h3 className="mt-5 text-sm font-semibold tracking-[0.14em] text-teal-700 uppercase">{item.label}</h3>
          <p className="mt-1.5 text-lg font-semibold break-words text-brand-950">{item.value}</p>
          <a
            href={item.action.href}
            {...(item.action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group mt-auto inline-flex min-h-11 items-center gap-2 pt-5 font-semibold text-brand-600 hover:text-brand-800"
          >
            {item.label === "Address" && <Navigation className="size-4" aria-hidden="true" />}
            {item.action.text}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>
      ))}
      <p className="text-sm text-muted md:col-span-3">
        For appointments, use the{" "}
        <Link href="/appointment" className="font-semibold text-brand-600 underline-offset-4 hover:underline">
          appointment request form
        </Link>
        .
      </p>
    </div>
  );
}
