import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "pressable inline-flex h-11 shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-3xl px-5 text-base font-rounded font-bold transition-colors [corner-shape:squircle] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-neutral-900 text-white hover:bg-neutral-900/85 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200",
        secondary: "bg-neutral-100 text-neutral-700 hover:bg-neutral-200/85 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700",
        danger: "bg-red-600 text-white hover:bg-red-700 focus-visible:outline-red-600",
        discord: "bg-[#7289da] text-white hover:bg-[#7289da]/85",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

export function Button({
  className,
  variant,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    />
  );
}
