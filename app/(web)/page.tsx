"use client"

import { useState, useEffect, useRef } from 'react';
import Bg01 from '/public/images/bg01.jpg';
import Bg02 from '/public/images/bg02.jpg';
import Bg03 from '/public/images/bg03.jpg';
import Bg04 from '/public/images/bg04.jpg';
import HomePageCover from '@/components/home/HomePageCover';
import WhoAreWe from '@/components/home/WhoAreWe';
import FeaturedBlogs from '@/components/home/FeaturedBlogs';
import Achievements from '@/components/home/Achievements';

export default function Home() {
  const [bg, setBg] = useState(Bg01);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let interval = useRef();

  const startTimer = () => {
    const endDate = new Date('December 20, 2023 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      if (distance < 0) {
        clearInterval(interval);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };
  


  useEffect(() => {
    startTimer();
    const interval = setInterval(() => {
      setBg((bg) => {
        switch (bg.src) {
          case Bg01.src:
            return Bg04;
          case Bg04.src:
            return Bg03;
          case Bg03.src:
            return Bg02;
          case Bg02.src:
            return Bg01;
          default:
            return Bg01;
        }
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className={` bg-cover min-h-screen justify-center flex flex-col relative transition-background`}>
      {/* <div className="absolute inset-0 z-0 bg-black opacity-50" /> */}
      <HomePageCover />
      <WhoAreWe />
      <FeaturedBlogs />
      <Achievements />
    </main>
  );
}