import { useRef, useState, useLayoutEffect } from "react";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Nav from "./components/Nav";
import Competition from "./components/Competition";
import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import WaitingFor from "./components/WaitingFor";
import Rules from "./components/Rules";
import Footer from "./components/Footer";
import MouseTrail from "./components/subComponents/MouseTrail";
import useResponsive from "./hooks/useResponsive";
import { Toaster } from 'react-hot-toast';

gsap.registerPlugin(ScrollTrigger);


function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [isBlack, setIsBlack] = useState(false);
  const lenisRef = useRef();
  const container = useRef();
  const { isLaptop, isMobile } = useResponsive();

  useLayoutEffect(() => {
    const logoChange = document.querySelector(".logo");
    const textChange = document.querySelectorAll(".white-black_text");

    function checkSroll() {
      if (window.scrollY >= 457) {
        container.current.style.background = "#000";
        logoChange.classList.add("black");
        textChange.forEach((text) => text.classList.add("black"));
        setIsBlack(true);
      } else {
        container.current.style.background = "#fff";
        logoChange.classList.remove("black");
        textChange.forEach((text) => text.classList.remove("black"));
        setIsBlack(false);
      }
    }
    document.addEventListener("scroll", checkSroll);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      const scrollColorElems = document.querySelectorAll("[data-bgcolor]");

      // old bg change on scroll (not optimized)

      // scrollColorElems.forEach((colorSection, i) => {
      //   const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
      //   const prevText =
      //     i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

      //   ScrollTrigger.create({
      //     trigger: colorSection,
      //     start: "top 50%",
      //     end: "top 50%",
      //     markers: true,
      //     onEnter: () => {
      //       tl.to(container.current, {
      //         background: colorSection.dataset.bgcolor,
      //         color: colorSection.dataset.textcolor,
      //         overwrite: "auto",
      //       }),
      //         colorSection.dataset.bgcolor.includes("#000")
      //           ? shadowHashtagsChange.classList.add("black")
      //           : shadowHashtagsChange.classList.remove("black"),
      //         colorSection.dataset.bgcolor.includes("#000")
      //           ? logoChange.classList.add("black")
      //           : logoChange.classList.remove("black"),
      //         setIsBlack(
      //           colorSection.dataset.bgcolor.includes("#000") ? true : false
      //         );
      //     },
      //     onLeaveBack: () => {
      //       tl.to(container.current, {
      //         background: prevBg,
      //         color: prevText,
      //         overwrite: "auto",
      //       }),
      //         prevBg.includes("#000")
      //           ? shadowHashtagsChange.classList.add("black")
      //           : shadowHashtagsChange.classList.remove("black"),
      //         prevBg.includes("#000")
      //           ? logoChange.classList.add("black")
      //           : logoChange.classList.remove("black"),
      //         setIsBlack(
      //           prevBg.includes("#000") ? true : false
      //         );
      //     },
      //   });
      // });

      gsap.set(".footer", { yPercent: -50 });

      const uncover = gsap.timeline({ paused: true });

      uncover.to(".footer", { yPercent: 0, ease: "none" });

      ScrollTrigger.create({
        trigger: "section.rules",
        start: "bottom bottom",
        end: "+=50%",
        animation: uncover,
        scrub: true,
      });
    });
    return () => document.removeEventListener("scroll", checkSroll);
  }, []);

  return (
    <>
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        duration: 2,
        easing: function (t) {
          return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        },
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: true,
        touchMultiplier: 2,
      }}
    >
      <div
        className="relative bg-white z-[1] bgChangeContainer"
        ref={container}
      >
      <img src="/YF-logo.png" alt="logo" className="hidden pointer-events-none select-none" draggable="false" />
        <Loader setIsVisible={setIsVisible} isVisible={isVisible} />
        <Nav isBlack={isBlack} />
        <Hero isVisible={isVisible} isBlack={isBlack} />
        <Competition isBlack={isBlack} />
        <WaitingFor isBlack={isBlack} />
        <Rules isBlack={isBlack} />
        {isLaptop ? <></> : <MouseTrail />}
      </div>
      <Footer />
    </ReactLenis>
    
    <Toaster />
    </>
  );
}

export default App;
