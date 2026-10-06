import type { Metadata } from "next";
import Link from "next/link";
import { LINKS } from "@/data/links";
import { CREATOR } from "@/data/site";

import LandingWrapper from "@/components/landing-wrapper";
import Logo from "@/components/logo";
import Section from "@/components/section";

export const metadata: Metadata = {
  title: "Droppy: About",
};

export default function AboutPage() {
  return (
    <LandingWrapper>
      <Section
        icon={<Logo />}
        title="About Droppy"
        description="A gallery of app icons and logos, made for inspiration."
      >
        <article className="article-content">
          <p>
            Designing an icon and stuck scrolling random places for ideas?
            Droppy puts the good ones in one clean grid. Browse, get inspired,
            go build.
          </p>

          <section>
            <h2>Icons only</h2>
            <p>
              No screens, no flows, no noise. Just app icons and website
              favicons, and only the current official ones.
            </p>
          </section>

          <section>
            <h2>Missing an app?</h2>
            <p>
              Open an <a href={LINKS.issues}>issue</a> with the app name and its
              website or store link. You can also submit a{" "}
              <a href={LINKS.pull_requests}>pull request</a> and send me the
              icon image to upload. Details in{" "}
              <a href={LINKS.contributing}>how to contribute</a>.
            </p>
          </section>

          <section>
            <h2>Rights and removal</h2>
            <p>
              Every icon belongs to its owner. They&apos;re here for inspiration
              only, and being on Droppy doesn&apos;t mean you can reuse them or
              that the brand is connected to us.
            </p>
            <p>
              Own an icon and want it gone? Send the app name and a link through
              the <Link href="/contact">contact page</Link> and I&apos;ll take
              it down quickly. Same goes if something is outdated or wrong.
            </p>
          </section>

          <section>
            <h2>Help out</h2>
            <p>
              Found a bug or got an idea? Open an{" "}
              <a href={LINKS.issues}>issue</a>. Want to write code? Send a{" "}
              <a href={LINKS.pull_requests}>pull request</a>, and open an issue
              first if it&apos;s a big one. Just wanna chat? Hit the{" "}
              <Link href="/contact">contact page</Link>.
            </p>
          </section>

          <section>
            <h2>Who made this</h2>
            <p>
              Built by <a href={CREATOR.url}>{CREATOR.name}</a>, an independent
              dev from Poland making web and mobile apps.
            </p>
          </section>

          <section className="pt-6 border-t border-neutral-300">
            <p>
              All icons belong to their respective owners. Droppy is not
              affiliated with any of the apps or brands shown.
            </p>
          </section>
        </article>
      </Section>
    </LandingWrapper>
  );
}
