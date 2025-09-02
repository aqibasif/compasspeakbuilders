import { Box } from "@mui/material";
import Banner from "./components/Banner";
import TestimonialSlider from "./components/TestimonialSlider";
import { testimonials } from "./data";
import styles from "./page.module.css";
import Typography from "@mui/material/Typography";
import BannerImage from "./uploads/banner.jpg";
import TextAnimationWrapper from "./components/TextAnimationWrapper";

export default function Home() {
  return (
    <div className={styles.page}>
      <Banner
        subHeading1="CONSTRUCTION DONE RIGHT."
        subHeading2="WE BUILD DIFFERENT SO YOU CAN"
        heading="REST EASY"
        backgroundImage={BannerImage}
      />
      <Box sx={{ maxWidth: "1240px", mx: "auto", my: 6, textAlign: "center" }}>
        <TextAnimationWrapper>
          <Typography
            variant="h2"
            className="raleway-font"
            sx={{
              fontSize: "26px",
              color: "#141414",
              mb: 3,
              textTransform: "uppercase",
              letterSpacing: "3.1px",
              lineHeight: "1.4em",
              fontWeight: 700,
            }}
          >
            Northern Colorado Custom Home Builder
          </Typography>
          <Typography
            variant="p"
            className="roboto-font"
            sx={{
              fontSize: "14px",
              color: "#373737",
              mb: 3,
              lineHeight: "1.7em",
              fontWeight: 300,
            }}
          >
            Compass Peak Builders is a custom home builder specializing in
            custom homes, remodels, and home care in Northern Colorado. We
            combine expertise, craft, and integrity to provide an exceptional
            product with peace of mind along the way.
          </Typography>
        </TextAnimationWrapper>
      </Box>
      <TestimonialSlider
        testimonials={testimonials}
        title="TESTIMONIALS"
        subtitle="WHAT OUR CLIENTS SAY"
        showArrows={false}
      />
    </div>
  );
}
