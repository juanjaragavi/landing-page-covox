import { MDXProvider } from "@mdx-js/react"
import Image from "next/image"
import Link from "next/link"
import type { ComponentProps } from "react"

type MDXComponents = ComponentProps<typeof MDXProvider>["components"]

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Use the custom components passed through the MDX file
    ...components,
    // Override the default components with custom ones
    h1: (props) => (
      <h1 className="mb-6 text-3xl font-bold text-white" {...props} />
    ),
    h2: (props) => (
      <h2 className="mt-8 mb-4 text-2xl font-semibold text-white" {...props} />
    ),
    h3: (props) => (
      <h3 className="mt-6 mb-3 text-xl font-semibold text-white" {...props} />
    ),
    p: (props) => (
      <p className="mb-4 leading-relaxed text-gray-300" {...props} />
    ),
    a: (props) => (
      <Link
        {...props}
        href={props.href || "#"}
        className="text-[#77FF00] hover:text-white hover:underline"
      />
    ),
    ul: (props) => (
      <ul className="mb-4 ml-6 list-disc text-gray-300" {...props} />
    ),
    ol: (props) => (
      <ol className="mb-4 ml-6 list-decimal text-gray-300" {...props} />
    ),
    li: (props) => <li className="mb-1" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="mb-4 border-l-4 border-gray-700 pl-4 text-gray-400 italic"
        {...props}
      />
    ),
    code: (props) => (
      <code
        className="rounded bg-gray-800 px-1 py-0.5 font-mono text-sm text-gray-200"
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        className="mb-4 overflow-x-auto rounded bg-gray-800 p-4 font-mono text-sm text-gray-200"
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
        className="border border-gray-700 bg-gray-800 px-4 py-2 text-left font-semibold text-white"
        {...props}
      />
    ),
    td: (props) => (
      <td
        className="border border-gray-700 px-4 py-2 text-gray-300"
        {...props}
      />
    ),
  }
}
