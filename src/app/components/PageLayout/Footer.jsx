"use client";

import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

const Footer = () => {
  const footerRef = useRef(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      if (!footerRef.current) return;

      gsap.fromTo(
        ".footer-content",
        {
          y: "-60%",
          // filter: "blur(3px)",
        },
        {
          y: "0%",
          // filter: "blur(0px)",
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        footerRef.current,
        {
          filter: "brightness(0.5)",
        },
        {
          filter: "brightness(1)",
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    },
    { scope: footerRef, dependencies: [footerRef, pathname] }
  );

  // 🔥 refresh ScrollTrigger when route changes
  useEffect(() => {
    // setTimeout(() => {
    //   ScrollTrigger.refresh();
    // }, 100); // small delay to wait for new page DOM
  }, [pathname]);

  return (
    <footer ref={footerRef}>
      <div className='footer-content'>
        <p>COMPASS PEAK BUILDERS</p>
        <p className='address'>
          PO BOX 63
          <br />
          TIMNATH, CO 80547
          <br />
          970.413.4265
        </p>
        <p className='email'>INFO@COMPASSPEAKBUILDERS.COM</p>

        <p className='copyright'>Copyright © 2025 Compass Peak Builders</p>
      </div>
    </footer>
  );
};

export default Footer;
