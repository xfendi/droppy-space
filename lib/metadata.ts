import type { Metadata } from "next";

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const socialTitle = `${title} | Droppy Space`;
  const images = [{ url: "/droplet.png", alt: "Droppy Space droplet logo" }];

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Droppy Space",
      locale: "en_US",
      title: socialTitle,
      description,
      url: path,
      images,
    },
    twitter: {
      card: "summary",
      title: socialTitle,
      description,
      images,
    },
  };
}
