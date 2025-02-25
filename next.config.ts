import createMDX from "@next/mdx"
import type { NextConfig } from "next"
import remarkGfm from "remark-gfm"

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
})

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
}

export default withMDX(nextConfig)
