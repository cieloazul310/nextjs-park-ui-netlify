import { Jumbotron, Block, Menu } from "@/components";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Jumbotron title="MDX Preview" />
      <Menu orientation="horizontal" />
      <Block as="article">{children}</Block>
    </>
  );
}
