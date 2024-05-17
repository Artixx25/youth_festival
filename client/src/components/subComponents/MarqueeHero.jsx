import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeHero = () => {
  const images = [
    "/imgs/1.webp",
    "/imgs/2.webp",
    "/imgs/3.webp",
    "/imgs/4.webp",
    "/imgs/5.webp",
    "/imgs/6.webp",
    "/imgs/7.webp",
    "/imgs/8.webp",
    "/imgs/9.webp",
    "/imgs/10.webp",
    "/imgs/11.webp",
    "/imgs/12.webp",
    "/imgs/13.webp",
    "/imgs/14.webp",
    "/imgs/15.webp",
    "/imgs/16.webp",
  ];
  return (
    <Marquee className="!absolute !top-[26.5%] !left-1/2 !-translate-x-1/2 !-translate-y-1/2 w-full h-max flex items-center pointer-events-none">
      {images.map((image, i) => (
        <img
          className="pointer-events-none h-40 w-auto rounded-xl border-2 border-black bg-neutral-900 object-cover mx-1"
          src={image}
          draggable="false"
          alt={`Mouse move image ${i}`}
          key={i}
        />
      ))}
    </Marquee>
  );
};

export default MarqueeHero;
