"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = ({
  testimonials,
  rtl = false,
  dots = false,
  arrows = false,
  infinite = true,
  slidesToScroll = 1,
  autoplay = true,
  speed = 9000,
  autoplaySpeed = 0,
  cssEase = "linear",
  pauseOnHover = true,
}) => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [isTablet, setIsTablet] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 600);
      setIsTablet(window.innerWidth <= 960);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const settings = {
    dots: dots,
    infinite: infinite,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
    slidesToScroll: slidesToScroll,
    autoplay: autoplay,
    speed: speed,
    autoplaySpeed: autoplaySpeed,
    cssEase: cssEase,
    rtl: rtl,
    pauseOnHover: pauseOnHover,
    arrows: arrows,
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
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='testimonial-wrapper'>
      <div className='testimonial-inner-wrapper'>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <div className='testimonial-card'>
                <div>
                  <p className='detail-content'>"{testimonial.content}"</p>
                  <h6>{testimonial.name}</h6>
                  <p className='role'>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
