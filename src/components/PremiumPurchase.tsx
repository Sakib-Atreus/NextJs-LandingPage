import React from "react";

const PremiumPurchase = () => {
  return (
    <div className="text-center">
      <h1 className="text-white text-[26px] lg:text-[36px] md:text[36px] font-semibold leading-tight mb-10">
        Make the wise decision <br /> for your business
      </h1>
      <p className="text-[12px] lg:text-[14px] md:text-[14px]">
        Choose from our affordable 3 packages
      </p>
      <div className="min-h-screen flex items-center justify-center py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl">
          {/* Starter Plan */}
          <div className="bg-[#282A37] text-white rounded-2xl p-6 shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-left">
                Starter Plan
              </h3>
              <p className="text-4xl font-bold mb-2 text-left">
                $29<span className="text-lg">/month</span>
              </p>
              <p className="text-gray-400 mb-6 text-left">
                This package is suitable for teams 1-15 people.
              </p>
              <h4 className="text-lg font-semibold mb-4 text-left">
                What{"'"}s included:
              </h4>
              <ul className="space-y-2 text-gray-300 mb-6 text-left">
                <li>10 GB Dedicated Hosting Free</li>
                <li>Best for Developers, Freelancers</li>
                <li>1 Year Support</li>
              </ul>
            </div>
            <button className="w-full bg-transparent border border-gray-500 text-gray-500 py-2 rounded-lg hover:bg-gray-500 hover:text-white transition mt-6">
              Get Started
            </button>
          </div>

          {/* Basic Plan */}
          <div className="bg-[#282A37] text-white rounded-2xl p-6 shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-left">
                Basic Plan
              </h3>
              <p className="text-4xl font-bold mb-2 text-left">
                $79<span className="text-lg">/month</span>
              </p>
              <p className="text-gray-400 mb-6 text-left">
                This package is suitable for teams 1-50 people.
              </p>
              <h4 className="text-lg font-semibold mb-4 text-left">
                What{"'"}s included:
              </h4>
              <ul className="space-y-2 text-gray-300 mb-6 text-left">
                <li>15 GB Dedicated Hosting Free</li>
                <li>Best for Developers, Freelancers</li>
                <li>5 Year Support</li>
                <li>Free Custom Domain</li>
                <li>Basic Statistics</li>
              </ul>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg hover:opacity-90 transition  mt-6">
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-[#282A37] text-white rounded-2xl p-6 shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-left">
                Premium Plan
              </h3>
              <p className="text-4xl font-bold mb-2 text-left">
                $129<span className="text-lg">/month</span>
              </p>
              <p className="text-gray-400 mb-6 text-left">
                This package is suitable for teams 1-100 people.
              </p>
              <h4 className="text-lg font-semibold mb-4 text-left">
                What{"'"}s included:
              </h4>
              <ul className="space-y-2 text-gray-300 mb-6 text-left">
                <li>20 GB Dedicated Hosting Free</li>
                <li>Best for Developers, Freelancers</li>
                <li>Unlimited Support</li>
                <li>Free Custom Domain</li>
                <li>Full Statistics</li>
              </ul>
            </div>
            <button className="w-full bg-transparent border border-gray-500 text-gray-500 py-2 rounded-lg hover:bg-gray-500 hover:text-white transition  mt-6">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumPurchase;
