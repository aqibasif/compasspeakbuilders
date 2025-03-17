import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Typography } from "@mui/material";

const CustomHeading = ({ transparentHeading, heading, subHeading }) => {
  return (
    <Box
      sx={{
        width: "100%",
        py: 8,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          top: "0px",
          left: 0,
          width: "100%",
          textAlign: "center",
          fontSize: { xs: "50px", md: "128px" },
          fontWeight: "bold",
          color: "rgba(0, 0, 0, 0.03)",
          zIndex: 1,
          letterSpacing: "4px",
          whiteSpace: "nowrap",
        }}
      >
        {transparentHeading}
      </Typography>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "700",
              color: "#141414",
              letterSpacing: "2px",
              textTransform: "uppercase",
              lineHeight: "1.25em",
              fontSize: "0.75rem",
            }}
          >
            {subHeading}
          </Typography>

          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: "700",
              color: "#141414",
              letterSpacing: "2px",
              textTransform: "uppercase",
              lineHeight: "1.25em",
              fontSize: "2rem",
              mb: 1,
            }}
          >
            {heading}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
CustomHeading.propTypes = {
  transparentHeading: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

export default CustomHeading;
