'use client';

import styles from "@/styles";
import { socials } from "@/constants";
import Image from "next/image";
import Twitter from '/public/icons/twitter.svg'
import LinkedIn from '/public/icons/linkedin.svg'
import IG from '/public/icons/instagram.svg'
import Facebook from '/public/icons/facebook.svg'

const imgArr = [Twitter, LinkedIn, IG, Facebook];

const Footer = () => (
  <footer className={`${styles.xPaddings} relative mt-auto pb-4`}>
    <div className="mt-8 md:pt-12 pt-6 border-t-[1px] flex md:flex-row flex-col justify-between items-center">
      <p className="font-extrabold text-white text-2xl uppercase">
        ngworocks
      </p>

      <p className="text-center text-sm text-white opacity-50 my-4">
            <a
              href="https://github.com/christianonoh"
              target="_blank"
              rel="noreferrer noopener"
            >
              Developed by <span className="text-green-400">Christian Onoh</span>
            </a>
            <br className="lg:hidden block" />
            <span className="lg:inline hidden">{'  |  '}</span>
            All rights reserved &copy; {new Date().getFullYear()}

      </p>

      <div className="flex gap-4">
        {socials.map((social, index) => (
          <Image 
            key={social.name}
            src={imgArr[index]}
            alt={social.name}
            className="w-[20px] h-[20px]"
          />
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;