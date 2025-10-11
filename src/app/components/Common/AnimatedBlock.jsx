import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AnimatedBlock = ({ children, delay = 0, animateOnScroll = true }) => {
  const elementRef = useRef(null);

  useGSAP(
    () => {
      if (!elementRef.current) return;

      const isMobile = window.innerWidth <= 768; // You can adjust the breakpoint

      gsap.set(elementRef.current, {
        opacity: 0,
        y: 60,
      });

      gsap.to(elementRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        delay,
        scrollTrigger: animateOnScroll
          ? {
              trigger: elementRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true,
            }
          : null,
      });
    },
    {
      scope: elementRef,
      dependencies: [animateOnScroll, delay],
    }
  );

  return (
    <div className='animated-block' ref={elementRef}>
      {children}
    </div>
  );
};

export default AnimatedBlock;
