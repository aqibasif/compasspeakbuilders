"use client";
import { Box, Button } from "@mui/material";
import React, { useRef } from "react";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import SplitType from "split-type";
import Copy from "./Copy";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { scrollToSection } from "./scrollToSection";

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
  const navbarHeight = "170px";
  const router = useTransitionRouter();
  const pathname = usePathname();

  const slideInOut = () => {
    if (!document.startViewTransition) return;

    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translateY(0)",
        },
        {
          opacity: 0.2,
          transform: "translateY(-35%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  const handleNavigation = (path) => {
    if (pathname === path) return;

    router.push(path, {
      onTransitionReady: slideInOut,
    });
  };

  const handleScrollToSection = (path) => {
    const sectionId = path.split("#")[1];

    if (pathname === "/services") {
      scrollToSection(sectionId);
    } else {
      router.push("/services", {
        onTransitionReady: () => {
          slideInOut();
          scrollToSection(sectionId);
        },
      });
    }
  };

  useGSAP(
    () => {
      // const titleText = new SplitType(".overlay-title-2", {
      //   types: "lines",
      //   tagName: "div",
      //   lineClass: "line",
      // });

      // const taglineText = new SplitType(".overlay-subtext-tagline", {
      //   types: "lines",
      //   tagName: "div",
      //   lineClass: "line",
      // });

      // const subtextText = new SplitType(".overlay-subtext-2", {
      //   types: "lines",
      //   tagName: "div",
      //   lineClass: "line",
      // });

      // Animate the links
      // const linksText = new SplitType(".animated-link", {
      //   types: "lines",
      //   tagName: "div",
      //   lineClass: "line",
      // });

      // // Process all animated elements
      // const allTextElements = [
      //   ...(titleText.lines || []),
      //   ...(taglineText.lines || []),
      //   // ...(subtextText.lines || []),
      //   ...(linksText.lines || []),
      // ];

      // allTextElements.forEach((line) => {
      //   const content = line.innerHTML;
      //   line.innerHTML = `<span>${content}</span>`;
      // });

      // Set initial state for text
      gsap.set([".get-started-btn", ".hero-button"], {
        // y: "120%",
        opacity: 0,
        scale: 0.6,
        filter: "blur(10px)",
        display: "block",
      });

      // Set initial state for background image
      gsap.set(".background-image", {
        scale: 1.25,
      });

      // Create a timeline for coordinated animations
      const tl = gsap.timeline();

      // Animate background image scale
      tl.to(".background-image", {
        scale: 1,
        duration: 1.3,
        ease: "power4.inOut",
      });

      // Animate text elements
      tl.to(
        // ".line span",
        [".get-started-btn", ".hero-button"],
        {
          // y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.5,
          stagger: 0.045,
          ease: "elastic.out(1.25, 0.4)",
          delay: 0.75,
        },
        0.25
      ); // Start text animation 0.25s after timeline begins

      return () => {
        // if (titleText) titleText.revert();
        // if (taglineText) taglineText.revert();
        // if (linksText) linksText.revert();
      };
    },
    { scope: banner }
  );

  return (
    <Box
      ref={banner}
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: `calc(100vh - ${navbarHeight})`,
      }}
    >
      <Box
        className='background-image'
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Box
        className={`image-text-overlay image-text-overlay-2 ${
          centerHeading ? "text-middle-center" : "text-middle-left"
        } `}
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          minHeight: `calc(100vh - ${navbarHeight})`,
        }}
      >
        <Box className='content-box'>
          <Box
            sx={{
              maxWidth: "1040px",
              mx: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              position: "relative",
              justifyContent: !centerHeading ? "space-between" : "center",
              height: "100%",
            }}
          >
            {!centerHeading && <Box></Box>}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {centerHeadingWithTagLine && (
                <Copy delay={0.75} animateOnScroll={false}>
                  <span className='overlay-subtext-tagline'>{subHeading1}</span>
                </Copy>
              )}

              {!centerHeading && (
                <Copy delay={0.75} animateOnScroll={false}>
                  <span className='overlay-title-2'>
                    {subHeading1}
                    <br />
                    {subHeading2}
                  </span>
                </Copy>
              )}
              <Copy byChar animateOnScroll={false} delay={0.7}>
                <span
                  className={`overlay-subtext-2 ${
                    centerHeading ? "large-text" : "medium-text"
                  }`}
                >
                  {heading}
                </span>
              </Copy>
            </Box>
            {!centerHeading && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  rowGap: "10px",
                  pl: "8px",
                  "@media (max-width: 768px)": {
                    pl: "0px",
                  },
                  "@media (max-width: 500px)": {
                    flexDirection: "column",
                    alignItems: "flex-start",
                  },
                }}
              >
                <Box
                  className='get-started-btn'
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
                      transition: "all 0.5s ease",
                      "&:hover": {
                        backgroundColor: "#000000",
                        color: "#FFF",
                        "& svg": {
                          backgroundColor: "#ffffff",
                          color: "#000",
                        },
                      },
                      "& svg": {
                        height: "27px",
                        width: "27px",
                        backgroundColor: "#000000",
                        color: "#FFF",
                        borderRadius: "50%",
                        transition: "all 0.5s ease",
                      },
                      "@media screen and (max-width: 768px)": {
                        fontSize: "12px",
                        padding: "5px 10px 5px 10px",
                      },
                    },
                  }}
                >
                  <Button
                    className='poppins-font'
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation("/contact");
                    }}
                  >
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
                      columnGap: "15px",
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
                        p: "9px 20px",
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
                    <Link
                      href='/services/#custom-homes'
                      className='poppins-font hero-button'
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollToSection("/services/#custom-homes");
                      }}
                    >
                      Custom homes
                    </Link>
                    <Link
                      href='/services/#remodel'
                      className='poppins-font hero-button'
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollToSection("/services/#remodel");
                      }}
                    >
                      remodel
                    </Link>
                    <Link
                      href='/services/#home-care'
                      className='poppins-font hero-button'
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollToSection("/services/#home-care");
                      }}
                    >
                      home care
                    </Link>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
        <div className='overlay-brown'></div>
      </Box>
    </Box>
  );
};

export default Banner;
