"use client";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";

export const transitionProps = {
  // from: "polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)",
  // to: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
  // from: "inset(75% 25% 25% 25%)",
  from: "inset(80% 15% 20% 15%)",
  // from: "inset(90% 10% 10% 10%)",
  // middle: "inset(15% 20% 15% 20%)",
  to: "inset(0% 0% 0% 0%)",
  // from: "inset(80% 15% 20% 15%)",
  // middle: "inset(30% 10% 10% 10%)",
  // to: "inset(0% 0% 0% 0%)",
  duration: 2,
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
      },
      {
        opacity: 0.2,
        transform: "translateY(-35%)",
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

    router.push(href, {
      onTransitionReady: slideInOut,
    });

    if (onClick) onClick(); // useful for closing mobile menu
  };

  // TODO: check how to fasten the load of pages from here

  // TODO: copy parallaxImage comp and ask gpt to convert it for GSAP
  // TODO: also convert skiper gallery into gsap integration

  return (
    <a onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default AnimatedLink;
