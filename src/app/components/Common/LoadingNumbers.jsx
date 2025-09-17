"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

// TODO: as soons as the assetsLoaded become true, the next number should be 100 and skip between numbers

export default function LoadingNumbers({ areAssetsReady, onComplete }) {
  const containerRef = useRef(null);
  const mainTl = useRef(null);

  const [animationDone, setAnimationDone] = useState(false);

  useGSAP(() => {
    const container = containerRef.current;
    const spans = Array.from(container.querySelectorAll(".loader-number"));

    // Split each span into chars
    const splits = spans.map((span) => new SplitText(span, { type: "chars" }));

    // Set initial position for all chars
    splits.forEach((split) => {
      gsap.set(split.chars, { yPercent: 100, rotate: 10 });
    });

    mainTl.current = gsap.timeline({
      paused: true,
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    const animationProps = {
      // stagger: 0.0353,
      // duration: 0.25,
      stagger: 0.0613,
      duration: 0.45,
      ease: "cubic-bezier(0, 0.01, 0.01, 1)",
    };

    // === Intro animation for first number ===
    mainTl.current.to(splits[0].chars, {
      yPercent: 0,
      rotate: 0,
      delay: 0.25,
      ...animationProps,
      // onComplete: () => setIntroDone(true),
    });

    // === Sequential upward slides ===
    for (let i = 0; i < splits.length - 1; i++) {
      mainTl.current.to(
        splits[i].chars,
        {
          yPercent: -100,
          rotate: -10,
          ...animationProps,
        },
        "+=0.05"
      );

      mainTl.current.to(
        splits[i + 1].chars,
        {
          yPercent: 0,
          rotate: 0,
          ...animationProps,
        },
        "<"
      );

      // Pause after 076 (before last animation)
      if (i === 1) {
        // Label helps us resume from this exact point
        mainTl.current.add(() => {
          setAnimationDone(true); // now set only when 076 has slid in
        });
        mainTl.current.addPause("pauseAfter076");
      }
    }

    // Start intro
    mainTl.current.play(0);

    return () => {
      splits.forEach((split) => split.revert());
    };
  }, []);

  // Resume when assets ready
  useEffect(() => {
    if (areAssetsReady && animationDone && mainTl.current) {
      mainTl.current.play("pauseAfter076+=0.01");
    }
  }, [areAssetsReady, animationDone]);

  return (
    <div ref={containerRef} className='loading-numbers-wrapper'>
      <span className='loader-number'>000</span>
      <span className='loader-number'>063</span>
      <span className='loader-number'>094</span>
      <span className='loader-number'>100</span>
    </div>
  );
}
