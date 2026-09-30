"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, ExternalLink, Send } from "lucide-react";
import { doctors, whatsappLink } from "@/lib/site";
import { composeMessage, isValidEmail, isValidPhone, todayISO, type Errors } from "@/lib/forms";
import FormField from "./FormField";
import { WhatsAppIcon } from "./WhatsAppButton";

type Field = "name" | "phone" | "email" | "doctor" | "date" | "time" | "reason" | "message";

const timeSlots = ["Morning", "Afternoon", "Evening", "Any time"];

export default function AppointmentForm() {
  const [errors, setErrors] = useState<Errors<Field>>({});
  const [waUrl, setWaUrl] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  // Keep submit disabled until hydrated so a native GET submit can never put patient details in the URL.
  const [ready, setReady] = useState(false);
  const [doctor, setDoctor] = useState("");

  useEffect(() => {
    setReady(true);
    // Preselect a doctor from links such as /appointment?doctor=nazia-amjad
    const slug = new URLSearchParams(window.location.search).get("doctor");
    const match = doctors.find((d) => d.slug === slug);
    if (match) setDoctor(match.name);
  }, []);
  const successRef = useRef<HTMLDivElement>(null);

  function validate(data: Record<Field, string>) {
    const e: Errors<Field> = {};
    if (!data.name.trim()) e.name = "Please enter your name.";
    if (!data.phone.trim()) e.phone = "Please enter your phone number.";
    else if (!isValidPhone(data.phone)) e.phone = "Please enter a valid phone number.";
    if (data.email.trim() && !isValidEmail(data.email)) e.email = "Please enter a valid email address.";
    if (data.date && data.date < todayISO()) e.date = "Please choose today or a future date.";
    if (!data.reason.trim()) e.reason = "Please tell us the reason for your visit.";
    return e;
  }

  function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const fd = new FormData(ev.currentTarget);
    const data = Object.fromEntries(
      (["name", "phone", "email", "doctor", "date", "time", "reason", "message"] as Field[]).map((k) => [
        k,
        String(fd.get(k) ?? ""),
      ]),
    ) as Record<Field, string>;

    const found = validate(data);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      setWaUrl(null);
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    const message = composeMessage("Hello Parveen Memorial Hospital, I would like to request an appointment.", [
      ["Patient Name", data.name],
      ["Phone", data.phone],
      ["Email", data.email],
      ["Doctor", data.doctor || "No preference"],
      ["Preferred Date", data.date],
      ["Preferred Time", data.time],
      ["Reason for Visit", data.reason],
      ["Additional Message", data.message],
    ]);
    const url = whatsappLink(message);
    setWaUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
    requestAnimationFrame(() => successRef.current?.focus());
  }

  const describe = (field: Field) => ({
    "aria-invalid": errors[field] ? true : undefined,
  });

  return (
    <form ref={formRef} onSubmit={handleSubmit} method="post" noValidate className="grid gap-5 sm:grid-cols-2">
      <FormField id="name" label="Patient Name" required error={errors.name}>
        {(d) => (
          <input id="name" name="name" autoComplete="name" className="field" aria-describedby={d} {...describe("name")} />
        )}
      </FormField>

      <FormField id="phone" label="Phone Number" required error={errors.phone} hint="e.g. 0300 1234567">
        {(d) => (
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className="field"
            aria-describedby={d}
            {...describe("phone")}
          />
        )}
      </FormField>

      <FormField id="email" label="Email" optional error={errors.email}>
        {(d) => (
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="field"
            aria-describedby={d}
            {...describe("email")}
          />
        )}
      </FormField>

      <FormField id="doctor" label="Doctor" optional>
        {(d) => (
          <select
            id="doctor"
            name="doctor"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            className="field"
            aria-describedby={d}
          >
            <option value="">No preference</option>
            {doctors.map((doc) => (
              <option key={doc.slug} value={doc.name}>
                {doc.name}
              </option>
            ))}
          </select>
        )}
      </FormField>

      <FormField id="date" label="Preferred Date" optional error={errors.date}>
        {(d) => (
          <input
            id="date"
            name="date"
            type="date"
            min={todayISO()}
            className="field"
            aria-describedby={d}
            {...describe("date")}
          />
        )}
      </FormField>

      <FormField id="time" label="Preferred Time" optional hint="Subject to availability — the hospital will confirm.">
        {(d) => (
          <select id="time" name="time" defaultValue="" className="field" aria-describedby={d}>
            <option value="">Select a preference</option>
            {timeSlots.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        )}
      </FormField>

      <FormField id="reason" label="Reason for Visit" required error={errors.reason} className="sm:col-span-2">
        {(d) => (
          <input
            id="reason"
            name="reason"
            className="field"
            placeholder="e.g. Pregnancy check-up, ultrasound, consultation"
            aria-describedby={d}
            {...describe("reason")}
          />
        )}
      </FormField>

      <FormField id="message" label="Additional Message" optional className="sm:col-span-2">
        {(d) => (
          <textarea id="message" name="message" rows={4} className="field resize-y" aria-describedby={d} />
        )}
      </FormField>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          Submitting prepares your request in WhatsApp. It is not a confirmed booking until the hospital replies.
        </p>
        <button type="submit" disabled={!ready} className="btn-primary shrink-0">
          <Send className="size-4" aria-hidden="true" />
          Request Appointment
        </button>
      </div>

      {waUrl && (
        <div
          ref={successRef}
          tabIndex={-1}
          role="status"
          className="flex flex-col gap-4 rounded-2xl border border-teal-100 bg-teal-50 p-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="flex gap-3 font-medium text-teal-700">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            Your appointment request has been prepared. Please continue through WhatsApp to contact the hospital.
          </p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp shrink-0">
            <WhatsAppIcon />
            Open WhatsApp
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        </div>
      )}
    </form>
  );
}
