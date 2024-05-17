import { useAnimate } from "framer-motion";
import React, { forwardRef, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MouseTrail = () => {
  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={[
        "/imgs/1.webp",
        "/imgs/2.webp",
        "/imgs/3.webp",
        "/imgs/4.webp",
        "/imgs/5.webp",
        "/imgs/6.webp",
        "/imgs/7.webp",
        "/imgs/8.webp",
        "/imgs/9.webp",
        "/imgs/10.webp",
        "/imgs/11.webp",
        "/imgs/12.webp",
        "/imgs/13.webp",
        "/imgs/14.webp",
        "/imgs/15.webp",
        "/imgs/16.webp",
      ]}
    />
  );
};

const MouseImageTrail = ({
  // List of image sources
  images,
  // Will render a new image every X pixels between mouse moves
  renderImageBuffer,
  // images will be rotated at a random number between zero and rotationRange,
  // alternating between a positive and negative rotation
  rotationRange,
}) => {
  const [scope, animate] = useAnimate();

  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);
  const container = scope.current?.parentNode

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // mouseTrail opacity change
      tl.fromTo(
        scope.current,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: container,
            start: "13% center",
            end: "+=10%",
            scrub: true
          },
        },
        0
      );
    });
  }, []);

  useEffect(() => {
    document.body.addEventListener('mousemove', handleMouseMove)

    return () => document.body.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleMouseMove = (e) => {
    const { pageY, pageX } = e;

    const distance = calculateDistance(
      pageX,
      pageY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = pageX;
      lastRenderPosition.current.y = pageY;

      renderNextImage();
    }
  };

  const calculateDistance = (x1, y1, x2, y2) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    // Using the Pythagorean theorem to calculate the distance
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector(selector);

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange - rotationRange / 2;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.3) ${
            imageIndex % 2
              ? `rotate(${rotation}deg)`
              : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2
              ? `rotate(${rotation}deg)`
              : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: "linear", duration: 0.5, delay: 5 }
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <div ref={scope} className="absolute h-full w-full inset-0 overflow-hidden z-[0]">
      {images.map((img, index) => (
        <img
          className="pointer-events-none absolute left-0 top-0 h-48 w-auto rounded-xl border-2 border-black bg-neutral-900 object-cover opacity-0 -z-[1]"
          src={img}
          draggable="false"
          alt={`Mouse move image ${index}`}
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
}


export default MouseTrail;
