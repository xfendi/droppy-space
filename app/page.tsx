import LandingWrapper from "@/components/landing-wrapper";
import Logo from "@/components/logo";
import Section from "@/components/section";
import AppGallery from "@/components/app-gallery";
import { APPS } from "@/data/apps";

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
