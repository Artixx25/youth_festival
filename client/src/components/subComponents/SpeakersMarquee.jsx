import React from "react";
import Marquee from "react-fast-marquee";

const SpeakersMarquee = ({Alex, Inga, Kate, Nelli}) => {
  return (
    <Marquee className="!absolute !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2 !overlayShadow !opacity-30 pointer-events-none">
      <div className="flex items-center gap-7">
        <div className="flex items-center gap-7 w-max">
          <div className="rounded-3xl select-none relative w-full max-w-[200px] h-[260px] flex items-center justify-center customTransition2 active:scale-90">
            <img
              src={Alex}
              alt="speaker"
              loading="lazy"
              className="rounded-3xl object-cover w-full h-full customTransition2 cursor-pointer"
              draggable="false"
            />
          </div>
          <div className="rounded-3xl select-none relative w-full max-w-[200px] h-[260px] flex items-center justify-center customTransition2 active:scale-90">
            <img
              src={Inga}
              alt="speaker"
              loading="lazy"
              className="rounded-3xl object-cover w-full h-full customTransition2 cursor-pointer"
              draggable="false"
            />
          </div>
          <div className="rounded-3xl select-none relative w-full max-w-[200px] h-[260px] flex items-center justify-center customTransition2 active:scale-90">
            <img
              src={Kate}
              alt="speaker"
              loading="lazy"
              className="rounded-3xl object-cover w-full h-full customTransition2 cursor-pointer"
              draggable="false"
            />
          </div>
          <div className="rounded-3xl select-none relative w-full max-w-[200px] h-[260px] flex items-center justify-center customTransition2 active:scale-90">
            <img
              src={Nelli}
              alt="speaker"
              loading="lazy"
              className="rounded-3xl object-cover w-full h-full customTransition2 cursor-pointer"
              draggable="false"
            />
          </div>
        </div>
        <div className="flex items-center gap-7 w-max">
          <div className="rounded-3xl select-none relative w-full max-w-[200px] h-[260px] flex items-center justify-center customTransition2 active:scale-90">
            <img
              src={Alex}
              alt="speaker"
              loading="lazy"
              className="rounded-3xl object-cover w-full h-full customTransition2 cursor-pointer"
              draggable="false"
            />
          </div>
          <div className="rounded-3xl select-none relative w-full max-w-[200px] h-[260px] flex items-center justify-center customTransition2 active:scale-90">
            <img
              src={Inga}
              alt="speaker"
              loading="lazy"
              className="rounded-3xl object-cover w-full h-full customTransition2 cursor-pointer"
              draggable="false"
            />
          </div>
          <div className="rounded-3xl select-none relative w-full max-w-[200px] h-[260px] flex items-center justify-center customTransition2 active:scale-90">
            <img
              src={Kate}
              alt="speaker"
              loading="lazy"
              className="rounded-3xl object-cover w-full h-full customTransition2 cursor-pointer"
              draggable="false"
            />
          </div>
          <div className="rounded-3xl select-none relative w-full max-w-[200px] h-[260px] flex items-center justify-center customTransition2 active:scale-90">
            <img
              src={Nelli}
              alt="speaker"
              loading="lazy"
              className="rounded-3xl object-cover w-full h-full customTransition2 cursor-pointer"
              draggable="false"
            />
          </div>
        </div>
        <div className="rounded-3xl mr-7 select-none relative w-full max-w-[200px] h-[260px] flex items-center justify-center customTransition2 active:scale-90">
          <img
            src={Inga}
            alt="speaker"
            loading="lazy"
            className="rounded-3xl object-cover w-full h-full customTransition2 cursor-pointer"
            draggable="false"
          />
        </div>
      </div>
    </Marquee>
  );
};

export default SpeakersMarquee;
