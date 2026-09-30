/**
 * Central hospital information. Every page reads from here, so update facts
 * in this one file. Only verified information supplied by the hospital
 * belongs here — do not add timings, statistics or claims that are unconfirmed.
 */

export const site = {
  name: "Parveen Memorial Hospital",
  type: "Private Hospital",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://parveenmemorialhospital.com",
  email: "info@parveenmemorialhospital.com",
  whatsappDisplay: "0323 8824540",
  whatsappNumber: "923238824540",
  address: "Swami Nagar Road, Muhammdi Muhallah, Lahore",
  /**
   * EDIT ME: replace with the hospital's exact Google Maps share link once
   * available. Until then this searches the address text only.
   */
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Parveen Memorial Hospital, Swami Nagar Road, Muhammdi Muhallah, Lahore"),
  defaultWhatsAppMessage:
    "Hello Parveen Memorial Hospital, I would like to get information about an appointment.",
  description:
    "Parveen Memorial Hospital is a private hospital in Lahore focused on gynecology, obstetrics and women's healthcare, with sonography, ultrasound and Color Doppler, laboratory diagnostics, emergency, OPD, pharmacy, inpatient and operation theatre facilities.",
} as const;

export function whatsappLink(message: string = site.defaultWhatsAppMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Doctors" },
  { href: "/facilities", label: "Facilities" },
  { href: "/contact", label: "Contact" },
] as const;

export type IconName =
  | "baby"
  | "venus"
  | "scan"
  | "activity"
  | "flask"
  | "siren"
  | "stethoscope"
  | "pill"
  | "bed"
  | "bedDouble"
  | "scissors";

export type Item = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: IconName;
  image: string;
  imageAlt: string;
};

export const services: Item[] = [
  {
    slug: "obstetrics",
    title: "Obstetrics",
    short: "Pregnancy and obstetric care",
    description:
      "Healthcare services related to pregnancy and obstetric care, supported by the hospital's diagnostic, inpatient and operation theatre facilities.",
    icon: "baby",
    image: "/images/services/obstetrics.jpg",
    imageAlt: "A mother resting in a hospital bed holding her newborn baby",
  },
  {
    slug: "gynecology",
    title: "Gynecology",
    short: "Women's health consultation",
    description:
      "Gynecology-focused healthcare and consultation for women. Consult the medical team for appropriate evaluation and care.",
    icon: "venus",
    image: "/images/services/gynecology.jpg",
    imageAlt: "A female doctor in a white coat holding a stethoscope",
  },
  {
    slug: "sonography",
    title: "Sonography & Ultrasonography",
    short: "Diagnostic imaging",
    description:
      "Sonography and ultrasonography services, led by a medical specialist in sonography and ultrasonography.",
    icon: "scan",
    image: "/images/services/sonography.jpg",
    imageAlt: "A clinician seated at an ultrasound machine in an examination room",
  },
  {
    slug: "ultrasound-doppler",
    title: "Ultrasound / Color Doppler",
    short: "Ultrasound & Doppler imaging",
    description: "Ultrasound and Color Doppler facility available at the hospital.",
    icon: "activity",
    image: "/images/facilities/color-doppler.jpg",
    imageAlt: "Gloved hands operating the control panel of an ultrasound and Doppler machine",
  },
  {
    slug: "laboratory",
    title: "Laboratory / Diagnostic Facility",
    short: "Diagnostic & lab services",
    description: "Diagnostic and laboratory services, overseen by the hospital's Technical Head / Pathologist.",
    icon: "flask",
    image: "/images/services/laboratory.jpg",
    imageAlt: "A laboratory professional working at a microscope",
  },
  {
    slug: "emergency",
    title: "Emergency",
    short: "Emergency healthcare facility",
    description:
      "Emergency healthcare facility supporting the hospital's primary focus, including gynecological and obstetric emergency care.",
    icon: "siren",
    image: "/images/facilities/emergency.jpg",
    imageAlt: "Paramedics attending to a patient inside an ambulance",
  },
  {
    slug: "opd",
    title: "OPD",
    short: "Outpatient department",
    description: "Outpatient department services for consultation and follow-up.",
    icon: "stethoscope",
    image: "/images/facilities/opd.jpg",
    imageAlt: "A clean hospital reception and outpatient waiting area",
  },
];

