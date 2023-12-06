import Image from "next/image";
import wantToTour from "@/public/images/wantatourbg.png";
import Link from "next/link";
import { BackIcon } from "../icons";

const WantATour = () => {
  return (
    <section className="px-5 sm:px-10 py-24 max-w-7xl mx-auto w-full">
      <div className="px-10 py-16 flex flex-col relative h-[519px] justify-center items-center border rounded-3xl">
        <div className="absolute top-0 left-0 z-0 w-full h-full rounded-3xl from-dark/50 bg-gradient-to-b to-dark/90" />
        <Image
          src={wantToTour}
          alt="Want to tour?"
          className="absolute object-cover right-0 top-0 h-full rounded-3xl -z-10 w-full"
        />
        <div className="z-10 text-white flex flex-col justify-center items-center w-max px-5">
          <h2 className="text-3xl sm:text-6xl md:text-7xl font-bold mb-4">Want to tour?</h2>
          <p className="text-center text-base md:text-xl mb-8 max-w-xs md:max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
          <Link
            href="/contact"
            className="bg-dark text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 ease-in-out hover:bg-light hover:text-dark border border-dark"
          >
            Get in touch
            <BackIcon className="inline-block ml-2 transform rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WantATour;
