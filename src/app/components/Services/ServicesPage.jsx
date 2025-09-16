"use client";
import ServicesSection from "@/app/components/Services/ServicesSection";
import Banner from "@/app/components/Common/Banner2";
import { ServicesBanner } from "@/app/Utils/images";
import Hero from "@/app/components/Common/Hero";
import ServicesBlock from "./ServicesBlock";

export default function ServicesPage() {
  return (
    <>
      <Hero heading='our services' image={ServicesBanner} />

      <ServicesBlock />
      
      {/* <ServicesSection /> */}
    </>
  );
}
