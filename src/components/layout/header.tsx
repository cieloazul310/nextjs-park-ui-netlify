import NextLink from "next/link";
import { FaGithub } from "react-icons/fa6";
import { css } from "styled-system/css";
import { flex, container } from "styled-system/patterns";
import { Heading } from "../ui/heading";
import ColorModeHandler from "../client/color-mode-handler";
import { IconButton } from "../ui/icon-button";

const siteTitle = "Next.js + Park UI";

function Header() {
  return (
    <header
      className={flex({
        position: "sticky",
        top: 0,
        alignItems: "center",
        flexDirection: "row",
        height: "56px",
        bg: "bg.canvas",
        zIndex: "sticky",
      })}
    >
      <div
        className={container({
          width: "full",
          maxWidth: "6xl",
          display: "flex",
          alignItems: "center",
          justifyContent: ["center", "start"],
        })}
      >
        <NextLink
          className={css({
            color: {
              base: "fg.default",
              _dark: "fg.default",
              _hover: "accent.11",
            },
            textDecoration: { base: "none", _hover: "underline" },
          })}
          href="/"
        >
          <Heading as="h1" fontWeight="bold">
            {siteTitle}
          </Heading>
        </NextLink>
        <div className={css({ flexGrow: 1, hideBelow: "sm" })} />
        <IconButton variant="ghost" asChild>
          <a
            href="https://github.com/cieloazul310/nextjs-park-ui-on-vercel"
            target="_blank"
            rel="noopener noreferer"
          >
            <FaGithub />
          </a>
        </IconButton>
        <ColorModeHandler className={css({ hideBelow: "sm" })} />
      </div>
    </header>
  );
}

export default Header;
