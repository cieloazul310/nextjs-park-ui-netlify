import { Jumbotron, Block, Menu } from "@/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Jumbotron title="Hello, Park UI" />
      <Menu orientation="horizontal" />
      <Block as="article">{children}</Block>
    </>
  );
}
