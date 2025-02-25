import Link from "next/link"

// Blog post metadata
const blogPosts = [
  {
    slug: "optimizing-ai-model-performance",
    frontMatter: {
      title: "Optimizing AI Model Performance for Agricultural Analysis",
      date: "2025-02-25",
      excerpt:
        "Advanced techniques for improving inference speed and accuracy in crop analysis models.",
    },
  },
  {
    slug: "getting-started-with-covox-ai",
    frontMatter: {
      title: "Getting Started with Covox AI",
      date: "2025-02-24",
      excerpt:
        "Learn how to integrate Covox AI into your existing workflows with our step-by-step guide.",
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
    <section className="container mx-auto max-w-4xl py-44">
      <h1 className="mb-8 text-4xl font-bold text-[#77FF00]">
        Bienvenidos al Blog
      </h1>
      <div className="space-y-10">
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
