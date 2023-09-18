import Button from "@/atoms/Button";
import H2 from "@/atoms/H2";
import LayoutSplit from "@/atoms/LayoutSplit";
import Section from "@/atoms/Section";
import Image from "next/image";
import picture from "../../public/eventAbout.jpg";

let content = {
  text: {
    en: `We envision a world where photography is not just a means of capturing a moment, but a way of experiencing life's beauty. Through our lens, we want to inspire people to see the world in a new light, appreciate the little things in life, and cherish the`,
    nl: "hey",
  },
};
let locale = "en";

export default function AboutSection() {
  return (
    <Section id={"about"}>
      {/* <H2 text='About' className={'text-left'} /> */}
      <LayoutSplit right className={""}>
        <Image
          alt="Picture of a beautiful room with dining tables and animation"
          className="w-full shadow-lg rounded-xl"
          src={picture}
        />
        <div className="flex flex-col justify-center h-full w-fit gap-2">
          <H2 text="About" className={"text-left mb-2 sm:mb-2"} />
          <p className="font-raj first-letter:text-3xl max-w-prose font-medium">
            {content.text[locale]}
          </p>
          <Button
            text={"Learn More"}
            to={"/contact#facts"}
            className={""}
          ></Button>
        </div>
      </LayoutSplit>
    </Section>
  );
}
