import H2 from "@/atoms/H2";
import Section from "@/atoms/Section";
import Logo from "./Logo";

let content = {
  title: { en: "Get Lost In The Experience", nl: "Get Lost In The Experience" },
  features: {},
};
let locale = "en";
export default function Features() {
  return (
    <Section>
      <div className="">
        <H2 className={`text-center`} text={content.title[locale]} />
        <div className=" flex pt-6 gap-10 px-10 justify-between">
          {/* features.map */}
          <Feature className={`text-brownlight`} />
          <Feature className={`text-browndark`} />
          <Feature className={`text-brown`} />
        </div>
      </div>
    </Section>
  );
}

function Feature({ className }) {
  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <div>
        <p className="text-center font-raj uppercase text-xs font-semibold ">
          Get Lost In
        </p>
        <h3 className="text-3xl font-bel">Creativity</h3>
      </div>
      <Logo color />
      <p className="font-raj font-medium">
        Een nieuw concept naar jouw behoefte. Altijd.
      </p>
    </div>
  );
}
