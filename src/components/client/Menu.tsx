"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { SegmentGroup } from "../ui";

function Menu(props: SegmentGroup.RootProps) {
  const pathname = usePathname();
  const options = [
    { label: "Top", href: "/" },
    { label: "MDX Preview", href: "/mdx-preview" },
  ];
  return (
    <SegmentGroup.Root value={pathname} {...props}>
      {options.map((option) => (
        <SegmentGroup.Item key={option.href} value={option.href}>
          <NextLink href={option.href}>
            <SegmentGroup.ItemControl />
            <SegmentGroup.ItemText>{option.label}</SegmentGroup.ItemText>
          </NextLink>
        </SegmentGroup.Item>
      ))}
      <SegmentGroup.Indicator />
    </SegmentGroup.Root>
  );
}

export default Menu;
