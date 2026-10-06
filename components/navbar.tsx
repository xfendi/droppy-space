import Link from "next/link";
import Logo from "./logo";
import { GITHUB_REPO_LINK, NAVBAR_LINKS } from "@/data/links";
import { IoLogoGithub } from "react-icons/io";
import ThemeToggle from "./theme-toggle";

const NavBar = () => {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed inset-x-4 top-4 z-50 mx-auto flex max-w-2xl items-center justify-between gap-3 rounded-full bg-neutral-300/30 py-3 pl-4 pr-4 backdrop-blur-lg dark:bg-neutral-800/70"
    >
      <Logo size={35} className="shrink-0" />
      <ul className="ml-auto flex items-center gap-3 font-rounded">
        {NAVBAR_LINKS.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="transition-all duration-200 hover:opacity-80"
            >
              {label}
            </Link>
          </li>
        ))}
        <li className="shrink-0 ml-3">
          <a
            href={GITHUB_REPO_LINK}
            aria-label="GitHub repository"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center transition-opacity duration-200 hover:opacity-80"
          >
            <IoLogoGithub size={24} aria-hidden="true" />
          </a>
        </li>
        <li className="shrink-0">
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
