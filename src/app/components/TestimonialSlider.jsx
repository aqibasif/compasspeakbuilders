"use client";
import React from "react";
import Slider from "react-slick";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextAnimationWrapper from "./TextAnimationWrapper";

// Styled components
const TestimonialCard = styled(Box)(({ theme }) => ({
  padding: "35px",
  margin: theme.spacing(2),
  borderRadius: "12px",
  backgroundColor: "#FFFFFF",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.02)",
  textAlign: "center",
  height: "auto",
  display: "flex!important",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

const SliderContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0),
  backgroundColor: theme.palette.grey[50],
  position: "relative",
  "& .slick-dots": {
    bottom: theme.spacing(-4),
    "& li": {
      // Inactive dots
      "& button:before": {
        fontSize: "12px",
        color: theme.palette.grey[400],
        opacity: 1,
      },
      // Active dot
      "&.slick-active button:before": {
        color: "#141414",
        opacity: 1,
      },
    },
  },

  "& .slick-prev, .slick-next": {
    width: "40px",
    height: "40px",
    zIndex: 2,
    "&:before": {
      fontSize: "32px",
      color: theme.palette.primary.main,
    },
    "&:hover:before": {
      color: theme.palette.primary.dark,
    },
  },
  "& .slick-prev": {
    left: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      left: theme.spacing(1),
    },
  },
  "& .slick-next": {
    right: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      right: theme.spacing(1),
    },
  },
}));

// Main component
const TestimonialSlider = ({
  testimonials,
  title = "TESTIMONIALS",
  subtitle = "WHAT OUR CLIENTS SAY",
  showArrows = true,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: !isMobile && showArrows,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <SliderContainer>
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
            {subtitle}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "text.primary",
            }}
          >
            {title}
          </Typography>
        </TextAnimationWrapper>
      </Box>

      <Box sx={{ maxWidth: "lg", mx: "auto", px: { xs: 2, sm: 3, md: 4 } }}>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} sx={{ outline: "none" }}>
              <TestimonialCard>
                <TextAnimationWrapper>
                  <Typography
                    variant="body1"
                    className="raleway-font"
                    sx={{
                      mb: "30px",
                      fontSize: "16px",
                      fontStyle: "italic",
                      lineHeight: "1.5",
                      color: "#373737",
                    }}
                  >
                    "{testimonial.content}"
                  </Typography>
                  <Typography
                    variant="h6"
                    className="roboto-font"
                    sx={{ fontWeight: "bold", fontSize: "14px" }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontWeight: 400, fontSize: "12px" }}
                  >
                    {testimonial.role}
                  </Typography>
                </TextAnimationWrapper>
              </TestimonialCard>
            </Box>
          ))}
        </Slider>
      </Box>
    </SliderContainer>
  );
};

export default TestimonialSlider;
