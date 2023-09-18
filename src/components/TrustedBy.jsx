"use client";
import AccentTitle from "@/atoms/AccentTitle";
// import client from 'lib/sanity';
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { usePageContext } from '@/utils/pageContext';
// import useLayoutEffect from "@utils/useIsomorphicLayoutEffect";
// import { useAppContext } from '@/utils/appContext';
import Link from "next/link";
import Section from "@/atoms/Section";
import LayoutSplit from "@/atoms/LayoutSplit";
import Line from "@/atoms/Line";
import H2 from "@/atoms/H2";

gsap.registerPlugin(ScrollTrigger);

export default function TrustedBy({ trustedBy }) {
  // const { ctx, tl } = usePageContext()
  let ctx = useRef(null);
  let tl = useRef(null);
  let trusted = useRef();
  // let { width } = useAppContext()
  let width = window.innerWidth;

  // useLayoutEffect(() => {
  //   ctx.current = gsap.context(() => {
  //     tl.current = gsap.timeline({ scrollTrigger: { trigger: trusted.current, start: `top ${width < 668 ? '85%' : '50%'}`, invalidateOnRefresh: true, markers: false } })
  //       .to('.artist-title', { opacity: 1, duration: 1 })
  //       .to('.artist-line', { width: 224, duration: 0.8, }, '<')
  //       .to('.logo-artist', {
  //         opacity: 1, duration: 0.7, ease: 'back', stagger: 0.2,
  //       }, '-=1')
  //       .to('.company-title', { opacity: 1, duration: 1 }, '-=1.5')
  //       .to('.company-line', { width: 224, duration: 0.8, }, '<')
  //       .to('.logo-company', {
  //         opacity: 1, duration: 0.7, ease: 'back', stagger: 0.2,
  //       }, '-=1')
  //   }, '.trusted-by')
  //   return () => ctx.current.revert()
  // }, [width])

  // let totalLogoAmount = trustedBy.artists.length + trustedBy.companies.length

  // function getSpeed(i, company) {
  //   if (width < 648) {
  //     return (1 - 0.05 * (totalLogoAmount - i - (company ? trustedBy.artists.length : 0)) / totalLogoAmount)
  //   } else if (width > 648) {
  //     let length = company ? trustedBy.companies.length - 1 : trustedBy.artists.length - 1;
  //     let ratio = (i - length / 2) / (length / 2);
  //     return (1 - 0.1 * ratio)
  //   }
  // }

  // function getDirection(i, company) {
  //   if (width < 648) {
  //     return (i % 2 === 0 ? -1 : 1)
  //   } else if (width > 648) {
  //     return 1
  //   }
  // }

  return (
    <Section>
      <LayoutSplit center>
        <div
          ref={trusted}
          className="trusted-by trusted-by-div relative w-full text-center"
        >
          <H2
            className="max-w-[70%] mx-auto opacity-1 title"
            text="Trusted By"
          />
          <AccentTitle
            noMargin
            className={"artist-title opacity-0"}
            text="Artists"
          />
          <Line
            style={{}}
            className={
              "opacity-100 w-0 mx-auto mb-2 artist-line border-darkPrimary"
            }
          />
          <div className="artist-container flex justify-center flex-wrap sm:flex-nowrap gap-12 sm:gap-6 lg:gap-12">
            <Logo type="artist" />
            <Logo type="artist" />
            {/* {trustedBy.artists.map((logo, i) => { return <Logo dataDirection={getDirection(i)} dataSpeed={`${getSpeed(i)}`} type='artist' logo={logo} key={i} to={logo.link} /> })} */}
          </div>
        </div>
      </LayoutSplit>
    </Section>
  );
}

function Logo({ dataSpeed, dataDirection, type, logo, link }) {
  // let { src, width, height, loader } = useNextSanityImage(client, logo.image.asset);
  // let ar = (width / height)

  function getImage() {
    // return (<Image
    //   src={src}
    //   data-speed={dataSpeed}
    //   data-direction={dataDirection}
    //   width={width}
    //   height={height}
    //   loader={loader}
    //   style={{ width: ar > 2.5 ? '120px' : ar > 1 ? '100px' : '80px', height: 'auto' }} // layout="responsive" prior to Next 13.0.0
    //   className={`logo logo-${type} my-auto scale-75 translate-x-0 xs:scale-100 opacity-0`}
    //   alt={`Logo of the ${type} ${logo.name}`}
    // />)
    return (
      <div
        data-speed={dataSpeed}
        data-direction={dataDirection}
        className="bg-brownlight w-36 h-24"
      ></div>
    );
  }

  if (link === undefined) {
    return getImage();
  }

  return (
    <Link
      className="cursor-pointer w-fit h-fit"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {getImage()}
    </Link>
  );
}
