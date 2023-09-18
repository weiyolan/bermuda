"use client";
import { useState } from "react";
import Link from "next/link";
import Layout from "@/atoms/Section";

// import useWindowSize from "@utils/useWindowSize";

// import SubTitle from "./SubTitle";

const socialList = {
  en: [
    {
      text: "Instagram",
      ext: true,
      link: "https://www.instagram.com/miloweiler/",
    },
    { text: "Unsplash", ext: true, link: "https://unsplash.com/@miloweiler" },
    {
      text: "LinkedIn",
      ext: true,
      link: "https://www.linkedin.com/in/milo-weiler-set-and-behind-the-scenes-photographer-683b90255",
    },
  ],
  fr: [
    {
      text: "Instagram",
      ext: true,
      link: "https://www.instagram.com/miloweiler/",
    },
    { text: "Unsplash", ext: true, link: "https://unsplash.com/@miloweiler" },
    {
      text: "LinkedIn",
      ext: true,
      link: "https://www.linkedin.com/in/milo-weiler-set-and-behind-the-scenes-photographer-683b90255",
    },
  ],
};
const navigateList = {
  en: [
    { text: "Home", link: "/" },
    { text: "Gallery", link: "/gallery", disabled: false },
    { text: "Contact", link: "/contact", disabled: false },
  ],
  fr: [
    { text: "Acceuil", link: "/", disabled: false },
    { text: "Gallerie", link: "/gallery", disabled: false },
    { text: "Contact", link: "/contact", disabled: false },
  ],
};
const legalList = {
  en: [
    { text: "Legal Notice", link: "/", disable: true },
    { text: "Terms of Use", link: "/services", disable: true },
    { text: "Cookie Notice", link: "/aboutme", disable: true },
  ],
  fr: [
    { text: "Legal Notice", link: "/", disable: true },
    { text: "Terms of Use", link: "/services", disable: true },
    { text: "Cookie Notice", link: "/aboutme", disable: true },
  ],
};
const contactList = {
  en: [
    // { text: 'Info', ext: false, link: '/contact/#informations' },
    { text: "Call", ext: false, link: "tel:+32476506209" },
    {
      text: "WhatsApp",
      ext: true,
      link: "https://wa.me/32476506209?text=Hi+Milo%2C+%0D%0AI+got+your+WhatsApp+from+your+website+miloweiler.com.+Are+you+free+to+talk+any+time+soon+about+a+project+I+have+in+mind%3F+%0D%0AThanks%2C%0D%0A",
    },
    {
      text: "contact@miloweiler.com",
      ext: true,
      link: "mailto:contact@miloweiler.com?subject=Photography%20Project&body=Hi%20Milo%2C%0A%0AI%20have%20a%20project%20for%20you.%0ACould%20we%20talk%20about%20this%20any%20time%20soon%3F%0A%0AThanks%20in%20advance%2C%0A%0A",
    },
    // { text: 'Whatsapp', ext: true, link: 'https://wa.me/32471124525?text=Hi+Yolan%2C+%0D%0AI+got+your+WhatsApp+from+your+website+ywdesign.co.+Are+you+free+to+talk+any+time+soon+about+a+project+I+have+in+mind%3F+%0D%0AThanks%2C%0D%0A' },
  ],
  fr: [
    // { text: 'Infos', ext: false, link: '/contact/#informations' },
    { text: "Appeler", ext: false, link: "tel:+32476506209" },
    {
      text: "WhatsApp",
      ext: true,
      link: "https://wa.me/32476506209?text=Hi+Milo%2C+%0D%0AI+got+your+WhatsApp+from+your+website+miloweiler.com.+Are+you+free+to+talk+any+time+soon+about+a+project+I+have+in+mind%3F+%0D%0AThanks%2C%0D%0A",
    },
    {
      text: "contact@miloweiler.com",
      ext: true,
      link: "mailto:contact@bermuda-events.be?subject=Events%20Project&body=Hi%20Robin%2C%0A%0AI%20have%20a%20project%20for%20you.%0ACould%20we%20talk%20about%20this%20any%20time%20soon%3F%0A%0AThanks%20in%20advance%2C%0A%0A",
    },
    // { text: 'Whatsapp', ext: true, link: 'https://wa.me/32471124525?text=Hi+Yolan%2C+%0D%0AI+got+your+WhatsApp+from+your+website+ywdesign.co.+Are+you+free+to+talk+any+time+soon+about+a+project+I+have+in+mind%3F+%0D%0AThanks%2C%0D%0A' },
  ],
};

const signature = {
  en: [
    "2023 Bermuda Events, Inc. All rights reserved.",
  ],
  fr: [
    "2023 Bermuda Events, Inc. Tous droits réservés.",
  ],
};

