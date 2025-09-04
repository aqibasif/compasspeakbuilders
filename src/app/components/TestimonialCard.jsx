"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import TextAnimationWrapper from "./TextAnimationWrapper";
import { styled } from "@mui/material/styles";

const TestimonialCard = styled(Box)(({ theme }) => ({
  padding: "35px",
  borderRadius: "12px",
  backgroundColor: "#f8f7f7f0",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.02)",
  textAlign: "center",
  height: "auto",
  display: "flex!important",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const TestimonialCards = ({ testimonial }) => {
  return (
    <Box sx={{ outline: "none" }}>
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
  );
};

export default TestimonialCards;
