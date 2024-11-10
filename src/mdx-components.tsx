import type { MDXComponents } from "mdx/types";
import {
  createHeadings,
  Paragraph,
  Kbd,
  Code,
  Pre,
  MdxTable,
  Thead,
  Tr,
  Th,
  Td,
  Ol,
  Ul,
  Hr,
  Blockquote,
} from "@/components/mdx";
import Link from "@/components/link";

export function useMDXComponents(
  components: MDXComponents = {},
): MDXComponents {
  return {
    p: Paragraph,
    code: Code,
    pre: Pre,
    table: MdxTable,
    thead: Thead,
    tr: Tr,
    th: Th,
    td: Td,
    ol: Ol,
    ul: Ul,
    a: Link,
    hr: Hr,
    blockquote: Blockquote,
    kbd: Kbd,
    ...createHeadings(),
    ...components,
  };
}
