"use client";

import { useTransitionRouter } from "next-view-transitions";
import { usePathname, useRouter } from "next/navigation";
import { scrollToSection } from "./scrollToSection";
import CustomLink from "./CustomLink";
import { useEffect } from "react";

export const transitionProps = {
  from: "inset(100% 0% 0% 0%)",
  to: "inset(0% 0% 0% 0%)",

  // from: "inset(50% 40% 50% 40%)",
  // to: "inset(0% 0% 0% 0%)",
  // from: "circle(200% at 200% 100%)",
  // to: "circle(200% at -100% 100%)",

  duration: 0.8,
  ease: "0.9, 0, 0.1, 1", // default
  ease1: ".215,.61,.355,1", // 1
  ease2: ".19,1,.22,1", // 2
  ease3: ".16,1,.3,1", // 3

  ease4: "0.87, 0, 0.13, 1",

  ease5: ".16,1,.3,1",
  ease6: ".22,1,.36,1",

  // ease7: "0.79,0.14,0.15,0.86",
  ease7: "0.65,0.05,0.36,1",
  // ease7: "0,.52,.72,.93",
};

export const slideInOut = () => {
  if (!document.startViewTransition) return;

  document.documentElement.animate(
    [
      {
        opacity: 1,
        transform: "translateY(0)",
        // filter: "brightness(1)",
        // filter: "blur(0px)",
        // filter: "blur(0px) brightness(1)",
      },
      {
        opacity: 0.7,
        transform: "translateY(-20%)",
        // filter: "brightness(0.5)",
        // transform: "translateY(-35%)",
        // filter: "blur(12px)",
        // filter: "blur(6px) brightness(0.8)",
      },
    ],
    {
      duration: transitionProps.duration * 1000,
      easing: `cubic-bezier(${transitionProps.ease7})`,
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        clipPath: transitionProps.from,
      },
      { clipPath: transitionProps.to },
    ],
    {
      duration: transitionProps.duration * 1000,
      easing: `cubic-bezier(${transitionProps.ease7})`,
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};

const AnimatedLink = ({
  href,
  children,
  className = "",
  onClick,
  showCustomLink = false,
}) => {
  const transitionRouter = useTransitionRouter();
  const pathname = usePathname();
  const router = useRouter(); // has prefetch()

  useEffect(() => {
    if (href) router.prefetch(href);
  }, [href, router]);

  const handleClick = (e) => {
    e.preventDefault();

    if (href === pathname) {
      return;
    }

    const sectionId = href.split("#")[1];

    transitionRouter.push(href, {
      onTransitionReady: () => {
        slideInOut();
        if (sectionId) scrollToSection(sectionId);
      },
    });

    if (onClick) onClick(); // useful for closing mobile menu
  };

  if (showCustomLink) {
    return (
      <CustomLink onClick={handleClick} className={className}>
        {children}
      </CustomLink>
    );
  }

  // TODO: ⚠️ very IMPORTANT, use LINK or prefetch because working very slow on dep version

  return (
    <a onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default AnimatedLink;
