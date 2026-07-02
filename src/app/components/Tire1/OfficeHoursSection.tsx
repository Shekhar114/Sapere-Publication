import React from "react";
import image1 from "../../../assets/PHASE3PICTURE/image31.png";

const OfficeHoursSection: React.FC = () => {
  return (
    <section className="w-full overflow-hidden bg-[#fbfaf1]">
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

      <div className="relative mx-auto max-w-[1280px] px-6 py-10 lg:h-[861px] lg:px-0 lg:py-0">
        {/* Left Image */}
        <div className="relative mx-auto h-[560px] w-full max-w-[569px] overflow-hidden lg:absolute lg:left-[72px] lg:top-[51px] lg:h-[759px] lg:w-[569px] lg:max-w-none">
          <img
            src={image1}
            alt="Office Hours"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Heading */}
        <h2
          className="mt-8 whitespace-nowrap text-center text-[34px] font-normal uppercase leading-none tracking-[0.34em] text-[#123d18] sm:text-[40px] lg:absolute lg:left-[490px] lg:top-[95px] lg:mt-0 lg:text-left lg:text-[45px] lg:tracking-[0.36em]"
          style={{ fontFamily: `"The Seasons", Georgia, serif` }}
        >
          <span className="lg:text-white">THE</span>
          <span className="ml-[24px] text-[#123d18] lg:ml-[42px]">
            OFFICE HOURS
          </span>
        </h2>

        {/* Content */}
        <div className="mx-auto mt-8 max-w-[455px] text-[12px] leading-[1.2] tracking-[0.01em] text-[#0b0b0b] lg:absolute lg:left-[692px] lg:top-[185px] lg:mt-0 lg:w-[455px] lg:max-w-none">
          <p className="font-semibold">
            Sometimes a single conversation changes everything.
          </p>

          <p className="mt-[25px] font-medium">
            Office Hours provide members with direct access to experienced
            founders, operators, and industry experts who understand the
            realities of building within luxury.
          </p>

          <p className="mt-[24px] font-medium">
            Whether you are refining your positioning, navigating growth,
            exploring new opportunities, or facing a strategic challenge, these
            private sessions are designed to offer clarity, perspective, and
            informed guidance.
          </p>

          <div className="mt-[24px] font-medium">
            <p>How it works</p>
            <ul className="list-disc pl-[14px]">
              <li>Select a time that suits you</li>
              <li>Share your topic in advance</li>
              <li>Join a focused 30-minute conversation</li>
            </ul>
          </div>

          <div className="mt-[48px] font-medium">
            <p>Limited availability each month.</p>
            <p>Sessions are available for €100 euro per appointment.</p>
            <p>
              Higher-tier members receive priority booking and preferred member
              pricing.
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="mx-auto mt-8 flex h-[52px] w-full max-w-[455px] items-center justify-center rounded-[9px] bg-[#37300b] text-[11px] font-semibold uppercase tracking-[0.02em] text-white transition hover:bg-[#463d0f] lg:absolute lg:left-[702px] lg:top-[636px] lg:mt-0 lg:w-[455px] lg:max-w-none">
          Request a Session
        </button>
      </div>
    </section>
  );
};

export default OfficeHoursSection;
