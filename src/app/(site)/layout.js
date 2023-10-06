import "../globals.css";
import "../scrollbar.css";

// import { Inter } from 'next/font/google'
import { Belleza } from "next/font/google";
import { Rajdhani } from "next/font/google";
import Navigation from "@/components/Navigation";
import { currentLocale } from "next-i18n-router";
import Footer from "@/components/Footer";
import UpButton from "@/components/UpButton";
import { getFooter, getNav } from "@/sanity/sanity-utils";
// import BackgroundLogo from "@/atoms/BackgroundLogo";

const belleza = Belleza({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bel",
  display: "auto",
});
const rajdhani = Rajdhani({
  subsets: ["latin"], 
  weight: ["400", "500"],
  variable: "--font-raj",
  display: "swap",
});


export const metadata = {
  title: "Bermuda Events",
  description: "The most personal event experience you can get.",
  "msapplication-TileColor": "#da532c",
  "theme-color": "#ffffff",
};

export default async function RootLayout({ children }) {
  const locale = currentLocale();
  const { links, cta } = await getNav();
  const { title, list1, list2, list3, list4 } = await getFooter();
  // console.log(list4.items[0].url.en)
  return (
    <html lang={locale}>
      <body
        //  bg-black 
        suppressHydrationWarning
        style={{}}
        className={` bg-gradient-to-br from-white to-[#fff7ee]  text-black ${belleza.variable} ${rajdhani.variable}  overflow-x-hidden`}
      >
        {/* <body className={inter.className}> */}
        <header>
          <Navigation links={links} cta={cta?.[locale]} />
        </header>
        <main className="relative flex flex-col gap-10">
          {/* <main className="flex flex-col gap-10"> */}
          {children}
        </main>
        <footer>
          <Footer title={title?.[locale]} lists={[list1, list2, list3, list4]} />
        </footer>
        <UpButton />
      </body>
    </html>
  );
}

// ?dl=