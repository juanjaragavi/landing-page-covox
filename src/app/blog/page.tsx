import Link from "next/link"

// Blog post metadata
const blogPosts = [
  {
    slug: "estrategias-ia-equipos-comerciales",
    frontMatter: {
      title:
        "Estrategias Prácticas de IA Generativa para Equipos Comerciales: Potenciando el Día a Día del Vendedor",
      date: "2025-02-25",
      excerpt:
        "Tácticas concretas y casos reales para integrar la IA generativa en las rutinas comerciales, optimizando desde la prospección hasta el postventa con resultados de hasta 65% más cierres y 40% menos tareas administrativas.",
    },
  },
  {
    slug: "revolucion-agentes-ia-atencion-cliente",
    frontMatter: {
      title:
        "La Revolución de los Agentes de IA Generativa en la Atención al Cliente y Optimización Comercial",
      date: "2025-02-25",
      excerpt:
        "Análisis detallado de cómo los agentes de IA generativa están transformando la atención al cliente y las estrategias comerciales con mejoras de hasta un 60% en satisfacción y 35% en conversiones.",
    },
  },
  {
    slug: "impacto-ia-generativa-ventas",
    frontMatter: {
      title:
        "El Impacto Transformador de la IA Generativa en la Automatización, Optimización Comercial y Ventas",
      date: "2025-02-25",
      excerpt:
        "Análisis de cómo la IA generativa está revolucionando los procesos comerciales y estrategias de ventas en 2025.",
    },
  },
  {
    slug: "optimizacion-agentes-ia-conversacional",
    frontMatter: {
      title:
        "Optimización de Agentes de IA Conversacional para Ventas y Atención al Cliente",
      date: "2025-02-25",
      excerpt:
        "Técnicas avanzadas para mejorar la efectividad de los agentes de IA conversacional en ventas, programación de citas y atención al cliente.",
    },
  },
  {
    slug: "primeros-pasos-automatizando-conversaciones",
    frontMatter: {
      title:
        "Primeros Pasos con Covox AI: Automatizando Conversaciones de Ventas",
      date: "2025-02-25",
      excerpt:
        "Aprenda cómo implementar agentes conversacionales de IA para automatizar ventas, programar citas y mejorar la atención al cliente con nuestra guía paso a paso.",
    },
  },
]

function getFormattedDate(date: string) {
  return new Date(date).toLocaleDateString("es-LA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function BlogPage() {
  return (
    <section className="container mx-auto max-w-4xl pt-36 pb-20">
      <h1 className="mb-8 text-center text-4xl font-bold text-[#77FF00] sm:text-left">
        Bienvenidos al Blog
      </h1>
      <div className="space-y-10 px-10 sm:px-0">
        {blogPosts.map((post) => (
          <article key={post.slug} className="border-b border-gray-200 pb-8">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="mb-2 text-2xl font-semibold text-white underline-offset-2 transition-all duration-200 ease-in-out hover:text-[#77FF00] hover:underline">
                {post.frontMatter.title}
              </h2>
            </Link>
            <p className="mb-3 text-sm text-gray-300">
              {getFormattedDate(post.frontMatter.date)}
            </p>
            <p className="mb-4 text-gray-400">{post.frontMatter.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-[#77FF00] underline-offset-2 transition-all duration-200 ease-in-out hover:text-white hover:underline"
            >
              Leer más →
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
