"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import FontFaceObserver from "fontfaceobserver";
import LoadingNumbers from "./LoadingNumbers";
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

// TODO: img loading issue needs to fix

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
// CHECK THESE LOADING ON SLOW

export default function PreLoaderProvider({ children }) {
  const preloaderRef = useRef(null);

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);
  const [renderChildren, setRenderChildren] = useState(false);

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
              <LoadingNumbers
                areAssetsReady={imagesLoaded}
                onComplete={() => {
                  setAnimationDone(true);
                  setRenderChildren(true);
                }}
              />
            )}
          </div>
        </div>
      )}

      {renderChildren && children}
    </>
  );
}
