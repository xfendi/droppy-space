"use client";

import Image from "next/image";
import { useState } from "react";
import type { App } from "@/data/apps";
import { cn } from "@/lib/utils";

type IconTileProps = {
  app: App;
};

export default function IconTile({ app }: IconTileProps) {
  const [failed, setFailed] = useState(false);

  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${app.name}, ${app.kind === "mobile" ? "mobile app" : "website"} (opens in a new tab)`}
      className="group flex min-w-0 flex-col items-center gap-3 rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
    >
      <span className="relative aspect-square w-full transition-transform motion-safe:group-hover:-translate-y-1 motion-safe:group-active:scale-95">
        <span className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[30%] bg-neutral-100 ring-1 ring-black/5 [corner-shape:squircle]">
          {failed ? (
            <span
              className="text-4xl font-rounded text-neutral-400"
              aria-hidden="true"
            >
              {app.name.charAt(0)}
            </span>
          ) : (
            <Image
              src={app.icon_url}
              alt={`${app.name}'s icon`}
              fill
              sizes="(max-width: 639px) 28vw, 128px"
              unoptimized={app.icon_url.endsWith(".ico")}
              className={cn(
                "object-cover",
                app.icon_url.endsWith(".ico") && "object-contain p-[25%]",
              )}
              onError={() => setFailed(true)}
            />
          )}
        </span>
      </span>
      <span className="flex w-full min-w-0 flex-col gap-0.5 text-center">
        <span className="truncate text-sm font-semibold text-neutral-900">
          {app.name}
        </span>
        <span className="text-xs text-neutral-400">
          {app.kind === "mobile" ? "Mobile app" : "Website"}
        </span>
      </span>
    </a>
  );
}
