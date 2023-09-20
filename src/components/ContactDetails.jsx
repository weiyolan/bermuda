"use client";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// import useLayoutEffect from '@utils/useIsomorphicLayoutEffect'

import { useRef } from "react";
import H2 from "@/atoms/H2";
import ArrowLink from "@/atoms/ArrowLink";
import LayoutSplit from "@/atoms/LayoutSplit";
import ContactB from "@/atoms/ContactB";
// import { currentLocale } from 'next-i18n-router';
import { useCurrentLocale } from "next-i18n-router/client";
import i18nConfig from "@/i18nConfig";
import AccentTitle from "@/atoms/AccentTitle";
import Section from "@/atoms/Section";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

let mailLink =
  "mailto:contact@miloweiler.com?subject=Photography%20Project&body=Hi%20Milo%2C%0A%0AI%20have%20a%20photography%20project%20for%20you.%0ACould%20we%20talk%20about%20this%20any%20time%20soon%3F%0A%0AThanks%20in%20advance%2C%0A%0A";

export default function ContactDetails({ title, text, alt, imgUrl }) {
  let ctx = useRef(null);
  let tl = useRef(null);

  // const locale = useCurrentLocale(i18nConfig);

  // const locale = currentLocale();
  // useLayoutEffect(() => {
  //   ctx.current = gsap.context(() => {
  //     tl.current = gsap.timeline()
  //       .from('.contact-child', { opacity: 0, duration: 1, ease: 'bounce', stagger: 0.1 })
  //   }, '.contact-parent')
  //   return () => ctx.current.revert()
  // }, [])

  // console.log(contactDetails.image)
  return (
    <Section>
      <LayoutSplit right className={` mt-36`}>
        {/* <SanityImage move style={{ objectPosition: 'top' }} containerClass='w-[46vw] -mt-6 xs:mt-0 xs:w-2/5 min-h-[40vh] xs:min-h-0 xs:h-56 bottom-0 xs:top-14 right-0 xs:right-4 sm:top-0 sm:right-0 sm:relative sm:h-full sm:w-full contact-image0 opacity-0'
        priority absolute={false} fill image={contactDetails.image.image.asset} alt={contactDetails.image.alt[locale]} /> */}

        <div className="h-full w-full overflow-hidden rounded-xl shadow-lg relative">
          <Image src={imgUrl} alt={alt} fill className="object-cover" />
        </div>
        <div
          id="contactSection"
          className="contact-parent relative flex w-full flex-col md:py-6 lg:py-12"
        >
          <H2 text={title} left />
          {/* <H2 child='contact' mainTitle={contactDetails.title[locale]} SubTitle='' left /> */}
          <p className="contact-child text-justify font-raj text-sm font-medium first-letter:font-bel first-letter:text-3xl mobm:text-base xs:w-1/2 sm:w-auto">
            {/* {contactDetails.text[locale]} */}
            {text}
          </p>

          <div className="font-pop mt-4 flex flex-col gap-6 xs:flex-row">
            <div className="flex-1 flex-col ">
              <AccentTitle
                text="Details"
                className={"contact-child mb-0 mt-0"}
              />
              <p className="font-pop contact-child w-fit">
                {"TVA: BE 0791 549 197"}
              </p>
              <ArrowLink
                className={"contact-child"}
                inText
                text="contact@miloweiler.com"
                to={mailLink}
                ext
                tabIndex="0"
              />
              <ArrowLink
                className={"contact-child"}
                inText
                text="+32 476 50 62 09"
                to="tel:+32476506209"
                tabIndex="0"
              />
              <ContactB className={"contact-child mt-4 sm:mt-2"} />
            </div>
            <div className="flex-1 flex-col">
              <AccentTitle
                text="Address"
                className={"contact-child mb-0 mt-0"}
              />
              <p className="contact-child whitespace-pre">
                {"miloweiler.com\nHof Savelkoul 40\n2640 Mortsel\nBelgium"}
              </p>
            </div>
          </div>
        </div>
      </LayoutSplit>
    </Section>
  );
}
