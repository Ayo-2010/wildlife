import React from "react";
import impactoo from "../assets/impactoo.jpeg";

function Impact() {
  return (
    <div
      id="conservation"
      className="min-h-fit bg-[#F0F9F4] px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-10 md:py-10 lg:py-16 scroll-mt-20"
    >
      <div className="grid items-center grid-cols-1 gap-6 mx-auto md:grid-cols-2 sm:gap-8 md:gap-10 lg:gap-16 max-w-7xl">
        <div>
          <img
            className="w-full h-[450px] object-cover rounded-xl"
            src={impactoo}
            alt=""
          />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1D1D1F] mb-6 sm:mb-8">
            Our Conservation Impact
          </h2>
          <div className="mb-8 space-y-4">
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-[#007AFF] flex-shrink-0 mt-1"
                fill="currentColor"
                height="1em"
                stroke="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
              </svg>
              <span className="text-sm sm:text-base md:text-lg font-medium text-[#1D1D1F]">
                Restored 2M acres of habitat
              </span>
            </div>
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-[#007AFF] flex-shrink-0 mt-1"
                fill="currentColor"
                height="1em"
                stroke="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
              </svg>
              <span className="text-sm sm:text-base md:text-lg font-medium text-[#1D1D1F]">
                Rescued 10,000+ animals
              </span>
            </div>
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-[#007AFF] flex-shrink-0 mt-1"
                fill="currentColor"
                height="1em"
                stroke="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
              </svg>
              <span className="text-sm sm:text-base md:text-lg font-medium text-[#1D1D1F]">
                Trained 5,000 local rangers
              </span>
            </div>
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-[#007AFF] flex-shrink-0 mt-1"
                fill="currentColor"
                height="1em"
                stroke="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
              </svg>
              <span className="text-sm sm:text-base md:text-lg font-medium text-[#1D1D1F]">
                Reduced poaching by 60%
              </span>
            </div>
          </div>
          <button className="bg-[#007AFF] text-white text-sm sm:text-base font-medium px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-lg">
            View Full Report
          </button>
        </div>
      </div>
    </div>
  );
}

export default Impact;
