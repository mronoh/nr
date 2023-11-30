import React from "react";

const WhoAreWe = () => {
  return (
    <section className="pt-72 py-24 px-5 sm:px-16 max-w-7xl mx-auto w-full">
      <div className="flex">
        <div className="flex flex-col justify-center max-w-xl w-1/2">
          <h2 className="text-dark text-4xl mb-12 font-semibold">
            Who we are?
          </h2>
          <p className="text-dark text-xl leading-relaxed">
            <span className="text-accent">Ngworocks</span>, a dynamic endeavor
            driven by young creative minds, celebrating culture and tourism
            through vibrant events, guided exploration, and community
            engagement. Embracing heritage, we aspire to make Ngwo a vibrant
            tourism hub while inspiring startups across regions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
