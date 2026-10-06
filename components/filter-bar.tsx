"use client";

import { useLayoutEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type FilterOption<T extends string> = {
  label: string;
  value: T;
};

type FilterBarProps<T extends string> = {
  options: readonly FilterOption<T>[];
  value: T;
  onChange: (value: T) => void;
  label: string;
  className?: string;
};

export default function FilterBar<T extends string>({
  options,
  value,
  onChange,
  label,
  className,
}: FilterBarProps<T>) {
  const barRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const bar = barRef.current;
    const pill = pillRef.current;
    if (!bar || !pill) return;

    const buttons = Array.from(
      bar.querySelectorAll<HTMLButtonElement>("button"),
    );
    function measure() {
      const active = buttons.find((button) => button.dataset.value === value);
      if (!active || !pill) return;
      pill.style.width = `${active.offsetWidth}px`;
      pill.style.height = `${active.offsetHeight}px`;
      pill.style.transform = `translate(${active.offsetLeft}px, ${active.offsetTop}px)`;
      pill.style.opacity = "1";
    }

    const initializing = pill.dataset.ready !== "true";
    if (initializing) pill.style.transition = "none";
    measure();
    // The selected button supplies the server-rendered pill until this one is positioned.
    bar.dataset.ready = "true";
    // Commit the initial position before allowing CSS transitions on later changes.
    if (initializing) pill.getBoundingClientRect();
    const frame = requestAnimationFrame(() => {
      pill.dataset.ready = "true";
      pill.style.transition = "";
    });
    const observer = new ResizeObserver(measure);
    observer.observe(bar);
    buttons.forEach((button) => observer.observe(button));
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [value, options]);

  return (
    <div
      ref={barRef}
      role="group"
      aria-label={label}
      className={cn(
        "group/filter relative flex gap-1 rounded-full bg-neutral-100 dark:bg-neutral-900 p-1",
        className,
      )}
    >
      <span
        ref={pillRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 rounded-full bg-white dark:bg-neutral-800 opacity-0 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:data-[ready=true]:transition-[transform,width,height]"
      />
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          data-value={option.value}
          aria-pressed={value === option.value}
          onClick={() => onChange(option.value)}
          className={cn(
            "relative z-10 cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-[color] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100",
            value === option.value
              ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 group-data-[ready=true]/filter:bg-transparent dark:group-data-[ready=true]/filter:bg-transparent"
              : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
