"use client";

import * as Scroll from "react-scroll";
const { scroller } = Scroll;

export const scrollToSection = (sectionId) => {
  return setTimeout(() => {
    scroller.scrollTo(sectionId, {
      activeClass: "active",
      spy: false,
      smooth: true,
      duration: 2000,
      offset: 0,
      delay: 1050,

      // offset: -20,
    });
  }, 10);
};
