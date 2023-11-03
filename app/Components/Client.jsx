/* eslint-disable @next/next/no-img-element */
import React from "react";
import "../globals.css";

export default function Client() {
  return (
    <div className="">
      <div className="my-auto mx-24">
        <h1 className=" font-extrabold text-5xl text-center mb-[15px]">
          Trabajamos para
        </h1>
        <div className="border-black border-b-2 w-[16rem] mx-auto"></div>
        <div className="my-auto ">
          <div className="slider-container">
            <img
              className="container-logo"
              src="img/plantare-logo.jpg"
              alt="Logo 1"
            />
            <img
              className="container-logo"
              src="img/logo-klazia.jpg"
              alt="Logo 2"
            />
            <img
              className="container-logo"
              src="img/palaciodelaseo-logo.png"
              alt="Logo 4"
            />
            <img
              className="container-logo"
              src="img/logo-platzi.png"
              alt="Logo 5"
            />
            <img
              className="container-logo"
              src="img/logo-univalle.png"
              alt="Logo 3"
            />
            <img
              className="container-logo"
              src="img/logo-sena.jpg"
              alt="Logo 6"
            />
            <img
              className="container-logo"
              src="img/logo-ps.png"
              alt="Logo 7"
            />
            <img
              className="container-logo"
              src="img/logo-xbox.png"
              alt="Logo 8"
            />
            <img
              className="container-logo"
              src="img/logo-nintendo.png"
              alt="Logo 9"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
