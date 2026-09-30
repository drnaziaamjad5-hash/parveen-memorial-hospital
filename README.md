# Parveen Memorial Hospital — Website

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4. Fully static; ready for Vercel.

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Editing content

All hospital facts live in **`lib/site.ts`**: contact details, services, facilities, doctors and leadership.
Only add information the hospital has confirmed (no timings, statistics or claims).

- **Google Maps link:** replace `mapsUrl` in `lib/site.ts` with the hospital's exact share link.
- **Site URL:** set `NEXT_PUBLIC_SITE_URL` in Vercel (see `.env.example`) for canonical/Open Graph URLs.

## Images

```
public/images/
  hero/        hospital-hero.jpg
  hospital/    ch-amjad-ali.jpg, womens-care.jpg, newborn.jpg, compassion.jpg
  doctors/     doctor-ali-iftikhar.jpg, doctor-asim-shafiq.jpg, doctor-nazia-amjad.jpg
  services/    obstetrics.jpg, gynecology.jpg, sonography.jpg, laboratory.jpg
  facilities/  emergency.jpg, opd.jpg, pharmacy.jpg, ultrasound.jpg, color-doppler.jpg,
               laboratory.jpg, private-room.jpg, inpatient-ward.jpg, operation-theatre.jpg
```

- Staff portraits are the photos supplied by the hospital.
- Hero, service, facility and hospital photos are **illustrative stock photos from Unsplash**
  (free Unsplash License). Replace them with real photos of the hospital by overwriting the file
  with the same name — no code changes needed.

## Appointments & contact

There is no booking database. The appointment and contact forms validate input and open WhatsApp
(923238824540) with a pre-filled, URL-encoded message. The contact form can also open an email draft.
