"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { LogoMark } from "./logo-mark";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "./contact-info";

const NAV_LINKS = [
  { href: "#especialidades", label: "Especialidades" },
  { href: "#sobre", label: "Sobre a Dra." },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#depoimento", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b border-black/20 bg-graphite transition-shadow",
          scrolled ? "shadow-[0_4px_16px_rgba(0,0,0,0.18)]" : "",
        )}
      >
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
          <a href="#topo" className="py-1">
            <LogoMark tone="dark" />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14.5px] font-medium text-white/75 transition-colors hover:text-brand-light"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-[14px] font-semibold text-foreground shadow-sm transition-colors hover:bg-brand-light"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar consulta
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid h-10 w-10 place-items-center rounded-full text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile nav: sibling of <header>, not a descendant — avoids the
          position:fixed containing-block bug that backdrop/transform ancestors cause. */}
      <div
        className={cn(
          "fixed inset-0 z-40 h-screen bg-black/50 transition-opacity lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
      />
      <nav
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex h-screen w-[78%] max-w-xs flex-col gap-1 bg-graphite px-6 pt-24 pb-8 shadow-2xl transition-transform duration-300 lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="rounded-lg px-3 py-3 text-[16px] font-medium text-white/85 hover:bg-white/[0.08] hover:text-brand-light"
          >
            {link.label}
          </a>
        ))}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-[15px] font-semibold text-foreground"
        >
          <MessageCircle className="h-4 w-4" />
          Agendar pelo WhatsApp
        </a>
      </nav>
    </>
  );
}
