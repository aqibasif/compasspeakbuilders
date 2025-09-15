"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { testimonials } from "@/app/data";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

gsap.registerPlugin(SplitText);

export default function CustomTestimonials() {
  const [index, setIndex] = useState(0);
  const cardRef = useRef(null);
  const intervalRef = useRef(null);
  const splitsRef = useRef([]); // active entry splits
  const isAnimating = useRef(false); // block concurrent animations

  // revert and clear tracked splits
  const cleanupSplits = () => {
    if (splitsRef.current.length) {
      splitsRef.current.forEach((s) => {
        try {
          s.revert();
        } catch (e) {
          /* ignore */
        }
      });
      splitsRef.current = [];
    }
  };

  // ENTRY animation (runs after index changes)
  const animateIn = () => {
    if (!cardRef.current) return;

    // keep blocked until entry complete
    isAnimating.current = true;

    // ensure old wrappers are reverted
    cleanupSplits();

    const textEls = Array.from(
      cardRef.current.querySelectorAll("h5, h4, h6, p")
    );

    // create splits for the new content
    const entrySplits = textEls.map(
      (el) => new SplitText(el, { type: "lines", mask: "lines" })
    );
    splitsRef.current.push(...entrySplits);

    // Always reset visibility before animating
    cardRef.current.style.visibility = "visible";

    // set lines to start position (offscreen)
    entrySplits.forEach((split) => gsap.set(split.lines, { y: "100%" }));

    const tl = gsap.timeline({
      onComplete: () => {
        // entry finished -> allow new interactions
        isAnimating.current = false;
      },
    });

    // animate all splits together (0 offset) so they stagger nicely
    entrySplits.forEach((split) => {
      tl.to(
        split.lines,
        {
          y: "0%",
          duration: 1.2,
          stagger: 0.07,
          ease: "power4.out",
        },
        0
      );
    });
  };

  const handleChange = (direction = "next", isManual = false) => {
    if (!cardRef.current) return;

    // if user clicked button -> override any animation
    if (isManual) {
      // gsap.killTweensOf("*"); // kill ongoing tweens
      // kill only testimonial tweens
      if (splitsRef.current.length) {
        splitsRef.current.forEach((s) => gsap.killTweensOf(s.lines));
      }
      cleanupSplits();
      isAnimating.current = false;
    } else if (isAnimating.current) {
      return; // block autoplay while animating
    }

    isAnimating.current = true;

    // ensure previous entry splits won't interfere
    cleanupSplits();

    const textEls = Array.from(
      cardRef.current.querySelectorAll("h5, h4, h6, p")
    );

    // create local splits for exit (so we can revert them right after)
    const localSplits = textEls.map(
      (el) => new SplitText(el, { type: "lines", mask: "lines" })
    );

    const tl = gsap.timeline({
      onComplete: () => {
        // revert exit wrappers before React updates DOM
        localSplits.forEach((s) => {
          try {
            s.revert();
          } catch (e) {
            /* ignore */
          }
        });

        // hide the container so React can render the new text without flash
        if (cardRef.current) cardRef.current.style.visibility = "hidden";

        const nextIndex =
          direction === "next"
            ? (index + 1) % testimonials.length
            : (index - 1 + testimonials.length) % testimonials.length;

        setIndex(nextIndex);
        // animateIn (in useEffect) will set isAnimating.current = false after entry finishes
      },
    });

    // animate all exit splits together (same start time)
    localSplits.forEach((split) => {
      tl.to(
        split.lines,
        {
          y: "100%",
          duration: 0.6,
          stagger: 0.01,
          ease: "power4.out",
        },
        0
      );
    });
  };

  // animate in when index changes
  useEffect(() => {
    animateIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  // autoplay (restarts on index change to use latest closure). Blocks if animating.
  useEffect(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      // don't call while animating
      if (!isAnimating.current) handleChange("next");
    }, 3500);

    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  // cleanup on unmount
  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
      cleanupSplits();
      isAnimating.current = false;
    };
  }, []);

  const current = testimonials[index];

  const ContentWrapper = index === 0 ? "h6" : index === 1 ? "h5" : "h4";

  return (
    <div className='testimonials-container'>
      <div className='testimonials-block'>
        <div className='left-col'>
          <p>Testimonials</p>
          <h4 className='numbering'>
            {index + 1}/{testimonials.length}
          </h4>
        </div>

        <div className='testimonial-area' ref={cardRef}>
          <ContentWrapper key={index} className='testimonial-content'>
            <RiDoubleQuotesL style={{ marginRight: "9px" }} />
            {current.content}
            <RiDoubleQuotesR style={{ marginLeft: "9px" }} />
          </ContentWrapper>

          <div className='testimonial-author'>
            <div>
              <h6>{current.name}</h6>
              <p>{current.role}</p>
            </div>

            <div className='testimonial-buttons'>
              <button onClick={() => handleChange("prev", true)}>
                <IoMdArrowBack />
              </button>
              <button onClick={() => handleChange("next", true)}>
                <IoMdArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
