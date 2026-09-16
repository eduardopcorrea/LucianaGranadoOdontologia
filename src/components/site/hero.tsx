"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ShieldCheck, MessageCircle, ArrowDownRight } from "lucide-react";
import { WHATSAPP_URL } from "./contact-info";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[560px] w-[560px] -translate-x-[68%] rounded-full bg-white/70 blur-2xl sm:w-[720px]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 pt-14 pb-20 sm:px-8 sm:pt-20 sm:pb-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-mint px-4 py-1.5 text-[13px] font-semibold text-brand-deep">
            Cirurgiã-dentista · Vila Velha/ES
          </span>

          <h1 className="mt-6 font-heading text-[2.6rem] leading-[1.06] font-extrabold tracking-tight text-foreground sm:text-6xl">
            Recupere a saúde
            <br />
            do seu{" "}
            <span className="relative inline-block text-brand-deep">
              sorriso
              <svg
                viewBox="0 0 210 16"
                className="absolute -bottom-1.5 left-0 h-3 w-full text-brand"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 12.5C48 4 155 2 208 10"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
            .
          </h1>

          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-muted-foreground">
            Um novo conceito em odontologia, unindo{" "}
            <strong className="text-foreground">tecnologia, conhecimento e saúde</strong>.
            Tratamentos especializados em Endodontia, Ortodontia e Implantodontia, com
            atendimento pontual, humanizado e equipamentos totalmente esterilizados.
          </p>

          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-deep px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-brand-deep/20 transition-transform hover:-translate-y-0.5 hover:bg-[#0f5a3f]"
            >
              <MessageCircle className="h-[18px] w-[18px]" />
              Agendar avaliação
            </a>
            <a
              href="#especialidades"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border px-7 py-3.5 text-[15px] font-semibold text-foreground transition-colors hover:border-brand-deep hover:text-brand-deep"
            >
              Ver especialidades
              <ArrowDownRight className="h-4 w-4" />
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-7 sm:max-w-md">
            <div>
              <dt className="sr-only">Avaliação no Google</dt>
              <dd className="flex items-center gap-1 font-heading text-2xl font-bold text-foreground">
                5,0 <Star className="h-4 w-4 fill-brand text-brand" />
              </dd>
              <p className="mt-0.5 text-[12.5px] text-muted-foreground">Avaliação no Google</p>
            </div>
            <div>
              <dt className="sr-only">Especialidades</dt>
              <dd className="font-heading text-2xl font-bold text-foreground">3</dd>
              <p className="mt-0.5 text-[12.5px] text-muted-foreground">
                Especializações da Dra.
              </p>
            </div>
            <div>
              <dt className="sr-only">Equipamentos</dt>
              <dd className="flex items-center gap-1 font-heading text-2xl font-bold text-foreground">
                100% <ShieldCheck className="h-4 w-4 text-brand-deep" />
              </dd>
              <p className="mt-0.5 text-[12.5px] text-muted-foreground">Ambiente esterilizado</p>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.75rem] bg-graphite">
            <Image
              src="/images/luciana-retrato.jpg"
              alt="Dra. Luciana Granado, cirurgiã-dentista"
              fill
              priority
              sizes="(min-width: 1024px) 420px, 320px"
              className="object-cover object-top"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-white px-5 py-4 shadow-xl sm:-left-10">
            <p className="font-heading text-lg font-bold text-brand-deep">Dra. Luciana Granado</p>
            <p className="text-[13px] text-muted-foreground">
              Endodontia · Ortodontia · Implantodontia
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
