// import Image from 'next/image'

import AboutSection from "@/components/AboutSection";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Network from "@/components/Network";
import client from "@/sanity/client";

export async function getData() {
  const projects = await client.fetch(
    `*[_type == "project"][]|order(date desc){title, cat, otherImages[]{_key,_type, asset->{url,metadata{dimensions}}, ...asset{_ref}}, mainImage{alt,image{asset->{url}, ...asset{_ref}}}, slug}`,
  );
  const sectionInfo = await client.fetch(
    `*[_type == "mainPageXXX" || _type == "mainPageYYY"]`,
  );
  // const sectionInfoMilo = await client.fetch(`*[]`)
  return {
    projects,
    sectionInfo,
  };
}

export default async function Home() {
  const { projects } = await getData();
  // console.log('test')
  // console.log(result)

  return (
    <div className="">
      <Hero />
      <Features />
      <CTA />
      <AboutSection />
      <Network />
      {/* <Image priority src='https://cdn.sanity.io/images/erjr84ua/production/4623cc87848ec9ad07a16c8ad12d5ec3ab07f5b4-3739x5608.jpg' alt='test' width='1000' height='600'/> */}
    </div>
  );
}
