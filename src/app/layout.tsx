import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import MyDrawer from "@/components/layout/drawer";
import Providers from "@/components/providers/theme";
import { fontClassName } from "@/styles";
import { container } from "styled-system/patterns";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Next.js + Park UI Example",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={fontClassName}>
        <Providers>
          <Header />
          <main
            className={container({
              maxWidth: "6xl",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            })}
          >
            {children}
          </main>
          <MyDrawer />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
