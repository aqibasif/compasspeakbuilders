"use client";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { scrollToSection } from "./scrollToSection";

export const transitionProps = {
  from: "inset(50% 40% 50% 40%)",
  to: "inset(0% 0% 0% 0%)",
  // from: "circle(200% at 200% 100%)",
  // to: "circle(200% at -100% 100%)",
  
  duration: 1.5,
  ease: "0.9, 0, 0.1, 1", // default
  ease1: ".215,.61,.355,1", // 1
  ease2: ".19,1,.22,1", // 2
  ease3: ".16,1,.3,1", // 3
};

export const slideInOut = () => {
  if (!document.startViewTransition) return;

  document.documentElement.animate(
    [
      {
        opacity: 1,
        transform: "translateY(0)",
        filter: "blur(0px) brightness(1)",
      },
      {
        opacity: 0.5,
        transform: "translateY(-35%)",
        filter: "blur(6px) brightness(0.8)",
      },
    ],
    {
      duration: 1500,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      },
    ],
    {
      duration: 1500,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};

// Page transition function

const AnimatedLink = ({ href, children, className = "", onClick }) => {
  const router = useTransitionRouter();
  const pathname = usePathname();

  const handleClick = (e) => {
    e.preventDefault();

    if (href === pathname) {
      return;
    }

    const sectionId = href.split("#")[1];

    router.push(href, {
      onTransitionReady: () => {
        slideInOut();
        if (sectionId) scrollToSection(sectionId);
      },
    });

    if (onClick) onClick(); // useful for closing mobile menu
  };

  return (
    <a onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default AnimatedLink;
