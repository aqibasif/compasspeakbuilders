"use client";
import React from "react";
import TextAnimationWrapper from "./TextAnimationWrapper";

const TestimonialCards = ({ testimonial }) => {
  return (
    <div className="testimonial-card-container">
      <div className="testimonial-card">
        <TextAnimationWrapper>
          <p className="poppins-font content">"{testimonial.content}"</p>
          <div className="author-info">
            <h4 className="poppins-font">{testimonial.name}</h4>
            <h6>{testimonial.role}</h6>
          </div>
        </TextAnimationWrapper>
      </div>
    </div>
  );
};

export default TestimonialCards;
