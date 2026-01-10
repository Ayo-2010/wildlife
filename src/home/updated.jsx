import React from "react";
import { Link } from "react-router-dom";

function Updated() {
  return (
    <div className="min-h-fit bg-[#E8F4FD] px-4 sm:px-8 md:px-16 py-8 sm:py-10 md:py-12 flex items-center justify-center">
      <div className="max-w-2xl text-center w-full">
        <h2 className="text-xl sm:text-2xl md:text-[32px] font-semibold text-[#1D1D1F] mb-4 sm:mb-6">
          Stay Updated on Wildlife Conservation
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-3">
          <input
            className="subscribe bg-white text-sm sm:text-base font-normal text-[#1D1D1F] px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg w-full sm:w-96 border-none outline-none"
            placeholder="Enter your email"
            type="email"
          />
          <Link
            to="/explore"
            className="z-10 bg-[#007AFF] text-white text-sm sm:text-base md:text-lg font-medium px-6 sm:px-8 py-2.5 sm:py-3 rounded-[10px] w-full sm:w-auto text-center"
          >
            Subscribe
          </Link>
        </div>
        <p className="text-xs sm:text-sm md:text-[13px] font-normal text-[#86868B]">
          We respect your privacy and will never share your information
        </p>
      </div>
    </div>
  );
}

export default Updated;
