"use client";

import { gsap } from "gsap/dist/gsap";
import { useEffect, useRef } from "react";

export default function useGsap() {
  let ctx = useRef(gsap.context(() => {}));

  useEffect(() => {
    return ctx.current.revert();
  }, []);

  return ctx.current;
}
