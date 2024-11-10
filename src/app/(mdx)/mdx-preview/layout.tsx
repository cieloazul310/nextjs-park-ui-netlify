import type { PropsWithChildren } from "react";
import Block from "@/components/layout/block";
import Jumbotron from "@/components/layout/jumbotron";
import Menu from "@/components/client/menu";

export default function PageLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Jumbotron title="MDX Preview" />
      <Menu orientation="horizontal" />
      <Block as="article">{children}</Block>
    </>
  );
}
