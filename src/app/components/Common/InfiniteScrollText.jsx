"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function InfiniteScrollText({ text = "Freelance Developer -" }) {
  const containerRef = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);

  let xPercent = 0;
  let velocityBoost = 0;
  let direction = -1;
  let isActive = false;

  const basePixelSpeed = 60; // 👈 speed in pixels per second (consistent regardless of text length)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => (isActive = true),
      onEnterBack: () => (isActive = true),
      onLeave: () => (isActive = false),
      onLeaveBack: () => (isActive = false),
      onUpdate: (self) => {
        if (isActive) {
          velocityBoost = Math.abs(self.getVelocity()) / 300;
          direction = self.getVelocity() > 0 ? -1 : 1;
        }
      },
    });

    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (isActive) {
      const textWidth = firstText.current?.offsetWidth || 1;
      const containerWidth = containerRef.current?.offsetWidth || 1;

      // Convert pixel speed → percentage speed relative to text width
      const percentSpeed = ((basePixelSpeed / textWidth) * 100) / 60; // 60fps approx

      if (xPercent < -100) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -100;
      }

      gsap.set(firstText.current, { xPercent });
      gsap.set(secondText.current, { xPercent });

      xPercent += (percentSpeed + velocityBoost * 0.1) * direction;
      velocityBoost *= 0.9;
    }

    requestAnimationFrame(animate);
  };

  return (
    <div
      ref={containerRef}
      className='infinite-text-scroll'
      style={{ display: "flex", whiteSpace: "nowrap", overflow: "hidden" }}
    >
      <h1 ref={firstText}>{text}</h1>
      <h1 ref={secondText}>{` ${text}`}</h1>
    </div>
  );
}
