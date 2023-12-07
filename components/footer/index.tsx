import React from "react";
import { FacebookIcon, InstagramIcon, MailIcon } from "../icons";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/icons/ngworocks_logo.svg";
import getOnAppStore from "@/public/icons/app-store-badge.svg";
import getOnPlayStore from "@/public/icons/google-play-badge.svg";
import { footerPages } from "@/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="px-5 sm:px-10 py-8 w-full  bg-dark rounded-t-3xl border-t-[12px] border-accent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between text-light ">
          <div className="flex gap-8 justify-around sm:justify-between">
            {/* Follow us on social media  */}
            <div className="">
              <h3 className="uppercase text-lg font-semibold mb-2">
                follow us
              </h3>
              <span className="flex flex-col gap-1 text-sm">
                <a href="www.facebook.com" className="flex">
                  <FacebookIcon className="w-6 h-6 mr-2" />
                  @ngworocks
                </a>
                <a href="www.instagram.com" className="flex">
                  <InstagramIcon className="w-6 h-6 mr-2" />
                  @ngworocks
                </a>
                <a href="www.instagram.com" className="flex">
                  <MailIcon className="w-6 h-6 mr-2" />
                  ngworocks@gmail.com
                </a>
              </span>
            </div>

            {/* Pages  */}
            <div>
              <h3 className="uppercase text-lg font-semibold mb-2">Pages</h3>
              <span className="flex flex-col gap-1 text-sm">
                {footerPages.map((page, index) => (
                  <Link href={page.url} key={index} className="">
                    {page.name}
                  </Link>
                ))}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8 w-fit">
            <Link href="/" className="h-16 flex justify-center w-fit">
              <Image
                src={Logo}
                alt="Ngwo Rocks Logo"
                className="h-full w-auto"
              />
            </Link>
            <span className="flex gap-4">
              <Image
                src={getOnAppStore}
                alt="Get on app store badge"
                className="border border-light rounded-md h-9 w-auto"
              />
              <Image
                src={getOnPlayStore}
                alt="Get on play store badge"
                className="border border-light rounded-md h-9 w-auto"
              />
            </span>
          </div>
        </div>
        <p className="text-light font-thin mt-8">
          © {currentYear} Ngworocks. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
