import type { PropsWithChildren } from "react";
import Block from "@/components/layout/block";
import Jumbotron from "@/components/layout/jumbotron";
import Menu from "@/components/client/menu";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Jumbotron title="Hello, Park UI" />
      <Menu orientation="horizontal" />
      <Block as="article">{children}</Block>
    </>
  );
}
