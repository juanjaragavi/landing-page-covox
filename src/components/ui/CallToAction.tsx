export function CallToAction() {
  return (
    <section aria-labelledby="cta-title" className="mx-auto max-w-6xl">
      <div className="grid items-start sm:grid-cols-6 sm:gap-8 sm:px-0">
        <div className="px-6 sm:col-span-2 sm:px-0">
          <h2
            id="cta-title"
            className="scroll-my-40 text-center text-3xl font-semibold tracking-tighter text-balance text-[#77FF00] sm:mt-8 sm:text-left md:text-4xl"
          >
            ¡No Esperes Más!
          </h2>
          <p className="mt-2 text-center text-lg leading-tight text-white sm:mt-3 sm:mb-8 sm:text-left">
            Empieza ahora y automatiza tu negocio con COVOX AI.
          </p>
        </div>
        <div className="relative isolate rounded-xl sm:col-span-4 sm:h-full">
          <div className="absolute inset-0 -z-5 rounded-2xl bg-gray-900/80 blur-xl"></div>
          <form className="relative z-10 rounded-2xl bg-gray-900/80 p-8 backdrop-blur-sm">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    placeholder="Nombre"
                    aria-label="Nombre"
                    className="block w-full rounded-md border-gray-700 bg-gray-800 px-2 py-1 text-white shadow-sm placeholder:font-medium placeholder:text-[#77FF00]/80 focus:border-[#77FF00] focus:ring-[#77FF00]"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Correo Electrónico"
                    aria-label="Correo Electrónico"
                    className="block w-full rounded-md border-gray-700 bg-gray-800 px-2 py-1 text-white shadow-sm placeholder:font-medium placeholder:text-[#77FF00]/80 focus:border-[#77FF00] focus:ring-[#77FF00]"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Teléfono"
                    aria-label="Teléfono"
                    className="block w-full rounded-md border-gray-700 bg-gray-800 px-2 py-1 text-white shadow-sm placeholder:font-medium placeholder:text-[#77FF00]/80 focus:border-[#77FF00] focus:ring-[#77FF00]"
                    required
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <select
                    id="reason"
                    aria-label="Motivo de Contacto"
                    className="block w-full rounded-md border-gray-700 bg-gray-800 p-2 text-white shadow-sm placeholder:font-medium placeholder:text-[#77FF00]/80 focus:border-[#77FF00] focus:ring-[#77FF00]"
                    required
                  >
                    <option value="" className="font-medium text-[#77FF00]/80">
                      Motivo de Contacto
                    </option>
                    <option value="demo">Solicitar Demo</option>
                    <option value="support">Soporte Técnico</option>
                    <option value="sales">Consultas Comerciales</option>
                    <option value="sales">Trabaja con Nosotros</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
                <div>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Mensaje"
                    aria-label="Mensaje"
                    className="block w-full rounded-md border-gray-700 bg-gray-800 p-2 text-white shadow-sm placeholder:font-medium placeholder:text-[#77FF00]/80 focus:border-[#77FF00] focus:ring-[#77FF00]"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="text-md w-full cursor-pointer rounded-md bg-[#77FF00] px-4 py-2 font-semibold text-gray-900 shadow-sm transition-all duration-200 ease-linear hover:bg-white focus:ring-2 focus:ring-[#77FF00] focus:ring-offset-2 focus:outline-none"
                >
                  Enviar Mensaje
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
