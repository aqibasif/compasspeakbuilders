"use client";

import React, { useRef } from "react";
import ParallaxImage from "./ParallaxImage";
import Button from "./Button";
import { routes } from "@/app/Utils/routes";
import AnimatedText from "./AnimatedText";
import AnimatedBlock from "./AnimatedBlock";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedLink from "./AnimatedLink";

const RenderSubHeadings = ({ subHeading }) => {
  if (typeof subHeading === "string" && !!subHeading) {
    return (
      <AnimatedText animateOnScroll={false} delay={0.65}>
        <h6>{subHeading}</h6>
      </AnimatedText>
    );
  } else if (typeof subHeading === "object") {
    return (
      <AnimatedText animateOnScroll={false} delay={0.65}>
        {subHeading.map((sub) => (
          <h6 key={sub}>{sub}</h6>
        ))}
      </AnimatedText>
    );
  } else return <></>;
};

const Hero = ({
  image,
  heading = "",
  subHeading = "",
  isHomePageHero = false,
}) => {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      if (!heroRef.current) return;

      gsap.set(".hero-img", { scale: 1.25 });

      gsap.to(".hero-img", {
        scale: 1,
        duration: 2.6,
        ease: "power4.out",
      });

      gsap.fromTo(
        heroRef.current,
        {
          filter: "brightness(1)",
        },
        {
          filter: "brightness(0.1)",
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "20% top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        ".hero-content",
        {
          y: "0%",
          // scale: 1,
          // filter: "brightness(1) blur(0px)",
          // filter: "brightness(1)",
        },
        {
          // y: "45vh",
          y: "35vh",
          // scale: 0.9,
          // filter: "brightness(0) blur(7px)",
          // filter: "brightness(0)",
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    },
    { scope: heroRef, dependencies: [heroRef] }
  );

  return (
    <div className='hero' ref={heroRef}>
      <ParallaxImage className='hero-img' src={image} alt={heading} />

      <div
        className={`hero-content ${isHomePageHero ? "" : "centered-aligned"}`}
      >
        <RenderSubHeadings subHeading={subHeading} />
        <AnimatedText animateOnScroll={false} byChar delay={0.45}>
          <h1>{heading}</h1>
        </AnimatedText>
        {isHomePageHero && (
          <AnimatedBlock animateOnScroll={false} delay={0.6}>
            <Button
              text="Let's Get Started"
              icon={<MdOutlineArrowOutward />}
              route={routes.CONTACT}
            />
          </AnimatedBlock>
        )}

        {isHomePageHero && (
          <div className='hero-buttons'>
            <div className='sections-buttons'>
              <AnimatedBlock animateOnScroll={false} delay={0.65}>
                <AnimatedLink
                  showCustomLink
                  href={routes.SERVICES + "/#custom-homes"}
                >
                  <p>Custom Homes</p>
                </AnimatedLink>
              </AnimatedBlock>

              <AnimatedBlock animateOnScroll={false} delay={0.7}>
                <div className='hero-line' />
              </AnimatedBlock>

              <AnimatedBlock animateOnScroll={false} delay={0.7}>
                <AnimatedLink
                  showCustomLink
                  href={routes.SERVICES + "/#remodel"}
                >
                  <p>Remodel</p>
                </AnimatedLink>
              </AnimatedBlock>

              <AnimatedBlock animateOnScroll={false} delay={0.75}>
                <div className='hero-line' />
              </AnimatedBlock>

              <AnimatedBlock animateOnScroll={false} delay={0.75}>
                <AnimatedLink
                  showCustomLink
                  href={routes.SERVICES + "/#home-care"}
                >
                  <p>Home Care</p>
                </AnimatedLink>
              </AnimatedBlock>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
