import React, { useState } from "react";
import { FaInstagram, FaTelegram, FaGlobe } from "react-icons/fa";
import useResponsive from "../hooks/useResponsive";
import { useLenis } from "@studio-freight/react-lenis";
import PopUpForm from "./subComponents/PopUpForm";

const Footer = () => {
  const { isLaptop } = useResponsive();
  const lenisInstance = useLenis();
  const [isPopup, setIsPopup] = useState(false);
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
      <footer
        className={`footer flex items-center px-[5cqw] py-5 gap-14`}
        data-bgcolor="#000"
        data-textcolor="#fff"
        id="footer"
      >
        <div
          className={`bg-footer w-full h-full flex items-center justify-evenly gap-14 ${
            isLaptop ? "flex-col" : ""
          }`}
        >
          <div className="w-full h-auto relative">
            <h2 className="text-white font-neueB text-5xl">
              Youth Vision Festival
            </h2>
            <p className="text-[#ffffffa7] font-montserrat text-lg mt-4 font-[200]">
              Made with <span className="text-[#ff7a83]">❤</span> by{" "}
              <a
                href="https://artixxportfolio.netlify.app"
                className="text-white"
                target="_blank"
              >
                Artixx
              </a>
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a
                href="https://www.instagram.com/youthvision.cinema/"
                target="_blank"
                className="bg-[#6c6c6c30] backdrop-blur-lg rounded-[1rem] text-white border-[1px] border-[#ffffff14] w-[53px] h-[53px] flex items-center justify-center"
              >
                <FaInstagram className="w-[30px] h-[30px]" />
              </a>
              <a
                href="#"
                target="_blank"
                className="bg-[#6c6c6c30] backdrop-blur-lg rounded-[1rem] text-white border-[1px] border-[#ffffff14] w-[53px] h-[53px] flex items-center justify-center"
              >
                <FaTelegram className="w-[30px] h-[30px]" />
              </a>
              <a
                href="#"
                className="bg-[#6c6c6c30] backdrop-blur-lg rounded-[1rem] text-white border-[1px] border-[#ffffff14] w-[53px] h-[53px] flex items-center justify-center pointer-events-none select-none"
              >
                <FaGlobe className="w-[30px] h-[30px]" />
              </a>
            </div>
            <p className="text-[#ffffff6a] font-montserrat text-md mt-4 font-[200]">
              2024 © All Rights Reserved
            </p>
          </div>
          <div className="w-full h-[25vh] flex items-center justify-center bg-[#6c6c6c11] backdrop-blur-lg rounded-[2.5rem] overflow-hidden border-[1px] px-3 py-2 border-[#ffffff14]">
            <ul className="flex flex-col font-[200] text-[#ffffffc4] font-montserrat pl-7 gap-3 text-lg w-full">
              <a
                href="#"
                className="w-max hover:text-white customTransition2"
                onClick={() => lenisInstance.scrollTo(0, 0)}
              >
                Главная
              </a>
              <a
                href="#kinomaraphon"
                className="w-max hover:text-white customTransition2"
                onClick={() =>
                  handleClick(document.getElementById("kinomaraphon"))
                }
              >
                Киномарафон
              </a>
              <a
                href="#speakers"
                className="w-max hover:text-white customTransition2"
                onClick={() => handleClick(document.getElementById("speakers"))}
              >
                Спикеры
              </a>
              <a
                href="#rules"
                className="w-max hover:text-white customTransition2"
                onClick={() => handleClick(document.getElementById("rules"))}
              >
                Правила
              </a>
            </ul>
          </div>
          <div className="w-full h-[25vh] flex items-center justify-center bg-[#6c6c6c11] backdrop-blur-lg rounded-[2.5rem] overflow-hidden border-[1px] px-3 py-2 border-[#ffffff14]">
            <ul className="flex flex-col font-[200] text-[#ffffffc4] font-montserrat pl-7 gap-3 text-lg w-full">
              <button
                onClick={() => popupOpen()}
                className="w-max hover:text-white customTransition2"
              >
                Учавствовать
              </button>
              <a className="w-max hover:text-white customTransition2">
                Privacy Policy
              </a>
              <a className="w-max hover:text-white customTransition2">
                Terms of service
              </a>
              <a
                className="w-max hover:text-white customTransition2"
                href="https://t.me/Artixx25"
                target="_blank"
              >
                Partner with us
              </a>
            </ul>
          </div>
        </div>
      </footer>

      <PopUpForm popupClose={popupClose} isPopup={isPopup} />
    </>
  );
};

export default Footer;
