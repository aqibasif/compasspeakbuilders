"use client";

import React from "react";
import dynamic from "next/dynamic";
import { testimonials } from "../../data";
import TestimonialCard from "./TestimonialCard";

// Dynamic import to avoid SSR issues
const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
  loading: () => <div>Loading slider...</div>,
});

function TestimonialsSlider({
  rtl = false,
  dots = false,
  infinite = true,
  slidesToShow = 4,
  slidesToScroll = 1,
  autoplay = true,
  speed = 4000,
  autoplaySpeed = 0,
  cssEase = "linear",
  pauseOnHover = false,
}) {
  const settings = {
    dots: dots,
    infinite: infinite,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: autoplay,
    speed: speed,
    autoplaySpeed: autoplaySpeed,
    cssEase: cssEase,
    rtl: rtl,
    pauseOnHover: pauseOnHover,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialsSlider;
