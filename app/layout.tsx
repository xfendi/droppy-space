import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";

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
  title: "Droppy Space",
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
