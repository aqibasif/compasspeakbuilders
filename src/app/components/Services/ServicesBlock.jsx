import {
  CustomHomesImage,
  HomeCareImage,
  RemodelImage,
} from "@/app/Utils/images";
import React from "react";
import AnimatedText from "../Common/AnimatedText";
import ParallaxImage from "../Common/ParallaxImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
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
    title: "HOME CARE",
    content:
      "Allow us to use our expertise to preserve the beauty and longevity of your home. From routine maintenance to specialized repairs or upgrades we are honored to be trusted with it. Exceptional skill, craftsmanship, communication, and care in all we do means you don’t need to worry about a thing.",
    image: HomeCareImage,
  },
];

const ServiceCard = ({ service, index }) => {
  return (
    <div
      id={service.id}
      className={`service-card ${index % 2 === 0 ? "alternate-card" : ""}`}
    >
      <div className='service-card-text'>
        <AnimatedText>
          <h3>{service.title}</h3>
        </AnimatedText>

        <AnimatedText>
          <p>{service.content}</p>
        </AnimatedText>
      </div>

      <ParallaxImage
        multiplier={0.15}
        className='service-image'
        src={service.image}
        alt={service.title}
      />
    </div>
  );
};

const ServicesBlock = () => {
  return (
    <div className='services-block'>
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} index={index} />
      ))}
    </div>
  );
};

export default ServicesBlock;
