import { createPageMetadata } from "@/lib/metadata";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button, buttonVariants } from "@/components/button";
import LandingWrapper from "@/components/landing-wrapper";
import Logo from "@/components/logo";
import Section from "@/components/section";
import { CONTACT_LINKS } from "@/data/links";

export const metadata = createPageMetadata(
  "Contact",
  "Get in touch with the creator of Droppy Space. Share feedback, suggest an app icon, report an issue, or request an icon update or removal.",
  "/contact",
);

export default function ContactPage() {
  return (
    <LandingWrapper>
      <Section
        icon={<Logo clickable={false} />}
        title="Get in touch."
        description="Have a question, an idea, or just want to say hi? Reach out."
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          {CONTACT_LINKS.map(({ label, href, icon, variant }) => {
            const content = (
              <>
                <HugeiconsIcon
                  icon={icon}
                  size={20}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                {label}
              </>
            );

            return href ? (
              <a
                key={label}
                href={href}
                className={buttonVariants({ variant })}
              >
                {content}
              </a>
            ) : (
              <Button key={label} variant={variant} disabled>
                {content}
              </Button>
            );
          })}
        </div>
      </Section>
    </LandingWrapper>
  );
}
