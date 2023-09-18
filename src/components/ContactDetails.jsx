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

gsap.registerPlugin(ScrollTrigger);

let mailLink =
  "mailto:contact@miloweiler.com?subject=Photography%20Project&body=Hi%20Milo%2C%0A%0AI%20have%20a%20photography%20project%20for%20you.%0ACould%20we%20talk%20about%20this%20any%20time%20soon%3F%0A%0AThanks%20in%20advance%2C%0A%0A";

export default function ContactDetails({ contactDetails }) {
  let ctx = useRef(null);
  let tl = useRef(null);

  const locale = useCurrentLocale(i18nConfig);

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

        <div className="bg-brownlight w-full h-full rounded-xl shadow-lg"></div>

        <div
          id="contactSection"
          className="relative contact-parent flex flex-col w-full md:py-6 lg:py-12"
        >
          <H2 text={"Details"} SubTitle="" left />
          {/* <H2 child='contact' mainTitle={contactDetails.title[locale]} SubTitle='' left /> */}
          <p className="font-raj font-medium first-letter:text-3xl first-letter:font-bel text-justify contact-child text-sm mobm:text-base xs:w-1/2 sm:w-auto">
            {/* {contactDetails.text[locale]} */}
            Become a Bermuda Partner and let us raise your events to the summit
            of Bermuda Island. Your employees and customers will love you more
            than ever.
          </p>

          <div className="flex flex-col xs:flex-row font-pop gap-6 mt-4">
            <div className="flex-col flex-1 ">
              <AccentTitle
                text="Details"
                className={"mb-0 mt-0 contact-child"}
              />
              <p className="w-fit font-pop contact-child">
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
              <ContactB className={"mt-4 sm:mt-2 contact-child"} />
            </div>
            <div className="flex-col flex-1">
              <AccentTitle
                text="Address"
                className={"mb-0 mt-0 contact-child"}
              />
              <p className="whitespace-pre contact-child">
                {"miloweiler.com\nHof Savelkoul 40\n2640 Mortsel\nBelgium"}
              </p>
            </div>
          </div>
        </div>
      </LayoutSplit>
    </Section>
  );
}
