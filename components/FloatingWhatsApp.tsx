"use client";

import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppButton";

/** Floating WhatsApp action. Appears after scrolling and sits clear of content. */
export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Parveen Memorial Hospital on WhatsApp"
      tabIndex={visible ? 0 : -1}
      className={`fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-30 grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-[0_12px_28px_-8px_rgb(18_124_69/0.6)] transition-all duration-300 hover:bg-whatsapp-dark sm:right-6 sm:bottom-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
