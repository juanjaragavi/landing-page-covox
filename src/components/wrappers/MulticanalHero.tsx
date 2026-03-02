"use client"

import { FadeContainer, FadeDiv, FadeSpan } from "../Fade"
import { ScaleContainer, ScaleDiv } from "../Scale"
import GameOfLife from "../ui/HeroBackground"

export function MulticanalHero() {
  return (
    <div aria-label="hero">
      <div className="relative px-8">
        {/* Background animation */}
        <div className="absolute inset-0 -z-10">
          <div className="bg-gradient-radial absolute inset-0 from-transparent via-transparent to-gray-950" />
          <ScaleContainer>
            <ScaleDiv className="flex items-center justify-center overflow-visible">
              <GameOfLife className="overflow-visible" />
            </ScaleDiv>
          </ScaleContainer>
        </div>

        <div className="mx-auto max-w-4xl pt-10">
          <FadeContainer className="flex flex-col items-center justify-center">
            {/* Tag badge */}
            <FadeDiv className="mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-100 ring-1 shadow-md shadow-[#77FF00]/10 ring-black/10 backdrop-blur-[1px] sm:text-sm">
                <span className="shrink-0 rounded-full border border-[#77FF00] bg-gray-800 px-2 py-0.5 text-xs font-semibold text-[#77FF00]">
                  MULTICANAL
                </span>
                <span className="flex items-center gap-1 truncate">
                  WhatsApp · Teléfono · Redes Sociales
                </span>
              </div>
            </FadeDiv>

            {/* Headline */}
            <h1 className="mt-8 text-center text-3xl leading-tight font-semibold tracking-tighter text-white sm:text-5xl sm:leading-[1.1em]">
              <FadeSpan>Centraliza tus Conversaciones de</FadeSpan>{" "}
              <FadeSpan>
                <span className="text-[#77FF00]">
                  WhatsApp, Teléfono y Redes Sociales
                </span>
              </FadeSpan>{" "}
              <FadeSpan>en una sola Plataforma con IA</FadeSpan>
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-2xl text-center text-lg leading-relaxed text-balance text-gray-300 sm:text-xl">
              <FadeSpan>
                <span className="font-semibold text-[#77FF00]">COVOX AI</span>{" "}
                organiza y automatiza las conversaciones de tu negocio con{" "}
                <span className="font-semibold text-white">
                  agentes de IA disponibles 24/7
                </span>
                , para que crezcas tus ventas sin perder un solo contacto.
              </FadeSpan>
            </p>

            {/* CTA */}
            <FadeDiv className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href="https://admin.covox.io/login"
                className="flex cursor-pointer items-center justify-center rounded-xl border-b-[1.5px] border-[#77FF00] bg-[#77FF00] px-8 py-4 text-lg leading-4 font-semibold tracking-wide text-black shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_10px_0_rgba(255,255,255,0.15)] transition-all duration-200 ease-in-out hover:bg-white hover:shadow-white/50 sm:text-xl"
              >
                Solicita una Demo GRATUITA
              </a>
            </FadeDiv>

            {/* Social proof */}
            <FadeDiv className="mt-6">
              <p className="text-sm text-gray-400">
                Más de{" "}
                <span className="font-semibold text-white">100 negocios</span>{" "}
                en Latinoamérica confían en nosotros
              </p>
            </FadeDiv>
          </FadeContainer>

          {/* YouTube Video Embed */}
          <FadeDiv className="mt-12 pb-8">
            <div className="relative overflow-hidden rounded-xl border border-[#77FF00]/30 shadow-2xl shadow-[#77FF00]/10">
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/3mLaPmETf2o?rel=0"
                  title="COVOX AI — Agentes de IA Multicanal"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full rounded-xl"
                />
              </div>
            </div>
          </FadeDiv>
        </div>
      </div>
    </div>
  )
}
