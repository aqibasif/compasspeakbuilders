"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import TextAnimationWrapper from "../Common/TextAnimationWrapper";
import ScrollReveal from "../Common/ScrollReveal";
import {
  CustomHomesImage,
  HomeCareImage,
  RemodelImage,
} from "../../Utils/images";
import ParallaxImage from "../Common/ParallaxImage";

const ServicesSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 960);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const sections = [
    {
      id: "custom-homes",
      title: "CUSTOM HOMES",
      content:
        "From concept to completion, we bring your unique vision to life with meticulous attention to detail, superior craftsmanship, and an unrivaled commitment to exceeding expectations. No matter what style your vision takes, we'll deliver an exceptional experience that results in a home that will stand the test of time.",
      image: CustomHomesImage,
    },
    {
      id: "remodel",
      title: "REMODEL",
      content:
        "We love the challenge of transforming existing spaces into something that inspires. You can trust us to provide exceptional craftsmanship and design that will breathe new life into your home. We understand that remodeling done poorly can be disruptive to your life, so we use our experience and timely communication to ensure both the new space and the process will delight.",
      image: RemodelImage,
    },
    {
      id: "home-care",
      title: "Home care",
      content:
        "Allow us to use our expertise to preserve the beauty and longevity of your home. From routine maintenance to specialized repairs or upgrades we are honored to be trusted with it. Exceptional skill, craftsmanship, communication, and care in all we do means you don’t need to worry about a thing.",
      image: HomeCareImage,
    },
  ];

  return (
    <>
      <div className='services-container'>
        <div className='section-container'>
          {sections.map((section, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                className='services-grid'
                style={{
                  gridTemplateColumns: isMobile
                    ? "1fr"
                    : isReversed
                    ? "1.5fr 1fr"
                    : "1fr 1.5fr",
                }}
                key={index}
                id={section.id}
              >
                <div
                  className='col-1'
                  style={{
                    order: isMobile ? 2 : isReversed ? 2 : 1,
                  }}
                >
                  <div>
                    <TextAnimationWrapper className='title'>
                      <h2 className='poppins-font'>{section.title}</h2>
                    </TextAnimationWrapper>
                    {/* <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={0}
                    blurStrength={0}
                    containerClassName="card-content service-detail"
                  > */}
                    <p>{section.content}</p>
                    {/* </ScrollReveal> */}
                  </div>
                </div>

                <div
                  className='service-img'
                  style={{
                    order: isMobile ? 1 : isReversed ? 1 : 2,
                  }}
                >
                  <ParallaxImage src={section.image} alt={section.title} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
