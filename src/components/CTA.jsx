"use client";
import Button from "@/atoms/Button";
import Section from "@/atoms/Section";
import Line from "@/atoms/Line";
import { gsap } from "gsap/dist/gsap";
import { useEffect, useRef, useState } from "react";
import useGsap from "@/utils/useGsap";

export default function CTA({ text }) {
  let [hovering, setHovering] = useState(false);
  let [clicking, setClicking] = useState(false);
  let [active, setActive] = useState(false);
  const myRef = useRef();
  let ctx = useGsap();
  // let ctx = useGsap();

  useEffect(() => {
    // myRef?.current !== undefined &&
    ctx.add(() => {
      // let animation = gsap.timeline()
      gsap.to([".ctaLines"], {
        borderColor:hovering ? "#667D61FF" : "#667D6100",
        duration: 0.1,
        id:'lineOpacity',
        ease: "none",
        delay:hovering?0:0.8,
        overwrite:true,
      });
      gsap.to([".ctaLines"], {
        duration: 1,
        id:'lineWidth',
        width: hovering ? "100vw" : 0,
        // ease: "none",
        ease: "expo.out",
        // borderColor:hovering ? "#667D61FF" : "#667D6100",
        // borderWidth: hovering?2:1,
      });
    });
  }, [hovering, clicking, active]);

  return (
    <Section
      // ref={myRef}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        setClicking(false);
      }}
      onMouseDown={() => setClicking(true)}
      onMouseUp={() => setClicking(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      tabIndex="0"
      className={"flex flex-col items-center gap-10"}
    >
      <Line className={"ctaLines w-0 border-2 border-[#667D6100] "} />
      <Button className={`text-2xl`} text={text} to={"/contact#form"} />
      <Line className={"ctaLines w-0 border-2 border-[#667D6100] "} />
      {/* <Line /> */}
    </Section>
  );
}
