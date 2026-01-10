import React, { useState } from "react";
import { useScrollToTop } from "../hooks/useScrollToTop.js";

function VolunteerForm() {
  useScrollToTop();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    duration: "",
    experience: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const programs = [
    "Field Research",
    "Habitat Restoration",
    "Community Engagement",
    "Anti-Poaching Patrols",
  ];

  const durations = ["2 weeks", "3 weeks", "4 weeks", "6 weeks", "8 weeks"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        program: "",
        duration: "",
        experience: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1 px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 md:py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D1D1F] mb-4">
              Volunteer Registration
            </h1>
            <p className="text-base sm:text-lg text-[#86868B]">
              Complete the form below to apply for our volunteer program
            </p>
          </div>

          {submitted && (
            <div className="mb-6 p-4 sm:p-6 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-green-700 font-semibold">
                  Thank you for registering! We will contact you soon.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            {/* Name */}
            <div className="mb-6">
              <label className="block text-sm sm:text-base font-semibold text-[#1D1D1F] mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#007AFF]"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-sm sm:text-base font-semibold text-[#1D1D1F] mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#007AFF]"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone */}
            <div className="mb-6">
              <label className="block text-sm sm:text-base font-semibold text-[#1D1D1F] mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#007AFF]"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Program Selection */}
            <div className="mb-6">
              <label className="block text-sm sm:text-base font-semibold text-[#1D1D1F] mb-2">
                Choose a Program *
              </label>
              <select
                name="program"
                value={formData.program}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#007AFF]"
              >
                <option value="">Select a program</option>
                {programs.map((prog, i) => (
                  <option key={i} value={prog}>
                    {prog}
                  </option>
                ))}
              </select>
            </div>

            {/* Duration */}
            <div className="mb-6">
              <label className="block text-sm sm:text-base font-semibold text-[#1D1D1F] mb-2">
                Preferred Duration *
              </label>
              <select
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#007AFF]"
              >
                <option value="">Select duration</option>
                {durations.map((dur, i) => (
                  <option key={i} value={dur}>
                    {dur}
                  </option>
                ))}
              </select>
            </div>

            {/* Experience */}
            <div className="mb-6">
              <label className="block text-sm sm:text-base font-semibold text-[#1D1D1F] mb-2">
                Relevant Experience *
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#007AFF]"
              >
                <option value="">Select experience level</option>
                <option value="Beginner">Beginner</option>
                <option value="Some experience">Some experience</option>
                <option value="Experienced">Experienced</option>
              </select>
            </div>

            {/* Message */}
            <div className="mb-8">
              <label className="block text-sm sm:text-base font-semibold text-[#1D1D1F] mb-2">
                Why do you want to volunteer? *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#007AFF] resize-none"
                placeholder="Tell us about your passion for wildlife conservation..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#007AFF] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#0051CC] transition-colors text-base sm:text-lg"
            >
              Submit Registration
            </button>

            <p className="text-xs sm:text-sm text-[#86868B] text-center mt-4">
              * All fields are required
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}

export default VolunteerForm;
