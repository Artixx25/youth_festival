import React, { useState } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import useResponsive from "../hooks/useResponsive";
import PopUpForm from "./subComponents/PopUpForm";
import MarqueeHashtag from "../components/subComponents/MarqueeHashtag";

const Nav = ({ isBlack }) => {
  const lenisInstance = useLenis();
  const { isLaptop, isMobile } = useResponsive();
  const [isPopup, setIsPopup] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  function popupOpen() {
    setIsPopup(true);
    lenisInstance.stop();
  }

  function popupClose() {
    setIsPopup(false);
    lenisInstance.start();
  }
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

  return (
    <>
      <nav className="w-full h-[65px] fixed inset-0 z-20 flex items-center justify-between px-[4cqw] classed">
        {/* left side */}
        <div className="flex items-center justify-between w-max h-full relative gap-2">
          <a href="#" className={`backdrop-blur-md bg-[#ffffff35] px-4 py-1 rounded-full flex gap-2 justify-between items-center`} onClick={() => lenisInstance.scrollTo(0, 0)}>
            <img src="/logo.webp" alt="" width="65" className="invert logo" />
            {isMobile ? (
              <></>
            ) : (
              <h2 className="font-neueB text-2xl white-black_text">
                Youth Festival
              </h2>
            )}
          </a>
        </div>

        {/* right side */}

        {isLaptop ? (
          <>
            <div
              className={`flex items-center justify-between w-max h-full relative gap-10 py-1 z-[5]`}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                e.target.children[0].classList.toggle("active");
                setIsMenu(!isMenu);
              }}
            >
              <svg
                className={`ham ham3 backdrop-blur-md bg-[#ffffff35] rounded-full ${
                  isBlack ? "white" : ""
                } pointer-events-none select-none`}
                viewBox="0 0 100 100"
                width={isMobile ? 51.3 : 60}
              >
                <path
                  className="line top"
                  d="m 70,33 h -40 c -11.092231,0 11.883874,13.496726 -3.420361,12.956839 -0.962502,-2.089471 -2.222071,-3.282996 -4.545687,-3.282996 -2.323616,0 -5.113897,2.622752 -5.113897,7.071068 0,4.448316 2.080609,7.007933 5.555839,7.007933 2.401943,0 2.96769,-1.283974 4.166879,-3.282995 2.209342,0.273823 4.031294,1.642466 5.857227,-0.252538 v -13.005715 16.288404 h 7.653568"
                />
                <path
                  className="line middle"
                  d="m 70,50 h -40 c -5.6862,0 -8.534259,5.373483 -8.534259,11.551069 0,7.187738 3.499166,10.922274 13.131984,10.922274 11.021777,0 7.022787,-15.773343 15.531095,-15.773343 3.268142,0 5.177031,-2.159429 5.177031,-6.7 0,-4.540571 -1.766442,-7.33533 -5.087851,-7.326157 -3.321409,0.0092 -5.771288,2.789632 -5.771288,7.326157 0,4.536525 2.478983,6.805271 5.771288,6.7"
                />
                <path
                  className="line bottom"
                  d="m 70,67 h -40 c 0,0 -3.680675,0.737051 -3.660714,-3.517857 0.02541,-5.415597 3.391687,-10.357143 10.982142,-10.357143 4.048418,0 17.88928,0.178572 23.482143,0.178572 0,2.563604 2.451177,3.403635 4.642857,3.392857 2.19168,-0.01078 4.373905,-1.369814 4.375,-3.392857 0.0011,-2.023043 -1.924401,-2.589191 -4.553571,-4.107143 -2.62917,-1.517952 -4.196429,-1.799562 -4.196429,-3.660714 0,-1.861153 2.442181,-3.118811 4.196429,-3.035715 1.754248,0.0831 4.375,0.890841 4.375,3.125 2.628634,0 6.160714,0.267857 6.160714,0.267857 l -0.178571,-2.946428 10.178571,0 -10.178571,0 v 6.696428 l 8.928571,0 -8.928571,0 v 7.142858 l 10.178571,0 -10.178571,0"
                />
              </svg>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-between w-max h-full relative gap-6">
              <ul className="flex items-center justify-between w-max h-full relative gap-4 font-montserrat text-sm">
                <a
                  href="#kinomaraphon"
                  className="white-black_text hoverTypeScale backdrop-blur-md bg-[#ffffff35] px-4 py-1 rounded-full"
                  onClick={() =>
                    handleClick(document.getElementById("kinomaraphon"))
                  }
                >
                  Киномарафон
                </a>
                <a
                  href="#speakers"
                  className="white-black_text hoverTypeScale backdrop-blur-md bg-[#ffffff35] px-4 py-1 rounded-full"
                  onClick={() =>
                    handleClick(document.getElementById("speakers"))
                  }
                >
                  Спикеры
                </a>
                <a
                  href="#rules"
                  className="white-black_text hoverTypeScale backdrop-blur-md bg-[#ffffff35] px-4 py-1 rounded-full"
                  onClick={() => handleClick(document.getElementById("rules"))}
                >
                  Правила
                </a>
                <a
                  href="#footer"
                  className="white-black_text hoverTypeScale backdrop-blur-md bg-[#ffffff35] px-4 py-1 rounded-full"
                  onClick={() => handleClick(document.getElementById("footer"))}
                >
                  Контакты
                </a>
              </ul>

              <button
                className="bg-[#8f3f47] hoverTypeScale px-5 py-2 rounded-xl text-[#ffffffc3] text-sm font-[700]"
                onClick={() => popupOpen()}
              >
                Учавствовать
              </button>
            </div>
          </>
        )}

        <div className="backdrop"></div>
      </nav>

      <PopUpForm popupClose={popupClose} isPopup={isPopup} />

      {/* mobile menu */}
      <div
        className={`fixed w-full h-full top-0 customTransition z-[15] flex items-end overflow-hidden ${
          isBlack ? "bg-black" : "bg-white"
        } justify-center ${
          isMenu
            ? "right-0 opacity-100 pointer-events-auto select-auto"
            : "right-[-150vw] opacity-0 pointer-events-none select-none"
        }`}
      >
        <div
          className={`h-[calc(100%-65px)] transition-all duration-500 ease-in-out delay-500 relative w-full flex flex-col justify-between ${
            isMenu ? "opacity-100" : "opacity-0"
          } py-10`}
        >
          <MarqueeHashtag />
          <ul className="flex flex-col items-center justify-center w-full h-full relative gap-14 font-neueB text-4xl">
            <a
              href="#kinomaraphon"
              className="white-black_text"
              onClick={() => {
                handleClick(document.getElementById("kinomaraphon"));
                setIsMenu(false);
                document.querySelector(".ham.ham3").classList.remove("active");
              }}
            >
              Киномарафон
            </a>
            <a
              href="#speakers"
              className="white-black_text"
              onClick={() => {
                handleClick(document.getElementById("speakers"));
                setIsMenu(false);
                document.querySelector(".ham.ham3").classList.remove("active");
              }}
            >
              Спикеры
            </a>
            <a
              href="#rules"
              className="white-black_text"
              onClick={() => {
                handleClick(document.getElementById("rules"));
                setIsMenu(false);
                document.querySelector(".ham.ham3").classList.remove("active");
              }}
            >
              Правила
            </a>
            <a
              href="#footer"
              className="white-black_text"
              onClick={() => {
                handleClick(document.getElementById("footer"));
                setIsMenu(false);
                document.querySelector(".ham.ham3").classList.remove("active");
              }}
            >
              Контакты
            </a>
          </ul>
          <MarqueeHashtag reversed />
        </div>
        <div
          className={`bluredBgMenuMobileBottom transition-all duration-700 ease-in-out delay-700 ${
            isMenu ? "opacity-100 bottom-[-55%]" : "opacity-0 bottom-[-100%]"
          }`}
        />
        <div
          className={`bluredBgMenuMobileTop transition-all duration-700 ease-in-out delay-700 ${
            isMenu ? "opacity-100 top-[-57%]" : "opacity-0 top-[-100%]"
          }`}
        />
      </div>
    </>
  );
};

export default Nav;
