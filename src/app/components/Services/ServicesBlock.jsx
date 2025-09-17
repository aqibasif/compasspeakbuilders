"use client";

import {
  ConceptHomeImage,
  HomeCareImage,
  RemodelImage,
} from "@/app/Utils/images";
import React, { useRef } from "react";
import AnimatedText from "../Common/AnimatedText";
import ParallaxImage from "../Common/ParallaxImage";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    id: "custom-homes",
    title: "CUSTOM HOMES",
    content:
      "From concept to completion, we bring your unique vision to life with meticulous attention to detail, superior craftsmanship, and an unrivaled commitment to exceeding expectations. No matter what style your vision takes, we'll deliver an exceptional experience that results in a home that will stand the test of time.",
    image: ConceptHomeImage,
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
    title: "HOME CARE",
    content:
      "Allow us to use our expertise to preserve the beauty and longevity of your home. From routine maintenance to specialized repairs or upgrades we are honored to be trusted with it. Exceptional skill, craftsmanship, communication, and care in all we do means you don’t need to worry about a thing.",
    image: HomeCareImage,
  },
];

const ServiceCard = ({ service, index }) => {
  return (
    <div id={service.id} className='service-card'>
      <AnimatedText>
        <h1>00{index}</h1>
      </AnimatedText>

      <div className='service-card-content'>
        <AnimatedText>
          <h3>{service.title}</h3>
          {/* </AnimatedText> */}
          <Image
            className='service-image'
            src={service.image}
            alt={service.title}
            width={1000}
            height={1000}
          />
          {/* <ParallaxImage // TODO: LOOK INTO THIS ISSUE
          multiplier={0.15}
          className='service-image'
          src={service.image}
          alt={service.title}
        /> */}
          {/* <AnimatedText> */}

          {/* // TODO issue of footer on contact page */}
          <h6>{service.content}</h6>
        </AnimatedText>
      </div>
    </div>
  );
};

const ServicesBlock = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const stickyCards = document.querySelectorAll(".service-card");

      stickyCards.forEach((card, index) => {
        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            endTrigger: stickyCards[stickyCards.length - 1],
            end: "top top",
            pin: true,
            pinSpacing: false, // TODO: copy after logic
          });
        }

        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: stickyCards[index + 1],
            start: "top bottom",
            end: "top top",
            onUpdate: (self) => {
              const progress = self.progress;
              const scale = 1 - progress * 0.25;
              const rotation = (index % 2 === 0 ? 5 : -5) * progress;
              const afterOpacity =
                index === 0
                  ? 1 - progress < 0.5
                    ? 0.5
                    : 1 - progress
                  : 1 - progress < 0.7
                  ? 0.7
                  : 1 - progress;

              gsap.set(card, {
                scale: scale,
                rotation: rotation,
                filter: `brightness(${afterOpacity})`,
                // filter: `brightness(${afterOpacity}) blur(${
                //   progress * 4
                // }px)`,
                "--after-opacity": afterOpacity,
              });
            },
          });
        }
      });
    },
    { scope: container }
  );

  return (
    <div className='services-block'>
      {sections.map((service, index) => (
        <ServiceCard key={index} service={service} index={index + 1} />
      ))}
    </div>
  );
};

export default ServicesBlock;
