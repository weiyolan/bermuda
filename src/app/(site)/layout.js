import "../globals.css";

// import { Inter } from 'next/font/google'
import { Belleza } from "next/font/google";
import { Rajdhani } from "next/font/google";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import Navigation from "@/components/Navigation";
import { currentLocale } from "next-i18n-router";
import Footer from "@/components/Footer";
import UpButton from "@/components/UpButton";

const belleza = Belleza({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bel",
  display: "swap",
});
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-raj",
  display: "swap",
});

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, ScrollToPlugin);

export const metadata = {
  title: "Bermuda Events",
  description: "The most personal event experience you can get.",
};

export default function RootLayout({ children }) {
  const locale = currentLocale();
  return (
    <html lang={locale}>
      <body
        className={`bg-gradient-to-br from-white to-white2 text-black ${belleza.variable} ${rajdhani.variable} `}
      >
        {/* <body className={inter.className}> */}
        <header>
          <Navigation />
        </header>
        <main className="flex flex-col gap-10">
          {/* <main className="flex flex-col gap-10"> */}
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
        <UpButton />
      </body>
    </html>
  );
}