// "use client";

// import { useEffect, useState, useRef } from "react";
// import gsap from "gsap";
// import FontFaceObserver from "fontfaceobserver";
// import LoadingNumbers from "./LoadingNumbers";
// import CustomEase from "gsap/CustomEase";
// import { transitionProps } from "./AnimatedLink";
// import {
//   HomeBanner,
//   AboutBanner,
//   ContactBanner,
//   ServicesBanner,
//   Logo,
//   HomeCareImage,
//   CustomHomesImage,
//   RemodelImage,
// } from "@/app/Utils/images";
// import NumberFlow from "@number-flow/react";

// gsap.registerPlugin(CustomEase);
// CustomEase.create("hop", transitionProps.ease7);

// const imagePaths = [
//   HomeBanner,
//   AboutBanner,
//   ContactBanner,
//   ServicesBanner,
//   Logo,
//   HomeCareImage,
//   CustomHomesImage,
//   RemodelImage,
// ];

// // TODO: img loading issue needs to fix

// const preloadImages = (paths) =>
//   Promise.all(
//     paths.map(
//       (path) =>
//         new Promise((resolve, reject) => {
//           const img = new Image();
//           img.src = path;
//           img.onload = resolve;
//           img.onerror = reject;
//         })
//     )
//   );
// // CHECK THESE LOADING ON SLOW

// export default function PreLoaderProvider({ children }) {
//   const preloaderRef = useRef(null);

//   const [fontsLoaded, setFontsLoaded] = useState(false);
//   const [imagesLoaded, setImagesLoaded] = useState(false);
//   const [assetsLoaded, setAssetsLoaded] = useState(false);
//   const [animationDone, setAnimationDone] = useState(false);
//   const [renderChildren, setRenderChildren] = useState(false);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const loadFonts = async () => {
//       try {
//         const fontFamilies = {
//           NeueMontreal: { weight: 400 },
//           NeueMontreal: { weight: 500 },
//           NeueMontreal: { weight: 600 },
//         };
//         const observers = Object.entries(fontFamilies).map(
//           ([family, options]) =>
//             new FontFaceObserver(family.replace(/[0-9]/g, ""), options).load()
//         );
//         await Promise.all(observers);
//         setFontsLoaded(true);
//       } catch (err) {
//         console.warn("Font load error:", err);
//         setFontsLoaded(true);
//       }
//     };

//     loadFonts();
//   }, []);

//   useEffect(() => {
//     const loadImages = async () => {
//       try {
//         await preloadImages(imagePaths);
//         setImagesLoaded(true);
//       } catch (err) {
//         console.warn("Some assets failed to load:", err);
//         setImagesLoaded(true);
//       }
//     };

//     loadImages();
//   }, []);

//   // progress logic
//   useEffect(() => {
//     if (!fontsLoaded) return;

//     let interval;
//     if (progress < 90 && !imagesLoaded) {
//       interval = setInterval(() => {
//         setProgress((prev) => {
//           if (prev >= 90) {
//             clearInterval(interval);
//             return 90;
//           }
//           return Math.min(prev + 9, 90);
//         });
//       }, 1000);
//     }

//     return () => clearInterval(interval);
//   }, [fontsLoaded, imagesLoaded, progress]);

//   // when images loaded → jump to 100 after 2s
//   useEffect(() => {
//     if (imagesLoaded && progress === 90) {
//       const timeout = setTimeout(() => {
//         setProgress(100);
//       }, 2000);
//       return () => clearTimeout(timeout);
//     }
//   }, [imagesLoaded, progress]);

//   // when progress hits 100 → trigger after 1s
//   useEffect(() => {
//     if (progress === 100) {
//       const timeout = setTimeout(() => {
//         setAnimationDone(true);
//         setRenderChildren(true);
//       }, 1000);
//       return () => clearTimeout(timeout);
//     }
//   }, [progress]);

//   useEffect(() => {
//     if (animationDone) {
//       gsap.fromTo(
//         preloaderRef.current,
//         { clipPath: "inset(0% 0% 0% 0%)" },
//         {
//           clipPath: "inset(0% 0% 100% 0%)",
//           duration: transitionProps.duration,
//           ease: "hop",
//           onComplete: () => setAssetsLoaded(true),
//         }
//       );
//     }
//   }, [animationDone]);

//   return (
//     <>
//       {!assetsLoaded && (
//         <div ref={preloaderRef} className='preloader-wrapper'>
//           <div className='loader-content'>
//             {fontsLoaded && (
//               <>
//                 {/* <LoadingNumbers
//                   areAssetsReady={imagesLoaded}
//                   onComplete={() => {
//                     setAnimationDone(true);
//                     setRenderChildren(true);
//                   }}
//                 /> */}
//                 <div className='loader-numbering'>
//                   <NumberFlow className value={progress} />
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       )}

//       {renderChildren && children}
//     </>
//   );
// }

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

  // progress logic
  // useEffect(() => {
  //   if (!fontsLoaded) return;

  //   let interval;
  //   if (progress < 90 && !imagesLoaded) {
  //   // if (!imagesLoaded) {
  //     interval = setInterval(() => {
  //       setProgress((prev) => {
  //         if (prev >= 90) {
  //           clearInterval(interval);
  //           return 90;
  //         }
  //         return prev + 3;
  //       });
  //     }, 10);
  //   }

  //   return () => clearInterval(interval);
  // }, [fontsLoaded, imagesLoaded, progress]);
  // progress logic
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
      }, 350); // increase 3 every 100ms
    } else if (imagesLoaded && progress < 90) {
      // Case 2: Images loaded early → speed up until 90
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(interval);
            return 90;
          }
          return prev + 5;
        });
      }, 30); // increase 5 every 10ms
    }


    // TODO: images are still not loaded even pre laoder added, why? fix to preload images properly
    // TODO: onClick bg color is blue, change it to match theme


    
    return () => clearInterval(interval);
  }, [fontsLoaded, imagesLoaded, progress]);

  
  // when images loaded → jump to 100 after 2s
  useEffect(() => {
    // if (imagesLoaded && progress === 90) {
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
  console.log({ fontsLoaded, progress, imagesLoaded });
  return (
    <>
      {!assetsLoaded && (
        <div ref={preloaderRef} className='preloader-wrapper'>
          <div className='loader-content'>
            {fontsLoaded && (
              <div className='loader-numbering'>
                <NumberFlow value={progress} />
              </div>
            )}
          </div>
        </div>
      )}

      {renderChildren && children}
    </>
  );
}
