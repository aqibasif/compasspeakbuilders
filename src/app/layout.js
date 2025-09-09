import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ViewTransitions } from "next-view-transitions";
import { ReactLenis } from "lenis/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Compass Peak Builders - Custom Home Builders in Northern Colorado",
  description:
    "Compass Peak Builders - Custom Home Builders in Northern Colorado",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${poppins.variable}`}>
        <body className={poppins.className}>
          <ReactLenis root />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
