import React from "react";
import usePointerGlow from "../hooks/usePointerGlow";
import { SparklesPreview } from "./subComponents/SparklesText";
import TourCup from "../assets/cup.webp";
import Medal from "../assets/medal.webp";
import useResponsive from "../hooks/useResponsive";
import NomiLine from "./subComponents/NomiLine";

const defaultOptions = {
  reverse: true, // reverse the tilt direction
  max: 30, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.02, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const nomiData = [
  {
    name: "Короткий метр fiction",
    ageCategory: null,
  },
  {
    name: "Короткий метр documentary",
    ageCategory: null,
  },
  {
    name: "Видео из фотографий (Still video) / Серия фотографий",
    ageCategory: null,
  },
  {
    name: "Лучшее творческое видео",
    ageCategory: null,
  },

  {
    name: "Лучший музыкальный клип",
    ageCategory: null,
  },
  {
    name: "Лучший сценарий",
    ageCategory: null,
  },
  {
    name: "Лучшая режиссура",
    ageCategory: null,
  },

  {
    name: "Лучший монтаж",
    ageCategory: null,
  },
  {
    name: "Лучшая операторская работа",
    ageCategory: null,
  },

  {
    name: "Лучшая актерская игра",
    ageCategory: null,
  },

  {
    name: "Приз зрительских симпатий",
    ageCategory: null,
  },
];

const Competition = ({ isBlack }) => {
  const [status] = usePointerGlow();
  const { isLaptop, isMobile, isBigLaptop } = useResponsive();
  return (
    <div
      className={`h-auto px-[4cqw] ${
        isBlack ? "bg-grid-white/[0.04]" : "bg-grid-black/[0.04]"
      } relative -top-[12px] ${isMobile || isLaptop ? "overflow-hidden" : ""}`}
      id="kinomaraphon"
      data-bgcolor="#000"
      data-textcolor="#fff"
    >
      <div className="flex flex-col w-full gap-6 items-center justify-center">
        <h2
          className={`${
            isLaptop ? (isMobile ? "text-5xl" : "text-7xl") : "text-9xl"
          } font-neueB white-black_text`}
        >
          Киномарафон
        </h2>
      </div>

      <div
        className={`flex gap-5 w-full h-max justify-center items-center ${
          isMobile ? "mt-1" : "mt-5"
        }`}
      >
        <div
          className={`relative h-max ${
            isLaptop ? "w-full" : "w-[40vw]"
          } px-[2cqw] customTransition2 rounded-3xl`}
        >
          <div className="flex items-center justify-center h-max py-2">
            <h3 className="md:text-3xl text-2xl white-black_text lg:text-4xl mb-3 font-montserrat font-[500] text-center relative z-2 opacity-50 tracking-tighter">
              Номинации
            </h3>
          </div>

          <ul className="relative flex flex-col gap-2 justify-between white-black_text opacity-90 font-montserrat pb-10 z-10">
            <div className="flex flex-col gap-2">
              {nomiData.map((nomi, index) => <NomiLine key={index} {...nomi} id={index + 1}/>)}
            </div>
          </ul>
        </div>
      </div>
      <picture>
      <img
        src={TourCup}
        alt=""
        loading="lazy"
        className={`absolute z-[3] animateBreatheCustomTranform -translate-y-1/2 w-max ${
          isBigLaptop ? "max-w-[260px] right-16 top-[88%]" :
          isLaptop
            ? isMobile
              ? "max-w-[120px] right-[-40px] top-[94%]"
              : "max-w-[200px] right-0 top-[82%]"
            : "max-w-[400px] right-16 top-[65%]"
        } rotate-[25deg] pointer-events-none select-none`}
      />
      </picture>

      <picture>
      <img
        src={Medal}
        alt=""
        loading="lazy"
        className={`absolute z-[3] animateBreatheCustomTranform2 -translate-y-1/2 w-max ${
          isBigLaptop ? "max-w-[200px] left-16 top-[29%]" :
          isLaptop
            ? isMobile
              ? "max-w-[80px] left-[-20px] top-[13%]"
              : "max-w-[100px] left-3 top-[12%]"
            : "max-w-[300px] left-16 top-[35%]"

        } rotate-[-25deg]`}
      />
      </picture>

      <div className={`bluredBgMedal ${isBigLaptop ? 'small' : isLaptop ? 'smaller' : ""}`} />
      <div className={`bluredBgMedal2 ${isBigLaptop ? 'small' : isLaptop ? 'smaller' : ""}` }/>
    </div>
  );
};

export default Competition;
