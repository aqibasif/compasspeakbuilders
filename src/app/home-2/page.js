import { Box, Typography } from "@mui/material";
import Banner from "../components/Banner2";
import BannerImage from "../uploads/banner.jpg";
import ScrollReveal from "../components/ScrollReveal";
import TextAnimationWrapper from "../components/TextAnimationWrapper";

export default function Home() {
  return (
    <Box className="home-2">
      <Banner
        subHeading1="CONSTRUCTION DONE RIGHT."
        subHeading2="WE BUILD DIFFERENT SO YOU CAN"
        heading="REST EASY"
        backgroundImage={BannerImage}
      />
      <Box
        sx={{
          maxWidth: "1240px",
          mx: "auto",
          py: 13,
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
              fontWeight: 600,
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
    </Box>
  );
}
