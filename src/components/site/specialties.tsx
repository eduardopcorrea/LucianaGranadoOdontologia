import { Activity, Braces, Layers, Gem, Sparkles, Sun } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Specialty = {
  icon: LucideIcon;
  title: string;
  description: string;
  featured?: boolean;
};

const SPECIALTIES: Specialty[] = [
  {
    icon: Activity,
    title: "Endodontia",
    description:
      "Tratamento de canal com técnicas atuais para eliminar a dor e preservar o dente natural.",
    featured: true,
  },
  {
    icon: Braces,
    title: "Ortodontia",
    description:
      "Aparelhos e alinhadores para corrigir o posicionamento dos dentes em qualquer idade.",
    featured: true,
  },
  {
    icon: Layers,
    title: "Implantodontia",
    description:
      "Implantes dentários planejados com precisão para devolver função e estética ao sorriso.",
    featured: true,
  },
  {
    icon: Gem,
    title: "Prótese Fixa",
    description: "Coroas e próteses que restauram dentes danificados com resultado natural.",
  },
  {
    icon: Sparkles,
    title: "Facetas",
    description: "Lentes e facetas para harmonizar forma, cor e alinhamento do sorriso.",
  },
  {
    icon: Sun,
    title: "Clareamento",
    description: "Clareamento dental supervisionado, com segurança para o esmalte dos dentes.",
  },
];

export function Specialties() {
  return (
    <section id="especialidades" className="bg-mint/60 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-xl">
          <span className="text-[13px] font-semibold tracking-[0.14em] text-brand-deep uppercase">
            Especialidades
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Cuidado completo, do canal ao sorriso
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground">
            Três especializações reunidas em um só consultório — para que o seu tratamento
            tenha começo, meio e fim com a mesma profissional de confiança.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SPECIALTIES.map(({ icon: Icon, title, description, featured }) => (
            <div
              key={title}
              className={
                featured
                  ? "group relative overflow-hidden rounded-3xl bg-graphite p-7"
                  : "group relative overflow-hidden rounded-3xl border border-black/[0.06] bg-white p-7"
              }
            >
              <div
                className={
                  featured
                    ? "grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-brand"
                    : "grid h-12 w-12 place-items-center rounded-2xl bg-mint text-brand-deep"
                }
              >
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3
                className={
                  featured
                    ? "mt-6 font-heading text-lg font-bold text-white"
                    : "mt-6 font-heading text-lg font-bold text-foreground"
                }
              >
                {title}
              </h3>
              <p
                className={
                  featured
                    ? "mt-2 text-[14.5px] leading-relaxed text-white/70"
                    : "mt-2 text-[14.5px] leading-relaxed text-muted-foreground"
                }
              >
                {description}
              </p>
              {featured && (
                <span className="absolute top-7 right-7 rounded-full bg-brand/15 px-2.5 py-1 text-[10.5px] font-bold tracking-wide text-brand uppercase">
                  Especialização
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
