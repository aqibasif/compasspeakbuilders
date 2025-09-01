import React from "react";
import { Box, Container, Typography, Divider, Link } from "@mui/material";
import { Email, Phone, LocationOn, Copyright } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        padding: "30px 40px 10px 40px",
        mt: "auto",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Box sx={{ maxWidth: "1240px", mx: "auto" }}>
        <Box
          sx={{
            "& h2": {
              fontSize: "14px",
              fontWeight: 700,
              mb: "1em",
            },
            "& h3": {
              fontSize: "12px",
              lineHeight: "1.5em",
              mb: "1em",
              fontWeight: 300,
              fontFamily: "var(--font-roboto)",
            },
          }}
        >
          <Typography variant="h2">COMPASS PEAK BUILDERS</Typography>
          <Typography variant="h3">
            PO BOX 63
            <br />
            TIMNATH, CO 80547
            <br />
            970.413.4265
          </Typography>
        </Box>
        <Box
          sx={{
            "& p": {
              fontSize: "11px",
              lineHeight: "1.5em",
              mb: "1em",
              fontWeight: 300,
              fontFamily: "var(--font-roboto)",
            },
          }}
        >
          <Typography>INFO@COMPASSPEAKBUILDERS.COM</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80px",
            "& p": {
              fontSize: "11px",
              lineHeight: "1.5em",
              fontWeight: 300,
              fontFamily: "var(--font-roboto)",
            },
          }}
        >
          <Typography variant="body2">
            Copyright © 2025 Compass Peak Builders
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
