import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { ModeToggle } from "../global/mode-toggle";

const ActionButtons = () => {
  return (
    <div>
      <MobileMenu />

      <div className="hidden lg:flex md:space-x-4 items-center">
        <div className="border-r border-black">
          <div className="mr-4">
            <ModeToggle />
          </div>
        </div>

        <Button className="text-md" variant={"ghost"}>
          Sign In
        </Button>
        <Button className="bg-[#000] text-md rounded-sm ">Get Started</Button>
      </div>
    </div>
  );
};

export default ActionButtons;
