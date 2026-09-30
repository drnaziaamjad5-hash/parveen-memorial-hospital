import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarCheck } from "lucide-react";
import type { Person } from "@/lib/site";

type Props = { doctor: Person; index?: number; showProfileLink?: boolean };

export default function DoctorCard({ doctor, index = 0, showProfileLink = true }: Props) {
  return (
    <article
      data-reveal
      style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}
      className="group card flex flex-col overflow-hidden transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-brand-100">
        <Image
          src={doctor.image}
          alt={doctor.imageAlt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-950/40 to-transparent"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">{doctor.name}</h3>
        {doctor.credentials && <p className="mt-1.5 font-semibold text-teal-700">{doctor.credentials}</p>}
        <ul className="mt-3 space-y-1.5">
          {doctor.roles.map((role) => (
            <li key={role} className="flex gap-2 text-[0.95rem] leading-snug text-muted">
              <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-300" />
              {role}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          <Link
            href={`/appointment?doctor=${doctor.slug}`}
            className="btn-primary min-h-11 flex-1 px-4 text-sm"
            aria-label={`Book an appointment with ${doctor.name}`}
          >
            <CalendarCheck className="size-4" aria-hidden="true" />
            Book Appointment
          </Link>
          {showProfileLink && (
            <Link
              href={`/doctors#${doctor.slug}`}
              className="btn-outline min-h-11 px-4 text-sm"
              aria-label={`View profile of ${doctor.name}`}
            >
              View Profile
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
