"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function TextReveal({ text = "" }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      if (!textRef.current) return;

      const words = textRef.current.querySelectorAll(".word");

      // Animate words opacity
      gsap.fromTo(
        words,
        { opacity: 0.1, filter: 'blur(4px)' },
        {
          opacity: 1,
          filter: 'blur(0px)',
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    },
    { scope: containerRef, dependencies: [text] }
  );

  return (
    <div className='text-reveal-container' ref={containerRef}>
      <div className='sticky-text'>
        <h5 ref={textRef}>
          {text.split(" ").map((word, i) => (
            <span key={i} className='word'>
              {word}&nbsp;
            </span>
          ))}
        </h5>
      </div>
    </div>
  );
}
