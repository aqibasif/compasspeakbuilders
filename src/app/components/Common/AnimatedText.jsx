"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const AnimatedText = ({
  children,
  animateOnScroll = true,
  delay = 0,
  byChar = false, // 👈 new prop
}) => {
  const containerRef = useRef(null);
  const elementRef = useRef([]);
  const splitRef = useRef([]);
  const lines = useRef([]);
  const chars = useRef([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      elementRef.current = [];
      splitRef.current = [];
      lines.current = [];
      chars.current = [];

      let elements = [];

      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(containerRef.current.children);
      } else {
        elements = [containerRef.current];
      }

      elements.forEach((element) => {
        elementRef.current.push(element);

        // ✅ first split into lines
        const split = new SplitText(element, {
          type: "lines",
          mask: "lines",
          linesClass: "line++",
        });

        splitRef.current.push(split);

        const computedStyles = window.getComputedStyle(element);
        const textIndent = computedStyles.textIndent;

        if (textIndent && textIndent !== "0px") {
          if (split.lines?.length > 0) {
            split.lines[0].style.paddingLeft = textIndent;
          }
          element.style.textIndent = "0"; // Reset text-indent to avoid double padding
        }

        lines.current.push(...split.lines);

        if (byChar) {
          // ✅ further split each line into characters
          split.lines.forEach((line) => {
            const charSplit = new SplitText(line, { type: "chars" });
            splitRef.current.push(charSplit);
            chars.current.push(...charSplit.chars);
          });
        }
      });

      // target set: if byChar true -> animate chars, else animate lines
      const targetEls = byChar ? chars.current : lines.current;

      gsap.set(targetEls, { y: "100%" });

      gsap.to(targetEls, {
        y: "0%",
        duration: byChar ? 1.2 : 1.2,
        stagger: byChar ? 0.04 : 0.1,
        // stagger: byChar ? 0.03 : 0.07,
        // duration: 1.8,
        // stagger: byChar ? 0.037 : 0.09,
        ease: "power4.out",
        delay: delay,
        scrollTrigger: animateOnScroll
          ? {
              trigger: containerRef.current,
              start: "top 90%",
              // start: "top 90%",
              toggleActions: "play none none reverse",
              // end: "bottom top", // 👈 when element completely leaves viewport
              // onEnter: () => {
              //   gsap.to(targetEls, animateProps); // play animation
              // },
              // onLeaveBack: () => {
              //   // 👈 when scrolled all the way back up (element is 100% gone)
              //   gsap.set(targetEls, {
              //     transform: "translate(0%, 50%) rotateX(-90deg)",
              //   });
              // },
            }
          : null,
      });

      return () => {
        splitRef.current.forEach((split) => {
          if (split) split.revert();
        });
      };
    },
    {
      scope: containerRef,
      dependencies: [containerRef, animateOnScroll, delay, byChar],
    }
  );

  if (React.Children.count(children) === 1) {
    return React.cloneElement(children, { ref: containerRef });
  }

  return (
    <div ref={containerRef} data-copy-wrapper='true'>
      {children}
    </div>
  );
};

export default AnimatedText;
