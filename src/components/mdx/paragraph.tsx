import { article } from "@styled-system/patterns";
import { Text } from "../ui";

export const Paragraph = (props: React.ComponentPropsWithoutRef<"p">) => (
  <Text className={article()} {...props} />
);
