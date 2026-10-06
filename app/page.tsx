import LandingWrapper from "@/components/landing-wrapper";
import Logo from "@/components/logo";
import Section from "@/components/section";
import AppGallery from "@/components/app-gallery";
import { APPS } from "@/data/apps";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "App Icon & Logo Inspiration",
  "Browse a hand-picked gallery of app icons and website favicons. Find inspiration for your next icon or logo design on Droppy Space.",
  "/",
);

const HomePage = () => {
  return (
    <LandingWrapper align="start">
      <Section
        className="w-full max-w-3xl"
        icon={<Logo clickable={false} />}
        title="Drop in. Get inspired."
        description={`A hand-picked gallery of ${APPS.length} app and website icons for inspiration.`}
      >
        <AppGallery />
      </Section>
    </LandingWrapper>
  );
};

export default HomePage;
