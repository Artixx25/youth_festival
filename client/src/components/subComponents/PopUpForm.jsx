import React from "react";
import useResponsive from "../../hooks/useResponsive";
import { FormMain } from "./Form";

const PopUpForm = ({ isPopup, popupClose }) => {
  const { isMobile } = useResponsive();
  return (
    <div
      className={`fixed inset-0 w-full h-screen z-[50] bg-[#fff3f313] customTransition flex items-center justify-center backdrop-blur-lg ${
        isMobile ? "px-3" : ""
      } ${isPopup ? "animateIn" : "animateOut"}`}
    >
        <FormMain popupClose={popupClose} isPopup={isPopup}/>

    </div>
  );
};

export default PopUpForm;