export default function Footer({ style, className, noMotion, noMargin, setFooterHeight, setFooterNormalHeight}) {
  // let { width, scrolled, locale } = useAppContext();
  // let { mobile } = usePageContext();
  let mobile = false;
  let locale = "en";
  let breakPointSmall = 640;

  // let footerRef = useRef(null)

  let [dimensions, setDimensions] = useState({
    width: undefined,
    height: undefined,
  });

  // useEffect(() => {
  //   function handleSize() {
  //     const { width, y } = footerRef.current.getBoundingClientRect();
  //     const height = footerRef.current.offsetHeight;
  //     let styles = window.getComputedStyle(footerRef.current);
  //     let margin = parseFloat(styles['marginTop']) +
  //       parseFloat(styles['marginBottom']);
  //     if (height > 0) {
  //       // Math.ceil(height + margin);
  //       setDimensions({ width: width, height: Math.ceil(height + margin), normalHeight: height, top: y, bottom: y + height });
  //       // print && console.log('dimensions setted: ' + 'width: ' + width+' , height: '+ height+ ', top: '+y+', bottom: '+(y + height) )
  //     }
  //   }

  //   window.addEventListener("resize", handleSize);
  //   handleSize()
  //   return () => window.removeEventListener("resize", handleSize);
  //   // print && console.log(dimensions?.height === undefined || )

  // }, [mobile])

  // useEffect(() => {
  //   // console.log(dimensions.height)
  //   if (dimensions?.height > 0 && setFooterHeight) {
  //     setFooterHeight(dimensions.height)
  //   } else if (dimensions.normalHeight > 0 && setFooterNormalHeight !== undefined) {
  //     setFooterNormalHeight(dimensions.normalHeight)
  //   }
  // }, [dimensions])

  return (
    <div className={`relative bg-brown mt-4 md:mt-10`}>
      <Layout
        className={`relative lg:px-16 xl:px-24  text-white font-bel max-w-7xl pt-2 px-4 pb-1  w-full mx-auto ${className}`}
        style={{ ...style }}
      >
        <div className="w-full flex justify-between pb-2">
          <div className="flex flex-col items-center gap-2 sm:items-start w-2/5">
            <SubTitle
              darkMode={true}
              noMargin
              small
              className="pt-2"
              center
              mainTitle="Stay In Touch"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between max-w-6xl mx-auto w-3/5">
            <Links
              mobile={mobile}
              title="Navigate"
              list={navigateList[locale]}
            />
            <Links mobile={mobile} title="Socials" list={socialList[locale]} />

            <Links mobile={mobile} title="Contact" list={contactList[locale]} />
            <Links mobile={mobile} title="Legal" list={legalList[locale]} />
          </div>
        </div>
        <div
          role="presentation"
          className="w-full text-xs text-center mt-2 text-primary font-thin"
        >
          <ul
            role="presentation"
            className="inline-flex flex-wrap justify-center"
          >
            {signature[locale].map((val, i) => {
              return (
                <li
                  role=""
                  className={`${i === 0 ? "" : "pl-1"}`}
                  key={val}
                >{`${i === 0 ? "" : "∘ "}${val}`}</li>
              );
            })}
            <li className="pl-1 ">
              ∘ Powered By{" "}
              <Link
                className="underline"
                href={"https://www.ywdesign.co"}
                rel="noopener noreferrer"
              >
                ywdesign.co
              </Link>
            </li>
          </ul>
        </div>
      </Layout>
    </div>
  );
}

function SubTitle({
  mainTitle,
  subTitle,
  left,
  right,
  style,
  small,
  className,
  child,
}) {
  return (
    <div
      style={style}
      className={`${style === undefined ? "relative" : ""} w-full ${className}`}
    >
      <h2
        className={`font-bel uppercase font-medium  
        whitespace-pre-wrap md:whitespace-nowrap
        ${
          small ? "text-lg" : "text-2xl mobm:text-2xl sm:text-3xl mb-2 sm:mb-2"
        }  ${child ? child + "-child" : ""}`}
      >
        {mainTitle}
      </h2>
      <div
        className={`font-pop whitespace-pre-wrap ${
          left || right ? "text-justify" : ""
        } ${child ? child + "-child" : ""}`}
      >
        {subTitle}
      </div>
    </div>
  );
}

function Links({ title, list, mobile }) {
  return (
    // <div className={`${position === 'center' ? 'text-center ' : position === 'left' ? 'text-left ' : 'text-right '}  align-start px-0`}>
    <div className={`text-center sm:text-left `}>
      <SubTitle
        small
        noMargin
        className="pt-2 md:text-left text-center"
        left={mobile ? false : true}
        mainTitle={title}
        darkMode={true}
      />
      <List mobile={mobile} list={list} />
    </div>
  );
}

function List({ list, mobile }) {
  return (
    <ul className="font-bel flex flex-wrap sm:flex-col sm:flex-nowrap justify-center gap-x-2 ">
      {list.map((item, i) => {
        if (item.ext) {
          return (
            <li
              key={i}
              className={`text-primary font-extralight whitespace-nowrap text-sm sm:text-sm  `}
            >
              <Link
                href={item.link}
                target="_blank"
                className="focus:outline-none cursor-pointer focus-within:scale-110 duration-200 border border-transparent focus-within:border-b-white hover:border-b-white "
                rel="noopener noreferrer"
              >
                {item.text} {mobile && i < list.length - 1 ? " |" : ""}
              </Link>
            </li>
          );
        } else {
          return (
            <li
              key={i}
              className={`${
                item.disabled ? "text-primary/50" : "text-primary"
              } font-extralight whitespace-nowrap text-sm sm:text-sm `}
            >
              {item.disabled ? (
                item.text
              ) : (
                <Link
                  className="focus:outline-none focus-within:scale-110 duration-200 border border-transparent focus-within:border-b-white hover:border-b-white  "
                  href={item.link}
                >
                  {item.text} {mobile && i < list.length - 1 ? " |" : ""}
                </Link>
              )}
            </li>
          );
        }
      })}
    </ul>
  );
}
