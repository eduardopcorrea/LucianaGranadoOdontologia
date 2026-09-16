import { Star, Quote } from "lucide-react";
import { MAPS_URL } from "./contact-info";

export function Testimonial() {
  return (
    <section id="depoimento" className="bg-background py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-mint text-brand-deep">
          <Quote className="h-6 w-6" fill="currentColor" />
        </div>

        <div className="mt-6 flex items-center justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-brand text-brand" />
          ))}
        </div>

        <blockquote className="mt-6 font-heading text-xl leading-snug font-semibold text-foreground sm:text-2xl">
          &ldquo;Ótima profissional odontológica, comprometida e cuidadosa. Pontualidade nos
          atendimentos. Equipamentos todos esterilizados, todo cuidado com a sua saúde bucal
          garantido. Faça uma visita.&rdquo;
        </blockquote>

        <p className="mt-5 text-[14.5px] font-semibold text-muted-foreground">
          Nildmar Weyn · avaliação verificada no Google
        </p>

        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-[13.5px] font-semibold text-brand-deep underline underline-offset-4 hover:text-[#0f5a3f]"
        >
          Ver avaliação no Google Maps
        </a>
      </div>
    </section>
  );
}
