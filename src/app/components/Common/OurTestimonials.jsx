// "use client";

// import { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { testimonials } from "@/app/data";
// import AnimatedText from "../Common/AnimatedText";

// export default function Testimonials() {
//   const swiperRef = useRef(null);

//   return (
//     <div className='testimonial-wrapper'>
//       {/* Custom navigation buttons */}
//       <div className='testimonial-nav'>
//         <button onClick={() => swiperRef.current?.slidePrev()}>Prev</button>
//         <button onClick={() => swiperRef.current?.slideNext()}>Next</button>
//       </div>

//       <Swiper
//         modules={[Navigation, Autoplay]}
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//         spaceBetween={20}
//         autoplay={{ delay: 2000, disableOnInteraction: false }}
//         loop={true}
//         breakpoints={{
//           0: { slidesPerView: 1 },
//           768: { slidesPerView: 1 },
//         }}
//       >
//         {testimonials.map((t) => (
//           <SwiperSlide key={t.id}>
//             <div
//             // className='testimonial-card-2'
//             >
//               <AnimatedText>
//                 <p className='testimonial-text'>"{t.content}"</p>
//                 <h6>{t.name}</h6>
//                 <p>{t.role}</p>
//               </AnimatedText>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { testimonials } from "@/app/data";
import AnimatedText from "../Common/AnimatedText";

export default function Testimonials() {
  const swiperRef = useRef(null);

  return (
    <div
      style={{ maxWidth: "1000px", margin: "auto", minHeight: "100vh" }}
    >
      {/* Custom navigation buttons */}
      <div className='testimonial-nav'>
        <button onClick={() => swiperRef.current?.slidePrev()}>Prev</button>
        <button onClick={() => swiperRef.current?.slideNext()}>Next</button>
      </div>

      <>
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className='testimonial-card-2'>
                {/* <AnimatedText> */}
                <p className='testimonial-text'>"{t.content}"</p>
                <h6>{t.name}</h6>
                <p>{t.role}</p>
                {/* </AnimatedText> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
}
