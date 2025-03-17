import React from "react";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import bannerImage from "../../public/Assets";

const HeroBanner = ({ imageUrl, height, overlayOpacity, children }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: height || "60vh",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `linear-gradient(0deg, rgba(255,255,255, ${
            overlayOpacity || 0.5
          }), rgba(255,255,255, ${overlayOpacity || 0.5})), url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: `rgba(255,255,255, ${overlayOpacity || 0.5})`,
            zIndex: 2,
          },
        }}
      />

      {children}
    </Box>
  );
};

HeroBanner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  height: PropTypes.string,
  overlayOpacity: PropTypes.number,
  children: PropTypes.any,
};

export default HeroBanner;
