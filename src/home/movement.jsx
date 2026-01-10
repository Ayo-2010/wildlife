import React from "react";
import { Link } from "react-router-dom";

function Movement() {
  return (
    <div
      id="movement"
      className="px-4 py-8 min-h-fit sm:px-6 md:px-10 lg:px-16 sm:py-10 md:py-10 lg:py-16 scroll-mt-20"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D1D1F] text-center mb-6 sm:mb-8 md:mb-10 lg:mb-16">
        Join the Movement
      </h2>
      <div className="grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 md:gap-6 lg:gap-8 max-w-7xl">
        <div className="bg-[#FAFAFA] rounded-2xl px-4 sm:px-5 py-6 sm:py-8 md:py-10 md:px-5 lg:p-10 text-center">
          <svg
            className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 text-[#007AFF] mx-auto mb-4 sm:mb-6"
            fill="currentColor"
            height="1em"
            stroke="currentColor"
            strokeWidth="0"
            viewBox="0 0 640 512"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z"></path>
          </svg>
          <h3 className="text-lg sm:text-xl md:text-[26px] font-semibold text-[#1D1D1F] mb-3 sm:mb-4">
            Volunteer
          </h3>
          <p className="text-sm sm:text-base font-normal text-[#6E6E73] mb-4 sm:mb-6">
            Join our field programs and make a direct impact on wildlife
            conservation efforts worldwide
          </p>
          <Link
            to="/volunteer"
            className="text-sm sm:text-base font-medium text-[#007AFF] hover:underline"
          >
            Learn More
          </Link>
        </div>
        <div className="bg-[#FAFAFA] rounded-2xl px-4 sm:px-5 py-6 sm:py-8 md:py-10 md:px-5 lg:p-10 text-center">
          <svg
            className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 text-[#007AFF] mx-auto mb-4 sm:mb-6"
            fill="currentColor"
            height="1em"
            stroke="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
          </svg>
          <h3 className="text-lg sm:text-xl md:text-[26px] font-semibold text-[#1D1D1F] mb-3 sm:mb-4">
            Donate
          </h3>
          <p className="text-sm sm:text-base font-normal text-[#6E6E73] mb-4 sm:mb-6">
            Your contribution helps fund critical conservation projects and
            protect endangered species
          </p>
          <Link
            to="/donate"
            className="text-sm sm:text-base font-medium text-[#007AFF] hover:underline"
          >
            Learn More
          </Link>
        </div>
        <div className="bg-[#FAFAFA] rounded-2xl px-4 sm:px-5 py-6 sm:py-8 md:py-10 md:px-5 lg:p-10 text-center">
          <svg
            className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 text-[#007AFF] mx-auto mb-4 sm:mb-6"
            fill="currentColor"
            height="1em"
            stroke="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path>
          </svg>
          <h3 className="text-lg sm:text-xl md:text-[26px] font-semibold text-[#1D1D1F] mb-3 sm:mb-4">
            Educate
          </h3>
          <p className="text-sm sm:text-base font-normal text-[#6E6E73] mb-4 sm:mb-6">
            Learn about wildlife conservation and share knowledge to inspire
            others to take action
          </p>
          <Link
            to="/educate"
            className="text-sm sm:text-base font-medium text-[#007AFF] hover:underline"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Movement;
