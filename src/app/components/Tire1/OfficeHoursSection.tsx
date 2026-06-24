import React from "react";

const OfficeHoursSection = () => {
  return (
    <section className="w-full bg-white px-6 py-10 md:px-8">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 lg:grid-cols-[599px_1fr] lg:gap-4">
        {/* Left Image Box */}
        <div className="h-[420px] w-full bg-[#d9d9d9] lg:h-[837px]">
          {/* Replace this div with image if needed */}
          {/* 
          <img
            src="/your-image.jpg"
            alt="Office Hours"
            className="h-full w-full object-cover"
          />
          */}
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-start lg:pl-3">
          <h2 className="font-serif text-[61px]/[1.58px] uppercase leading-[1.18] tracking-[0.22em] text-[#3b330b] letter-spacing-[16px]">
            The Office <br /> Hours
          </h2>

          <div className="mt-10 max-w-[590px] text-[20px]/[1.2] font-bold leading-[1.28] text-[#3b330b]">
            <p>Sometimes a single conversation changes everything.</p>

            <p className="mt-6 font-medium">
              Office Hours provide members with direct access to experienced
              founders, operators, and industry experts who understand the
              realities of building within luxury.
            </p>

            <p className="mt-6 font-medium">
              Whether you are refining your positioning, navigating growth,
              exploring new opportunities, or facing a strategic challenge,
              these private sessions are designed to offer clarity, perspective,
              and informed guidance.
            </p>

            <div className="mt-7 font-medium">
              <p>How it works</p>
              <ul className="list-disc pl-5">
                <li>Select a time that suits you</li>
                <li>Share your topic in advance</li>
                <li>Join a focused 30-minute conversation</li>
              </ul>
            </div>

            <p className="mt-7 font-medium">Limited availability each month.</p>

            <p className="mt-7 font-medium">
              Sessions are available for €100 euro per appointment.
            </p>

            <p className="mt-7 font-medium">
              Higher-tier members receive priority booking and preferred member
              pricing.
            </p>
          </div>

          <button className="mt-8 h-[61px] w-full max-w-[602px] rounded-[11px] bg-[#3b330b] text-[16px]/[1.2] font-bold uppercase text-white transition hover:bg-[#4a4010]">
            Request a Session
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfficeHoursSection;
