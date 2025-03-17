import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestimonialCard from "./TestimonialCard";

const CustomSwiper = ({
  testimonials,
  showArrows = true,
  showBullets = true,
}) => {
  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={showArrows}
        pagination={
          showBullets
            ? {
                clickable: true,
                bulletClass: "swiper-pagination-bullet custom-bullet",
                bulletActiveClass:
                  "swiper-pagination-bullet-active custom-bullet-active",
              }
            : false
        }
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        style={{ paddingBottom: showBullets ? "60px" : "0" }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .custom-bullet {
          width: 12px;
          height: 12px;
          display: inline-block;
          border-radius: 50%;
          background: #ddd;
          margin: 0 4px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .custom-bullet-active {
          background: #000;
          width: 24px;
          border-radius: 6px;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: #000;
        }
      `}</style>
    </Box>
  );
};
CustomSwiper.propTypes = {
  testimonials: PropTypes.array,
  showArrows: PropTypes.bool,
  showBullets: PropTypes.bool,
};

export default CustomSwiper;
