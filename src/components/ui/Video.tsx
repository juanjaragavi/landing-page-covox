export function Video() {
  return (
    <div
      id="video-demo"
      aria-labelledby="video-demo"
      className="mx-auto max-w-6xl"
    >
      <div className="grid items-center gap-8 sm:grid-cols-6">
        <div className="px-4 sm:col-span-2 sm:px-0">
          <h2 className="scroll-my-40 text-center text-3xl font-semibold tracking-tighter text-[#77FF00] sm:mt-8 sm:text-left sm:text-balance md:text-4xl">
            Mira a COVOX AI en Acción
          </h2>
          <p className="mt-2 text-center text-lg leading-tight text-white sm:mt-3 sm:mb-8 sm:text-left">
            Descubre cómo nuestros agentes conversacionales pueden transformar
            tu negocio.
          </p>
        </div>
        <div className="relative rounded-xl sm:col-span-4">
          <div className="overflow-hidden rounded-xl shadow-lg shadow-[#77FF00]/20">
            <div className="aspect-video w-full rounded-xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/watch?si=JRfbaTu_ukTBoBgE&v=oMWnymTF1KI"
                title="COVOX AI Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 rounded-xl border border-[#77FF00]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
