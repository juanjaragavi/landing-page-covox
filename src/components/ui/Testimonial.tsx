import Image from "next/image"

export default function Testimonial() {
  return (
    <section
      id="testimoniales"
      className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-xl shadow-2xl shadow-[#366A79]/70"
    >
      <div className="absolute inset-0 object-cover">
        <Image
          alt="clouds background"
          src="/images/delta-oil.webp"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute top-[19rem] -right-4 w-[19rem] sm:top-[12rem] sm:right-24 sm:w-[23rem] md:top-[12rem] md:right-0 md:w-[25rem] lg:-right-28 lg:bottom-0 lg:w-[34rem]">
        <Image
          alt="clouds background"
          src="/images/delta-oil-logo.webp"
          width={340}
          height={147}
        />
      </div>
      <div className="relative z-20 my-6 p-8 sm:p-14 lg:px-24">
        <div>
          <blockquote className="relative max-w-xl text-xl leading-relaxed tracking-tight text-white md:text-2xl lg:text-3xl">
            <p className="leading-tight before:absolute before:top-0 before:right-full before:content-['“'] after:text-white after:content-['”']">
              <strong className="font-semibold">
                He visto cómo esta solución nos ha permitido optimizar la
                gestión de nuestras interacciones comerciales
              </strong>{" "}
              <span className="text-white">
                mejorando la eficiencia en la atención al cliente y la
                prospección en la realización de llamadas en frío mediante
                tecnología de{" "}
                <strong className="font-semibold">IA avanzada.</strong>
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
    </section>
  )
}
