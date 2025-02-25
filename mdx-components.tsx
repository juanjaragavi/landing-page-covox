import type { MDXComponents } from "mdx/types"
import Image from "next/image"
import Link from "next/link"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Use the custom components passed through the MDX file
    ...components,
    // Override the default components with custom ones
    h1: (props) => <h1 className="mb-6 text-3xl font-bold" {...props} />,
    h2: (props) => (
      <h2 className="mt-8 mb-4 text-2xl font-semibold" {...props} />
    ),
    h3: (props) => (
      <h3 className="mt-6 mb-3 text-xl font-semibold" {...props} />
    ),
    p: (props) => (
      <p className="mb-4 leading-relaxed text-gray-700" {...props} />
    ),
    a: (props) => (
      <Link
        {...props}
        href={props.href || "#"}
        className="text-blue-600 hover:underline"
      />
    ),
    ul: (props) => <ul className="mb-4 ml-6 list-disc" {...props} />,
    ol: (props) => <ol className="mb-4 ml-6 list-decimal" {...props} />,
    li: (props) => <li className="mb-1" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="mb-4 border-l-4 border-gray-200 pl-4 text-gray-600 italic"
        {...props}
      />
    ),
    code: (props) => (
      <code
        className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm text-gray-800"
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        className="mb-4 overflow-x-auto rounded bg-gray-100 p-4 font-mono text-sm"
        {...props}
      />
    ),
    img: (props) => (
      <Image
        {...props}
        alt={props.alt || ""}
        width={props.width || 800}
        height={props.height || 450}
        className="mb-4 rounded"
      />
    ),
    table: (props) => (
      <div className="mb-4 overflow-x-auto">
        <table className="w-full border-collapse" {...props} />
      </div>
    ),
    th: (props) => (
      <th
        className="border border-gray-300 bg-gray-100 px-4 py-2 text-left font-semibold"
        {...props}
      />
    ),
    td: (props) => (
      <td className="border border-gray-300 px-4 py-2" {...props} />
    ),
  }
}
