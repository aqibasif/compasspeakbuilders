import { ViewTransitions } from "next-view-transitions";
import { ReactLenis } from "lenis/react";
import localFont from "next/font/local";
import "./globals.css";
import PreLoaderProvider from "./components/Common/PreLoaderProvider";

const Inter = localFont({
  src: [{ path: "./fonts/Inter.ttf" }],
});

export const metadata = {
  title: "Compass Peak Builders - Custom Home Builders in Northern Colorado",
  description:
    "Compass Peak Builders - Custom Home Builders in Northern Colorado",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang='en' className={Inter.className}>
        <body>
          <PreLoaderProvider>
            <ReactLenis root />
            {children}
          </PreLoaderProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
