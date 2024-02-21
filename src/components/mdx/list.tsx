import { article } from "@styled-system/patterns";

export const Ol = (props: React.ComponentProps<"ol">) => (
  <ol
    className={article({
      listStyleType: "decimal",
      paddingInlineStart: 4,
    })}
    {...props}
  />
);

export const Ul = (props: React.ComponentProps<"ul">) => (
  <ul
    className={article({
      listStyleType: "disc",
      paddingInlineStart: 4,
    })}
    {...props}
  />
);
