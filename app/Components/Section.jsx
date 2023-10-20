/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from "react";

function LandingSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateImageTransform = () => {
    const image1Transform = `translateX(${-scrollY / 2}px)`;
    const image2Transform = `translateX(${scrollY / 2}px)`;
    return [image1Transform, image2Transform];
  };

  const [image1Transform, image2Transform] = calculateImageTransform();

  return (
    <section className="text-white h-screen w-screen text-center relative overflow-hidden">

      <div className=" pt-44 lg:pt-48">
          <h1 className="text-3xl lg:text-5xl font-normal">
            Si puedes imaginarlo,
          </h1>
          <h1 className="lg:pt-5 text-4xl lg:text-5xl font-extrabold">
            podemos <span className=" title relative z-10">programarlo.</span>
          </h1>
          <h1 className=" text-base lg:text-lg text-terciary pt-12 lg:pt-20 font-medium ">¡Qué esperas para entrar al mundo digital!</h1>
          <a href="#about" className=" relative z-10 top-14 lg:top-20 transform transition-transform duration-300 ease-in-out hover:scale-95 bg-black rounded-xl p-3 lg:p-4 text-white font-semibold text-base lg:text-xl cursor-pointer border-2 ">¡Conoce más!</a>
      </div>

      <div className="absolute top-0 bottom-0 h-full w-full z-0 flex flex-row items-center justify-between">
        <div className="transition-transform duration-300 ease-in-out" style={{ transform: image1Transform }}>
          <img className=" hidden md:flex sm:w-60 2xl:w-72 image-transition" src="/img/fondo-img1.png" alt="Imagen" />
        </div>
        <div className="transition-transform duration-300 ease-in-out" style={{ transform: image2Transform }}>
          <img className=" hidden md:flex sm:w-72 2xl:w-80  image-transition" src="/img/fondo-img2.png" alt="Imagen" />
        </div>
      </div>

    </section>
  );
}

export default LandingSection;