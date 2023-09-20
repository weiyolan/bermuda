import Section from "@/atoms/Section";
import H2 from "@/atoms/H2";
import Number from "./Number";
import { currentLocale } from "next-i18n-router";

export default function Numbers({ title, facts }) {
  const locale = currentLocale();

  return (
    <Section id='facts' className={""}>
      <H2 text={title} className={"text-center"}></H2>
      <div className="flex w-full gap-10 px-5">
        {facts?.map((fact, i) => {
          return (
            <Number
              className={``}
              key={i}
              n={fact?.number}
              unit={fact?.unit}
              link={fact?.url}
              title={fact?.title?.[locale]}
              text={fact?.text?.[locale]}
            />
          );
        })}
      </div>
    </Section>
  );
}
