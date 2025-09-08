import { scroller } from "react-scroll";

export const scrollToSection = (sectionId) => {
  setTimeout(() => {
    scroller.scrollTo(sectionId, {
      activeClass: "active",
      spy: false,
      smooth: true,
      duration: 1000,
      offset: -20,
    });
  }, 10);
};
