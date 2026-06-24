import React from "react";

const OfficeHoursSection: React.FC = () => {
  return (
    <section className="min-h-screen w-full bg-black px-8 py-10 text-[#3b310c]">
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

      <div className="mx-auto grid max-w-[1216px] grid-cols-1 gap-4 lg:grid-cols-[600px_1fr]">
        {/* Left Image / Placeholder */}
        <div className="h-[430px] w-full bg-[#d9d9d9] lg:h-[836px]" />

        {/* Right Content */}
        <div className="flex min-h-[836px] flex-col justify-between lg:pl-3">
          <div>
            <h2
              className="mb-8 text-[48px] font-normal uppercase leading-[1.45] tracking-[0.18em] text-[#332b0a] md:text-[62px]"
              style={{ fontFamily: `"The Seasons", serif` }}
            >
              THE OFFICE
              <br />
              HOURS
            </h2>

            <div className="max-w-[605px] text-[18px] font-extrabold leading-[1.28] text-[#3b310c] md:text-[20px]">
              <p className="mb-6">
                Sometimes a single conversation changes everything.
              </p>

              <p className="mb-6">
                Office Hours provide members with direct access to experienced
                founders, operators, and industry experts who understand the
                realities of building within luxury.
              </p>

              <p className="mb-6">
                Whether you are refining your positioning, navigating growth,
                exploring new opportunities, or facing a strategic challenge,
                these private sessions are designed to offer clarity,
                perspective, and informed guidance.
              </p>

              <div className="mb-6">
                <p>How it works</p>
                <ul className="list-disc pl-5">
                  <li>Select a time that suits you</li>
                  <li>Share your topic in advance</li>
                  <li>Join a focused 30-minute conversation</li>
                </ul>
              </div>

              <p className="mb-6">Limited availability each month.</p>

              <p className="mb-6">
                Sessions are available for €100 euro per appointment.
              </p>

              <p>
                Higher-tier members receive priority booking and preferred
                member pricing.
              </p>
            </div>
          </div>

          <button className="mt-8 h-[60px] w-full rounded-[10px] bg-[#3b310c] text-[15px] font-extrabold uppercase text-white transition hover:opacity-90">
            REQUEST A SESSION
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfficeHoursSection;
