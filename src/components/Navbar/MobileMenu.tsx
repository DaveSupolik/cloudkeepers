import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { AlignJustify } from "lucide-react";
import { Button } from "../ui/button";
import { ModeToggle } from "../global/mode-toggle";

const MobileMenu = () => {
  return (
    <div className="lg:hidden pb-2 pt-8 ">
      <Sheet>
        <SheetTrigger>
          <AlignJustify />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                <div className="flex gap-4 py-4 mx-auto">
                  <Button className="text-md" variant={"ghost"}>
                    Sign In
                  </Button>
                  <Button className="bg-[#000] text-md rounded-sm ">
                    Get Started
                  </Button>
                </div>
              </div>
              <div className="grid gap-4 text-black my-10 ml-3 text-start text-lg">
                <Link href="/" className="pt-3 inline-block w-[100px]">
                  Features
                </Link>
                <Link href="/pricing" className="pt-3 inline-block w-[100px]">
                  Pricing
                </Link>
                <Link href="/contact" className="pt-3 inline-block w-[100px]">
                  Enterprise
                </Link>
              </div>
              <div className="flex gap-4 py-4 mx-auto">
                <ModeToggle />
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
