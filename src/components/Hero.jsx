import Image from "next/image";
import picture from "../../public/eventHero.jpg";
import Logo from "./Logo";
import LogoText from "./LogoText";

export default function Hero() {
  return (
    <div className="relative w-full select-none h-screen flex flex-col justify-center items-center">
      <div className="w-full h-screen absolute bg-lightbrown">
        <Image
          src={picture}
          priority
          className="object-cover object-top"
          fill
          alt="Picture of a beautifully dressed table."
        />
      </div>

      <div className="w-10% h-10% absolute border-debug bg-white center-center" />

      <Logo color className={`relative w-36 h-36`} />
      <LogoText color className={`relative mt-8 w-1/5`} />
    </div>
  );
}
