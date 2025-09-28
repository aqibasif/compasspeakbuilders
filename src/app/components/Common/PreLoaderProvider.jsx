"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import FontFaceObserver from "fontfaceobserver";
import CustomEase from "gsap/CustomEase";
import { transitionProps } from "./AnimatedLink";
import {
  HomeBanner,
  AboutBanner,
  ContactBanner,
  ServicesBanner,
  Logo,
  HomeCareImage,
  CustomHomesImage,
  RemodelImage,
} from "@/app/Utils/images";
import NumberFlow from "@number-flow/react";
import AnimatedBlock from "./AnimatedBlock";
import { routes } from "@/app/Utils/routes";
import { useRouter } from "next/navigation";

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", transitionProps.ease7);

const imagePaths = [
  HomeBanner,
  AboutBanner,
  ContactBanner,
  ServicesBanner,
  Logo,
  HomeCareImage,
  CustomHomesImage,
  RemodelImage,
];

const preloadImages = (paths) =>
  Promise.all(
    paths.map(
      (path) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.src = path;
          img.onload = resolve;
          img.onerror = reject;
        })
    )
  );

export default function PreLoaderProvider({ children }) {
  const router = useRouter();
  const preloaderRef = useRef(null);

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);
  const [renderChildren, setRenderChildren] = useState(false);
  const [progress, setProgress] = useState(0);

  // load fonts
  useEffect(() => {
    const loadFonts = async () => {
      try {
        const fontFamilies = {
          NeueMontreal: { weight: 400 },
          NeueMontreal: { weight: 500 },
          NeueMontreal: { weight: 600 },
        };
        const observers = Object.entries(fontFamilies).map(
          ([family, options]) =>
            new FontFaceObserver(family.replace(/[0-9]/g, ""), options).load()
        );
        await Promise.all(observers);
        setFontsLoaded(true);
      } catch (err) {
        console.warn("Font load error:", err);
        setFontsLoaded(true);
      }
    };

    loadFonts();
  }, []);

  // load images
  useEffect(() => {
    const loadImages = async () => {
      try {
        await preloadImages(imagePaths);
        setImagesLoaded(true);
      } catch (err) {
        console.warn("Some assets failed to load:", err);
        setImagesLoaded(true);
      }
    };

    loadImages();
  }, []);

  // Prefetch important routes
  useEffect(() => {
    [routes.HOME, routes.ABOUT, routes.SERVICES, routes.CONTACT].forEach(
      (path) => {
        router.prefetch(path);
      }
    );
  }, []);

  useEffect(() => {
    if (!fontsLoaded) return;

    let interval;

    if (!imagesLoaded && progress < 90) {
      // Case 1: Images not yet loaded → slow progress
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(interval);
            return 90;
          }
          return prev + 3;
        });
      }, 700);
    } else if (imagesLoaded && progress <= 51) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(interval);
            return 90;
          }
          return prev + 40;
        });
      }, 700);
    }

    return () => clearInterval(interval);
  }, [fontsLoaded, imagesLoaded, progress]);

  // when images loaded → jump to 100 after 2s
  useEffect(() => {
    if (imagesLoaded) {
      const timeout = setTimeout(() => {
        setProgress(100);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [imagesLoaded, progress]);

  // when progress hits 100 → trigger after 1s
  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setAnimationDone(true);
        setRenderChildren(true);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  // GSAP exit animation
  useEffect(() => {
    if (animationDone) {
      gsap.fromTo(
        preloaderRef.current,
        { clipPath: "inset(0% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: transitionProps.duration,
          ease: "hop",
          onComplete: () => setAssetsLoaded(true),
        }
      );
    }
  }, [animationDone]);

  return (
    <>
      {!assetsLoaded && (
        <div ref={preloaderRef} className='preloader-wrapper'>
          <div className='loader-content'>
            {fontsLoaded && (
              <>
                <div
                  className='progress-bar'
                  style={{ transform: `scaleX(${progress / 100})` }}
                />
                <div className='loader-numbering'>
                  <AnimatedBlock animateOnScroll={false}>
                    <NumberFlow value={progress} trend={0} />
                  </AnimatedBlock>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {renderChildren && children}
    </>
  );
}
