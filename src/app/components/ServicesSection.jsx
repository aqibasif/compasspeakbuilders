"use client";
import React from "react";
import {
  Container,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ConceptHomeImage from "@/app/uploads/custom-homes.jpg";
import RemodelImage from "@/app/uploads/remodel.jpg";
import HomeCareImage from "@/app/uploads/home-care.jpg";
import Image from "next/image";

const ServicesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const sections = [
    {
      id: "custom-homes",
      title: "CUSTOM HOMES",
      content:
        "From concept to completion, we bring your unique vision to life with meticulous attention to detail, superior craftsmanship, and an unrivaled commitment to exceeding expectations. No matter what style your vision takes, we'll deliver an exceptional experience that results in a home that will stand the test of time.",
      image: ConceptHomeImage,
    },
    {
      id: "remodel",
      title: "REMODEL",
      content:
        "We love the challenge of transforming existing spaces into something that inspires. You can trust us to provide exceptional craftsmanship and design that will breathe new life into your home. We understand that remodeling done poorly can be disruptive to your life, so we use our experience and timely communication to ensure both the new space and the process will delight.",
      image: RemodelImage,
    },
    {
      id: "home-care",
      title: "Home care",
      content:
        "Allow us to use our expertise to preserve the beauty and longevity of your home. From routine maintenance to specialized repairs or upgrades we are honored to be trusted with it. Exceptional skill, craftsmanship, communication, and care in all we do means you don’t need to worry about a thing.",
      image: HomeCareImage,
    },
  ];

  return (
    <Box sx={{ py: { xs: 4, md: 8 }, backgroundColor: "#fafafa" }}>
      <Container maxWidth="lg">
        {sections.map((section, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: isMobile
                  ? "1fr"
                  : isReversed
                  ? "2fr 1fr"
                  : "1fr 2fr",
                my: "80px",
              }}
              key={index}
              id={section.id}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: 2,
                  order: isMobile ? 2 : isReversed ? 2 : 1,
                }}
              >
                <Box
                  sx={{
                    "& .raleway-font": {
                      fontSize: "32px",
                      fontWeight: 700,
                      mb: 1,
                    },
                    "& .roboto-font": {
                      fontSize: "16px",
                      fontWeight: 300,
                      mb: 1,
                    },
                  }}
                >
                  <Typography variant="h2" className="raleway-font">
                    {section.title}
                  </Typography>
                  <Typography variant="p" className="roboto-font">
                    {section.content}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  "& img": {
                    width: "100% !important",
                    maxHeight: "400px !important",
                    borderRadius: "8px",
                    objectFit: "cover",
                  },
                  order: isMobile ? 1 : isReversed ? 1 : 2,
                }}
              >
                <Image
                  src={section.image.src}
                  alt={section.title}
                  width={500}
                  height={500}
                />
              </Box>
            </Box>
          );
        })}
      </Container>
    </Box>
  );
};

export default ServicesSection;
