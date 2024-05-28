"use client";

import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "../ui/background-gradient";

const HeroBanner = () => {
  return (
    <div className="flex justify-center items-center relative md:mt-[-70px] w-[90%] mx-auto">
      <BackgroundGradient className="rounded-2xl">
        <Image
          src={"/preview.png"}
          alt="banner image"
          height={1200}
          width={1200}
          className="rounded-2xl"
        />
      </BackgroundGradient>
    </div>
  );
};

export default HeroBanner;
