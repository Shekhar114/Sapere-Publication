import React from "react";
// Ensure this path points to your actual image asset
import image1 from "../../../assets/PHASE3PICTURE/image31.png";

const OfficeHoursSection: React.FC = () => {
  return (
    <section className="w-full bg-[#FAF9F4]">
      {/* Custom Font Definition */}
      <style>
        {`
          @font-face {
            font-family: "The Seasons";
            src: url("/fonts/TheSeasons-Regular.ttf") format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
        `}
      </style>

      {/* Main Container - Flex layout ensures equal height columns on desktop */}
      <div className="mx-auto flex max-w-[1440px] flex-col lg:flex-row lg:items-stretch">
        {/* Left Side: Image Container */}
        <div className="relative w-full p-6 lg:w-1/2 lg:p-12 lg:pr-8">
          <div className="relative h-[400px] w-full overflow-hidden sm:h-[500px] lg:h-full lg:min-h-[750px]">
            <img
              src={image1}
              alt="Scene at Kanon Café"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Image Caption */}
            <p className="absolute bottom-5 left-5 text-[8px] font-medium tracking-[0.1em] text-white/70 uppercase">
              A scene at Kanon Café during the Gentse Feesten
            </p>
          </div>
        </div>

        {/* Right Side: Content Container */}
        <div className="flex w-full flex-col justify-center px-6 pb-16 pt-8 lg:w-1/2 lg:py-16 lg:pl-8 lg:pr-16">
          {/* Heading */}
          <h2
            className="text-[40px] font-normal uppercase leading-[1.1] tracking-[0.2em] text-[#2C2B1D] sm:text-[48px] lg:text-[56px]"
            style={{ fontFamily: `"The Seasons", Georgia, serif` }}
          >
            PRIVATE <br />
            STRATEGY HOUR
          </h2>

          {/* Body Content */}
          <div className="mt-10 flex flex-col gap-6 text-[14px] leading-[1.6] text-[#333120] sm:text-[15px] lg:mt-12 lg:gap-7">
            <p className="text-[16px] font-bold sm:text-[17px]">
              Sometimes a single conversation changes everything.
            </p>

            <p>
              Private strategy hour provides members with direct access to
              experienced founders, operators, and industry experts who
              understand the realities of building within luxury.
            </p>

            <p>
              Whether you are refining your positioning, navigating growth,
              exploring new opportunities, or facing a strategic challenge,
              these private sessions are designed to offer clarity, perspective,
              and informed guidance.
            </p>

            {/* List Section */}
            <div>
              <p className="mb-1">How it works</p>
              <ul className="flex flex-col gap-1 pl-4">
                <li className="list-disc">Select a time that suits you</li>
                <li className="list-disc">Share your topic in advance</li>
                <li className="list-disc">
                  Join a focused 1 hour conversation with a industry
                  professional
                </li>
              </ul>
            </div>

            {/* Pricing / Details Section */}
            <div className="flex flex-col gap-4">
              <p>Limited availability each month.</p>
              <p>Sessions are available for €1500 euro per appointment.</p>
              <p>
                Higher-tier members receive priority booking and preferred
                member pricing.
              </p>
            </div>
          </div>

          {/* Call to Action Button */}
          <button className="mt-10 flex w-full items-center justify-center rounded bg-[#333120] py-[18px] text-[12px] font-semibold tracking-[0.1em] text-white transition-colors duration-300 hover:bg-[#1E1D13] lg:max-w-[400px]">
            REQUEST A SESSION
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfficeHoursSection;
