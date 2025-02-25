export default function Post() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-44">
      <h1 className="my-4 text-3xl font-bold text-[#77FF00]">
        Primeros Pasos con Covox AI: Automatizando Conversaciones de Ventas
      </h1>
      <p className="mb-8 text-gray-400">25 de febrero de 2025</p>

      <div className="prose prose-lg prose-invert max-w-none text-white">
        <p>
          Covox AI es una potente plataforma que ayuda a las empresas a
          automatizar conversaciones, agendar citas y cerrar más ventas mediante
          agentes conversacionales de IA hiperrealistas. Esta guía le mostrará
          los conceptos básicos para comenzar a transformar su proceso de ventas
          con nuestra tecnología.
        </p>

        <h2 className="my-4 text-3xl font-bold text-white">
          Configuración de su Cuenta
        </h2>
        <p>Antes de comenzar a usar Covox AI, necesitará:</p>
        <ol className="list-decimal pl-6 marker:text-[#77FF00]">
          <li>
            <strong>Crear una cuenta</strong> - Visite{" "}
            <a href="https://admin.covox.io/login">admin.covox.io</a> y haga
            clic en &quot;Crear Cuenta&quot;
          </li>
          <li>
            <strong>Verificar su correo electrónico</strong> - Revise su bandeja
            de entrada para encontrar un enlace de verificación
          </li>
          <li>
            <strong>Completar su perfil</strong> - Añada los detalles de su
            empresa y sector
          </li>
        </ol>

        <h2 className="my-4 text-3xl font-bold text-white">
          Creación de su Primer Agente Conversacional
        </h2>
        <p>
          Covox AI funciona creando agentes conversacionales personalizados que
          representan a su empresa. Para crear su primer agente:
        </p>
        <ol className="list-decimal pl-6 marker:text-[#77FF00]">
          <li>
            Seleccione el objetivo del agente (calificación de leads,
            programación de citas, seguimiento de clientes, etc.)
          </li>
          <li>
            Configure el prompt con información específica sobre su empresa y
            ofertas
          </li>
          <li>
            Personalice la voz del agente para que se alinee con la identidad de
            su marca
          </li>
        </ol>

        <pre className="my-8 overflow-x-auto rounded bg-gray-800 p-4 text-gray-200">
          <code>
            {`// Ejemplo de configuración de un agente para programación de citas
{
  "nombre_agente": "Ana - Asistente de Ventas",
  "objetivo": "programacion_citas",
  "industria": "inmobiliaria",
  "personalidad": "profesional, amigable, eficiente",
  "conocimiento_producto": [
    "Apartamentos de lujo en zona norte",
    "Casas familiares en urbanizaciones cerradas",
    "Oficinas comerciales en el centro financiero"
  ],
  "disponibilidad_citas": {
    "dias": ["lunes", "martes", "miércoles", "jueves", "viernes"],
    "horarios": ["9:00", "10:00", "11:00", "12:00", "16:00", "17:00"]
  },
  "integracion_calendario": "google_calendar"
}`}
          </code>
        </pre>

        <h2 className="my-4 text-3xl font-bold text-white">
          Conexión con sus Fuentes de Leads
        </h2>
        <p>
          Para que su agente comience a trabajar, necesita conectarlo con sus
          fuentes de leads:
        </p>
        <ul className="list-disc pl-6 marker:text-[#77FF00]">
          <li>Integración con su CRM (Salesforce, HubSpot, etc.)</li>
          <li>Conexión con su sistema telefónico</li>
          <li>Configuración de webhooks para formularios web</li>
          <li>Integración con WhatsApp Business</li>
        </ul>
        <p>
          Nuestro sistema permite una configuración sencilla mediante conectores
          predefinidos para las plataformas más populares, o mediante nuestra
          API para integraciones personalizadas.
        </p>

        <h2 className="my-4 text-3xl font-bold text-white">
          Entendiendo los Resultados
        </h2>
        <p>
          Una vez que su agente esté activo, podrá monitorear su rendimiento a
          través de nuestro panel de control, que incluye:
        </p>
        <ul className="list-disc pl-6 marker:text-[#77FF00]">
          <li>Número de conversaciones iniciadas</li>
          <li>Tasa de conversión a citas programadas</li>
          <li>Análisis de objeciones comunes</li>
          <li>Duración promedio de las conversaciones</li>
        </ul>
        <p>
          Nuestro panel de control codificado por colores facilita la
          identificación de áreas de oportunidad, con indicadores verdes
          mostrando métricas saludables y rojos señalando aspectos que requieren
          atención.
        </p>

        <h2 className="my-4 text-3xl font-bold text-white">Próximos Pasos</h2>
        <p>
          Después de familiarizarse con los conceptos básicos, explore nuestras
          funciones avanzadas:
        </p>
        <ul className="list-disc pl-6 marker:text-[#77FF00]">
          <li>
            <strong>Personalización Avanzada</strong>: Ajuste las respuestas y
            el tono de su agente para diferentes segmentos de clientes
          </li>
          <li>
            <strong>Campañas Proactivas</strong>: Configure su agente para
            iniciar conversaciones con leads inactivos o para seguimiento
            post-venta
          </li>
          <li>
            <strong>Integración Multicanal</strong>: Expanda la presencia de su
            agente a múltiples canales de comunicación simultáneamente
          </li>
        </ul>
        <p>
          Si tiene alguna pregunta, nuestro equipo de soporte está disponible
          24/7 en support@covox.io.
        </p>

        <h2 className="my-4 text-3xl font-bold text-white">
          Casos de Éxito por Industria
        </h2>
        <p>
          Nuestros clientes están experimentando resultados transformadores en
          diversos sectores:
        </p>

        <h3 className="my-4 text-2xl font-bold text-[#77FF00]">
          Sector Inmobiliario
        </h3>
        <p>
          Inmobiliaria Horizonte aumentó sus citas programadas en un 45% y
          redujo el costo por adquisición en un 30% al implementar agentes de
          Covox AI para la calificación inicial de leads y programación de
          visitas a propiedades.
        </p>

        <h3 className="my-4 text-2xl font-bold text-[#77FF00]">
          Sector Automotriz
        </h3>
        <p>
          Concesionarios Unidos logró atender el 100% de sus leads entrantes,
          incluso fuera de horario comercial, resultando en un incremento del
          28% en pruebas de manejo programadas y un aumento del 15% en ventas
          mensuales.
        </p>

        <h3 className="my-4 text-2xl font-bold text-[#77FF00]">
          Logística y Transporte
        </h3>
        <p>
          TransExpress mejoró su comunicación con clientes mediante agentes de
          IA que proporcionan actualizaciones proactivas sobre envíos y
          resuelven consultas comunes, reduciendo las llamadas a su centro de
          atención en un 60%.
        </p>

        <p>
          Comience hoy mismo con Covox AI y descubra cómo nuestros agentes
          conversacionales pueden transformar su proceso de ventas, aumentar la
          eficiencia y mejorar la experiencia de sus clientes.
        </p>
      </div>
    </div>
  )
}

export const metadata = {
  title: "Primeros Pasos con Covox AI: Automatizando Conversaciones de Ventas",
  description:
    "Aprenda cómo implementar agentes conversacionales de IA para automatizar ventas, programar citas y mejorar la atención al cliente con nuestra guía paso a paso.",
}
