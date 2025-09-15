"use client";
import Banner from "../../components/Common/Banner2";
import AboutSection from "@/app/components/Common/AboutSection";
import { AboutBanner } from "@/app/Utils/images";

export default function AboutCompassPeakBuilders() {
  return (
    <div className="about-us">
      <Banner
        subHeading1="The Compass Peak Builders"
        heading="Philosophy"
        centerHeadingWithTagLine
        backgroundImage={AboutBanner}
        centerHeading
      />
      <AboutSection />
    </div>
  );
}
