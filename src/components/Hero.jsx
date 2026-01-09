import { useEffect, useState } from "react";
import Section from "./Section";

const banners = ["/banner2.jpg"];

function Hero() {
  return (
    <div id="home" className="relative overflow-hidden text-white">
      {/* Grid with fixed aspect ratio ensures consistent height */}
      <div className="grid w-full">
        {banners.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Hero banner"
            className="col-start-1 row-start-1 w-full h-auto object-cover object-center transition-opacity duration-700"
          />
        ))}
        {/* overlay */}
        <div className="col-start-1 row-start-1 w-full h-full bg-black/40 z-[1]" />

        {/* Title overlay */}
        <div className="col-start-1 row-start-1 z-[2] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 drop-shadow-lg">
           
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white/95 mb-2 drop-shadow-lg">
            
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 drop-shadow-lg">
            
          </p>
        </div>

        {/* full-section link */}
        <a
          href="#about"
          aria-label="Learn more about PURBI"
          className="col-start-1 row-start-1 z-[3] block w-full h-full cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
        />
      </div>
    </div>
  );
}

export default Hero;
