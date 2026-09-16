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
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Cuidado completo, do canal ao sorriso
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground">
              Três especializações reunidas em um só consultório — para que o seu tratamento
              tenha começo, meio e fim com a mesma profissional de confiança.
            </p>
          </div>

          <div className="divide-y divide-border">
            {SPECIALTIES.map(({ icon: Icon, title, description, featured }) => (
              <div key={title} className="flex flex-col gap-3 py-7 first:pt-0 sm:flex-row sm:gap-8">
                <div className="flex items-center gap-4 sm:w-56 sm:shrink-0">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-brand-deep">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">{title}</h3>
                </div>
                <div className="sm:flex-1">
                  <p className="text-[15px] leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                  {featured && (
                    <span className="mt-3 inline-block rounded-full bg-white px-2.5 py-1 text-[10.5px] font-bold tracking-wide text-brand-deep uppercase">
                      Especialização
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
