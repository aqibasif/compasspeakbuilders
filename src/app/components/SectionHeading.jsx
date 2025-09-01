import { Box } from "@mui/material";
import React from "react";

const SectionHeading = ({ heading = "", span = "" }) => {
  return (
    <Box
      sx={{
        width: "100%",
        // height: "400px",
        marginTop: "300px",
        "& span": {
          display: "block",
          width: "200px",
          textTransform: "uppercase",
          //   height: "200px",
          fontSize: "100px",
          margin: "0 auto",
          fontWeight: 600,
          "&::before": {
            content: '"Testimonials"',
            color: "rgba(220, 220, 220, 0.5)",
            // color: "rgba(10, 20, 29, 0.02)",
            fontSize: "128px",
            margin: "-160px -40px",
            fontWeight: 700,
            letterSpacing: "10px",
          },
        },
      }}
    >
      <span>{"Testimonials"}</span>
    </Box>
  );
};

export default SectionHeading;
