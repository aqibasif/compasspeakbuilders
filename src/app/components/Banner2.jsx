"use client";
import { Box, Button, Divider } from "@mui/material";
import React, { useRef } from "react";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

// Register GSAP plugin
gsap.registerPlugin(useGSAP);

const Banner = ({
  centerHeading = false,
  subHeading1 = "sub Heading 1",
  subHeading2 = "sub Heading 2",
  heading = "Heading",
  backgroundImage = "",
  centerHeadingWithTagLine = false,
}) => {
  const banner = useRef();

  useGSAP(
    () => {
      const titleText = new SplitType(".overlay-title-2", {
        types: "lines",
        tagName: "div",
        lineClass: "line",
      });

      const taglineText = new SplitType(".overlay-subtext-tagline", {
        types: "lines",
        tagName: "div",
        lineClass: "line",
      });

      const subtextText = new SplitType(".overlay-subtext-2", {
        types: "lines",
        tagName: "div",
        lineClass: "line",
      });

      // Animate the links
      const linksText = new SplitType(".animated-link", {
        types: "lines",
        tagName: "div",
        lineClass: "line",
      });

      // Process all animated elements
      const allTextElements = [
        ...(titleText.lines || []),
        ...(taglineText.lines || []),
        ...(subtextText.lines || []),
        ...(linksText.lines || []),
      ];

      allTextElements.forEach((line) => {
        const content = line.innerHTML;
        line.innerHTML = `<span>${content}</span>`;
      });

      // Set initial state
      gsap.set(".line span", {
        y: 400,
        display: "block",
      });

      // Animate all elements
      gsap.to(".line span", {
        y: 0,
        duration: 2,
        stagger: 0.075,
        ease: "power4.out",
        delay: 0.25,
      });

      return () => {
        if (titleText) titleText.revert();
        if (taglineText) taglineText.revert();
        if (subtextText) subtextText.revert();
        if (linksText) linksText.revert();
      };
    },
    { scope: banner }
  );

  return (
    <Box ref={banner}>
      <Box
        className={`image-text-overlay image-text-overlay-2 ${
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
              maxWidth: "1400px",
              mx: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              position: "relative",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {centerHeadingWithTagLine && (
                <span className="overlay-subtext-tagline">{subHeading1}</span>
              )}

              {!centerHeading && (
                <span className="overlay-title-2">
                  {subHeading1}
                  <br />
                  {subHeading2}
                </span>
              )}

              <span
                className={`overlay-subtext-2 ${
                  centerHeading ? "large-text" : "medium-text"
                }`}
              >
                {heading}
              </span>
            </Box>
          </Box>
          {!centerHeading && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                rowGap: "10px",
                position: "absolute",
                left: "60px",
                right: "40px",
                bottom: "40px",
                "@media (max-width: 768px)": {
                  left: "20px",
                },
                "@media (max-width: 500px)": {
                  flexDirection: "column",
                  alignItems: "flex-start",
                },
              }}
            >
              <Box
                className=""
                sx={{
                  "& button": {
                    backgroundColor: "#FFFFFF",
                    color: "#141414",
                    fontSize: "17px",
                    fontWeight: 500,
                    textTransform: "capitalize",
                    borderRadius: "20px",
                    padding: "8px 10px 8px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    border: "none",
                    fontFamily: "'Poppins', sans-serif",
                    "&:hover": {
                      backgroundColor: "#FFFFFF",
                    },
                    "& svg": {
                      height: "27px",
                      width: "27px",
                      backgroundColor: "#000000",
                      color: "#FFF",
                      borderRadius: "50%",
                    },
                    "@media screen and (max-width: 768px)": {
                      fontSize: "12px",
                      padding: "5px 10px 5px 10px",
                    },
                  },
                }}
              >
                <Button className="poppins-font">
                  Let's Get Started
                  <KeyboardArrowRightRoundedIcon fontSize={"small"} />
                </Button>
              </Box>
              <Box>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    rowGap: "10px",
                    justifyContent: "center",
                    width: "100%",
                    columnGap: "20px",
                    "@media (max-width: 768px)": {
                      columnGap: "5px",
                    },
                    "@media (max-width: 500px)": {
                      flexDirection: "column",
                      alignItems: "normal",
                    },
                    "& a": {
                      backgroundColor: "#ffffff30",
                      textDecoration: "none",
                      textTransform: "capitalize",
                      color: "#FFFFFF",
                      fontSize: "18px",
                      fontWeight: 500,
                      p: "8px 20px",
                      borderRadius: "20px",
                      transition: "all 0.3s ease-in",
                      "&:hover": {
                        backgroundColor: "#FFFFFF",
                        color: "#000000",
                      },
                      "@media screen and (max-width: 768px)": {
                        fontSize: "12px",
                      },
                    },
                  }}
                >
                  <Link href="/services/#custom-home" className="poppins-font">
                    Custom homes
                  </Link>
                  <Link href="/services/#remodel" className="poppins-font">
                    remodel
                  </Link>
                  <Link href="/services/#home-care" className="poppins-font">
                    home care
                  </Link>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
        <div className="overlay-brown"></div>
      </Box>
    </Box>
  );
};

export default Banner;
