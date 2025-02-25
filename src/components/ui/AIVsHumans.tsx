import {
  RiCloseCircleLine,
  RiEmotionSadLine,
  RiFlashlightLine,
  RiHourglass2Line,
  RiLineChartLine,
  RiMoneyDollarCircleLine,
  RiRefreshLine,
  RiTimeLine,
  RiTimer2Line,
  RiUserLine,
} from "@remixicon/react"
import Image from "next/image"
import { CovoxFavicon } from "../../../public/CovoxFavicon"
import { FadeDiv } from "../Fade"
import { Orbit } from "../Orbit"
import {
  AlertIcon,
  HighCostsIcon,
  LeadTimeIcon,
  MissedCallsIcon,
} from "./ProblemIcons"

export default function AIVsHumans() {
  return (
    <section
      aria-label="COVOX AI | Agentes Conversacionales"
      id="solucion"
      className="relative mx-auto mb-12 max-w-6xl scroll-my-12 items-center justify-center px-4 sm:px-0"
    >
      <div className="z-10 w-full pt-6 text-center text-base font-semibold tracking-tight text-[#77FF00] sm:pt-20 sm:text-lg">
        Empieza con la IA Generativa
      </div>
      <h2
        id="management-title"
        className="z-20 mx-auto max-w-[700px] text-center text-2xl font-semibold tracking-tight text-balance text-white sm:mb-4 md:text-5xl"
      >
        Beneficios Clave de la IA vs. Humanos
      </h2>

      {/* Vertical Lines */}
      <div className="pointer-events-none inset-0 select-none">
        {/* Left */}
        <div
          className="absolute inset-y-0 my-[-5rem] w-px"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-700"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>

        {/* Right */}
        <div
          className="absolute inset-y-0 right-0 my-[-5rem] w-px"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-700"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>
        {/* Middle */}
        <div
          className="absolute inset-y-0 left-1/2 -z-10 my-[-5rem] w-px"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-700"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>
        {/* 25% */}
        <div
          className="absolute inset-y-0 left-1/4 -z-10 my-[-5rem] hidden w-px sm:block"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-700"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>
        {/* 75% */}
        <div
          className="absolute inset-y-0 left-3/4 -z-10 my-[-5rem] hidden w-px sm:block"
          style={{
            maskImage:
              "linear-gradient(transparent, white 5rem, white calc(100% - 5rem), transparent)",
          }}
        >
          <svg className="h-full w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-gray-700"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        {/* COVOX AI Column */}
        <div className="relative flex flex-col items-center overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-6">
          <h3 className="mb-6 flex items-center gap-2 text-2xl font-semibold text-[#77FF00]">
            <Image
              src="/images/favicon.png"
              alt="COVOX AI"
              width={24}
              height={24}
              className="size-6"
            />
            COVOX AI
          </h3>

          <div className="relative z-10 flex w-full flex-col gap-6">
            {/* Item 1: Disponible 24/7 */}
            <div className="flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-900/80 p-4 transition-all hover:border-[#77FF00]/50 hover:shadow-[0_0_15px_rgba(119,255,0,0.15)]">
              <div className="relative flex size-12 items-center justify-center">
                <div className="absolute size-12 animate-[ping_4s_ease_infinite] rounded-full bg-[#77FF00]/20"></div>
                <div className="relative flex size-10 items-center justify-center rounded-full bg-[#77FF00]/20 p-2 ring-1 ring-[#77FF00]/50">
                  <RiTimeLine className="size-6 text-[#77FF00]" />
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">
                  Disponible 24/7
                </p>
                <p className="text-sm text-gray-400">
                  Atención continua sin interrupciones
                </p>
              </div>
            </div>

            {/* Item 2: Atiende 100% de los leads */}
            <div className="flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-900/80 p-4 transition-all hover:border-[#77FF00]/50 hover:shadow-[0_0_15px_rgba(119,255,0,0.15)]">
              <div className="relative flex size-12 items-center justify-center">
                <div
                  className="absolute size-12 animate-[ping_4s_ease_infinite] rounded-full bg-[#77FF00]/20"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div className="relative flex size-10 items-center justify-center rounded-full bg-[#77FF00]/20 p-2 ring-1 ring-[#77FF00]/50">
                  <RiLineChartLine className="size-6 text-[#77FF00]" />
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">
                  Atiende 100% de los leads
                </p>
                <p className="text-sm text-gray-400">
                  Ninguna oportunidad se pierde
                </p>
              </div>
            </div>

            {/* Item 3: Costos reducidos */}
            <div className="flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-900/80 p-4 transition-all hover:border-[#77FF00]/50 hover:shadow-[0_0_15px_rgba(119,255,0,0.15)]">
              <div className="relative flex size-12 items-center justify-center">
                <div
                  className="absolute size-12 animate-[ping_4s_ease_infinite] rounded-full bg-[#77FF00]/20"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div className="relative flex size-10 items-center justify-center rounded-full bg-[#77FF00]/20 p-2 ring-1 ring-[#77FF00]/50">
                  <RiMoneyDollarCircleLine className="size-6 text-[#77FF00]" />
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">
                  Costos reducidos
                </p>
                <p className="text-sm text-gray-400">
                  Mayor eficiencia operativa
                </p>
              </div>
            </div>

            {/* Item 4: Respuesta inmediata */}
            <div className="flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-900/80 p-4 transition-all hover:border-[#77FF00]/50 hover:shadow-[0_0_15px_rgba(119,255,0,0.15)]">
              <div className="relative flex size-12 items-center justify-center">
                <div
                  className="absolute size-12 animate-[ping_4s_ease_infinite] rounded-full bg-[#77FF00]/20"
                  style={{ animationDelay: "1.5s" }}
                ></div>
                <div className="relative flex size-10 items-center justify-center rounded-full bg-[#77FF00]/20 p-2 ring-1 ring-[#77FF00]/50">
                  <RiFlashlightLine className="size-6 text-[#77FF00]" />
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">
                  Respuesta inmediata
                </p>
                <p className="text-sm text-gray-400">Sin tiempos de espera</p>
              </div>
            </div>

            {/* Item 5: Sin errores, siempre optimizado */}
            <div className="flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-900/80 p-4 transition-all hover:border-[#77FF00]/50 hover:shadow-[0_0_15px_rgba(119,255,0,0.15)]">
              <div className="relative flex size-12 items-center justify-center">
                <div
                  className="absolute size-12 animate-[ping_4s_ease_infinite] rounded-full bg-[#77FF00]/20"
                  style={{ animationDelay: "2s" }}
                ></div>
                <div className="relative flex size-10 items-center justify-center rounded-full bg-[#77FF00]/20 p-2 ring-1 ring-[#77FF00]/50">
                  <RiRefreshLine className="size-6 text-[#77FF00]" />
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">
                  Sin errores, siempre optimizado
                </p>
                <p className="text-sm text-gray-400">
                  Calidad consistente garantizada
                </p>
              </div>
            </div>
          </div>

          {/* Background pattern */}
          <div className="absolute inset-0 -z-10">
            <svg className="h-full w-full opacity-20">
              <defs>
                <pattern
                  id="ai-pattern"
                  patternUnits="userSpaceOnUse"
                  width="64"
                  height="64"
                >
                  {Array.from({ length: 17 }, (_, i) => {
                    const offset = i * 8
                    return (
                      <path
                        key={i}
                        d={`M${-106 + offset},110 L${22 + offset},-18`}
                        className="stroke-[#77FF00]/30"
                        strokeWidth="1"
                      />
                    )
                  })}
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ai-pattern)" />
            </svg>
          </div>

          {/* Orbit animation in background */}
          <div className="absolute right-0 bottom-0 -z-5 opacity-30">
            <div className="pointer-events-none select-none">
              <div className="relative flex flex-col items-center justify-center">
                <Orbit
                  durationSeconds={40}
                  radiusPx={100}
                  keepUpright
                  orbitingObjects={[
                    <div
                      key="obj1"
                      className="relative flex items-center justify-center"
                    >
                      <div className="absolute size-6 rounded-full bg-[#77FF00]/50"></div>
                      <div
                        style={{
                          animationDelay: "1s",
                        }}
                        className="absolute size-6 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-[#77FF00]/50"
                      ></div>
                    </div>,
                    <div
                      key="obj2"
                      className="relative flex items-center justify-center"
                    >
                      <div className="absolute size-6 rounded-full bg-[#77FF00]/50"></div>
                      <div
                        style={{
                          animationDelay: "2s",
                        }}
                        className="absolute size-6 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-[#77FF00]/50"
                      ></div>
                    </div>,
                    <div
                      key="obj3"
                      className="relative flex items-center justify-center"
                    >
                      <div className="absolute size-6 rounded-full bg-[#77FF00]/50"></div>
                      <div
                        style={{
                          animationDelay: "3s",
                        }}
                        className="absolute size-6 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-[#77FF00]/50"
                      ></div>
                    </div>,
                  ]}
                >
                  <div className="relative flex h-24 w-24 items-center justify-center">
                    <div className="rounded-full p-1 ring-1 ring-[#77FF00]/20">
                      <div className="relative z-10 flex size-10 items-center justify-center rounded-full bg-[#77FF00]/10">
                        <div className="size-6 opacity-50">
                          <CovoxFavicon />
                        </div>
                      </div>
                    </div>
                  </div>
                </Orbit>
              </div>
            </div>
          </div>
        </div>

        {/* Human Agent Column */}
        <div className="relative flex flex-col items-center overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-6">
          <h3 className="mb-6 flex items-center gap-2 text-2xl font-semibold text-red-500">
            <RiUserLine className="size-6" /> Agente Humano
          </h3>

          <div className="relative z-10 flex w-full flex-col gap-6">
            {/* Item 1: Horario limitado */}
            <div className="flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-900/80 p-4 transition-all hover:border-red-500/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.15)]">
              <div className="relative flex size-12 items-center justify-center">
                <div className="absolute size-12 animate-[pulse_3s_ease-in-out_infinite] rounded-full bg-red-500/20"></div>
                <div className="relative flex size-10 items-center justify-center rounded-full bg-red-500/20 p-2 ring-1 ring-red-500/50">
                  <RiHourglass2Line className="size-6 text-red-500" />
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">
                  Horario limitado
                </p>
                <p className="text-sm text-gray-400">
                  Disponibilidad restringida
                </p>
              </div>
            </div>

            {/* Item 2: Se pierden oportunidades */}
            <div className="flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-900/80 p-4 transition-all hover:border-red-500/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.15)]">
              <div className="relative flex size-12 items-center justify-center">
                <div
                  className="absolute size-12 animate-[pulse_3s_ease-in-out_infinite] rounded-full bg-red-500/20"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div className="relative flex size-10 items-center justify-center rounded-full bg-red-500/20 p-2 ring-1 ring-red-500/50">
                  <RiCloseCircleLine className="size-6 text-red-500" />
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">
                  Se pierden oportunidades
                </p>
                <p className="text-sm text-gray-400">Leads sin atender</p>
              </div>
            </div>

            {/* Item 3: Costos operativos altos */}
            <div className="flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-900/80 p-4 transition-all hover:border-red-500/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.15)]">
              <div className="relative flex size-12 items-center justify-center">
                <div
                  className="absolute size-12 animate-[pulse_3s_ease-in-out_infinite] rounded-full bg-red-500/20"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div className="relative flex size-10 items-center justify-center rounded-full bg-red-500/20 p-2 ring-1 ring-red-500/50">
                  <HighCostsIcon className="size-6 text-red-500" />
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">
                  Costos operativos altos
                </p>
                <p className="text-sm text-gray-400">
                  Mayor inversión en personal
                </p>
              </div>
            </div>

            {/* Item 4: Tiempo de espera */}
            <div className="flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-900/80 p-4 transition-all hover:border-red-500/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.15)]">
              <div className="relative flex size-12 items-center justify-center">
                <div
                  className="absolute size-12 animate-[pulse_3s_ease-in-out_infinite] rounded-full bg-red-500/20"
                  style={{ animationDelay: "1.5s" }}
                ></div>
                <div className="relative flex size-10 items-center justify-center rounded-full bg-red-500/20 p-2 ring-1 ring-red-500/50">
                  <RiTimer2Line className="size-6 text-red-500" />
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">
                  Tiempo de espera
                </p>
                <p className="text-sm text-gray-400">
                  Respuestas no inmediatas
                </p>
              </div>
            </div>

            {/* Item 5: Fatiga y errores humanos */}
            <div className="flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-900/80 p-4 transition-all hover:border-red-500/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.15)]">
              <div className="relative flex size-12 items-center justify-center">
                <div
                  className="absolute size-12 animate-[pulse_3s_ease-in-out_infinite] rounded-full bg-red-500/20"
                  style={{ animationDelay: "2s" }}
                ></div>
                <div className="relative flex size-10 items-center justify-center rounded-full bg-red-500/20 p-2 ring-1 ring-red-500/50">
                  <RiEmotionSadLine className="size-6 text-red-500" />
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">
                  Fatiga y errores humanos
                </p>
                <p className="text-sm text-gray-400">Calidad inconsistente</p>
              </div>
            </div>
          </div>

          {/* Background pattern */}
          <div className="absolute inset-0 -z-10">
            <svg className="h-full w-full opacity-20">
              <defs>
                <pattern
                  id="human-pattern"
                  patternUnits="userSpaceOnUse"
                  width="64"
                  height="64"
                >
                  {Array.from({ length: 17 }, (_, i) => {
                    const offset = i * 8
                    return (
                      <path
                        key={i}
                        d={`M${-106 + offset},110 L${22 + offset},-18`}
                        className="stroke-red-500/30"
                        strokeWidth="1"
                      />
                    )
                  })}
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#human-pattern)" />
            </svg>
          </div>

          {/* Problem icons in background */}
          <div className="absolute right-0 bottom-0 -z-5 opacity-30">
            <div className="pointer-events-none relative h-[200px] w-[200px] select-none">
              <div className="absolute top-[50px] left-[50px]">
                <div className="relative">
                  <div
                    className="absolute inset-0 size-10 animate-[pulse_3s_ease-in-out_infinite] bg-red-500/40 blur-[8px]"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="relative flex h-8 w-8 animate-[float_4s_ease-in-out_infinite] items-center justify-center bg-gray-800 ring-1 shadow-sm ring-black/15"
                    style={{ animationDelay: "1s" }}
                  >
                    <LeadTimeIcon className="size-4 opacity-50" />
                  </div>
                </div>
              </div>

              <div className="absolute top-[100px] left-[120px]">
                <div className="relative">
                  <div
                    className="absolute inset-0 size-10 animate-[pulse_3s_ease-in-out_infinite] bg-red-500/40 blur-[8px]"
                    style={{ animationDelay: "1.5s" }}
                  ></div>
                  <div
                    className="relative flex size-8 animate-[float_4s_ease-in-out_infinite] items-center justify-center bg-gray-800 p-1 ring-1 shadow-sm ring-black/15"
                    style={{ animationDelay: "3s" }}
                  >
                    <MissedCallsIcon className="size-4 opacity-50" />
                  </div>
                </div>
              </div>

              <div className="absolute top-[150px] left-[70px]">
                <div className="relative">
                  <div
                    className="absolute inset-0 size-10 animate-[pulse_3s_ease-in-out_infinite] bg-red-500/40 blur-[8px]"
                    style={{ animationDelay: "2s" }}
                  ></div>
                  <div
                    className="relative flex size-8 animate-[float_4s_ease-in-out_infinite] items-center justify-center bg-gray-800 p-1 ring-1 shadow-sm ring-black/15"
                    style={{ animationDelay: "4s" }}
                  >
                    <AlertIcon className="size-4 opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <FadeDiv className="mt-12 flex items-center justify-center">
        <a
          className="inline-flex cursor-pointer flex-row items-center justify-center gap-1 rounded-xl border-b-[1.5px] border-[#77FF00] bg-[#77FF00] px-6 py-4 text-lg leading-4 font-semibold tracking-wide whitespace-nowrap text-black shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_10px_0_rgba(255,255,255,0.15)] transition-all duration-200 ease-in-out hover:bg-white hover:shadow-white/50 sm:text-xl"
          href="https://admin.covox.io/login"
        >
          Potencia tu negocio hoy mismo 🚀
        </a>
      </FadeDiv>
    </section>
  )
}
