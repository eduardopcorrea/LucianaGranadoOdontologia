"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./contact-info";

export function WhatsappFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
      className="fixed right-5 bottom-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition-transform hover:scale-105 sm:right-8 sm:bottom-8"
    >
      <MessageCircle className="h-7 w-7" fill="white" />
    </a>
  );
}
