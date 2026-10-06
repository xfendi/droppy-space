import { FOOTER_LINKS } from "@/data/links";
import Link from "next/link";
import { Fragment } from "react";

export default function Footer() {
  const linkClassName = "transition-all duration-200 hover:text-neutral-900";
  return (
    <footer className="mx-auto flex flex-wrap gap-3 w-full shrink-0 justify-center items-center py-6 text-sm text-neutral-400">
      <p>&copy; 2026 Droppy</p>
      {FOOTER_LINKS.map(({ href, label, external }) => (
        <Fragment key={href}>
          <span aria-hidden="true">|</span>
          <Link
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            className={linkClassName}
          >
            {label}
          </Link>
        </Fragment>
      ))}
    </footer>
  );
}
