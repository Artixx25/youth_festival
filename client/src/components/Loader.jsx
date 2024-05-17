import React, { useEffect } from "react";

const Loader = ({setIsVisible, isVisible}) => {
    const time = 1.2

    useEffect(() => {
        const delay = setTimeout(() => setIsVisible(false), time * 1000)

        return () => {
            clearTimeout(delay)
        }
    }, [])
  return (
    <div className={`fixed inset-0 w-full h-full flex flex-col gap-3 items-center justify-center bg-[#eeeeee] customTransition z-40 ${!isVisible ? 'pointer-events-none select-none -z-[1] opacity-0 invisible' : 'opacity-100 pointer-events-auto select-auto visible'}`}>
      <img
        src="/logo.webp"
        className="w-[25vw] relative -top-10 invert animate-pulse"
      />
      <div className="flex gap-5 items-end  animate-pulse font-neueB text-5xl">
        Loading
        <div className="loader">
          <li className="dots" id="dot-1"></li>
          <li className="dots" id="dot-2"></li>
          <li className="dots" id="dot-3"></li>
        </div>
      </div>
    </div>
  );
};

export default Loader;
