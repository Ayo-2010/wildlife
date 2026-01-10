import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import { useScrollToTop } from "../hooks/useScrollToTop.js";

function Volunteer() {
  useScrollToTop();
  const programs = [
    {
      title: "Field Research",
      desc: "Join our researchers in studying endangered species behavior and population dynamics in their natural habitats.",
      duration: "2-4 weeks",
      location: "Africa, Asia, South America",
    },
    {
      title: "Habitat Restoration",
      desc: "Help restore and protect natural habitats through reforestation, wetland restoration, and ecosystem rehabilitation projects.",
      duration: "1-3 weeks",
      location: "Global locations",
    },
    {
      title: "Community Engagement",
      desc: "Work with local communities to promote wildlife conservation awareness and sustainable living practices.",
      duration: "4-8 weeks",
      location: "Africa, Asia",
    },
    {
      title: "Anti-Poaching Patrols",
      desc: "Support ranger teams in protecting wildlife from illegal hunting and poaching activities.",
      duration: "2-6 weeks",
      location: "Africa",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <nav className="sticky top-0 z-40 bg-white shadow-md">
        <Navbar />
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#007AFF] to-[#0051CC] px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl sm:mb-6">
              Make a Direct Impact as a Volunteer
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100">
              Join our passionate team of conservationists working on the front lines of wildlife protection. Every volunteer makes a meaningful difference in preserving our planet's most precious species.
            </p>
          </div>
        </div>

        {/* Volunteer Programs */}
        <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 md:py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D1D1F] text-center mb-8 sm:mb-12">
              Our Volunteer Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {programs.map((program, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] mb-3">
                    {program.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#86868B] mb-4">
                    {program.desc}
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-[#007AFF] font-semibold">
                      Duration: {program.duration}
                    </p>
                    <p className="text-[#007AFF] font-semibold">
                      Location: {program.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Requirements Section */}
        <div className="bg-[#F5F5F7] px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 md:py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D1D1F] text-center mb-8 sm:mb-12">
              Volunteer Requirements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-[#1D1D1F] mb-3">Minimum Age</h3>
                <p className="text-[#86868B]">18 years old (16 with parental consent)</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-[#1D1D1F] mb-3">Physical Fitness</h3>
                <p className="text-[#86868B]">Good health and ability to work in outdoor conditions</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-[#1D1D1F] mb-3">Commitment</h3>
                <p className="text-[#86868B]">Minimum 2-week commitment required</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-[#1D1D1F] mb-3">Language</h3>
                <p className="text-[#86868B]">English proficiency (other languages a plus)</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#007AFF] to-[#0051CC] px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Volunteer?
            </h2>
            <p className="text-base sm:text-lg text-blue-100 mb-8">
              Apply now to join our next volunteer expedition and make a real difference for wildlife conservation.
            </p>
            <Link
              to="/volunteer-form"
              className="inline-block bg-white text-[#007AFF] font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-colors text-base sm:text-lg"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200">
        <Footer />
      </footer>
    </div>
  );
}

export default Volunteer;
