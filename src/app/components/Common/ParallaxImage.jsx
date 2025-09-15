"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ParallaxImage = ({ className, src, alt, multiplier = 0.3 }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    // ✅ Scope this component only
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        {
          y: () => -window.innerHeight * multiplier,
          scale: 1.25,
        },
        {
          y: () => window.innerHeight * multiplier,
          scale: 1.25,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom", // image enters
            end: "bottom top", // image leaves
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert(); // ✅ Cleanup only this component
  }, [multiplier]);

  return (
    <div ref={containerRef} className={`parallax-image ${className}`}>
      {/* <img ref={imageRef} src={src} alt={alt} /> */}
      <Image ref={imageRef} src={src} alt={alt} height={2000} width={2000} />
    </div>
  );
};

export default ParallaxImage;
