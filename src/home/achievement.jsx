import React from "react";
import { Link } from "react-router-dom";

function Achievement() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-16 lg:gap-30 justify-center min-h-fit bg-[#F5F5F7] items-center py-8 sm:py-10 md:py-5 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="flex flex-col items-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#007AFF] mb-2">
          500+
        </h3>
        <p className="text-xs sm:text-sm md:text-base font-normal text-[#86868B] text-center">
          Species Protected
        </p>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#007AFF] mb-2">
          50+
        </h3>
        <p className="text-xs sm:text-sm md:text-base font-normal text-[#86868B] text-center">
          Countries Worldwide
        </p>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#007AFF] mb-2">
          15
        </h3>
        <p className="text-xs sm:text-sm md:text-base font-normal text-[#86868B] text-center">
          Protected Areas
        </p>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#007AFF] mb-2">
          10+
        </h3>
        <p className="text-xs sm:text-sm md:text-base font-normal text-[#86868B] text-center">
          Years of Impact
        </p>
      </div>
    </div>
  );
}

export default Achievement;
