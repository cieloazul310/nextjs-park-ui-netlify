import { article } from "styled-system/patterns";

export const Pre = (props: React.ComponentProps<"pre">) => {
  return (
    <pre
      className={article({
        bg: "accent.a2",
        rounded: "l2",
        p: 4,
        overflowX: "auto",
      })}
      {...props}
    />
  );
};
