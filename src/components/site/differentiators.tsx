import Image from "next/image";
import { ShieldCheck, Clock, Sparkles, HeartHandshake } from "lucide-react";

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
      <Image
        src="/images/luciana-retrato.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[72%_22%] opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/85 to-graphite/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-xl">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Cuidado que se sente na primeira consulta
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:max-w-2xl">
          {ITEMS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/[0.08] text-brand backdrop-blur-sm">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-heading text-[17px] font-bold text-white">{title}</h3>
                <p className="mt-1.5 text-[14.5px] leading-relaxed text-white/70">
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
