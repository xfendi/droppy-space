"use client";

import { Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useRef, useSyncExternalStore } from "react";
import IconTile from "@/components/icon-tile";
import FilterBar from "@/components/filter-bar";
import { Input } from "@/components/input";
import { APPS } from "@/data/apps";

const filters = [
  { label: "All icons", value: "all" },
  { label: "Mobile apps", value: "mobile" },
  { label: "Websites", value: "website" },
] as const;

// Shareable search URLs, with the default gallery included in the static HTML.
function subscribeToSearch(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  return () => window.removeEventListener("popstate", onChange);
}
const getSearch = () => window.location.search;
const getServerSearch = () => "";

export default function AppGallery() {
  const query = useSyncExternalStore(subscribeToSearch, getSearch, getServerSearch);
  const searchParams = new URLSearchParams(query);
  const search = (searchParams.get("q") ?? "").slice(0, 100);
  const selectedFilter = searchParams.get("filter");
  const filter = selectedFilter === "mobile" || selectedFilter === "website"
    ? selectedFilter : "all";
  const term = search.trim().toLowerCase();
  const inputRef = useRef<HTMLInputElement>(null);
  const results = APPS.filter((app) =>
    (filter === "all" || app.kind === filter) &&
    app.name.toLowerCase().includes(term),
  );

  function updateSearchParam(key: "q" | "filter", value: string) {
    const url = new URL(window.location.href);
    if (value && !(key === "filter" && value === "all")) {
      url.searchParams.set(key, value);
    } else {
      url.searchParams.delete(key);
    }
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }

  useEffect(() => {
    function focusSearch(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
      }
    }
    document.addEventListener("keydown", focusSearch);
    return () => document.removeEventListener("keydown", focusSearch);
  }, []);

  return (
    <section id="gallery" aria-label="Icon gallery"
      className="flex w-full scroll-mt-28 flex-col gap-8 text-left">
      <div className="flex flex-col items-center gap-4">
        <Input ref={inputRef} id="icon-search" type="search"
          label="Search icons by name"
          icon={<HugeiconsIcon icon={Search01Icon} size={20} strokeWidth={2.5} />}
          value={search}
          onChange={(event) => updateSearchParam("q", event.target.value)}
          aria-keyshortcuts="Control+K Meta+K" maxLength={100}
          placeholder="Search icons..." autoComplete="off" wrapperClassName="max-w-md" />
        <FilterBar options={filters} value={filter}
          onChange={(value) => updateSearchParam("filter", value)}
          label="Filter icons by kind" />
      </div>

      <div className="min-h-64">
        {results.length === 0 ? (
          <div role="status"
            className="flex min-h-64 flex-col items-center justify-center rounded-3xl bg-neutral-50 dark:bg-neutral-900 px-6 py-10 text-center [corner-shape:squircle]">
            <HugeiconsIcon icon={Search01Icon} size={32} strokeWidth={2}
              aria-hidden="true" className="text-neutral-300 mb-3" />
            <h2 className="text-xl font-rounded text-neutral-800 dark:text-neutral-100">No icons found.</h2>
            <p className="max-w-sm text-sm text-neutral-500">
              {term ? `No matches for "${search.trim()}". Try another name or browse all icons.`
                : "There are no icons in this category yet."}
            </p>
          </div>
        ) : (
          <>
            <p role="status" className="sr-only">
              {results.length} {results.length === 1 ? "icon" : "icons"} found.
            </p>
            <ul className="grid grid-cols-3 gap-x-5 gap-y-7 sm:grid-cols-5 sm:gap-x-8">
              {results.map((app) => <li key={app.slug}><IconTile app={app} /></li>)}
            </ul>
          </>
        )}
      </div>

    </section>
  );
}
