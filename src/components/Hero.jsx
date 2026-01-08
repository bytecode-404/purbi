import { useEffect, useState } from "react";
import Section from "./Section";

const banners = [
  "/banner1.jpg",
  "/banner2.jpg",
];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % banners.length);
    }, 6000); // change every 6s
    return () => clearInterval(id);
  }, []);

  return (
    <div id="home" className="relative overflow-hidden text-white">
      {/* Grid stack keeps images in normal flow so height auto-adjusts */}
      <div className="grid w-full">
        {banners.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Hero banner"
            aria-hidden={index !== i}
            className="col-start-1 row-start-1 w-full h-auto object-contain transition-opacity duration-700"
            style={{ opacity: index === i ? 1 : 0 }}
          />
        ))}
        {/* overlay */}
        <div className="col-start-1 row-start-1 w-full h-full bg-black/25 z-[1]" />

        {/* full-section link */}
        <a
          href="#about"
          aria-label="Learn more about PURBI"
          className="col-start-1 row-start-1 z-[2] block w-full h-full cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
        />
      </div>
    </div>
  );
}

export default Hero;
