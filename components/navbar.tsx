import Link from "next/link";
import Logo from "./logo";
import { NAVBAR_LINKS } from "@/data/links";

const NavBar = () => {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed inset-x-4 top-4 z-50 mx-auto flex max-w-2xl items-center justify-between gap-3 rounded-full bg-neutral-300/30 py-3 pl-4 pr-6 backdrop-blur-lg"
    >
      <Logo size={35} />
      <ul className="flex items-center gap-3 font-rounded sm:gap-6">
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
      </ul>
    </nav>
  );
};

export default NavBar;
