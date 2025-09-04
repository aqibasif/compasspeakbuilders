"use client";
import { Box } from "@mui/material";
import Banner from "../components/Banner2";
import ServicesSection from "../components/ServicesSection";
import { ServicesBanner } from "../Utils/images";

export default function Services() {
  return (
    <Box className="services-page">
      <Banner
        heading="our services"
        backgroundImage={ServicesBanner}
        centerHeading
      />
      <ServicesSection />
    </Box>
  );
}
