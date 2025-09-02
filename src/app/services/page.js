"use client";
import Banner from "../components/Banner";
import ServicesSection from "../components/ServicesSection";
import bannerImage from "../uploads/services-banner.jpg";

export default function Services() {
  return (
    <>
      <Banner
        backgroundImage={bannerImage}
        heading="our services"
        centerHeading
      />
      <ServicesSection />
    </>
  );
}
