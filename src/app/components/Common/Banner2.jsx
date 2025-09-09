"use client";
import React, { useRef } from "react";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Copy from "./Copy";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { scrollToSection } from "./scrollToSection";
import { routes } from "@/app/Utils/routes";
import { slideInOut } from "./AnimatedLink";

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

  const handleNavigation = (path) => {
    if (pathname === path) return;

    router.push(path, {
      onTransitionReady: slideInOut,
    });
  };

  const handleScrollToSection = (path) => {
    const sectionId = path.split("#")[1];

    if (pathname === routes.SERVICES) {
      scrollToSection(sectionId);
    } else {
      router.push(routes.SERVICES, {
        onTransitionReady: () => {
          slideInOut();
          scrollToSection(sectionId);
        },
      });
    }
  };

  useGSAP(
    () => {
      gsap.set([".get-started-btn", ".hero-button"], {
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
        duration: 1.75,
        ease: "power4.out",
      });

      tl.to(
        [".get-started-btn", ".hero-button"],
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.35,
          ease: "power4.out",
        },
        0.45
      ); // Start text animation 0.25s after timeline begins

      return () => {};
    },
    { scope: banner }
  );

  return (
    <div
      ref={banner}
      className="banner"
      style={{
        minHeight: `calc(100vh - ${navbarHeight})`,
      }}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      <div
        className={`image-text-overlay-2 ${
          centerHeading ? "text-middle-center" : "text-middle-left"
        } `}
        style={{
          minHeight: `calc(100vh - ${navbarHeight})`,
        }}
      >
        <div className="content-box">
          <div
            className="content-box-wrapper"
            style={{
              justifyContent: !centerHeading ? "space-between" : "center",
            }}
          >
            {!centerHeading && <div></div>}
            <div className="content-wrapper">
              {centerHeadingWithTagLine && (
                <Copy delay={0.75} animateOnScroll={false}>
                  <span className="overlay-subtext-tagline">{subHeading1}</span>
                </Copy>
              )}

              {!centerHeading && (
                <Copy delay={0.75} animateOnScroll={false}>
                  <span className="overlay-title-2">
                    {subHeading1}
                    <br />
                    {subHeading2}
                  </span>
                </Copy>
              )}
              <Copy byChar animateOnScroll={false} delay={0.65}>
                <span
                  className={`overlay-subtext-2 ${
                    centerHeading ? "large-text" : "medium-text"
                  }`}
                >
                  {heading}
                </span>
              </Copy>
            </div>
            {!centerHeading && (
              <div className="bottom-link-wrapper">
                <div className="get-started-btn">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(routes.CONTACT);
                    }}
                  >
                    Let's Get Started
                    <div className="icon">
                      <FaAngleRight className="arrow-right" />
                    </div>
                  </button>
                </div>
                <div>
                  <div className="bottom-links-wrapper">
                    <Link
                      href="/services/#custom-homes"
                      className="poppins-font hero-button hero-btn-1"
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollToSection("/services/#custom-homes");
                      }}
                    >
                      Custom homes
                    </Link>
                    <Link
                      href="/services/#remodel"
                      className="poppins-font hero-button hero-btn-2"
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollToSection("/services/#remodel");
                      }}
                    >
                      remodel
                    </Link>
                    <Link
                      href="/services/#home-care"
                      className="poppins-font hero-button hero-btn-3"
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollToSection("/services/#home-care");
                      }}
                    >
                      home care
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="overlay-brown"></div>
      </div>
    </div>
  );
};

export default Banner;
