import Image from "next/image";
import type { Item } from "@/lib/site";
import Icon from "./Icon";

type Props = { item: Item; index?: number; variant?: "overlay" | "compact" };

/**
 * Facility tile. `overlay` places the caption on the photograph (used in grids);
 * `compact` is an icon-only card for dense lists.
 */
export default function FacilityCard({ item, index = 0, variant = "overlay" }: Props) {
  const delay = { "--reveal-delay": `${(index % 4) * 70}ms` } as React.CSSProperties;

  if (variant === "compact") {
    return (
      <div data-reveal style={delay} className="card flex items-start gap-4 p-5">
        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-teal-50 text-teal-700">
          <Icon name={item.icon} className="size-5" />
        </span>
        <div>
          <h3 className="font-semibold">{item.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
        </div>
      </div>
    );
  }

  return (
    <article
      id={item.slug}
      data-reveal
      style={delay}
      className="group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl bg-brand-900 sm:aspect-[3/4]"
    >
      <Image
        src={item.image}
        alt={item.imageAlt}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="-z-10 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-950/90 via-brand-950/35 to-brand-950/0"
      />
      <div className="p-5 sm:p-6">
        <span className="mb-3 grid size-11 place-items-center rounded-xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur">
          <Icon name={item.icon} className="size-5" />
        </span>
        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
        <p className="mt-1.5 text-[0.95rem] leading-relaxed text-brand-100">{item.description}</p>
      </div>
    </article>
  );
}
