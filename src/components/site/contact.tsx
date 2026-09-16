import { MapPin, Phone, Mail, CalendarClock, MessageCircle } from "lucide-react";
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  EMAIL,
  MAPS_EMBED_SRC,
  MAPS_URL,
  PHONE_DISPLAY,
  WHATSAPP_URL,
} from "./contact-info";

const INFO = [
  {
    icon: MapPin,
    label: "Endereço",
    lines: [ADDRESS_LINE_1, ADDRESS_LINE_2],
    href: MAPS_URL,
  },
  {
    icon: Phone,
    label: "Telefone / WhatsApp",
    lines: [PHONE_DISPLAY],
    href: WHATSAPP_URL,
  },
  {
    icon: Mail,
    label: "E-mail",
    lines: [EMAIL],
    href: `mailto:${EMAIL}`,
  },
  {
    icon: CalendarClock,
    label: "Atendimento",
    lines: ["Segunda a sexta, mediante agendamento"],
  },
];

export function Contact() {
  return (
    <section id="contato" className="bg-mint/60 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-xl">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Vamos cuidar do seu sorriso
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground">
            Fale agora pelo WhatsApp e agende sua avaliação no consultório, no Centro de Vila
            Velha.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col">
            <div className="divide-y divide-border">
              {INFO.map(({ icon: Icon, label, lines, href }) => {
                const content = (
                  <div className="group flex items-start gap-4 py-5 first:pt-0">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-brand-deep">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0 flex-1 pt-1">
                      <p className="text-[12.5px] font-semibold tracking-wide text-muted-foreground uppercase">
                        {label}
                      </p>
                      {lines.map((line) => (
                        <p
                          key={line}
                          className={
                            href
                              ? "text-[14.5px] font-medium break-words text-foreground group-hover:text-brand-deep"
                              : "text-[14.5px] font-medium break-words text-foreground"
                          }
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand-deep px-6 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-brand-deep/20 transition-transform hover:-translate-y-0.5 hover:bg-[#0f5a3f]"
            >
              <MessageCircle className="h-[18px] w-[18px]" />
              Agendar pelo WhatsApp
            </a>
          </div>

          <div className="min-h-[380px] overflow-hidden rounded-2xl border border-black/[0.06]">
            <iframe
              title="Localização do consultório da Dra. Luciana Granado"
              src={MAPS_EMBED_SRC}
              className="h-full min-h-[380px] w-full grayscale-[15%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
