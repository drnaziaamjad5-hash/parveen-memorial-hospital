import Link from "next/link";
import { quickLinks } from "@/lib/site";
import Icon from "./Icon";

export default function QuickInfoBar() {
  return (
    <section aria-label="Quick access to services and facilities" className="relative z-10 -mt-14 lg:-mt-16">
      <div className="container-page">
        {/* gap-px over a line-coloured background draws the dividers */}
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-lift sm:grid-cols-4 lg:grid-cols-7">
          {quickLinks.map((q) => (
            <li key={q.title} className="bg-white last:col-span-2 lg:last:col-span-1">
              <Link
                href={q.href}
                className="group flex h-full flex-col items-center gap-3 px-3 py-6 text-center transition-colors hover:bg-brand-50"
              >
                <span
                  className={`grid size-12 place-items-center rounded-xl transition-colors ${
                    q.icon === "siren"
                      ? "bg-emergency-50 text-emergency"
                      : "bg-brand-50 text-brand-600 group-hover:bg-white"
                  }`}
                >
                  <Icon name={q.icon} className="size-6" />
                </span>
                <span className="text-sm leading-snug font-semibold text-brand-950">{q.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
