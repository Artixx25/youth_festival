import React, { useRef } from "react";
import DOMPurify from "dompurify";
import AwardsImg from "../../assets/Awards.webp";
import useResponsive from "../../hooks/useResponsive";

const PopUp = ({ speaker, popupClose, isPopup }) => {
  const cleanHTML = DOMPurify.sanitize(speaker?.description, {
    USE_PROFILES: { html: true },
  });
  const { isMobile, isBigLaptop } = useResponsive();
  return (
    <div
      className={`fixed inset-0 w-full h-screen z-[50] bg-[#ffd5d513] customTransition flex items-center justify-center backdrop-blur-lg ${
        isMobile ? "px-3" : ""
      } ${isPopup ? 'animateIn' : 'animateOut'}`}
    >
      <div className="w-full max-w-[600px] h-max bg-[#e6e6e6] rounded-2xl border-[1px] border-[#00000033] relative customShadowGlass py-3 px-5">
        <h2 className="font-neueB text-black text-4xl text-center">
          {speaker?.name}
        </h2>
        <div className="flex gap-2 items-center justify-center mt-2">
          <img
            src={speaker?.path}
            loading="lazy"
            className="w-full max-w-[180px] rounded-lg max-h-[180px] object-cover pointer-events-none select-none"
            draggable="false"
            alt="speaker photo 1"
          />
          {speaker?.path2 ? <img
            src={speaker?.path2}
            loading="lazy"
            className="w-full max-w-[180px] rounded-lg max-h-[180px] object-cover pointer-events-none select-none"
            draggable="false"
            alt="speaker photo 2"
          /> : <></>}
        </div>
          <p
            dangerouslySetInnerHTML={{ __html: cleanHTML }}
            className={`font-montserrat text-[#000000c4] text-center mt-4 ${
              isBigLaptop ? "text-sm" : isMobile ? "text-xs" : "text-md"
            } h-max`}
          />
        {speaker?.awwards ? (
          <div className="w-full flex items-center justify-center h-max mt-5">
            <img
              src={AwardsImg}
              alt="awards"
              loading="lazy"
              className="w-[50px] pointer-events-none select-none"
              draggable="false"
            />{" "}
            <p className="text-black font-montserrat text-xs max-w-[300px] opacity-90">
              {speaker?.awwards}
            </p>
          </div>
        ) : (
          <></>
        )}
        <div
          className="absolute top-[-40px] cursor-pointer select-none right-0 bg-[#8f3f47] py-1 px-7 font-montserrat font-[600] customTransition2 active:scale-90 customShadowGlass text-md rounded-3xl border-[1px] border-[#00000033] text-[#ffffffc9]"
          onClick={() => popupClose()}
        >
          Close
        </div>
      </div>
    </div>
  );
};

export default PopUp;
