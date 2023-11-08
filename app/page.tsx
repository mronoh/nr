"use client"

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Bg01 from '/public/images/bg01.jpg';
import Bg02 from '/public/images/bg02.jpg';
import Bg03 from '/public/images/bg03.jpg';
import Bg04 from '/public/images/bg04.jpg';
import styles from '@/styles';
import Navbar from '@/components/Navbar';
import CountDownTimer from '@/components/CountDownTimer';
import Footer from '@/components/Footer';

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
      className={`bg-cover min-h-screen flex flex-col relative transition-background`}
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0" />
      <Navbar />
      <div className={`${styles.innerWidth} w-full flex justify-center items-center sm:p-16 xs:p-8 px-6 py-12 relative`}>
        <div className={`flex-col text-center sm:p-16 xs:p-8 px-6 py-12`}>
          <h1 className="font-bold md:text-8xl text-4xl uppercase text-white sm:mb-12 mb-6">
            Coming Soon
          </h1>
          <CountDownTimer
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}