import Image from "next/image";
import type { Item } from "@/lib/site";
import Icon from "./Icon";

/** Image-led card used for services. */
export default function ServiceCard({ item, index = 0 }: { item: Item; index?: number }) {
  return (
    <article
      id={item.slug}
      data-reveal
      style={{ "--reveal-delay": `${(index % 3) * 80}ms` } as React.CSSProperties}
      className="group card flex flex-col overflow-hidden transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-brand-50">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-950/35 to-transparent" />
        <span className="absolute bottom-4 left-4 grid size-12 place-items-center rounded-xl bg-white text-brand-600 shadow-card">
          <Icon name={item.icon} className="size-6" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <p className="mt-2 leading-relaxed text-muted">{item.description}</p>
      </div>
    </article>
  );
}
