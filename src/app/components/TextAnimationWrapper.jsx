"use client";
import React, { useRef, ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

// Register GSAP plugin
gsap.registerPlugin(useGSAP);

const TextAnimationWrapper = ({
  children,
  className = "",
  element = "div",
  delay = 0.5,
  stagger = 0.075,
  duration = 2,
}) => {
  const containerRef = useRef(null);
  const Element = element;

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const text = new SplitType(containerRef.current, {
        types: "lines",
        tagName: "div",
        lineClass: "animated-line",
      });

      // Process all animated elements
      const allTextElements = text.lines || [];

      allTextElements.forEach((line) => {
        const content = line.innerHTML;
        line.innerHTML = `<span>${content}</span>`;
      });

      // Set initial state
      gsap.set(".animated-line span", {
        y: 400,
        display: "block",
      });

      // Animate all elements
      gsap.to(".animated-line span", {
        y: 0,
        duration: duration,
        stagger: stagger,
        ease: "power4.out",
        delay: delay,
      });

      return () => {
        if (text) text.revert();
      };
    },
    { scope: containerRef }
  );

  return (
    <Element ref={containerRef} className={`animated-text ${className}`}>
      {children}
    </Element>
  );
};

export default TextAnimationWrapper;
