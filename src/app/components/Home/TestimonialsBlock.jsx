"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { testimonials } from "@/app/data";
import AnimatedText from "../Common/AnimatedText";

const TestimonialBlock = () => {
  return (
    <div className='testimonial-block'>
      <AnimatedText>
        <h1 className='hidden-text'>TESTIMONIALS</h1>
      </AnimatedText>
      <AnimatedText>
        <h6 className='short-heading'>WHAT OUR CLIENTS SAY</h6>
      </AnimatedText>
      <AnimatedText>
        <h4>TESTIMONIALS</h4>
      </AnimatedText>

      <div className='testimonial-carousel'>
        <Swiper
          modules={[Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={12}
          className='testimonial-carousel-swiper'
          loop
          autoplay={{
            delay: 2000, // ✅ Change slide every 2 seconds
            disableOnInteraction: false, // Keeps autoplay running after user interaction
          }}
          speed={450}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className='testimonial-carousel-slide'>
              <div className='carousel-card'>
                <p className='testimonial-content'>{item.content}</p>
                <h6 className='testimonial-name'>{item.name}</h6>
                <h6 className='testimonial-role'>{item.role}</h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialBlock;
