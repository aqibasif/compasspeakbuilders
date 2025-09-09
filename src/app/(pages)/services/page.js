"use client";
import ServicesSection from "@/app/components/ServicesSection";
import Banner from "@/app/components/Common/Banner2";
import { ServicesBanner } from "@/app/Utils/images";

export default function Services() {
  return (
    <div className="services-page">
      <Banner
        heading="our services"
        backgroundImage={ServicesBanner}
        centerHeading
      />
      <ServicesSection />
    </div>
  );
}
