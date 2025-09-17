import { HomeBanner } from "@/app/Utils/images";
import Hero from "../Common/Hero";
import ShortAbout from "./ShortAbout";
import CustomTestimonials from "./CustomTestimonials";
import PageLayout from "../PageLayout/PageLayout";

export default function HomePage() {
  return (
    <PageLayout>
      <Hero
        isHomePageHero
        image={HomeBanner}
        heading='Rest Easy'
        subHeading={[
          "CONSTRUCTION DONE RIGHT.",
          "WE BUILD DIFFERENT SO YOU CAN",
        ]}
      />
      <ShortAbout />
      <CustomTestimonials />
    </PageLayout>
  );
}
