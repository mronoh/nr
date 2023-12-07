"use client"

import Logo from "@/public/icons/ngworocks_logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import { cx } from "@/utils";
import { useScrollPosition } from "../hooks";
import { usePathname } from "next/navigation";
import { mobileNavLinks, navLinks1, navLinks2 } from "@/constants";

const Header = () => {
  const [toggled, setToggled] = useState(false);
  const scrollPosition = useScrollPosition()
  const pathname = usePathname();


  return (
    <header className={cx(scrollPosition > 0 ? 'shadow' : 'shadow-none', 'sticky -top-2 w-full z-30 py-6 bg-white')}>
      <nav
        className='max-w-7xl px-5 sm:px-10 font-semibold mx-auto flex justify-between relative items-center text-lg  text-dark capitalize font-semi-bold'
      >
        <Link
          href="/"
          className="h-full flex justify-center lg:absolute lg:right-1/2 lg:translate-x-1/2"
        >
          <Image src={Logo} alt="Christian Onoh" width={60} height={60} />
        </Link>

        {/* Desktop Navigation  */}
        <div className="hidden lg:flex justify-between items-center gap-4 lg:gap-6">
          {
            navLinks1.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className={cx(pathname === link.url ? 'bg-accent/10' : 'text-dark', 'hover:bg-accent/10 px-4 py-1.5 rounded-lg transition-all duration-200 ease-in-out hover:scale-105')}
              >
                {link.name}
              </Link>
            ))
          }
        </div>
        <div
          className={`hidden lg:flex justify-between items-center gap-4 lg:gap-6`}
        >
          {
            navLinks2.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className={cx(pathname === link.url ? 'bg-accent/10' : 'text-dark', 'hover:bg-accent/10 px-4 py-1.5 rounded-lg transition-all duration-200 ease-in-out hover:scale-105')}
              >
                {link.name}
              </Link>
            ))
          }
          <Link
            href="/"
            className="bg-dark text-white py-2 px-4 rounded-lg transition-all duration-200 ease-in-out hover:bg-white hover:text-dark border border-dark"
          >
            get in touch
          </Link>
        </div>

        {/* Mobile Navigation  */}
        <div className="flex items-center gap-6 lg:hidden">
          <Link
            href="/blog"
            className="hover:bg-accent/10 px-4 py-1.5 rounded-lg transition-all duration-200 ease-in-out hover:scale-105"
          >
            blog
          </Link>
          <div className="z-50 text-dark hover:bg-accent/10 rounded-full">
            <Hamburger
            toggle={setToggled}
            toggled={toggled}
            size={27}
            label="menu"
          />
          </div>
            <div className={cx(toggled ? 'scale-y-100 origin-top' : 'scale-y-0 origin-top', 'flex flex-col w-full bg-white shadow-sm absolute z-30 left-0 h-[384px] justify-center lg:hidden transform transition-transform duration-300 ease-in-out top-0')}>
            <div className="py-32 px-8 max-w-[287px] mx-auto text-base gap-4 h-full flex flex-col w-full items-center text-black capitalize font-semibold">
              {
                mobileNavLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    className="text-center  hover:bg-accent/10 px-4 py-1.5 rounded-lg transition-all duration-200 ease-in-out hover:scale-105"
                  >
                    {link.name}
                  </Link>
                ))
              }
            </div>
            </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
