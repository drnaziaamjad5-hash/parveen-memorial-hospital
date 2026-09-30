import Image from "next/image";
import type { Person } from "@/lib/site";

type Props = {
  person: Person;
  label: string;
  /** Put the portrait on the right on large screens. */
  reverse?: boolean;
  note?: string;
};

/**
 * Editorial profile block: overlapping portrait and large display name.
 * Layout adapted from the 21st.dev "Team Member Card" (emerald-ui, MIT).
 */
export default function LeadershipCard({ person, label, reverse = false, note }: Props) {
  // Honorifics on the first line, the personal name emphasised below.
  const words = person.name.split(" ");
  const first = words.slice(0, -2).join(" ");
  const last = words.slice(-2).join(" ");

  return (
    <article
      id={person.slug}
      data-reveal
      className={`relative flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-0 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="relative w-full max-w-[20rem] shrink-0 md:w-[42%] md:max-w-none">
        <div
          aria-hidden="true"
          className={`absolute -inset-3 rounded-[1.75rem] border border-brand-200 ${
            reverse ? "md:translate-x-4" : "md:-translate-x-4"
          } translate-y-4`}
        />
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-brand-100 shadow-lift">
          <Image
            src={person.image}
            alt={person.imageAlt}
            fill
            sizes="(min-width: 768px) 40vw, 20rem"
            className="object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.03]"
          />
        </div>
      </div>

      <div
        className={`relative z-10 w-full rounded-3xl border border-line bg-white/95 p-7 shadow-card backdrop-blur sm:p-10 md:w-[64%] ${
          reverse ? "md:-mr-[6%]" : "md:-ml-[6%]"
        }`}
      >
        <p className="text-xs font-semibold tracking-[0.3em] text-teal-700 uppercase">{label}</p>
        <h3 className="mt-5 text-4xl leading-[1.05] font-light tracking-tight sm:text-5xl">
          {first && (
            <>
              {first}
              <br />
            </>
          )}
          <span className="font-semibold">{last}</span>
        </h3>
        <div className="mt-6 h-px w-16 bg-teal-500" aria-hidden="true" />
        <ul className="mt-6 space-y-2">
          {person.credentials && <li className="text-lg font-semibold text-teal-700">{person.credentials}</li>}
          {person.roles.map((role) => (
            <li key={role} className="text-lg font-medium text-brand-900">
              {role}
            </li>
          ))}
        </ul>
        {note && <p className="mt-5 max-w-md leading-relaxed text-muted">{note}</p>}
      </div>
    </article>
  );
}
