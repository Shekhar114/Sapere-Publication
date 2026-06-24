import React from "react";

const LiveSessionsSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#fbfaf0] text-[#332d0d]">
      {/* Font */}
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

      <div className="grid min-h-[660px] w-full grid-cols-1 lg:grid-cols-[34.6%_30.8%_34.6%]">
        {/* Left Content */}
        <div className="flex items-start justify-center px-8 pt-[165px] lg:justify-start">
          <div className="w-full max-w-[395px] text-center">
            <p
              className="text-[26px] leading-[1.75] tracking-[0.22em] text-[#332d0d]"
              style={{ fontFamily: `"The Seasons", serif` }}
            >
              Upcoming live sessions
              <br />
              Capital strategy in a
              <br />
              shifting market
              <br />
              Date: June 25, 2026
            </p>

            <button className="mt-[22px] h-[60px] w-full rounded-[10px] bg-[#332d0d] text-[16px] font-extrabold uppercase text-white transition hover:opacity-90">
              Apply For Live Session
            </button>
          </div>
        </div>

        {/* Center Card */}
        <div className="relative flex min-h-[520px] items-end justify-center bg-[#999994] px-8 pb-[36px] lg:min-h-[592px]">
          <p
            className="text-center text-[22px] leading-[1.45] tracking-[0.28em] text-[#332d0d]"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            Capital Strategy in a
            <br />
            Shifting Market
          </p>
        </div>

        {/* Right Content */}
        <div className="flex items-start px-8 pt-[185px] lg:pl-[16px] lg:pr-[50px]">
          <div className="max-w-[390px]">
            <h2 className="mb-[24px] text-[26px] font-extrabold uppercase leading-none text-[#332d0d]">
              Live Sessions
            </h2>

            <p className="mb-[18px] text-[16px] font-medium leading-[1.15] text-[#332d0d]">
              Join upcoming live Council sessions alongside fellow members and
              invited experts.
            </p>

            <p className="mb-[18px] text-[16px] font-medium leading-[1.15] text-[#332d0d]">
              Submit your questions, challenges, or topics in advance for
              consideration.
            </p>

            <p className="text-[16px] font-medium leading-[1.15] text-[#332d0d]">
              Selected topics may be addressed during the discussion, creating
              the opportunity for direct insight and dialogue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveSessionsSection;
