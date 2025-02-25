import {
  RiBarChartBoxLine,
  RiCircleLine,
  RiCustomerService2Line,
  RiLoaderFill,
  RiRobot2Line,
  RiTimeLine,
} from "@remixicon/react"
import Image from "next/image"
import { CovoxAIMark } from "../../../public/CovoxAIMark"
import { CovoxFavicon } from "../../../public/CovoxFavicon"
import { FadeDiv } from "../Fade"
import { Orbit } from "../Orbit"
import CheckCircleIcon from "./CheckCircleIcon"
import ChipViz from "./ChipViz"
import ErrorCircleIcon from "./ErrorCircleIcon"
import { HighCostsIcon, LeadTimeIcon, MissedCallsIcon } from "./ProblemIcons"
import { AutoResponseIcon, ConversionIcon, LeadsIcon } from "./SolutionIcons"

export default function Features() {
  return (
    <section
      aria-label="COVOX AI | Agentes Conversacionales Features for Farms"
      id="solucion"
      className="relative mx-auto max-w-6xl scroll-my-24"
    >
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
              className="stroke-gray-300 dark:stroke-gray-700"
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
              className="stroke-gray-300 dark:stroke-gray-700"
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
              className="stroke-gray-300 dark:stroke-gray-700"
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
              className="stroke-gray-300 dark:stroke-gray-700"
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
              className="stroke-gray-300 dark:stroke-gray-700"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-0">
        {/* Content */}

        <div className="col-span-2 my-auto px-2">
          <h2 className="relative mb-3 pl-2 text-4xl font-semibold tracking-tight text-red-500">
            Problema
            <div className="absolute top-1 -left-[8px] h-8 w-[5px] rounded-r-sm bg-red-500" />
          </h2>
          <div className="flex flex-col gap-y-2">
            <div className="flex items-start gap-x-2">
              <div className="text-xl">
                <ErrorCircleIcon className="size-8" />
              </div>
              <p className="text-xl leading-tight font-semibold tracking-tighter text-balance text-gray-900 md:text-2xl dark:text-gray-100">
                Tu equipo pierde tiempo en llamadas repetitivas
              </p>
            </div>
            <div className="flex items-start gap-x-2">
              <div className="text-xl">
                <ErrorCircleIcon className="size-8" />
              </div>
              <p className="text-xl leading-tight font-semibold tracking-tighter text-balance text-gray-900 md:text-2xl dark:text-gray-100">
                No logras atender todos los leads a tiempo
              </p>
            </div>
            <div className="flex items-start gap-x-2">
              <div className="text-xl">
                <ErrorCircleIcon className="size-8" />
              </div>
              <p className="text-xl leading-tight font-semibold tracking-tighter text-gray-900 md:text-2xl dark:text-gray-100">
                Los costos operativos son altos y los cierres bajos
              </p>
            </div>
          </div>
        </div>

        <div className="relative col-span-2 flex items-center justify-center overflow-hidden">
          <svg className="absolute size-full [mask-image:linear-gradient(transparent,white_10rem)]">
            <defs>
              <pattern
                id="diagonal-feature-pattern"
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
                      className="stroke-gray-200/70 dark:stroke-gray-700/70"
                      strokeWidth="1"
                    />
                  )
                })}
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#diagonal-feature-pattern)"
            />
          </svg>
          <div className="relative h-[432px] w-[432px]">
            <svg
              id="grid"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="mask absolute size-[432px]"
            >
              <path
                className="stroke-gray-300 dark:stroke-gray-700"
                d="M48 0v432M96 0v432M144 0v432M192 0v432M240 0v432M288 0v432M336 0v432M384 0v432M0 48h432M0 96h432M0 144h432M0 192h432M0 240h432M0 288h432M0 336h432M0 384h432"
              />
            </svg>

            <div className="pointer-events-none relative h-full select-none">
              <div className="absolute top-[192px] left-[191.8px]">
                <div className="flex h-12 w-12 items-center justify-center bg-white ring-1 shadow-sm ring-black/15 dark:bg-gray-800">
                  <CovoxAIMark className="animate-pulse p-1" />
                </div>
              </div>
              <div className="absolute top-[48px] left-[144px]">
                <div className="relative">
                  <div
                    className="absolute inset-0 size-14 animate-[pulse_3s_ease-in-out_infinite] bg-red-500/40 blur-[8px]"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="relative flex h-12 w-12 animate-[float_4s_ease-in-out_infinite] items-center justify-center bg-white ring-1 shadow-sm ring-black/15 dark:bg-gray-800"
                    style={{ animationDelay: "1s" }}
                  >
                    <LeadTimeIcon />
                  </div>
                </div>
              </div>

              <div className="absolute top-[240px] left-[385px]">
                <div className="relative">
                  <div
                    className="absolute inset-0 size-14 animate-[pulse_3s_ease-in-out_infinite] bg-red-500/40 blur-[8px]"
                    style={{ animationDelay: "1.5s" }}
                  ></div>
                  <div
                    className="relative flex size-11 animate-[float_4s_ease-in-out_infinite] items-center justify-center bg-white p-2 ring-1 shadow-sm ring-black/15 dark:bg-gray-800"
                    style={{ animationDelay: "3s" }}
                  >
                    <MissedCallsIcon />
                  </div>
                </div>
              </div>

              <div className="absolute top-[337px] left-[336px]">
                <div className="relative">
                  <div
                    className="absolute inset-0 size-14 animate-[pulse_3s_ease-in-out_infinite] bg-red-500/40 blur-[8px]"
                    style={{ animationDelay: "2s" }}
                  ></div>
                  <div
                    className="relative flex size-11 animate-[float_4s_ease-in-out_infinite] items-center justify-center bg-white p-1 ring-1 shadow-sm ring-black/15 dark:bg-gray-800"
                    style={{ animationDelay: "4s" }}
                  >
                    <HighCostsIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 my-auto px-2">
          <FadeDiv className="relative flex flex-row gap-x-1">
            <h2 className="animate-fadeIn relative mt-2 pl-2 text-4xl font-semibold tracking-tight text-[#77FF00]">
              Solución
              <div className="absolute top-1 -left-[8px] h-8 w-[5px] rounded-r-sm bg-[#77FF00]" />
            </h2>
            <Image
              src="/images/logo-header.webp"
              priority
              loading="eager"
              quality={90}
              alt="Covox Logo"
              width={190}
              height={40}
            />
          </FadeDiv>
          <div className="mt-2 flex flex-col gap-y-2">
            <div className="flex items-start gap-x-2">
              <div className="text-xl">
                <CheckCircleIcon className="size-8" />
              </div>
              <p className="text-xl leading-tight font-semibold tracking-tighter text-balance text-gray-900 md:text-2xl dark:text-gray-100">
                Responde y agenda{" "}
                <span className="text-[#77FF00]">automáticamente</span> 24/7
              </p>
            </div>
            <div className="flex items-start gap-x-2">
              <div className="text-xl">
                <CheckCircleIcon className="size-8" />
              </div>
              <p className="text-xl leading-tight font-semibold tracking-tighter text-gray-900 md:text-2xl dark:text-gray-100">
                Atiende{" "}
                <span className="text-[#77FF00]">100% de tus leads</span> sin
                perder oportunidades
              </p>
            </div>
            <div className="flex items-start gap-x-2">
              <div className="text-xl">
                <CheckCircleIcon className="size-8" />
              </div>
              <p className="text-xl leading-tight font-semibold tracking-tighter text-gray-900 md:text-2xl dark:text-gray-100">
                Reduce costos y{" "}
                <span className="text-[#77FF00]">aumenta las conversiones</span>{" "}
                sin contratar más personal
              </p>
            </div>
          </div>
        </div>

        <div className="relative col-span-2 flex items-center justify-center overflow-hidden">
          <svg
            className="absolute size-full [mask-image:linear-gradient(transparent,white_10rem)]"
            // style={{
            //   maskImage:
            //     "linear-gradient(transparent, white 20rem, white calc(100% - 20rem), transparent)",
            // }}
          >
            <defs>
              <pattern
                id="diagonal-feature-pattern"
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
                      className="stroke-gray-200/70 dark:stroke-gray-700/70"
                      strokeWidth="1"
                    />
                  )
                })}
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#diagonal-feature-pattern)"
            />
          </svg>
          <div className="pointer-events-none h-[26rem] p-10 select-none">
            <div className="relative flex flex-col items-center justify-center">
              <Orbit
                durationSeconds={40}
                radiusPx={140}
                keepUpright
                orbitingObjects={[
                  <div
                    key="obj1"
                    className="relative flex items-center justify-center"
                  >
                    <AutoResponseIcon className="z-10 size-6 text-white" />
                    <div className="absolute size-10 rounded-full bg-white/50 ring-1 shadow-lg ring-black/5 dark:bg-gray-800/50"></div>
                    <div className="absolute -top-5 left-4">
                      <div className="flex gap-1">
                        <div className="flex items-center justify-center rounded-l-full bg-gray-600 p-1 text-xs ring-1 ring-gray-200">
                          <RiCircleLine className="size-3 shrink-0 text-[#77FF00]" />
                        </div>
                        <div className="rounded-r-full bg-white/50 py-0.5 pr-1.5 pl-1 text-xs font-semibold whitespace-nowrap text-gray-900 ring-1 ring-gray-200 dark:bg-gray-100/50 dark:ring-gray-200">
                          24/7
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        animationDelay: "1s",
                      }}
                      className="absolute size-10 animate-[float_4s_ease-in-out_infinite] rounded-full ring-1 ring-[#77FF00]/50"
                    ></div>
                  </div>,

                  <div
                    key="obj2"
                    className="relative flex items-center justify-center"
                  >
                    <LeadsIcon className="z-10 size-8 text-white" />
                    <div className="absolute size-10 rounded-full bg-[#77FF00]/50 ring-1 shadow-lg ring-black/5 dark:bg-gray-800/50"></div>
                    <div className="absolute -top-5 left-4">
                      <div className="flex gap-1">
                        <div className="bg-bg-gray-600 flex items-center justify-center rounded-l-full p-1 text-xs ring-1 ring-gray-200">
                          <RiLoaderFill className="size-3 shrink-0 animate-spin text-[#77FF00]" />
                        </div>
                        <div className="rounded-r-full bg-white/50 py-0.5 pr-1.5 pl-1 text-xs font-semibold whitespace-nowrap text-gray-900 ring-1 ring-gray-200 dark:bg-gray-100/50 dark:ring-gray-200">
                          100%
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        animationDelay: "4s",
                      }}
                      className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-[#77FF00]/50"
                    ></div>
                  </div>,

                  <div
                    key="obj3"
                    className="relative flex items-center justify-center"
                  >
                    <ConversionIcon className="z-10 size-8 text-white" />
                    <div className="absolute size-10 rounded-full bg-[#77FF00]/50 ring-1 shadow-lg ring-black/5 dark:bg-gray-800/50"></div>
                    <div
                      style={{
                        animationDelay: "2s",
                      }}
                      className="absolute size-10 animate-[ping_7s_ease_infinite] rounded-full ring-1 ring-[#77FF00]/50"
                    ></div>
                  </div>,
                ]}
              >
                <div className="relative flex h-48 w-48 items-center justify-center">
                  <div className="rounded-full p-1 ring-1 ring-black/10">
                    <div className="relative z-10 flex size-20 items-center justify-center rounded-full bg-white ring-1 shadow-[inset_0px_-15px_20px_rgba(0,0,0,0.1),0_7px_10px_0_rgba(0,0,0,0.15)] ring-black/20 dark:bg-gray-800">
                      <CovoxFavicon />
                    </div>
                    <div className="absolute inset-12 animate-[spin_8s_linear_infinite] rounded-full bg-linear-to-t from-transparent via-[#77FF00] to-transparent blur-lg" />
                  </div>
                </div>
              </Orbit>
            </div>
          </div>
        </div>
      </div>

      <div className="relative col-span-2 flex items-center justify-center overflow-hidden">
        <FadeDiv className="absolute left-1/2 z-50 flex -translate-x-1/2 items-center justify-center">
          <a
            className="inline-flex cursor-pointer flex-row items-center justify-center gap-1 rounded-xl border-b-[1.5px] border-[#77FF00] bg-[#77FF00] px-6 py-4 text-lg leading-4 font-semibold tracking-wide whitespace-nowrap text-black shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_10px_0_rgba(255,255,255,0.15)] transition-all duration-200 ease-in-out hover:bg-white hover:shadow-white/50 sm:text-xl"
            href="https://admin.covox.io/login"
          >
            Empieza ahora con COVOX AI 🚀
          </a>
        </FadeDiv>
        <svg
          className="absolute size-full [mask-image:linear-gradient(white_10rem,transparent)]"
          // style={{
          //   maskImage:
          //     "linear-gradient(transparent, white 20rem, white calc(100% - 20rem), transparent)",
          // }}
        >
          <defs>
            <pattern
              id="diagonal-feature-pattern"
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
                    className="stroke-gray-200/70 dark:stroke-gray-700/70"
                    strokeWidth="1"
                  />
                )
              })}
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#diagonal-feature-pattern)"
          />
        </svg>
        <div className="pointer-events-none relative flex size-full h-[26rem] items-center justify-center p-10 select-none">
          <div className="relative">
            <div className="absolute top-[6rem] left-[6rem] z-20">
              <div className="relative mx-auto w-fit rounded-full bg-gray-50 p-1 ring-1 shadow-md shadow-black/10 ring-[#77FF00] dark:bg-gray-800">
                <div className="w-fit rounded-full bg-linear-to-b from-white to-gray-100 p-3 ring-1 shadow-[inset_0px_-2px_6px_rgba(0,0,0,0.09),0_3px_5px_0_rgba(0,0,0,0.19)] ring-white/50 ring-inset dark:from-gray-800 dark:to-gray-900 dark:ring-gray-700/50">
                  <RiCustomerService2Line
                    className="size-[5.5] text-white"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[6rem] right-[6rem] z-20">
              <div className="relative mx-auto w-fit rounded-full bg-gray-50 p-1 ring-1 shadow-md shadow-black/10 ring-[#77FF00] dark:bg-gray-800">
                <div className="w-fit rounded-full bg-linear-to-b from-white to-gray-100 p-3 ring-1 shadow-[inset_0px_-2px_6px_rgba(0,0,0,0.05),0_7px_10px_0_rgba(0,0,0,0.10)] ring-white/50 ring-inset dark:from-gray-800 dark:to-gray-900 dark:ring-gray-700/50">
                  <RiBarChartBoxLine
                    className="size-[5.5] text-white"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
            <div className="absolute right-[6rem] bottom-[6rem] z-20">
              <div className="relative mx-auto w-fit rounded-full bg-gray-50 p-1 ring-1 shadow-md shadow-black/10 ring-[#77FF00] dark:bg-gray-800">
                <div className="w-fit rounded-full bg-linear-to-b from-white to-gray-100 p-3 ring-1 shadow-[inset_0px_-2px_6px_rgba(0,0,0,0.05),0_7px_10px_0_rgba(0,0,0,0.10)] ring-white/50 ring-inset dark:from-gray-800 dark:to-gray-900 dark:ring-gray-700/50">
                  <RiRobot2Line
                    className="size-[5.5] text-white"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
            <div className="absolute bottom-[6rem] left-[6rem] z-20">
              <div className="relative mx-auto w-fit rounded-full bg-gray-50 p-1 ring-1 shadow-md shadow-black/10 ring-[#77FF00] dark:bg-gray-800">
                <div className="w-fit rounded-full bg-linear-to-b from-white to-gray-100 p-3 ring-1 shadow-[inset_0px_-2px_6px_rgba(0,0,0,0.05),0_7px_10px_0_rgba(0,0,0,0.10)] ring-white/50 ring-inset dark:from-gray-800 dark:to-gray-900 dark:ring-gray-700/50">
                  <RiTimeLine
                    className="size-[5.5] text-white"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            {[0, 45, 135, 180, 225, 315, 360].map((rotation, index) => (
              <div
                key={rotation}
                className="absolute origin-left overflow-hidden"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                <div className="relative">
                  <div className="h-0.5 w-60 bg-linear-to-r from-gray-300 to-transparent dark:from-gray-700" />
                  <div
                    className="absolute top-0 left-0 h-0.5 w-28 bg-linear-to-r from-transparent via-[#77FF00] to-transparent"
                    style={{
                      animation: `gridMovingLine 5s linear infinite ${index * 1.2}s`,
                      animationFillMode: "backwards",
                    }}
                  />
                </div>
              </div>
            ))}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <ChipViz />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
