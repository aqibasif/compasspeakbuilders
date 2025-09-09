import React from "react";
import TextAnimationWrapper from "./TextAnimationWrapper";
import SlickSlider from "./SlickSlider";

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
        <SlickSlider slidesToShow={3} />
      </div>
    </>
  );
};

export default TestimonialSection;
