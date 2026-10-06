import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import { CREATOR } from "@/data/site";
import { LINKS } from "@/data/links";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const rounded = Nunito({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  variable: "--font-rounded-local",
});

export const metadata: Metadata = {
  metadataBase: new URL(LINKS.website),
  title: {
    default: "Droppy Space: App Icon & Logo Inspiration",
    template: "%s | Droppy Space",
  },
  applicationName: "Droppy Space",
  authors: [{ name: CREATOR.name, url: CREATOR.url }],
  icons: { icon: "/droplet.png", apple: "/droplet.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${rounded.variable} h-full antialiased`}
    >
      <body className="h-full w-full">{children}</body>
    </html>
  );
}
