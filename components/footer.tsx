import { FOOTER_LINKS } from "@/data/links";
import Link from "next/link";

export default function Footer() {
  const linkClassName = "transition-all duration-200 hover:text-neutral-900 dark:hover:text-neutral-100";
  return (
    <footer className="mx-auto flex flex-wrap gap-5 w-full shrink-0 justify-center items-center py-6 text-sm text-neutral-400">
      {FOOTER_LINKS.map(({ href, label, external }) => (
        <Link
          key={href}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          className={linkClassName}
        >
          {label}
        </Link>
      ))}
    </footer>
  );
}
