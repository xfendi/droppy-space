"use client";

import { useTheme } from "next-themes";
import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Switch between light and dark theme"
      title="Switch theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100"
    >
      <HugeiconsIcon
        icon={Moon02Icon}
        size={22}
        strokeWidth={2.5}
        aria-hidden="true"
        className="dark:hidden"
      />
      <HugeiconsIcon
        icon={Sun03Icon}
        size={22}
        strokeWidth={2.5}
        aria-hidden="true"
        className="hidden dark:block"
      />
    </button>
  );
}
