import { LogoMark } from "./logo-mark";
import { ADDRESS_FULL, EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE_DISPLAY } from "./contact-info";

const NAV_LINKS = [
  { href: "#especialidades", label: "Especialidades" },
  { href: "#sobre", label: "Sobre a Dra." },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#depoimento", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <LogoMark />
            <p className="mt-4 max-w-[26ch] text-[13.5px] leading-relaxed text-muted-foreground">
              Tecnologia, conhecimento e saúde para recuperar o seu sorriso.
            </p>
          </div>

          <div>
            <p className="text-[12.5px] font-semibold tracking-wide text-foreground uppercase">
              Navegação
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[14px] text-muted-foreground hover:text-brand-deep"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <p className="text-[12.5px] font-semibold tracking-wide text-foreground uppercase">
              Contato
            </p>
            <ul className="mt-4 space-y-2.5 text-[14px] break-words text-muted-foreground">
              <li>{ADDRESS_FULL}</li>
              <li>{PHONE_DISPLAY}</li>
              <li>{EMAIL}</li>
            </ul>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-brand-deep hover:text-[#0f5a3f]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.16-.46-.35-1.26-.4-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43a4.9 4.9 0 0 1 1.15-1.77A4.9 4.9 0 0 1 5.59 1.8c.46-.16 1.26-.35 2.43-.4C9.29 1.34 9.67 1.33 12 1.33Zm0 1.8c-3.16 0-3.5.01-4.75.07-.96.04-1.48.2-1.82.34-.46.18-.79.4-1.14.75-.35.35-.57.68-.75 1.14-.13.34-.3.86-.34 1.82C3.14 8.5 3.13 8.84 3.13 12s.01 3.5.07 4.75c.04.96.2 1.48.34 1.82.18.46.4.79.75 1.14.35.35.68.57 1.14.75.34.13.86.3 1.82.34 1.25.06 1.59.07 4.75.07s3.5-.01 4.75-.07c.96-.04 1.48-.2 1.82-.34.46-.18.79-.4 1.14-.75.35-.35.57-.68.75-1.14.13-.34.3-.86.34-1.82.06-1.25.07-1.59.07-4.75s-.01-3.5-.07-4.75c-.04-.96-.2-1.48-.34-1.82a3.1 3.1 0 0 0-.75-1.14 3.1 3.1 0 0 0-1.14-.75c-.34-.13-.86-.3-1.82-.34C15.5 3.14 15.16 3.13 12 3.13Zm0 3.5a5.37 5.37 0 1 1 0 10.74 5.37 5.37 0 0 1 0-10.74Zm0 1.8a3.57 3.57 0 1 0 0 7.14 3.57 3.57 0 0 0 0-7.14Zm5.58-1.97a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z" />
              </svg>
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-[12.5px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Luciana Granado Odontologia Integrada.</p>
          <p>Site desenvolvido por Correa Digital.</p>
        </div>
      </div>
    </footer>
  );
}
