import React from "react";
import TextAnimationWrapper from "./TextAnimationWrapper";
import TestimonialSlider from "./TestimonialSlider";
import { testimonials } from "@/app/data";

const TestimonialSection = () => {
  return (
    <>
      <div className="testimonial-container">
        <TextAnimationWrapper className="section-main-heading">
          <p className="what-client-say">WHAT OUR CLIENTS SAY</p>
          <h3>TESTIMONIALS</h3>
        </TextAnimationWrapper>
      </div>

      <div className="fade-edges">
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </>
  );
};

export default TestimonialSection;
