import Image from "next/image";
import { ShieldCheck, Clock, Sparkles, HeartHandshake } from "lucide-react";
import { LogoIcon } from "./logo-mark";

const ITEMS = [
  {
    icon: ShieldCheck,
    title: "Biossegurança em primeiro lugar",
    description:
      "Instrumentais e equipamentos esterilizados a cada atendimento, seguindo protocolos rígidos de biossegurança.",
  },
  {
    icon: Clock,
    title: "Pontualidade real",
    description:
      "Consultas com hora marcada e respeitada — sem salas de espera lotadas nem horas de atraso.",
  },
  {
    icon: Sparkles,
    title: "Tecnologia e atualização constante",
    description:
      "Diagnóstico por imagem e técnicas atuais em endodontia, ortodontia e implantodontia.",
  },
  {
    icon: HeartHandshake,
    title: "Ambiente acolhedor",
    description:
      "Atendimento humanizado, respeitoso e atencioso, para que qualquer paciente se sinta bem-vindo.",
  },
];

export function Differentiators() {
  return (
    <section id="diferenciais" className="relative overflow-hidden bg-graphite py-24 sm:py-28">
      <LogoIcon className="pointer-events-none absolute -top-12 -right-12 h-72 w-72 text-white/[0.04]" />

      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[38%] [mask-image:linear-gradient(to_right,transparent,black_35%)] xl:block">
        <Image
          src="/images/luciana-capa-marca.jpg"
          alt=""
          fill
          sizes="38vw"
          className="object-cover object-[78%_center] opacity-90"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-xl">
          <span className="text-[13px] font-semibold tracking-[0.14em] text-brand uppercase">
            Por que escolher
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Cuidado que se sente na primeira consulta
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {ITEMS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/[0.06] text-brand">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-heading text-[17px] font-bold text-white">{title}</h3>
                <p className="mt-1.5 text-[14.5px] leading-relaxed text-white/65">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
