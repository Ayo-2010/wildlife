import React, { useState } from "react";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";

function Donate() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedFrequency, setSelectedFrequency] = useState("once");

  const donationAmounts = [10, 25, 50, 100, 250, 500];

  const impactAreas = [
    {
      title: "Habitat Protection",
      desc: "Preserving and restoring natural habitats for endangered species",
      amount: "$50",
    },
    {
      title: "Anti-Poaching Operations",
      desc: "Funding ranger patrols and protection programs",
      amount: "$100",
    },
    {
      title: "Community Education",
      desc: "Teaching locals about wildlife conservation",
      amount: "$75",
    },
    {
      title: "Research & Monitoring",
      desc: "Tracking species populations and health",
      amount: "$150",
    },
    {
      title: "Wildlife Rescue",
      desc: "Emergency rescue and rehabilitation programs",
      amount: "$200",
    },
    {
      title: "Legal & Advocacy",
      desc: "Supporting policy changes for wildlife protection",
      amount: "$125",
    },
  ];

  const faqs = [
    {
      q: "How is my donation used?",
      a: "95% of donations go directly to conservation programs, with only 5% for administrative costs.",
    },
    {
      q: "Is my donation tax-deductible?",
      a: "Yes, we are a registered 501(c)(3) nonprofit. You will receive a tax receipt via email.",
    },
    {
      q: "Can I donate anonymously?",
      a: "Yes, you can opt to remain anonymous during the checkout process.",
    },
    {
      q: "Do you accept donations in other currencies?",
      a: "Yes, we accept donations in multiple currencies through our payment partner.",
    },
    {
      q: "Can I cancel a recurring donation?",
      a: "Yes, you can cancel or modify your donation settings anytime from your account.",
    },
  ];

  const [donationComplete, setDonationComplete] = useState(false);

  const handleDonate = () => {
    if (selectedAmount || customAmount) {
      setDonationComplete(true);
      setTimeout(() => setDonationComplete(false), 5000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <nav className="sticky top-0 z-40 bg-white shadow-sm">
        <Navbar />
      </nav>

      {/* Thank You Message */}
      {donationComplete && (
        <div className="fixed top-32 left-1/2 z-50 w-full max-w-md px-4 transform -translate-x-1/2 sm:px-6">
          <div className="bg-green-500 text-white px-6 sm:px-8 py-4 rounded-lg shadow-lg animate-bounce">
            <div className="flex items-center gap-3">
              <svg
                className="w-6 h-6 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="font-semibold">Thank You!</p>
                <p className="text-sm">Your donation has been received.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#007AFF] to-[#0051CC] px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl sm:mb-6">
              Make a Difference Today
            </h1>
            <p className="text-base text-blue-100 sm:text-lg md:text-xl">
              Your generous donation directly supports wildlife conservation
              efforts around the world. Together, we can protect endangered
              species and preserve natural habitats for future generations.
            </p>
          </div>
        </div>

        {/* Donation Options */}
        <div className="px-4 py-12 sm:px-6 md:px-10 lg:px-16 sm:py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D1D1F] text-center mb-8 sm:mb-10">
              Select Your Donation Amount
            </h2>

            {/* Frequency Toggle */}
            <div className="flex justify-center gap-4 mb-8 sm:mb-10">
              <button
                onClick={() => setSelectedFrequency("once")}
                className={`px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all ${
                  selectedFrequency === "once"
                    ? "bg-[#007AFF] text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                One-Time
              </button>
              <button
                onClick={() => setSelectedFrequency("monthly")}
                className={`px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all ${
                  selectedFrequency === "monthly"
                    ? "bg-[#007AFF] text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                Monthly
              </button>
            </div>

            {/* Preset Amounts */}
            <div className="grid grid-cols-2 gap-3 mb-8 sm:grid-cols-3 sm:gap-4">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount("");
                  }}
                  className={`py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold text-base sm:text-lg transition-all ${
                    selectedAmount === amount
                      ? "bg-[#007AFF] text-white ring-2 ring-[#007AFF] ring-offset-2"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-8">
              <label className="block text-sm sm:text-base font-semibold text-[#1D1D1F] mb-3">
                Or enter a custom amount:
              </label>
              <div className="flex gap-2 sm:gap-3">
                <div className="relative flex-1">
                  <span className="absolute text-lg font-semibold text-gray-400 transform -translate-y-1/2 left-4 top-1/2">
                    $
                  </span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    placeholder="Enter amount"
                    className="w-full pl-8 pr-4 py-3 sm:py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#007AFF] text-base"
                  />
                </div>
                <button
                  onClick={handleDonate}
                  className="bg-[#007AFF] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#0051CC] transition-colors text-sm sm:text-base"
                >
                  Donate Now
                </button>
              </div>
            </div>

            {/* Donation Summary */}
            <div className="bg-[#F5F5F7] rounded-xl p-6 sm:p-8 text-center">
              <p className="mb-2 text-sm text-gray-600 sm:text-base">
                Your donation:
              </p>
              <h3 className="text-3xl sm:text-4xl font-bold text-[#007AFF] mb-4">
                ${selectedAmount || customAmount || "0"}
              </h3>
              <p className="text-sm text-gray-600 sm:text-base">
                {selectedFrequency === "monthly" && "Monthly donation"}
                {selectedFrequency === "once" && "One-time donation"}
              </p>
            </div>
          </div>
        </div>

        {/* Impact Areas */}
        <div className="bg-[#F9F9FB] px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D1D1F] text-center mb-8 sm:mb-12">
              Where Your Donation Goes
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 sm:gap-6">
              {impactAreas.map((area, i) => (
                <div
                  key={i}
                  className="p-5 transition-shadow bg-white shadow-sm rounded-xl sm:p-6 hover:shadow-lg"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-[#1D1D1F] mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#86868B] mb-4">
                    {area.desc}
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-[#007AFF]">
                    {area.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust & Safety */}
        <div className="px-4 py-12 sm:px-6 md:px-10 lg:px-16 sm:py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D1D1F] text-center mb-8 sm:mb-12">
              Your Donation is Secure
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
              <div className="text-center p-6 sm:p-8 bg-[#F9F9FB] rounded-xl">
                <div className="inline-block p-3 sm:p-4 bg-[#E8F4FD] rounded-lg mb-4">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-[#007AFF]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#1D1D1F] mb-2 text-base sm:text-lg">
                  256-Bit Encryption
                </h3>
                <p className="text-sm sm:text-base text-[#86868B]">
                  Bank-level security protects your payment information
                </p>
              </div>
              <div className="text-center p-6 sm:p-8 bg-[#F9F9FB] rounded-xl">
                <div className="inline-block p-3 sm:p-4 bg-[#E8F4FD] rounded-lg mb-4">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-[#007AFF]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 1 1 0 000 2H3a1 1 0 00-1 1v10a1 1 0 001 1h14a1 1 0 001-1V6a1 1 0 00-1-1h3a1 1 0 000-2 2 2 0 01-2-2V3a1 1 0 10-2 0v2H8V3a1 1 0 10-2 0v2H4a2 2 0 00-2 2zm2 3a1 1 0 100 2h10a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-[#1D1D1F] mb-2 text-base sm:text-lg">
                  Tax Receipt
                </h3>
                <p className="text-sm sm:text-base text-[#86868B]">
                  Instant tax receipt for your charitable contribution
                </p>
              </div>
              <div className="text-center p-6 sm:p-8 bg-[#F9F9FB] rounded-xl">
                <div className="inline-block p-3 sm:p-4 bg-[#E8F4FD] rounded-lg mb-4">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-[#007AFF]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8.16 2.75a.75.75 0 00-1.32 0l-3.5 9.01H2.75a.75.75 0 000 1.5h11.5a.75.75 0 000-1.5h-.59L8.16 2.75z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-[#1D1D1F] mb-2 text-base sm:text-lg">
                  Privacy Protected
                </h3>
                <p className="text-sm sm:text-base text-[#86868B]">
                  Your information is never shared with third parties
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-[#F9F9FB] px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D1D1F] text-center mb-8 sm:mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="bg-white rounded-lg shadow-sm group"
                >
                  <summary className="flex cursor-pointer items-center justify-between p-5 sm:p-6 font-semibold text-[#1D1D1F] hover:bg-gray-50 text-base sm:text-lg">
                    {faq.q}
                    <svg
                      className="w-5 h-5 transition-transform sm:h-6 sm:w-6 group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </summary>
                  <p className="p-5 sm:p-6 pt-0 text-sm sm:text-base text-[#86868B]">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#007AFF] to-[#0051CC] px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl sm:mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="mb-8 text-base text-blue-100 sm:text-lg">
              Start your donation today and join thousands of conservation
              supporters worldwide.
            </p>
            <button
              onClick={handleDonate}
              className="bg-white text-[#007AFF] font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-colors text-base sm:text-lg"
            >
              Donate Now
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

export default Donate;
