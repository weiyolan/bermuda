import Button from "@/atoms/Button";
import H2 from "@/atoms/H2";
import LayoutSplit from "@/atoms/LayoutSplit";
import Section from "@/atoms/Section";
import Image from "next/image";
import picture from "../../public/eventAbout.jpg";
import useLocale from "@/utils/useLocale";
import { currentLocale } from "next-i18n-router";

let content = {
  text: {
    en: `We envision a world where photography is not just a means of capturing a moment, but a way of experiencing life's beauty. Through our lens, we want to inspire people to see the world in a new light, appreciate the little things in life, and cherish the`,
    nl: "hey",
  },
};

// const locale = currentLocale();

export default function AboutSection({ alt, imgUrl, text, title, button }) {
  let locale = currentLocale();
  // let locale = useLocale();

  return (
    <Section id={"about"}>
      {/* <H2 text='About' className={'text-left'} /> */}
      <LayoutSplit right className={""}>
        <div className="h-96 w-full rounded-xl select-none overflow-hidden relative shadow-lg">
          <Image alt={alt} className="object-cover" src={imgUrl} fill sizes='50vw' />
        </div>
        <div className="flex h-full w-fit flex-col justify-center gap-4 sm:gap-8">
          <H2 text={title} className={"mb-0 sm:mb-0 text-left "} />
          <p className="max-w-prose font-raj font-medium text-lg first-letter:text-3xl">
            {text}
          </p>
          <Button
            text={button.text[locale]}
            to={button.url}
            className={""}
          ></Button>
        </div>
      </LayoutSplit>
    </Section>
  );
}
