
import AboutSection from "@/components/AboutSection";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Network from "@/components/Network";
import { deleteUnusedAssets } from "@/sanity/deleteUnusedAsset";

import { getAboutContent, getCTA, getHero, getMembers, getNetwork, getValues } from "@/sanity/sanity-utils";
import { currentLocale } from "next-i18n-router";

export default async function Home() {
  const locale = currentLocale();
  const members = await getMembers();
  const {title:networkTitle} = await getNetwork();
  const {imgUrl:aboutImage,alt:aboutAlt,button:aboutButton,text:aboutText,title:aboutTitle} = await getAboutContent();
  const {imgUrl:heroImage,alt:heroAlt} = await getHero();
  const {title:CTAText} = await getCTA();
  const {title:valueTitle, val1, val2, val3} = await getValues();
  // console.log(members)  
  // console.log('test')
  // console.log(val1)  

  // const result = await deleteUnusedAssets();


  return (
    <div className="">
      <Hero alt={heroAlt?.[locale]} imgUrl={heroImage}  />
      <Features title={valueTitle?.[locale]} values={[val1,val2,val3]}/>
      <CTA text={CTAText?.[locale]}/>
      <AboutSection alt={aboutAlt?.[locale]} imgUrl={aboutImage} title={aboutTitle[locale]} text={aboutText[locale]} button={aboutButton}/>
      <Network title={networkTitle} members={members}/>
      {/* <Image priority src='https://cdn.sanity.io/images/erjr84ua/production/4623cc87848ec9ad07a16c8ad12d5ec3ab07f5b4-3739x5608.jpg' alt='test' width='1000' height='600'/> */}
    </div>
  );
}
