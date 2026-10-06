export const GITHUB_REPO_LINK = "https://github.com/xfendi/droppy-space";

export const LINKS = {
  website: "https://droppy.space",
  contributing: `${GITHUB_REPO_LINK}/blob/master/CONTRIBUTING.md`,
  issues: `${GITHUB_REPO_LINK}/issues`,
  pull_requests: `${GITHUB_REPO_LINK}/pulls`,
} as const;

type NavBarLink = {
  href: string;
  label: string;
};

export const NAVBAR_LINKS: NavBarLink[] = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_LINKS: (NavBarLink & { external?: boolean })[] = [
  { href: GITHUB_REPO_LINK, label: "Open source on GitHub", external: true },
];

import { ButtonVariant } from "@/components/button";
import {
  DiscordIcon,
  GithubIcon,
  Mail01Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import { IconSvgObject } from "@hugeicons/core-free-icons/types";

type ContactLink = {
  label: string;
  href: string;
  icon: IconSvgObject;
  variant: ButtonVariant;
};

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: "X (I mean, Twitter)",
    href: "https://x.com/fendziorr",
    icon: NewTwitterIcon,
    variant: "default",
  },
  {
    label: "Discord",
    href: "https://discord.com/users/804372572928999434",
    icon: DiscordIcon,
    variant: "discord",
  },
  {
    label: "GitHub",
    href: "https://github.com/xfendi",
    icon: GithubIcon,
    variant: "default",
  },
  {
    label: "Mail",
    href: "mailto:xfendi.studio@gmail.com",
    icon: Mail01Icon,
    variant: "secondary",
  },
];
