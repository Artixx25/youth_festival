import { ExternalLink } from "lucide-react";
import React from "react";
import { Tilt } from "react-tilt";
import useResponsive from "../../hooks/useResponsive";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 30, // max tilt rotation (degrees)
  perspective: 1200, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.03, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1200, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const CardSpeaker = ({ path, name, theme, onClick }) => {
  const { isMobile } = useResponsive();

  if (isMobile)
    return (
      <div
        className="rounded-3xl select-none relative w-full max-w-[380px] h-[488px] flex items-center justify-center customShadowGlass customTransition2 active:scale-90 z-[1]"
        onClick={onClick}
      >
        <img
          src={path}
          loading="lazy"
          alt={`Speaker ${name} photo`}
          className="rounded-3xl object-cover w-full h-full customTransition2 cursor-pointer"
          draggable="false"
        />
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-full flex items-center justify-center flex-col px-3 pointer-events-none">
          <h2 className="font-neueB text-2xl customStroke flex items-center gap-1 w-max">
            {name} <ExternalLink className="w-[17px] h-[17px] opacity-80" />
          </h2>
          <p className="text-xs text-center mt-1 customStroke !py-1 !rounded-xl opacity-80">
            {theme}
          </p>
        </div>
      </div>
    );

  return (
    <Tilt
      options={defaultOptions}
      className="rounded-3xl select-none relative w-full max-w-[380px] h-[488px] flex items-center justify-center customTransition2 active:!scale-90 z-[1]"
    >
      <div className="relative w-full h-full flex items-center justify-center" onClick={onClick}>
        <img
          src={path}
          loading="lazy"
          alt={`Speaker ${name} photo`}
          className="rounded-3xl object-cover w-full h-full customTransition2 cursor-pointer"
          draggable="false"
        />
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-full flex items-center justify-center flex-col px-3 pointer-events-none">
          <h2 className="font-neueB text-2xl customStroke flex items-center gap-1 w-max">
            {name} <ExternalLink className="w-[17px] h-[17px] opacity-80" />
          </h2>
          <p className="text-xs text-center mt-1 customStroke !py-1 !rounded-xl opacity-80">
            {theme}
          </p>
        </div>
      </div>
    </Tilt>
  );
};

export default CardSpeaker;
