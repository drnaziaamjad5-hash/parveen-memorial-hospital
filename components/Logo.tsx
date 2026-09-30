import Link from "next/link";

export function LogoMark({ className = "size-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="11" fill="#0b4a8b" />
      <path d="M16.5 9.5h7v7h7v7h-7v7h-7v-7h-7v-7h7z" fill="#fff" />
      <path
        d="M20 25.6c-2.9-2.1-4.6-3.7-4.6-5.6 0-1.4 1.1-2.4 2.4-2.4.9 0 1.7.5 2.2 1.2.5-.7 1.3-1.2 2.2-1.2 1.3 0 2.4 1 2.4 2.4 0 1.9-1.7 3.5-4.6 5.6Z"
        fill="#16968a"
      />
    </svg>
  );
}

export default function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <Link href="/" className="group flex items-center gap-3 rounded-lg" aria-label="Parveen Memorial Hospital — home">
      <LogoMark className="size-10 shrink-0 transition-transform duration-300 group-hover:scale-105" />
      <span className="flex flex-col leading-none whitespace-nowrap">
        <span className={`text-[1.05rem] font-bold tracking-tight ${light ? "text-white" : "text-brand-950"}`}>
          Parveen Memorial
        </span>
        <span
          className={`mt-1 text-[0.7rem] font-semibold tracking-[0.22em] uppercase ${
            light ? "text-teal-300" : "text-teal-700"
          }`}
        >
          Hospital
        </span>
      </span>
    </Link>
  );
}
