"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { Observer } from "gsap/dist/Observer";
import Line from "@/atoms/Line";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import useLocale from "@/utils/useLocale";
import LogoText from "./LogoText";
import Button from "@/atoms/Button";
// import { currentLocale } from 'next-i18n-router'

gsap.registerPlugin(Observer);

let buttons = [
  { text: { en: "Home", nl: "Home" }, to: "/" },
  { text: { en: "About", nl: "Over ons" }, to: "/#about" },
  { text: { en: "Contact", nl: "Contact" }, to: "/contact" },
];

export default function Navigation() {
  // let { locale } = useAppContext()
  // let { darkMode } = usePageContext()
  let [hiding, setHiding] = useState(true); //removed bar onLoad and then animate in.
  let [big, setBig] = useState(true);

  // const locale = currentLocale();
  let locale = useLocale();

  const ctx = useRef(gsap.context(() => {}));

  useEffect(() => {
    setHiding(false);
    return () => {
      ctx.current.revert();
    };
  }, []);

  function hideBar() {
    if (!hiding) {
      setHiding(true);
    }
  }

  function showBar() {
    if (hiding) {
      setHiding(false);
    }
  }

  useEffect(() => {
    let observer = Observer.create({
      target: window, // can be any element (selector text is fine)
      type: "scroll", // comma-delimited list of what to listen for ("wheel,touch,scroll,pointer")
      preventDefault: false,
      onStopDelay: 1.5,
      tolerance: 150,
      onDown: () => {
        hideBar();
      },
      onUp: () => {
        showBar();
      },
      lockAxis: true,
    });
    return () => {
      observer.disable();
    };
  }, [hiding]);

  function handleMouseMove(e) {
    if (e.y <= 60) {
      // console.log(e.y)
      showBar();
    }
  }

  function handleScroll() {
    if (window.scrollY < 100) {
      // console.log(e.y)
      !big && setBig(true);
    } else {
      // console.log(e.y)
      big && setBig(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseMove", handleMouseMove);
    };
  }, [big]);

  useEffect(() => {
    ctx.current.add(() => {
      gsap.to(".navBar", {
        autoAlpha: () => (hiding ? 0 : 1),
        yPercent: () => (hiding ? -100 : 0),
        duration: 0.5,
        padding: big ? 32 : "8 16",
        transformOrigin: "50% 50%",
        ease: "expo.out",
        // backgroundColor: big?'#BD9159':'#BD9159AA',
        delay: () => (hiding ? 0 : 0),
      });
      gsap.to(".navLogo", {
        scale: big ? 1 : 0.7,
        duration: 0.5,
        transformOrigin: "50% 50%",
        // ease: "elastic.out(1, 0.5)",
        ease: "expo.out",
        // delay: () => big ? 0 : 0,
      });
      gsap.to(".navLogoText", {
        autoAlpha: big ? 1 : 0,
        duration: 0.3,
        // ease: "elastic.out(1, 0.5)",
        ease: "expo.out",
        // delay: () => big ? 0 : 0,
      });
      gsap.to(".navList", {
        gap: big ? 60 : 40,
        fontSize: big ? "1.25rem" : "1.15rem",
        duration: 0.3,
        // ease: "elastic.out(1, 0.5)",
        ease: "expo.out",
        // delay: () => big ? 0 : 0,
      });
    });
  }, [hiding, big]);

  return (
    // <FadeDiv className='w-full relative'>
    // <FadeDiv style={{ transform: "translate3d(0, 0, 0)" }} className={`fixed w-full top-0 justify-center flex navBar  `} type={'leftRight'} amount={30}>
    <div
      className={`navBar navBar fixed top-0  z-10 flex w-full justify-between bg-brown p-8`}
    >
      <Link href="/" className="flex w-fit gap-10">
        <Logo className={"navLogo w-24"} />
        <LogoText className={"navLogoText w-48"} />
      </Link>

      <div
        className={`navList relative inline-flex items-center gap-[60px] uppercase text-xl`}
      >
        {buttons.map((button) => (
          <MyButton key={button.to} text={button.text[locale]} to={button.to} />
        ))}

        <Button
          text="Ask an offer"
          to="contact/#form"
          className={
            " relative rounded-md bg-white fill-brown px-4 py-2 font-bold text-brown"
          }
        />
      </div>
    </div>
    // {/* // </FadeDiv> */ }
  );
}

function MyButton({ text, to, className }) {
  // let { darkMode } = usePageContext()
  let darkMode = true;
  const pathname = usePathname();
  let [hover, setHover] = useState(false);
  // let [selected, setSelected] = useState(false)
  let selected = to === pathname;

  const ctx = useRef(gsap.context(() => {}));

  useEffect(() => {
    // setLoaded(true)
    return () => {
      ctx.current.revert();
    };
  }, []);

  useEffect(() => {
    ctx.current.add(() => {
      gsap.to(`.navButton${text.slice(0, 3)}`, {
        scale: hover ? 1.1 : 1,
        duration: 0.2,
      });
      gsap.to(`.navLine${text.slice(0, 3)}`, {
        width: hover || selected ? "100%" : 0,
        borderColor:
          hover || selected
            ? darkMode
              ? "#FFF5EA"
              : "#000000"
            : "transparent",
        duration: 0.2,
      });
    });
  }, [hover,pathname]);

  return (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
      }}
      className={`relative  navButton${text.slice(
        0,
        3,
      )} text-center  font-bel text-white `}
      href={`${to}`}
      // onClick={() => handleClick(to)}
      // title={`Go to the ${text} page`}
    >
      <div className={`mx-auto w-fit ${className && className}`}>
        {text}
        <Line
          className={`mx-auto navLine${text.slice(
            0,
            3,
          )} w-0 border-transparent`}
        />
      </div>
    </Link>
  );
}