import {
  RiCarFill,
  RiHome3Fill,
  RiMoneyDollarCircleFill,
  RiTruckFill,
  RiUserStarFill,
} from "@remixicon/react"
import { Divider } from "../Divider"
import { StickerCard } from "./StickerCard"

export function CovoxAIAnalytics() {
  return (
    <section
      aria-labelledby="casos-de-uso"
      className="relative mx-auto w-full max-w-6xl overflow-hidden"
    >
      <div className="mb-6">
        <h2
          id="casos-de-uso"
          className="relative scroll-my-14 text-lg font-semibold tracking-tight text-[#77FF00]"
        >
          Verticales y Casos de Uso
          <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-[#77FF00]" />
        </h2>
        <p className="mt-2 max-w-lg text-3xl font-semibold tracking-tighter text-balance text-white md:text-4xl">
          Descubre cómo COVOX AI
          <br />
          potencia tu negocio
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-10 md:items-stretch">
        <div className="flex flex-col md:col-span-2">
          <StickerCard
            Icon={RiHome3Fill}
            title="Sector Inmobiliario"
            description="Califica leads y agenda visitas automáticamente."
          />
        </div>
        <div className="flex flex-col md:col-span-2">
          <StickerCard
            Icon={RiCarFill}
            title="Sector Automotriz"
            description="Responde consultas y agenda citas en concesionarios."
          />
        </div>
        <div className="flex flex-col md:col-span-2">
          <StickerCard
            Icon={RiTruckFill}
            title="Logística y Transporte"
            description="Automatiza novedades y mejora la comunicación."
          />
        </div>
        <div className="flex flex-col md:col-span-2">
          <StickerCard
            Icon={RiMoneyDollarCircleFill}
            title="Automatización de Cobranzas"
            description="Llama a clientes y automatiza gestiones de cobro."
          />
        </div>
        <div className="flex flex-col md:col-span-2">
          <StickerCard
            Icon={RiUserStarFill}
            title="Agente Comercial"
            description="Impacta más leads, haz seguimiento y aumenta cierres."
          />
        </div>
        <div className="mt-8 flex justify-center md:col-span-10">
          <a
            className="inline-flex cursor-pointer flex-row items-center justify-center gap-1 rounded-xl border-b-[1.5px] border-[#77FF00] bg-[#77FF00] px-6 py-4 text-lg leading-4 font-semibold tracking-wide whitespace-nowrap text-black shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_10px_0_rgba(255,255,255,0.15)] transition-all duration-200 ease-in-out hover:bg-white hover:shadow-white/50"
            href="https://admin.covox.io/login"
          >
            Empieza ahora con COVOX AI 🚀
          </a>
        </div>
      </div>
      <Divider className="mt-10"></Divider>
    </section>
  )
}
