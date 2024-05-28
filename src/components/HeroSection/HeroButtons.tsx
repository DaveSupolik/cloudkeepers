import React from "react";
import { Button } from "../ui/button";

const HeroButtons = () => {
  return (
    <div className="flex justify-center space-x-4 items-center pb-4 md:pb-10 lg:pb-14">
      <Button className="bg-[#000] text-md rounded-sm ">Get Started</Button>
      <Button className="text-md" variant={"ghost"}>
        Learn more
      </Button>
    </div>
  );
};

export default HeroButtons;
