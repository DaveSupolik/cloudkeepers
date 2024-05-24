'use client'; // This directive marks the component as a Client Component

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import React, { useState } from 'react';
import { ModeToggle } from './mode-toggle';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Props = {};

const Navbar: React.FC<Props> = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleOpenChange = (open: boolean) => {
    setMenuOpen(open);
  };

  return (
    <header className='fixed top-0 left-0 right-0 py-2 px-4 bg-transparent backdrop-blur-lg z-[100] flex items-center justify-between'>
      <aside className='flex items-center gap-4'>
        <div className='flex md:hidden'>
          <Popover onOpenChange={handleOpenChange}>
            <PopoverTrigger onClick={toggleMenu}>
              {menuOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
            </PopoverTrigger>
            <PopoverContent className='w-screen md:hidden'>
              <nav className='grid gap-y-8'>
                <ul className='items-center list-none'>
                  <li className='pt-3'>
                    <Link href="#">Products</Link>
                  </li>
                  <li className='pt-3'>
                    <Link href="#">Team</Link>
                  </li>
                  <li className='pt-3'>
                    <Link href="#">Documentation</Link>
                  </li>
                  <li className='pt-3'>
                    <Link href="#">Contact</Link>
                  </li>
                </ul>
                <Button asChild variant="outline">
                  <Link href="/dashboard">
                    {true ? "Dashboard" : "Get started"}
                  </Link>
                </Button>
              </nav>
            </PopoverContent>
          </Popover>
        </div>
        <p className='text-l font-bold'>CLOUDKEEPERS</p>
      </aside>
      <nav className='hidden md:block'>
        <ul className='flex items-center gap-4 list-none'>
          <li>
            <Link href="#">Products</Link>
          </li>
          <li>
            <Link href="#">Team</Link>
          </li>
          <li>
            <Link href="#">Documentation</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </nav>
      <aside className='flex items-center gap-4'>
        <Button asChild variant="outline" className='hidden md:block'>
          <Link href="/dashboard">
            {true ? "Dashboard" : "Get started"}
          </Link>
        </Button>
        <ModeToggle />
      </aside>
    </header>
  );
};

export default Navbar;
