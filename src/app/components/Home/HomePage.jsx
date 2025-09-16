import { HomeBanner } from "@/app/Utils/images";
import Hero from "../Common/Hero";
import ShortAbout from "./ShortAbout";
import CustomTestimonials from "./CustomTestimonials";

export default function HomePage() {
  return (
    <>
      <Hero
        isHomePageHero
        image={HomeBanner}
        heading='Rest Easy'
        subHeading={[
          "CONSTRUCTION DONE RIGHT.",
          "WE BUILD DIFFERENT SO YOU CAN",
        ]}
      />

      {/* <Banner
        subHeading1='CONSTRUCTION DONE RIGHT.'
        subHeading2='WE BUILD DIFFERENT SO YOU CAN'
        heading='REST EASY'
        backgroundImage={HomeBanner}
      /> */}

      <ShortAbout />

      {/* <div className='section-container'>
        <ScrollRevealAbout />
      </div> */}
      <CustomTestimonials />
      {/* <OutTestimonials />
      <TestimonialSection /> */}
    </>
  );
}
