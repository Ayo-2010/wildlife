import React from "react";
import homesec1 from "../assets/homsec1.jpeg";
import { Link } from "react-router-dom";

function Homesec1() {
  return (
    <div
      style={{ backgroundImage: `url(${homesec1})` }}
      id="About"
      className="relative flex flex-col items-center justify-center gap-6 px-4 sm:gap-8 md:gap-10 md:px-5 lg:px-10 overflow-hidden bg-center bg-cover h-96 sm:h-[450px] md:h-[550px] lg:h-165 scroll-mt-20"
    >
      <div className="absolute w-full h-full bg-gradient-to-b from-black/30 to-black/30"></div>
      <h1 className="z-10 font-bold leading-tight text-white text-2xl sm:text-4xl md:text-[2.45rem] lg:text-7xl text-center">
        Protecting Wildlife, Preserving Our Future
      </h1>
      <p className="z-10 px-4 text-base font-semibold text-center text-white sm:text-lg md:text-xl lg:text-2xl sm:px-6 md:px-20 lg:px-75">
        Join us in safeguarding endangered species and their habitats across the
        globe
      </p>
      <div className="z-10 flex flex-col w-full gap-4 px-4 sm:flex-row sm:gap-5 sm:w-auto sm:justify-center sm:px-0">
        <Link
          to="/#protect"
          className="z-10 bg-[#007AFF] text-white text-sm sm:text-base md:text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-[10px] text-center"
        >
          Explore Our Work
        </Link>
        <Link
          to="/donate"
          className="z-10 border-2 border-white text-white text-sm sm:text-base md:text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-[10px] bg-transparent text-center"
        >
          Support Conservation
        </Link>
      </div>
    </div>
  );
}

export default Homesec1;
