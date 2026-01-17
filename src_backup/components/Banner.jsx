import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import hero from "../assets/hero.png";
const Banner = () => {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="text-center py-10 px-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          We Build <br /> <span className="text-indigo-600">Productive </span>
          Apps
        </h1>
        <p className="max-w-2xl text-sm  mx-auto mt-4 text-gray-600">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-lg hover:opacity-80 transition"
          >
            <FaApple /> App Store
          </a>
          <a
            href="https://play.google.com/store/apps?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-lg hover:opacity-80 transition"
          >
            <FaGooglePlay /> Google Play
          </a>
        </div>
      </div>

      {/* States Section */}
      <div>
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
            Trusted By Millions, Built For You
          </h2>
        <div className="flex justify-center relative">
          <img
            src={hero}
            alt="App Preview"
            className="w-100 md:w-200 drop-shadow-2xl"
          />
        </div>
        <div className="bg-linear-to-r from-purple-700 to-indigo-600 text-white py-14 px-6">
          <h2 className="text-center text-white text-2xl md:text-3xl font-semibold mb-10">
            Trusted By Millions, Built For You
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="text-center">
              <h3 className="text-sm uppercase">Total Downloads</h3>
              <p className="text-4xl font-bold mt-2">29.6M</p>
              <p className="text-sm mt-1 opacity-80">
                21% More Than Last Month
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center">
              <h3 className="text-sm uppercase">Total Reviews</h3>
              <p className="text-4xl font-bold mt-2">906K</p>
              <p className="text-sm mt-1 opacity-80">
                46% More Than Last Month
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center">
              <h3 className="text-sm uppercase">Active Apps</h3>
              <p className="text-4xl font-bold mt-2">132+</p>
              <p className="text-sm mt-1 opacity-80">31 More This Month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
