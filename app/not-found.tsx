import { Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

import { buttonVariants } from "@/components/button";
import IconBurst from "@/components/icon-burst";
import LandingWrapper from "@/components/landing-wrapper";
import Section from "@/components/section";

export default function NotFound() {
  return (
    <LandingWrapper clean>
      <Section
        icon={
          <IconBurst label="Play with the search icon">
            <HugeiconsIcon
              icon={Search01Icon}
              size={70}
              strokeWidth={2}
              className="text-blue-400"
              aria-hidden="true"
            />
          </IconBurst>
        }
        title="Page not found."
        description="We couldn't find the page you're looking for. Head home to keep exploring."
      >
        <Link href="/" className={buttonVariants()}>
          Back to home
        </Link>
      </Section>
    </LandingWrapper>
  );
}
