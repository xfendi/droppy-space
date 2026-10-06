import Link from "next/link";
import Logo from "./logo";
import { GITHUB_REPO_LINK, NAVBAR_LINKS } from "@/data/links";
import { IoLogoGithub } from "react-icons/io";

const NavBar = () => {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed inset-x-4 top-4 z-50 mx-auto flex max-w-2xl items-center justify-between gap-3 rounded-full bg-neutral-300/30 py-3 pl-4 pr-6 backdrop-blur-lg"
    >
      <Logo size={35} />
      <ul className="flex items-center gap-5 font-rounded sm:gap-6">
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
        <li className="shrink-0">
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
      </ul>
    </nav>
  );
};

export default NavBar;
