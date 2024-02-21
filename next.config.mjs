import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import createMDX from "@next/mdx";

const withMdx = createMDX({
  experimental: {
    mdxRs: true,
  },
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/nextjs-park-ui",
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true,
  },
};

export default withMdx(nextConfig);
