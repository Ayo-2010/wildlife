import React from "react";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import { useScrollToTop } from "../hooks/useScrollToTop.js";

function Educate() {
  useScrollToTop();
  const resources = [
    {
      title: "Wildlife Documentaries",
      desc: "High-quality educational videos about endangered species and their habitats",
      icon: "📹",
    },
    {
      title: "Conservation Guides",
      desc: "Comprehensive guides on how to support wildlife protection in your community",
      icon: "📚",
    },
    {
      title: "Species Profiles",
      desc: "In-depth information about endangered animals and conservation efforts",
      icon: "🦁",
    },
    {
      title: "Research Papers",
      desc: "Scientific publications and case studies from our conservation projects",
      icon: "📊",
    },
  ];

  const initiatives = [
    {
      title: "School Programs",
      desc: "Educational workshops and programs for students of all ages to learn about wildlife conservation.",
    },
    {
      title: "Community Events",
      desc: "Public awareness campaigns and educational events in local communities worldwide.",
    },
    {
      title: "Online Courses",
      desc: "Free and paid online courses on wildlife biology, conservation, and environmental sustainability.",
    },
    {
      title: "Webinars",
      desc: "Live expert discussions and Q&A sessions with conservationists and biologists.",
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
              Learn About Wildlife Conservation
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100">
              Education is key to conservation. Access our comprehensive resources and learn how you can make a difference for endangered species and their habitats.
            </p>
          </div>
        </div>

        {/* Learning Resources */}
        <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 md:py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D1D1F] text-center mb-8 sm:mb-12">
              Educational Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, i) => (
                <div
                  key={i}
                  className="bg-[#F5F5F7] rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{resource.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1D1D1F] mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#86868B]">
                    {resource.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Educational Initiatives */}
        <div className="bg-[#F9F9FB] px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 md:py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D1D1F] text-center mb-8 sm:mb-12">
              Our Education Initiatives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {initiatives.map((initiative, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-[#1D1D1F] mb-3">
                    {initiative.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#86868B]">
                    {initiative.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 md:py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D1D1F] text-center mb-8 sm:mb-12">
              Education Impact
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-[#F5F5F7] rounded-xl">
                <h3 className="text-3xl sm:text-4xl font-bold text-[#007AFF] mb-2">
                  100K+
                </h3>
                <p className="text-sm sm:text-base text-[#86868B]">
                  Students educated annually
                </p>
              </div>
              <div className="text-center p-6 bg-[#F5F5F7] rounded-xl">
                <h3 className="text-3xl sm:text-4xl font-bold text-[#007AFF] mb-2">
                  50+
                </h3>
                <p className="text-sm sm:text-base text-[#86868B]">
                  Countries with programs
                </p>
              </div>
              <div className="text-center p-6 bg-[#F5F5F7] rounded-xl">
                <h3 className="text-3xl sm:text-4xl font-bold text-[#007AFF] mb-2">
                  1000+
                </h3>
                <p className="text-sm sm:text-base text-[#86868B]">
                  Training programs delivered
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#007AFF] to-[#0051CC] px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Start Learning Today
            </h2>
            <p className="text-base sm:text-lg text-blue-100 mb-8">
              Access our free educational resources and become a wildlife conservation advocate.
            </p>
            <button className="bg-white text-[#007AFF] font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-colors text-base sm:text-lg">
              Explore Resources
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200">
        <Footer />
      </footer>
    </div>
  );
}

export default Educate;
