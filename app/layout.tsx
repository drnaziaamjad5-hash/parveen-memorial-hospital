import type { Metadata, Viewport } from "next";
import { Figtree, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import RevealObserver from "@/components/Reveal";
import { site } from "@/lib/site";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree", display: "swap" });
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const title = "Parveen Memorial Hospital | Gynecology & Obstetric Care in Lahore";
const description =
  "Parveen Memorial Hospital is a private hospital in Lahore for gynecology, obstetrics and women's healthcare, with sonography / ultrasonography, Color Doppler, laboratory diagnostics, emergency, OPD, pharmacy and inpatient facilities.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s | Parveen Memorial Hospital" },
  description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: site.name,
    title,
    description,
    url: "/",
    images: [
      {
        url: "/images/hero/hospital-hero.jpg",
        width: 2000,
        height: 1333,
        alt: "Doctor consulting with an expectant mother",
      },
    ],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/hero/hospital-hero.jpg"] },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0b4a8b",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  name: site.name,
  url: site.url,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Swami Nagar Road, Muhammdi Muhallah",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  medicalSpecialty: ["Gynecologic", "Obstetric"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${figtree.variable} ${instrument.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <RevealObserver />
      </body>
    </html>
  );
}
