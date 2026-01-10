import React from "react";
import elephant from "../assets/elephant.jfif";
import tiger from "../assets/tiger.jpeg";
import turtle from "../assets/turtles.jfif";
import gorilla from "../assets/gorillas.jpeg";
import polar from "../assets/bears.jfif";
import bird from "../assets/birds.jfif";

function Protect() {
  const animals = [
    {
      title: "African Elephants",
      desc: "Protecting the largest land mammals from poaching and habitat loss",
      img: elephant,
    },
    {
      title: "Bengal Tigers",
      desc: "Conserving the majestic predators in their natural habitats",
      img: tiger,
    },
    {
      title: "Sea Turtles",
      desc: "Safeguarding marine life and coastal ecosystems",
      img: turtle,
    },
    {
      title: "Mountain Gorillas",
      desc: "Preserving endangered primates in African mountains",
      img: gorilla,
    },
    {
      title: "Polar Bears",
      desc: "Fighting climate change to protect Arctic wildlife",
      img: polar,
    },
    {
      title: "Tropical Birds",
      desc: "Conserving biodiversity in rainforest ecosystems",
      img: bird,
    },
  ];

  return (
    <div
      id="protect"
      className="px-4 py-8 bg-white min-h-fit sm:px-6 md:px-10 lg:px-16 sm:py-10 md:py-10 lg:py-16 scroll-mt-20"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D1D1F] text-center mb-6 sm:mb-8 md:mb-10 lg:mb-16">
        Wildlife We protect
      </h1>
      <div className="grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 md:gap-6 max-w-7xl">
        {animals.map((a, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
          >
            <img
              alt={a.title}
              className="w-full aspect-[4/3] object-cover"
              src={a.img}
            />
            <div className="p-3 bg-white sm:p-4 md:p-4 lg:p-5 min-h-fit">
              <h3 className="text-base sm:text-lg md:text-[22px] font-semibold text-[#1D1D1F] mb-2">
                {a.title}
              </h3>
              <p className="text-sm sm:text-[15px] font-normal text-[#86868B]">
                {a.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Protect;
