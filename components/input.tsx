"use client";

import { useId, type ComponentProps, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type InputProps = ComponentProps<"input"> & {
  icon?: ReactNode;
  label?: string;
  wrapperClassName?: string;
};

export function Input({
  id,
  icon,
  label,
  className,
  wrapperClassName,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className={cn("relative w-full", wrapperClassName)}>
      {icon && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
        >
          {icon}
        </span>
      )}
      {label && (
        <label htmlFor={inputId} className="sr-only">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          "h-12 w-full rounded-3xl bg-neutral-100 dark:bg-neutral-900 px-4 text-base text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 [corner-shape:squircle] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100 disabled:cursor-not-allowed disabled:opacity-50",
          icon && "pl-12",
          className,
        )}
        {...props}
      />
    </div>
  );
}
