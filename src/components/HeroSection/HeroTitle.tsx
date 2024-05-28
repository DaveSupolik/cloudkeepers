import React from "react";
import { FlipWords } from "../ui/flip-words";

const HeroTitle = () => {
  const words = ["manage", "store", "share"];
  return (
    <div className="container mx-auto text-center pb-2 md:w-[75%] md:pb-5 lg:pt-20 lg:pb-10">
      <div className="text-4xl justify-center md:text-5xl lg:text-6xl md:px-20 pb-1">
        Transform how you
        <FlipWords words={words} className="mr-2" />
      </div>
      <div className="text-4xl justify-center md:text-5xl lg:text-6xl md:px-20">
        your files today.
      </div>
    </div>
  );
};

export default HeroTitle;
