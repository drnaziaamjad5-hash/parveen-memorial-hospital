import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
  imageAlt: string;
  crumb: string;
  children?: React.ReactNode;
};

/** Inner-page header with breadcrumb and photograph. */
export default function PageHero({ eyebrow, title, intro, image, imageAlt, crumb, children }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-950">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="-z-20 object-cover opacity-40" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-950 via-brand-950/85 to-brand-900/40"
      />
      <div className="container-page py-16 sm:py-20 lg:py-24">
        <nav aria-label="Breadcrumb" className="animate-fade-up text-sm text-brand-200">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="size-4" />
            </li>
            <li aria-current="page" className="font-medium text-white">
              {crumb}
            </li>
          </ol>
        </nav>
        <p className="eyebrow mt-8 animate-fade-up text-teal-300 [animation-delay:60ms]">
          <span aria-hidden="true" className="h-px w-6 bg-teal-300" />
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl animate-fade-up text-4xl leading-[1.08] font-semibold text-white [animation-delay:120ms] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl animate-fade-up text-lg leading-relaxed text-brand-100 [animation-delay:180ms]">
            {intro}
          </p>
        )}
        {children && <div className="mt-8 animate-fade-up [animation-delay:240ms]">{children}</div>}
      </div>
    </section>
  );
}
