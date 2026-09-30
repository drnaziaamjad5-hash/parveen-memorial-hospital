export type Errors<T extends string> = Partial<Record<T, string>>;

export function isValidPhone(value: string) {
  const trimmed = value.trim();
  if (!/^[+\d\s()-]+$/.test(trimmed)) return false;
  const digits = trimmed.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 13;
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}

/** Builds a WhatsApp message body from labelled lines, skipping empty values. */
export function composeMessage(heading: string, lines: [label: string, value: string][]) {
  const body = lines
    .filter(([, v]) => v.trim() !== "")
    .map(([label, v]) => `${label}: ${v.trim()}`)
    .join("\n");
  return `${heading}\n\n${body}`;
}

export function todayISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}
