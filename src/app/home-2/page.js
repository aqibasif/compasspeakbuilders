import { Box, Typography } from "@mui/material";
import Banner from "../components/Banner2";
import ScrollReveal from "../components/ScrollReveal";
import TextAnimationWrapper from "../components/TextAnimationWrapper";
import { HomeBanner } from "../Utils/images";
import TestimonialsCard from "../components/TestimonialsCard";
import SlickSlider from "../components/SlickSlider";
import { testimonials } from "../data";

export default function Home() {
  return (
    <Box className="home-2">
      <Banner
        subHeading1="CONSTRUCTION DONE RIGHT."
        subHeading2="WE BUILD DIFFERENT SO YOU CAN"
        heading="REST EASY"
        backgroundImage={HomeBanner}
      />
      <Box
        sx={{
          maxWidth: "1240px",
          mx: "auto",
          py: 17,
          px: 2,
          textAlign: "left",
        }}
      >
        <TextAnimationWrapper>
          <Typography
            variant="h2"
            className="raleway-font"
            sx={{
              fontSize: "28px",
              color: "#141414",
              mb: 1,
              textTransform: "uppercase",
              letterSpacing: "3.1px",
              lineHeight: "1.4em",
              fontWeight: 400,
            }}
          >
            Northern Colorado Custom Home Builder
          </Typography>
        </TextAnimationWrapper>

        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
        >
          Compass Peak Builders is a custom home builder specializing in custom
          homes, remodels, and home care in Northern Colorado. We combine
          expertise, craft, and integrity to provide an exceptional product with
          peace of mind along the way.
        </ScrollReveal>
      </Box>

      <Box sx={{ textAlign: "center", mb: 6 }}>
        <TextAnimationWrapper>
          <Typography
            variant="overline"
            className="raleway-font"
            sx={{
              color: "#141414",
              fontWeight: 600,
              letterSpacing: 1.5,
              fontSize: "12px",
              mb: 1,
            }}
          >
            WHAT OUR CLIENTS SAY
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "text.primary",
              textTransform: "uppercase",
            }}
          >
            TESTIMONIALS
          </Typography>
        </TextAnimationWrapper>
      </Box>
      <Box
        sx={{
          overflow: "hidden",
          background:
            "radial-gradient(circle, rgba(238, 174, 202, 0) 0%, rgba(255, 255, 255, 0.65) 100%)",
          zIndex: 2,
          position: "relative",
          pb: "120px",
          gap: "20px",
          "&::before": {
            content: '""',
            position: "absolute",
            left: 0,
            top: 0,
            width: "150px",
            height: "100%",
            background:
              "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))",
            zIndex: 3,
            pointerEvents: "none",
          },

          "&::after": {
            content: '""',
            position: "absolute",
            right: 0,
            top: 0,
            width: "150px",
            height: "100%",
            background:
              "linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0))",
            zIndex: 3,
            pointerEvents: "none",
          },
        }}
      >
        <SlickSlider slidesToShow={3} />
      </Box>
    </Box>
  );
}
