import { ViewTransitions } from "next-view-transitions";
import { ReactLenis } from "lenis/react";
import localFont from "next/font/local";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // TODO: replace with swiper
import "./globals.css";
import PageLayout from "./components/PageLayout/PageLayout";

const NeueMontreal = localFont({
  src: [
    {
      path: "./fonts/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/NeueMontreal-Bold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-neue-montreal",
  display: "swap",
});

export const metadata = {
  title: "Compass Peak Builders - Custom Home Builders in Northern Colorado",
  description:
    "Compass Peak Builders - Custom Home Builders in Northern Colorado",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang='en' className={NeueMontreal.className}>
        <body>
          <ReactLenis root />
          <PageLayout>{children}</PageLayout>
        </body>
      </html>
    </ViewTransitions>
  );
}
