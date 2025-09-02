import { Raleway, Roboto } from "next/font/google";
import "./globals.css";
import MUIThemeProvider from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ViewTransitions } from "next-view-transitions";
import { ReactLenis } from "lenis/react";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-raleway",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata = {
  title: "Compass Peak Builders - Custom Home Builders in Northern Colorado",
  description:
    "Compass Peak Builders - Custom Home Builders in Northern Colorado",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${raleway.variable} ${roboto.variable}`}>
        <body className={raleway.className}>
          <ReactLenis root />
          <MUIThemeProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </MUIThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
