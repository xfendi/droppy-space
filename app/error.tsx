"use client";

import { Alert02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

import { Button, buttonVariants } from "@/components/button";
import IconBurst from "@/components/icon-burst";
import LandingWrapper from "@/components/landing-wrapper";
import Section from "@/components/section";

export default function ErrorPage({ retry }: { retry: () => void }) {
  return (
    <LandingWrapper clean>
      <Section
        icon={
          <IconBurst label="Play with the error icon">
            <HugeiconsIcon
              icon={Alert02Icon}
              size={70}
              strokeWidth={2}
              className="text-red-400"
              aria-hidden="true"
            />
          </IconBurst>
        }
        title="Something went wrong."
        description="We couldn't load this page. Try again, or head back home."
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button onClick={retry}>Try again</Button>
          <Link href="/" className={buttonVariants({ variant: "secondary" })}>
            Back to home
          </Link>
        </div>
      </Section>
    </LandingWrapper>
  );
}
