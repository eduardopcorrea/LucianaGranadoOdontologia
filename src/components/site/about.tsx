import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const CREDENTIALS = [
  "Cirurgiã-dentista, especialista em Endodontia",
  "Especialista em Ortodontia",
  "Especialista em Implantodontia",
  "Consultório próprio em Vila Velha/ES desde 2021",
];

export function About() {
  return (
    <section id="sobre" className="bg-background py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative">
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/consultorio.jpg"
              alt="Consultório da Dra. Luciana Granado em Vila Velha"
              fill
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-8 -right-4 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-xl sm:-right-8">
            <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-graphite shrink-0">
              <Image
                src="/images/luciana-retrato.jpg"
                alt="Dra. Luciana Granado"
                fill
                sizes="56px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="font-heading text-sm font-bold text-foreground">Dra. Luciana</p>
              <p className="text-[12.5px] text-muted-foreground">Sua cirurgiã-dentista</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Um novo conceito em odontologia
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-muted-foreground">
            Reunindo <strong className="text-foreground">tecnologia, conhecimento e saúde</strong>{" "}
            em cada etapa do tratamento, a Dra. Luciana Granado acompanha pessoalmente cada
            paciente — do diagnóstico à conclusão do sorriso planejado. Pontualidade nos
            horários e equipamentos rigorosamente esterilizados fazem parte do cuidado, para
            que a sua visita ao dentista seja tranquila do início ao fim.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {CREDENTIALS.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[14.5px] text-foreground/85">
                <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-deep" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
