import { RiPlayLine, RiSettings3Line, RiUserAddLine } from "@remixicon/react"

export const Map = () => {
  return (
    <section
      id="farm-management"
      aria-labelledby="management-title"
      className="relative flex w-full max-w-6xl scroll-my-24 flex-col items-center justify-center overflow-hidden rounded-2xl bg-gray-950 px-10 shadow-2xl shadow-black/50 sm:px-16 md:px-28 lg:mx-auto"
    >
      <div className="absolute inset-0 z-0">
        <svg className="h-full w-full">
          <defs>
            <pattern
              id="diagonal-pattern"
              patternUnits="userSpaceOnUse"
              width="64"
              height="64"
            >
              {Array.from({ length: 17 }, (_, i) => {
                const offset = i * 8
                return (
                  <path
                    key={i}
                    d={`M${-106 + offset} 110L${22 + offset} -18`}
                    className="stroke-zinc-800/50"
                    strokeWidth="1"
                  />
                )
              })}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-pattern)" />
        </svg>
      </div>
      <div className="absolute left-0 z-10 h-full backdrop-blur-[2px]">
        <svg
          className="h-full w-8 border-r border-zinc-900 stroke-zinc-800 sm:w-20"
          style={{
            maskImage:
              "linear-gradient(transparent, white 10rem, white calc(100% - 10rem), transparent)",
          }}
        >
          <defs>
            <pattern
              id="diagonal-border-pattern"
              patternUnits="userSpaceOnUse"
              width="64"
              height="64"
            >
              {Array.from({ length: 17 }, (_, i) => {
                const offset = i * 8
                return (
                  <path
                    key={i}
                    d={`M${-106 + offset} 110L${22 + offset} -18`}
                    stroke=""
                    strokeWidth="1"
                  />
                )
              })}
            </pattern>
          </defs>
        </svg>
      </div>
      <div className="absolute right-0 z-10 h-full backdrop-blur-[2px]">
        <svg
          className="h-full w-8 border-r border-zinc-900 stroke-zinc-800 sm:w-20"
          style={{
            maskImage:
              "linear-gradient(transparent, white 10rem, white calc(100% - 10rem), transparent)",
          }}
        >
          <defs>
            <pattern
              id="diagonal-border-pattern"
              patternUnits="userSpaceOnUse"
              width="64"
              height="64"
            >
              {Array.from({ length: 17 }, (_, i) => {
                const offset = i * 8
                return (
                  <path
                    key={i}
                    d={`M${-106 + offset} 110L${22 + offset} -18`}
                    stroke=""
                    strokeWidth="1"
                  />
                )
              })}
            </pattern>
          </defs>
        </svg>
      </div>

      <div className="z-50 pt-12 text-base font-semibold tracking-tight text-[#77FF00] sm:pt-20 sm:text-lg">
        ¿Cómo Funciona?
      </div>
      <h2
        id="management-title"
        className="z-50 max-w-[700px] text-center text-2xl font-semibold tracking-tight text-balance text-white md:text-5xl"
      >
        Totalmente personalizable, fácil e intuitivo.
      </h2>
      <div className="relative z-10 mt-20 mb-10 flex w-full items-center justify-center">
        <div className="flex w-full max-w-3xl items-center justify-between">
          {/* Step 1 */}
          <div className="relative flex flex-col items-center">
            <div className="flex h-full items-center justify-center">
              <div className="absolute size-14 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
              <RiUserAddLine
                className="absolute z-10 size-8 text-white"
                style={{
                  top: "0%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <div
                style={{
                  animationDelay: "0.2s",
                }}
                className="absolute size-14 animate-[ping_5s_ease_infinite] rounded-full ring-1 ring-[#77FF00]/50"
              ></div>
            </div>
            <h3 className="mt-14 text-xl font-semibold text-[#77FF00]">
              Paso 1
            </h3>
            <div className="text-md relative mt-2 max-w-[20rem] text-center leading-tight text-white">
              Crea tu agente en minutos, sin conocimientos técnicos.
            </div>
          </div>

          {/* Connector Line */}
          <div className="relative h-px w-1/4 overflow-hidden bg-gradient-to-r from-gray-900 via-[#77FF00] to-gray-900">
            <div className="animate-slide absolute inset-0 bg-gradient-to-r from-transparent via-[#77FF00] to-transparent"></div>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center">
            <div className="flex h-full items-center justify-center">
              <div className="absolute size-14 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
              <RiSettings3Line
                className="absolute z-10 size-8 text-white"
                style={{
                  top: "0%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <div
                style={{
                  animationDelay: "1s",
                }}
                className="absolute size-14 animate-[ping_5s_ease_infinite] rounded-full ring-1 ring-[#77FF00]/50"
              ></div>
            </div>
            <h3 className="mt-14 text-xl font-semibold text-[#77FF00]">
              Paso 2
            </h3>
            <div className="text-md relative mt-2 max-w-[20rem] text-center leading-tight text-white">
              Configura respuestas y objetivos según tu industria.
            </div>
          </div>

          {/* Connector Line */}
          <div className="relative h-px w-1/4 overflow-hidden bg-gradient-to-r from-gray-900 via-[#77FF00] to-gray-900">
            <div className="animate-slide absolute inset-0 bg-gradient-to-r from-transparent via-[#77FF00] to-transparent"></div>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center">
            <div className="flex h-full items-center justify-center">
              <div className="absolute size-14 rounded-full bg-gray-950 ring-1 ring-white/15"></div>
              <RiPlayLine
                className="absolute z-10 size-8 text-white"
                style={{
                  top: "0%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <div
                style={{
                  animationDelay: "2s",
                }}
                className="absolute size-14 animate-[ping_5s_ease_infinite] rounded-full ring-1 ring-[#77FF00]/50"
              ></div>
            </div>
            <h3 className="mt-14 text-xl font-semibold text-[#77FF00]">
              Paso 3
            </h3>
            <div className="text-md relative mt-2 max-w-[20rem] text-center leading-tight text-white">
              Activa tu agente y empieza a recibir conversiones.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
