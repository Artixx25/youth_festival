import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import { Spotlight } from "./subComponents/Spotlight";
import { CalendarDays } from "lucide-react";
import MarqueeHashtag from "../components/subComponents/MarqueeHashtag";
import useResponsive from "../hooks/useResponsive";
import MarqueeHero from "./subComponents/MarqueeHero";
import { useLenis } from "@studio-freight/react-lenis";
import PopUpForm from "./subComponents/PopUpForm";
import Polaroid from "../assets/Polaroid.webp";
import { FiChevronDown } from "react-icons/fi";

const Hero = ({ isVisible, isBlack }) => {
  const { isLaptop, isTablet, isMobile, isBigLaptop } = useResponsive();
  const [isPopup, setIsPopup] = useState(false);
  const lenisInstance = useLenis();

  //   (function(){
  //     var download = function(){
  //       var link = document.createElement('a');
  //       link.download = 'wallpaper-wo-mobile.jpg';
  //       link.href = document.getElementById('loxiBlyat').toDataURL()
  //       link.click();
  //     }
  //     download()
  //  })()

  // Function for smooth scrolling
  const handleClick = (targetElement) => {
    if (targetElement) {
      const scrollToOptions = {
        // Customize scroll options if needed
        offset: 0,
        duration: 2,
        easing: function (t) {
          return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        },
        immediate: false,
        lock: false,
        force: false,
      };

      lenisInstance.scrollTo(targetElement, scrollToOptions);
    }
  };

  function popupOpen() {
    setIsPopup(true);
    lenisInstance.stop();
  }

  function popupClose() {
    setIsPopup(false);
    lenisInstance.start();
  }
  return (
    <>
      <div
        className={`w-full ${
          isLaptop ? "h-auto" : "h-screen px-[4cqw]"
        } relative antialiased ${
          isBlack ? "bg-grid-white/[0.04]" : "bg-grid-black/[0.04]"
        } overflow-hidden`}
        data-bgcolor="#fff"
        data-textcolor="#000"
      >
        <div
          className={`w-full relative items-center justify-between ${
            isLaptop ? "flex-col h-auto" : "flex h-[90vh]"
          }`}
        >
          {!isVisible ? (
            <Spotlight
              className="-top-20 left-0 md:-left-40 md:top-0"
              fill={isBlack ? "white" : "black"}
            />
          ) : (
            <></>
          )}
          <img
            src={Polaroid}
            alt="Polaroid"
            className={`z-[5] relative ${
              isLaptop
                ? isMobile
                  ? "scale-[.55] toCanvas top-[30px] -left-[10px] mx-auto"
                  : "scale-[.55] toCanvas -top-[110px] -left-[10px] mx-auto"
                : "!w-[29vw] scale-[.55] !h-[30vw] animateBreathe"
            }`}
          />

          {isLaptop ? (
            <>
              <MarqueeHero />
              <div className="radialShadow absolute top-[26.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[25rem] opacity-90" />
            </>
          ) : (
            <></>
          )}

          <div
            className={`w-full ${
              isLaptop
                ? isMobile
                  ? "mt-[-5%] px-[4cqw]"
                  : "mt-[-30%] px-[4cqw]"
                : "max-w-[calc(100vw-43vw-8cqw)]"
            } flex flex-col gap-2 relative z-[5]`}
          >
            <div
              className={`flex items-center gap-3 font-montserrat ${
                isLaptop ? "justify-center" : ""
              }`}
            >
              <p
                className={`border-[1px] border-[#a8a876] ${
                  isBlack ? "bg-black" : "backdrop-blur-md bg-[#ffffff55]"
                } py-.5 px-4 rounded-full flex items-center gap-1 h-[26px] ${
                  isLaptop ? "text-xs" : "text-sm"
                } white-black_text`}
              >
                <CalendarDays className="w-[17px] h-[17px] text-[#a8a876]" />{" "}
                15.06.2024
              </p>{" "}
              {!isTablet && isMobile ? (
                <></>
              ) : (
                <>
                  <span className="tracking-[-.1rem] opacity-80">-----</span>
                  <p
                    className={`${
                      isLaptop ? "text-xs" : "text-sm"
                    } font-[600] opacity-95 white-black_text`}
                  >
                    Дедлайн кинофестиваля
                  </p>
                </>
              )}
            </div>
            <div className="w-full h-auto relative">
              <h2
                className={`font-neueB white-black_text ${
                  isBigLaptop
                    ? "text-5xl"
                    : isLaptop
                    ? "text-7xl text-center"
                    : "text-9xl"
                }`}
              >
                Youth Vision Festival
              </h2>

              <h2
                className={`font-neueB text-[#ffffff] absolute top-0 left-0 z-[-1] pointer-events-none select-none ${isBlack ? 'opacity-0 invisible' : ''} ${
                  isBigLaptop
                    ? "text-5xl"
                    : isLaptop
                    ? "text-7xl text-center w-full"
                    : "text-9xl"
                }`}
              >
                Youth Vision Festival
              </h2>
            </div>

            <p
              className={`font-montserrat text-[#5f5f5f] ${
                isBigLaptop
                  ? "text-md mt-5"
                  : isLaptop
                  ? isMobile
                    ? "text-center text-sm mt-2"
                    : "text-center text-md mt-5"
                  : "text-lg mt-5"
              }`}
            >
              Первый онлайн-кинофестиваль для школьников и студентов.{" "}
              <span className="font-[600] textShadowM white-black_text">
                Youth Vision Festival
              </span>{" "}
              Фестиваль короткометражных фильмов и творческих видео\фото работ,
              который поможет начинающим филммейкерам (школьникам и студентам)
              получить признание, показать свои фильмы, научиться от
              профессионалов и выиграть награды.
            </p>

            <p
              className={`font-montserrat text-[#9a9a9a] ${
                isBigLaptop
                  ? "text-sm mt-1"
                  : isLaptop
                  ? isMobile
                    ? "text-center text-xs mt-1"
                    : "text-center text-sm mt-3"
                  : "text-md mt-3"
              }`}
            >
              Участники кинофестиваля также смогут принять участие в
              киномарафоне и пройти мастер-классы от четырех спикеров из мира
              кино и медиа.
            </p>
            <div
              className={`flex items-center gap-6 ${
                isBigLaptop
                  ? "mt-7"
                  : isLaptop
                  ? "justify-center mt-5"
                  : "mt-10"
              }`}
            >
              <button
                onClick={() => popupOpen()}
                className={`bg-[#8f3f47] boxShadowMain ${
                  isLaptop
                    ? isMobile
                      ? "py-2.5 text-lg min-w-[170px]"
                      : "py-2.5 text-lg min-w-[200px]"
                    : "px-14 py-3.5 text-xl min-w-[200px]"
                } rounded-2xl text-[#ffffffc3] font-[700] w-max border-[2px] border-[#8f3f47] hoverTypeScale`}
              >
                Участвовать
              </button>
              <button
                onClick={() =>
                  handleClick(document.getElementById("kinomaraphon"))
                }
                className={`rounded-2xl flex items-center justify-center white-black_text btnBorder customTransition ${
                  isBlack
                    ? "border-white bg-black text-white"
                    : "border-black bg-white text-black"
                } ${
                  isLaptop
                    ? isMobile
                      ? "py-[.627rem] text-lg min-w-[170px]"
                      : "py-[.627rem] text-lg min-w-[200px]"
                    : "px-14 py-[.87rem] text-xl min-w-[200px]"
                } text-[#000000] text-lg font-[500] w-max border-[2px] hoverTypeScale`}
              >
                Узнать больше
              </button>
            </div>
          </div>
        </div>

        <MarqueeHashtag />
      </div>
      <PopUpForm popupClose={popupClose} isPopup={isPopup} />
    </>
  );
};

export default Hero;
