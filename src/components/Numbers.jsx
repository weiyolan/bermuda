"use client";
import React, { useState } from "react";
// import { useAppContext } from './Context'
import Section from "@/atoms/Section";
import { useCurrentLocale } from "next-i18n-router/client";
import i18nConfig from "@/i18nConfig";
import Link from "next/link";
import ArrowLink from "@/atoms/ArrowLink";
import H2 from "@/atoms/H2";

let numbers = {
  en: [
    {
      n: 3,
      unit: "x",
      title: "Growth of retail sales through\ne-commerce worldwide since 2015.",
      text: "You better get your\nbrand online",
      link: "https://www.statista.com/statistics/379046/worldwide-retail-e-commerce-sales/",
    },
    {
      n: 58,
      unit: "%",
      title: `Global website traffic\nthrough mobile devices.`,
      text: "You better have a\nresponsive website",
      link: "https://www.statista.com/statistics/277125/share-of-website-traffic-coming-from-mobile-devices/",
    },
    {
      n: 92,
      unit: "%",
      title:
        "Internet searches globally going\nthrough Google's search engine.",
      text: "You better optimise your\nwebsite's SEO",
      link: "https://www.oberlo.com/statistics/search-engine-market-share#:~:text=Handling%20over%2090%25%20of%20all,done%20through%20the%20internet%20giant.",
    },
  ],
  nl: [
    {
      n: 3,
      unit: "x",
      title:
        "La croissance des ventes au détail\nmondiales via e-commerce\ndepuis 2015.",
      text: "Vous avez intérêt à mettre\nvotre marque en ligne.",
      link: "https://www.statista.com/statistics/379046/worldwide-retail-e-commerce-sales/",
    },
    {
      n: 58,
      unit: "%",
      title: `Le trafic mondial des sites web\nvia les appareils mobiles.`,
      text: "Vous avez intérêt à\navoir un site web responsive",
      link: "https://www.statista.com/statistics/277125/share-of-website-traffic-coming-from-mobile-devices/",
    },
    {
      n: 92,
      unit: "%",
      title:
        "Les recherches internet mondiales\npassant par le moteur de\nrecherche de Google.",
      text: "Vous avez intérêt à optimiser\nle référencement de votre site web",
      link: "https://www.oberlo.com/statistics/search-engine-market-share#:~:text=Handling%20over%2090%25%20of%20all,done%20through%20the%20internet%20giant.",
    },
  ],
};

export default function Numbers() {
  const locale = useCurrentLocale(i18nConfig);
  return (
    <Section className={""}>
      <H2 text={"Did You Know?"} className={"text-center"}></H2>
      <div className="flex w-full">
        {numbers[locale].map((num, i) => {
          return (
            <Number
              className={``}
              key={i}
              n={num.n}
              unit={num.unit}
              link={num.link}
              title={num.title}
              text={num.text}
            />
          );
        })}
      </div>
    </Section>
  );
}

function Number({ n, title, text, link, unit }) {
  // let { width, breakPointSmall } = useAppContext();

  let width = window?.innerWidth;
  let breakPointSmall = 648;

  let [hovering, setHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="flex sm:flex-col w-full min-[420px]:px-8 sm:px-0 items-center md:whitespace-pre mx-auto text-left sm:text-center cursor-default"
    >
      <div className="flex font-bel items-end text-primary w-[50vw] min-[420px]:w-[40vw] sm:w-full justify-start sm:justify-center mb-2 sm:mb-4 font-light sm:font-extralight text-6xl sm:text-8xl md:text-9xl">
        {n}
        <span className="text-2xl sm:text-3xl ">{unit}</span>
      </div>

      <div className="flex sm:flex-col h-[90px] font-raj transition-all duration-300 w-full relative text-primary font-medium lg:text-base text-sm ">
        <div
          className={`absolute transition-all text-black  w-full duration-700 left-1/2 top-1/2 -translate-y-1/2 sm:-translate-y-0 sm:top-[0%] -translate-x-1/2 ${
            hovering ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="">
            {text}
            {width < breakPointSmall ? " " : `\n`}
            {width < breakPointSmall && (
              <span className={``}>
                <ArrowLink text="Source" to={link} ext={true} inText={true} />
              </span>
            )}
          </p>
        </div>
        <div
          className={`absolute transition-all w-full duration-700 left-1/2 top-1/2 -translate-y-1/2 sm:-translate-y-0 sm:top-[0%] -translate-x-1/2 ${
            hovering ? "opacity-0" : "opacity-100"
          }`}
        >
          <p>
            {title}
            {width < breakPointSmall ? " " : `\n`}
            {width < breakPointSmall && (
              <span className={``}>
                <ArrowLink text="Source" to={link} ext={true} inText={true} />
              </span>
            )}
          </p>
        </div>
        {width > breakPointSmall && (
          <span
            className={`ml-4 absolute w-fit left-1/2 -translate-x-[calc(50%+15px)] bottom-0`}
          >
            <ArrowLink text="Source" to={link} ext={true} />
          </span>
        )}
      </div>
    </div>
  );
}

function MyLink({ link, children }) {
  if (link.length > 0) {
    return (
      <Link
        className="cursor-alias"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </Link>
    );
  } else {
    return <div>{children}</div>;
  }
}
