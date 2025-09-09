import Banner from "./components/Common/Banner2";
import TestimonialSection from "./components/Common/TestimonialSection";
import ShortAbout from "./components/Common/ShortAbout";
import { HomeBanner } from "./Utils/images";

export default function Home() {
  return (
    <div className="home-2">
      <Banner
        subHeading1="CONSTRUCTION DONE RIGHT."
        subHeading2="WE BUILD DIFFERENT SO YOU CAN"
        heading="REST EASY"
        backgroundImage={HomeBanner}
      />
      <div className="section-container">
        <ShortAbout />
      </div>
      <TestimonialSection />
    </div>
  );
}
