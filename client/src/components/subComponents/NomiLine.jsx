import React from "react";
import useResponsive from "../../hooks/useResponsive";

const NomiLine = ({id, name}) => {
  const { isMobile } = useResponsive();
  return (
    <li
      className="items-center flex gap-4 px-5 py-3 rounded-lg customTransition2 group hover:scale-110 cursor-pointer"
      data-glow={isMobile ? false : true}
    >
      <span className="number_list group-hover:bg-[#8f3f47] customTransition2">
        {id}
      </span>{" "}
      {name}
    </li>
  );
};

export default NomiLine;
