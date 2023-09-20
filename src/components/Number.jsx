import ArrowLink from "@/atoms/ArrowLink";

export default function Number({ n, title, text, link, unit }) {
  return (
    <div className="mx-auto flex w-full max-w-prose flex-1 flex-col items-center gap-2 whitespace-pre-wrap text-center">
      <p className="text-primary mb-2 flex cursor-default items-end justify-start font-bel text-6xl font-light  sm:mb-4  sm:justify-center sm:text-8xl sm:font-extralight md:text-9xl">
        {n}
        <span className="text-2xl sm:text-3xl ">{unit}</span>
      </p>
      <p className={`font-raj text-lg font-medium uppercase`}>{title}</p>
      <p className={`max-w-[90%] font-raj font-medium `}>{text}</p>
      <ArrowLink className={'font-bel'}
        title={"Visit the fact's source"}
        text="Source"
        to={link}
        ext={true}
      />
    </div>
  );
}