export const facilities: Item[] = [
  {
    slug: "emergency",
    title: "Emergency",
    short: "Emergency care",
    description: "Emergency facility supporting the hospital's primary healthcare focus.",
    icon: "siren",
    image: "/images/facilities/emergency.jpg",
    imageAlt: "Paramedics attending to a patient inside an ambulance",
  },
  {
    slug: "opd",
    title: "OPD",
    short: "Outpatient department",
    description: "Outpatient department facility.",
    icon: "stethoscope",
    image: "/images/facilities/opd.jpg",
    imageAlt: "A clean hospital reception and outpatient waiting area",
  },
  {
    slug: "pharmacy",
    title: "Pharmacy",
    short: "In-house pharmacy",
    description: "In-house pharmacy facility.",
    icon: "pill",
    image: "/images/facilities/pharmacy.jpg",
    imageAlt: "Blister packs of tablets and capsules",
  },
  {
    slug: "ultrasound",
    title: "Ultrasound / Color Doppler",
    short: "Imaging",
    description: "Ultrasound and Color Doppler facility.",
    icon: "activity",
    image: "/images/facilities/ultrasound.jpg",
    imageAlt: "An ultrasound machine with monitor in an examination room",
  },
  {
    slug: "laboratory",
    title: "Laboratory / Diagnostic Facility",
    short: "Diagnostics",
    description: "Diagnostic and laboratory services.",
    icon: "flask",
    image: "/images/facilities/laboratory.jpg",
    imageAlt: "A clean, well-lit clinical laboratory with analysers on the benches",
  },
  {
    slug: "private-rooms",
    title: "Private Rooms",
    short: "Private accommodation",
    description: "Private patient accommodation.",
    icon: "bed",
    image: "/images/facilities/private-room.jpg",
    imageAlt: "A private hospital room with a patient bed and seating",
  },
  {
    slug: "inpatient-ward",
    title: "Inpatient Ward",
    short: "Inpatient care",
    description: "Inpatient hospitalization and patient care.",
    icon: "bedDouble",
    image: "/images/facilities/inpatient-ward.jpg",
    imageAlt: "A bright inpatient ward with made beds and privacy curtains",
  },
  {
    slug: "operation-theatre",
    title: "Operation Theatre",
    short: "Surgical facility",
    description: "Dedicated operation theatre facility.",
    icon: "scissors",
    image: "/images/facilities/operation-theatre.jpg",
    imageAlt: "An operation theatre with surgical table, lights and equipment",
  },
];

export const quickLinks: { title: string; icon: IconName; href: string }[] = [
  { title: "Gynecology & Obstetrics", icon: "venus", href: "/services#gynecology" },
  { title: "Sonography & Ultrasonography", icon: "scan", href: "/services#sonography" },
  { title: "Ultrasound / Color Doppler", icon: "activity", href: "/facilities#ultrasound" },
  { title: "Laboratory Diagnostics", icon: "flask", href: "/facilities#laboratory" },
  { title: "Emergency", icon: "siren", href: "/facilities#emergency" },
  { title: "Pharmacy", icon: "pill", href: "/facilities#pharmacy" },
  { title: "Operation Theatre", icon: "scissors", href: "/facilities#operation-theatre" },
];

export type Person = {
  slug: string;
  name: string;
  credentials?: string;
  roles: string[];
  image: string;
  imageAlt: string;
};

/**
 * Photos: files in /public/images/doctors/. To swap a portrait, replace the
 * file with the same name, or change the `image` path here.
 */
export const doctors: Person[] = [
  {
    slug: "ali-iftikhar",
    name: "Asst. Prof. Dr. Ali Iftikhar",
    credentials: "MBBS, M.Phil (Bio Chemistry)",
    roles: ["Technical Head / Pathologist"],
    image: "/images/doctors/doctor-ali-iftikhar.jpg",
    imageAlt: "Portrait of Asst. Prof. Dr. Ali Iftikhar",
  },
  {
    slug: "asim-shafiq",
    name: "Dr. M. Asim Shafiq",
    credentials: "MBBS, DDCT",
    roles: ["Ex-Senior Medical Officer, Mayo Hospital Lahore"],
    image: "/images/doctors/doctor-asim-shafiq-portrait.jpg",
    imageAlt: "Portrait of Dr. M. Asim Shafiq",
  },
  {
    slug: "nazia-amjad",
    name: "Dr. Nazia Amjad",
    roles: ["Medical Specialist in Sonography & Ultrasonography", "Owner of the Hospital"],
    image: "/images/doctors/doctor-nazia-amjad.jpg",
    imageAlt: "Portrait of Dr. Nazia Amjad",
  },
];

export const leadership: Person = {
  slug: "amjad-ali",
  name: "Ch. Amjad Ali",
  roles: ["Director, Administrative Services"],
  image: "/images/hospital/ch-amjad-ali-portrait.jpg",
  imageAlt: "Portrait of Ch. Amjad Ali, Director, Administrative Services",
};
