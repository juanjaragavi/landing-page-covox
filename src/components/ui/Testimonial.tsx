import Image from "next/image"

export default function Testimonial() {
  return (
    <div
      id="testimoniales"
      aria-labelledby="testimoniales"
      className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-xl shadow-2xl shadow-[#366A79]/70"
    >
      <div className="absolute inset-0 object-cover">
        <Image
          alt="Delta Oil Logo"
          src="/images/delta-oil.webp"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute top-[18.3rem] right-6 w-8/12 sm:top-[12rem] sm:right-24 sm:w-[23rem] md:top-[12rem] md:right-0 md:w-[25rem] lg:-right-28 lg:bottom-0 lg:w-[34rem]">
        <Image
          alt="Delta Oil Logo"
          src="/images/delta-oil-logo.webp"
          width={340}
          height={147}
        />
      </div>
      <div className="relative z-20 my-6 p-8 sm:p-14 lg:px-24">
        <div>
          <blockquote className="relative max-w-xl text-xl leading-tight tracking-tight text-white md:text-2xl lg:text-3xl">
            <p className="font-light before:absolute before:top-0 before:right-full before:content-['“'] after:text-white after:content-['”']">
              Desde que implementamos los agentes de IA de Covox para realizar
              llamadas, nuestros agendamientos{" "}
              <span className="font-semibold">
                aumentaron en más de un 25%.
              </span>{" "}
              <span className="leading-tight font-light text-white">
                Ahora, nuestro equipo puede enfocarse en tareas más
                estratégicas, mientras la IA se encarga de las llamadas{" "}
                <span className="font-semibold">de manera automatizada.</span>
              </span>
            </p>
          </blockquote>
        </div>
        <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <div className="relative shrink-0 rounded-full bg-white/15 p-0.5 ring-1 ring-white/20">
            <Image
              alt="Robinson Martinez, Gerente Nacional de Ventas de DeltaOil"
              src="/images/robinson-martinez.webp"
              width={65}
              height={65}
              className="rounded-full border object-contain"
            />
          </div>
          <div>
            <div className="text-lg leading-tight font-semibold text-white">
              Robinson Martinez
            </div>
            <div className="text-md leading-tight text-yellow-400">
              Gerente Nacional de Ventas
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
