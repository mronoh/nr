import styles from "@/styles";
import Logo from "@/public/icons/ngworocks_logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import { cx } from "@/utils";

const Header = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <header className={`${styles.xPaddings} py-6 relative bg-white `}>
      <nav
        className={`${styles.innerWidth} max-w-7xl mx-auto flex justify-between items-center text-lg  text-dark capitalize font-semi-bold`}
      >
        <Link
          href="/"
          className="h-full flex justify-center lg:absolute lg:right-1/2 lg:translate-x-1/2"
        >
          <Image src={Logo} alt="Christian Onoh" width={60} height={60} />
        </Link>

        {/* Desktop Navigation  */}
        <div className="hidden lg:flex justify-between items-center gap-4 lg:gap-6">
          <Link
            href="/"
            className="hover:bg-accent/10 px-4 py-1.5 rounded-lg transition-all duration-200 ease-in-out hover:scale-105"
          >
            home
          </Link>
          <Link
            href="/"
            className="hover:bg-accent/10 px-4 py-1.5 rounded-lg transition-all duration-200 ease-in-out hover:scale-105"
          >
            about
          </Link>
          <Link
            href="/"
            className="hover:bg-accent/10 px-4 py-1.5 rounded-lg transition-all duration-200 ease-in-out hover:scale-105"
          >
            services
          </Link>
        </div>
        <div
          className={`hidden lg:flex justify-between items-center gap-4 lg:gap-6`}
        >
          <Link
            href="/"
            className="hover:bg-accent/10 px-4 py-1.5 rounded-lg transition-all duration-200 ease-in-out hover:scale-105"
          >
            blog
          </Link>
          <Link
            href="/"
            className="hover:bg-accent/10 px-4 py-1.5 rounded-lg transition-all duration-200 ease-in-out hover:scale-105"
          >
            contact
          </Link>
          <Link
            href="/"
            className="bg-dark text-white py-2 px-4 rounded-lg transition-all duration-200 ease-in-out hover:bg-white hover:text-dark border border-dark"
          >
            get in touch
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
