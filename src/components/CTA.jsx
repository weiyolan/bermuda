import Button from "@/atoms/Button";
import Section from "@/atoms/Section";
import Line from "@/atoms/Line";

export default function CTA() {
  return (
    <Section className={"flex flex-col gap-10"}>
      <Line className={"w-full border-green "} />
      <Button
        className={`mx-auto text-3xl`}
        text={"Get Your Own Experience"}
        to={"/contact#form"}
      />
      <Line className={"w-full border-green "} />
      {/* <Line /> */}
    </Section>
  );
}
