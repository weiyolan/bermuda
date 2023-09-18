import H2 from "@/atoms/H2";
import Section from "@/atoms/Section";
import picture1 from "../../public/memberDefault1.jpg";
import picture2 from "../../public/memberDefault2.jpg";
import Image from "next/image";

let content = {};

export default function Network() {
  return (
    <Section>
      <H2 className="text-center" text="Our Network" />
      <div className="flex w-full gap-24">
        <Member url={undefined} name={"Robin"} func={"Founder"} />
        <Member url={undefined} name={"Robin"} func={"Founder"} />
        <Member url={undefined} name={"Robin"} func={"Founder"} />
      </div>
    </Section>
  );
}

function Member({ url, name, func }) {
  return (
    <div className="flex flex-col items-center">
      <Image
        alt={`Bermuda Network member called ${name}`}
        src={!url && picture1}
        className="w-48 h-48 rounded-full relative mb-2"
      />
      <h3 className="font-bel font-semibold text-xl">{name}</h3>
      <h4 className="font-raj text-lg font-medium">{func}</h4>
    </div>
  );
}
