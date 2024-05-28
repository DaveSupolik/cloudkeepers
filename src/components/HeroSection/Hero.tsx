import React from "react";
import HeroTitle from "./HeroTitle";
import HeroButtons from "./HeroButtons";
import Image from "next/image";
import HeroBanner from "./HeroBanner";
import HeroDescription from "./HeroDescription";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="md:py-30 py-20 space-y-10 bg-gradient-to-b from-[#d6d5d2] to-slate-50">
        <HeroTitle />
        <HeroDescription />
        <HeroButtons />
        <HeroBanner />
      </div>
    </section>
  );
};

export default Hero;
