import { article } from "@styled-system/patterns";

export const Blockquote = (props: React.ComponentProps<"blockquote">) => (
  <blockquote
    className={article({ bg: "accent.a2", rounded: "l2", p: 4 })}
    {...props}
  />
);
