import AboutTextSection from "@/app/components/About/AboutTextSection";
import Hero from "@/app/components/Common/Hero";
import { AboutBanner } from "@/app/Utils/images";
import PageLayout from "../PageLayout/PageLayout";

export default function AboutPage() {
  return (
    <PageLayout>
      <Hero
        subHeading='The Compass Peak Builders'
        heading='Philosophy'
        image={AboutBanner}
      />
      <AboutTextSection />
    </PageLayout>
  );
}
