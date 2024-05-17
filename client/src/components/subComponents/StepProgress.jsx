import React, { useState } from "react";
import useResponsive from '../../hooks/useResponsive.js'
const StepProgress = ({ activeStep, previousStep, steps }) => {
    const {isMobile} = useResponsive()
  return (
    <div className="w-full h-[60px] flex items-center justify-between relative">
      <div className="w-full h-[2px] bg-[#ffffff44] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div
        className={`${
          activeStep == 1
            ? "w-0"
            : activeStep == 2
            ? "w-1/2"
            : activeStep == 3
            ? "w-full"
            : ""
        } h-[2px] bg-[#8f3f47] customTransition2 absolute top-1/2 left-0 -translate-y-1/2 progress`}
      ></div>

      <div className="w-full h-full flex justify-between items-center relative z-[1]">
        {steps?.map((step, index) => (
          <div
            className={`circle customTransition overflow-hidden ${isMobile ? 'w-[40px] h-[40px] text-sm' : 'w-[50px] h-[50px] text-lg'}  relative GradientBG ${
              activeStep == index + 1 || index + 1 == 1 || previousStep == index
                ? "activeBG boxShadowActive border-neutral-700/[.4]"
                : "bg-zinc-800 border-neutral-700/[.9]"
            } border-[1px] text-white backdrop-blur-md rounded-xl flex items-center justify-center font-neueB`}
            key={index}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepProgress;
