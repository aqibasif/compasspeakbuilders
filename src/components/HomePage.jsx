"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import HeroBanner from "./HeroBanner";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRouter } from "next/navigation";
import CustomHeading from "./CustomHeading";
import CustomSwiper from "./CustomSwiper";

const testimonialsData = [
  {
    name: "Gary E.",
    role: "Fort Collins. CO",
    comment:
      "We thoroughly enjoyed and appreciated Compass Peak’s expertise in our remodel project. They were professional, approachable and very transparent from start to finish. These days it’s challenging to find a “Contractor” with genuine integrity, but Compass Peak is that company. We highly recommend Compass Peak for any of your remodel or new construction projects.",
  },
  {
    name: "Kathy W.",
    role: "Dacono. CO",
    comment:
      "I could not have been more pleased with my entire homebuilding experience, and I wholeheartedly recommend Compass Peak as a builder who truly delivers. Throughout the building process, they were professional, attentive, and ensured everything ran smoothly and on schedule. They managed to stay on  even with design changes along the way. After I moved in, their commitment didn't end. Any minor issues that arose were promptly addressed, and they ensured everything was up to my expectations. When you hire Compass Peak you hire a capable company you can trust.",
  },
  {
    name: "Gary E.",
    role: "Fort Collins. CO",
    comment:
      "We thoroughly enjoyed and appreciated Compass Peak’s expertise in our remodel project. They were professional, approachable and very transparent from start to finish. These days it’s challenging to find a “Contractor” with genuine integrity, but Compass Peak is that company. We highly recommend Compass Peak for any of your remodel or new construction projects.",
  },
  {
    name: "Kathy W.",
    role: "Dacono. CO",
    comment:
      "I could not have been more pleased with my entire homebuilding experience, and I wholeheartedly recommend Compass Peak as a builder who truly delivers. Throughout the building process, they were professional, attentive, and ensured everything ran smoothly and on schedule. They managed to stay on  even with design changes along the way. After I moved in, their commitment didn't end. Any minor issues that arose were promptly addressed, and they ensured everything was up to my expectations. When you hire Compass Peak you hire a capable company you can trust.",
  },
];

const HomePage = () => {
  const router = useRouter();
  const sections = [
    { label: "CUSTOM HOMES", link: "/services/#custom-homes" },
    { label: "REMODEL", link: "/services/#remodel" },
    { label: "HOME CARE", link: "/services/#home-care" },
  ];

  const handleSectionClick = (link) => {
    router.push(link);
  };

  return (
    <Box sx={{ mt: "10px" }}>
      <HeroBanner
        imageUrl="../Assets/home-banner.jpg"
        heading="Welcome to Our Website"
        height="79vh"
        overlayOpacity={0.4}
      >
        <Container
          maxWidth="lg"
          sx={{
            height: "100%",
            position: "relative",
            zIndex: 2,
            padding: { xs: "8px", md: "0px" },
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            sx={{
              height: "100%",
              pt: "65px",
            }}
          >
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  "& p": {
                    fontWeight: 700,
                    mb: 0,
                    color: "#141414",
                    lineHeight: "1.2em",
                    letterSpacing: "3.6px",
                    wordSpacing: "0px",
                    textTransform: "uppercase",
                    fontSize: "20px",
                  },
                }}
              >
                <Typography>CONSTRUCTION DONE RIGHT.</Typography>
                <Typography>WE BUILD DIFFERENT SO YOU CAN</Typography>
              </Box>

              <Typography
                variant="h1"
                sx={{
                  fontSize: "52px",
                  fontWeight: "700",
                  letterSpacing: "10px",
                  wordSpacing: "0px",
                  py: "20px",
                }}
              >
                REST EASY
              </Typography>

              <Button
                variant="outlined"
                endIcon={<ArrowForwardIosIcon />}
                sx={{
                  borderRadius: "32px",
                  borderWidth: "1px",
                  borderColor: "#141414",
                  color: "#141414",
                  fontSize: "13px",
                  fontWeight: "700",
                  textTransform: "capitalize",
                  backgroundColor: "rgba(241, 110, 67, 0)",
                  padding: "8px 22px",
                  gap: "24px",
                  "& svg": {
                    height: "14px",
                    width: "14px",
                  },
                  "&:hover": {
                    borderWidth: "1px",
                    borderColor: "#FFF",
                    backgroundColor: "white",
                  },
                }}
              >
                Let's Get Started
              </Button>
            </Grid>
          </Grid>

          <Box
            sx={{
              position: "absolute",
              bottom: 24,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
              zIndex: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                "& p": {
                  fontWeight: 700,
                  mb: 0,
                  color: "#141414",
                  lineHeight: "1.2em",
                  wordSpacing: "0px",
                  textTransform: "uppercase",
                  fontSize: "16px",
                  cursor: "pointer",
                },
              }}
            >
              {sections.map((section) => (
                <React.Fragment key={section.label}>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    onClick={() => handleSectionClick(section.link)}
                  >
                    {section.label}
                  </Typography>
                  {section !== sections[sections.length - 1] && (
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ height: 16, width: 1.5, background: "#141414" }}
                    />
                  )}
                </React.Fragment>
              ))}
            </Box>
          </Box>
        </Container>
      </HeroBanner>
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: "8px", md: "0px" },
          pt: "80px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            gap: "20px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: "26px",
              textTransform: "uppercase",
              letterSpacing: "3.1px",
              fontWeight: "700",
              color: "#141414",
            }}
          >
            Northern Colorado Custom Home Builder
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              marginBottom: "1em",
              color: "#373737",
            }}
          >
            Compass Peak Builders is a custom home builder specializing in
            custom homes, remodels, and home care in Northern Colorado. We
            combine expertise, craft, and integrity to provide an exceptional
            product with peace of mind along the way.
          </Typography>
          <CustomHeading
            transparentHeading={"TESTIMONIALS"}
            heading={"TESTIMONIALS"}
            subHeading={"What Our Clients Say"}
          />

          <Box>
            <CustomSwiper testimonials={testimonialsData} showArrows={false} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
