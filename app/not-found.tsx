import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">Page not found</p>
      <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">We couldn&apos;t find that page</h1>
      <p className="mt-4 max-w-md text-lg text-muted">The page may have moved. Try one of the links below.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">
          Go to Home
        </Link>
        <Link href="/contact" className="btn-outline">
          Contact the Hospital
        </Link>
      </div>
    </section>
  );
}
