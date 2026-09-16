"use client";

import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";
import { Star, MessageCircle, ArrowDownRight } from "lucide-react";
import { MAPS_URL, WHATSAPP_URL } from "./contact-info";

export function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="topo" className="relative overflow-hidden bg-background">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[560px] w-[560px] -translate-x-[68%] rounded-full bg-white/70 blur-2xl sm:w-[720px]" />

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 pt-14 pb-20 sm:px-8 sm:pt-20 sm:pb-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="font-heading text-[2.6rem] leading-[1.06] font-extrabold tracking-tight text-foreground sm:text-6xl">
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
              Um novo conceito em odontologia em Vila Velha/ES, unindo{" "}
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

            <div className="mt-11 flex items-center gap-2 border-t border-border pt-6 text-[14px] text-muted-foreground sm:max-w-md">
              <span className="inline-flex items-center gap-1 font-heading font-bold text-foreground">
                5,0
                <Star className="h-3.5 w-3.5 fill-brand text-brand" />
              </span>
              <span>avaliação real no</span>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-deep underline underline-offset-4 hover:text-[#0f5a3f]"
              >
                Google Maps
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-graphite">
              <Image
                src="/images/luciana-retrato.jpg"
                alt="Dra. Luciana Granado, cirurgiã-dentista"
                fill
                priority
                sizes="(min-width: 1024px) 420px, 320px"
                className="object-cover object-top"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white px-5 py-4 shadow-xl sm:-left-10">
              <p className="font-heading text-lg font-bold text-brand-deep">
                Dra. Luciana Granado
              </p>
              <p className="text-[13px] text-muted-foreground">
                Endodontia · Ortodontia · Implantodontia
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
