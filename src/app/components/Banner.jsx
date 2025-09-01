import { Box, Button, Divider } from "@mui/material";
import React from "react";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import Link from "next/link";

const Banner = ({
  centerHeading = false,
  subHeading1 = "sub Heading 1",
  subHeading2 = "sub Heading 2",
  heading = "Heading",
  backgroundImage = "",
  centerHeadingWithTagLine = false,
}) => {
  return (
    <Box>
      <Box
        className={`image-text-overlay ${
          centerHeading ? "text-middle-center" : "text-middle-left"
        } `}
        sx={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box className="content-box">
          <Box
            sx={{
              maxWidth: "1180px",
              mx: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {!centerHeading && (
              <span className="overlay-title">
                {subHeading1}
                <br />
                {subHeading2}
              </span>
            )}
            {centerHeadingWithTagLine && (
              <span className={`overlay-subtext-tagline`}>{subHeading1}</span>
            )}

            <span
              className={`overlay-subtext ${
                centerHeading ? "large-text" : "medium-text"
              }`}
            >
              {heading}
            </span>
            {!centerHeading && (
              <>
                <Box
                  sx={{
                    "& button": {
                      backgroundColor: "transparent",
                      border: "1px solid #141414",
                      color: "#141414",
                      fontSize: "14px",
                      fontWeight: 500,
                      textTransform: "capitalize",
                      borderRadius: "20px",
                      padding: "7px 20px",
                      fontFamily: "Roboto, Arial, sans-serif",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      "&:hover": {
                        backgroundColor: "#FFFFFF",
                        border: "1px solid #FFFFFF",
                      },
                    },
                  }}
                >
                  <Button variant="outlined" className="roboto-font">
                    Let's Get Started{" "}
                    <KeyboardArrowRightRoundedIcon fontSize={"small"} />
                  </Button>
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "0px",
                    maxWidth: "400px",
                    left: "0px",
                    right: "0px",
                    mx: "auto",
                  }}
                >
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      "& .MuiDivider-root": {
                        m: 2.5,
                        height: "13px",
                        bgcolor: "#141414",
                        width: "1.5px",
                        "@media screen and (max-width: 768px)": {
                          mx: 2,
                        },
                      },
                      "& a": {
                        textDecoration: "none",
                        textTransform: "uppercase",
                        color: "#141414",
                        fontSize: "16px",
                        fontWeight: 700,
                        "@media screen and (max-width: 768px)": {
                          fontSize: "12px",
                        },
                      },
                    }}
                  >
                    <Link href="/services/#custom-home">CUSTOM HOMES</Link>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Link href="/services/#remodel">remodel</Link>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Link href="/services/#home-care">home care</Link>
                  </Box>
                </Box>
              </>
            )}
          </Box>
        </Box>
        <div className="overlay-white"></div>
      </Box>
    </Box>
  );
};

export default Banner;
