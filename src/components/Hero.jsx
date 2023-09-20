import Image from "next/image";
import picture from "../../public/eventHero.jpg";
import Logo from "../atoms/Logo";
import LogoText from "@/atoms/LogoText";

export default function Hero({alt, imgUrl}) {
  return (
    <div className="relative w-full select-none h-screen flex flex-col justify-center items-center">
      <div className="w-full h-screen absolute bg-lightbrown">
        <Image
          src={imgUrl}
          priority
          className="object-cover object-top"
          fill
          alt={alt}
        />
      </div>

      <div className="w-[20%] h-[20%] blur-[80px] absolute border-debug bg-white center-center -translate-y-[40%]" />

      <Logo color className={`relative w-36 h-36`} />
      <LogoText color className={`relative mt-8 w-1/3`} />
    </div>
  );
}
