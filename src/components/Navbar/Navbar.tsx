"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ActionButtons from "./NavButtons";
import Logo from "./Logo";
import { NavigationMenuBar } from "./Menu";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = `
    flex items-center justify-center space-x-10 bg-[#d6d5d2] md:px-10
    sticky top-0 z-50 ${hasScrolled ? "shadow-sm" : ""}
  `;

  return (
    <div className={navbarClasses}>
      <div className="flex w-2/3 md:w-full lg:w-2/3 items-center pl-2 p-8">
        <Logo />
        <NavigationMenuBar />
      </div>
      <ActionButtons />
    </div>
  );
};

export default Navbar;
