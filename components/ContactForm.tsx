"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Mail } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { composeMessage, isValidEmail, isValidPhone, type Errors } from "@/lib/forms";
import FormField from "./FormField";
import { WhatsAppIcon } from "./WhatsAppButton";

type Field = "name" | "phone" | "email" | "message";

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors<Field>>({});
  const [sent, setSent] = useState<"whatsapp" | "email" | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  // Keep submit disabled until hydrated so a native GET submit can never put patient details in the URL.
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  function collect() {
    const fd = new FormData(formRef.current!);
    const data = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const e: Errors<Field> = {};
    if (!data.name.trim()) e.name = "Please enter your name.";
    if (!data.phone.trim()) e.phone = "Please enter your phone number.";
    else if (!isValidPhone(data.phone)) e.phone = "Please enter a valid phone number.";
    if (data.email.trim() && !isValidEmail(data.email)) e.email = "Please enter a valid email address.";
    if (!data.message.trim()) e.message = "Please enter your message.";
    setErrors(e);
    const first = Object.keys(e)[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return null;
    }
    return data;
  }

  function lines(data: Record<Field, string>): [string, string][] {
    return [
      ["Name", data.name],
      ["Phone", data.phone],
      ["Email", data.email],
      ["Message", data.message],
    ];
  }

  function sendWhatsApp(ev: React.FormEvent) {
    ev.preventDefault();
    const data = collect();
    if (!data) return;
    window.open(whatsappLink(composeMessage("Hello Parveen Memorial Hospital,", lines(data))), "_blank", "noopener,noreferrer");
    setSent("whatsapp");
  }

  function sendEmail() {
    const data = collect();
    if (!data) return;
    const body = composeMessage("Hello Parveen Memorial Hospital,", lines(data));
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Website enquiry from ${data.name}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent("email");
  }

  const inv = (f: Field) => (errors[f] ? { "aria-invalid": true as const } : {});

  return (
    <form ref={formRef} onSubmit={sendWhatsApp} method="post" noValidate className="grid gap-5 sm:grid-cols-2">
      <FormField id="c-name" label="Name" required error={errors.name}>
        {(d) => <input id="c-name" name="name" autoComplete="name" className="field" aria-describedby={d} {...inv("name")} />}
      </FormField>
      <FormField id="c-phone" label="Phone" required error={errors.phone}>
        {(d) => (
          <input
            id="c-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className="field"
            aria-describedby={d}
            {...inv("phone")}
          />
        )}
      </FormField>
      <FormField id="c-email" label="Email" optional error={errors.email} className="sm:col-span-2">
        {(d) => (
          <input
            id="c-email"
            name="email"
            type="email"
            autoComplete="email"
            className="field"
            aria-describedby={d}
            {...inv("email")}
          />
        )}
      </FormField>
      <FormField id="c-message" label="Message" required error={errors.message} className="sm:col-span-2">
        {(d) => (
          <textarea
            id="c-message"
            name="message"
            rows={5}
            className="field resize-y"
            aria-describedby={d}
            {...inv("message")}
          />
        )}
      </FormField>

      <div className="flex flex-wrap gap-3 sm:col-span-2">
        <button type="submit" disabled={!ready} className="btn-whatsapp">
          <WhatsAppIcon />
          Send via WhatsApp
        </button>
        <button type="button" onClick={sendEmail} disabled={!ready} className="btn-outline">
          <Mail className="size-4" aria-hidden="true" />
          Send via Email
        </button>
      </div>

      {sent && (
        <p role="status" className="flex gap-2 rounded-xl bg-teal-50 p-4 font-medium text-teal-700 sm:col-span-2">
          <CheckCircle2 className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
          {sent === "whatsapp"
            ? "Your message has been prepared in WhatsApp. Please press send there to reach the hospital."
            : "Your message has been prepared in your email app. Please press send there to reach the hospital."}
        </p>
      )}
    </form>
  );
}
