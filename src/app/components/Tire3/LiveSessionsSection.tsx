import React from "react";
import image1 from "../../../assets/PHASE3PICTURE/image11.png";

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

      {/* ================= MOBILE VIEW - UNCHANGED ================= */}
      <div className="block w-full px-6 pb-14 pt-14 text-center lg:hidden">
        {/* Heading */}
        <h2
          className="text-[26px] font-normal uppercase leading-none tracking-[0.14em] text-[#332d0d]"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          Live Sessions
        </h2>

        {/* Intro Paragraphs */}
        <div className="mx-auto mt-6 max-w-[320px] text-[13px] font-medium leading-[1.45] text-black">
          <p>
            Join upcoming live Council sessions alongside fellow members and
            invited experts.
          </p>

          <p className="mt-4">
            Submit your questions, challenges, or topics in advance for
            consideration.
          </p>

          <p className="mt-4">
            Selected topics may be addressed during the discussion, creating the
            opportunity for direct insight and dialogue.
          </p>
        </div>

        {/* Image Card */}
        <div className="relative mx-auto mt-9 h-[400px] w-full max-w-[330px] overflow-hidden bg-[#999994]">
          <img
            src={image1}
            alt="Capital Strategy in a Shifting Market"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/10" />

          <p
            className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-[22px] font-normal uppercase leading-[1.15] tracking-[0.15em] text-white"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            Coming
            <br />
            Soon
          </p>
        </div>

        {/* Session Details */}
        <div
          className="mt-9 text-[17px] font-normal leading-[1.45] tracking-[-0.02em] text-[#332d0d]"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          <p>
            Upcoming live
            <br />
            sessions
          </p>

          <p className="mt-6">
            Capital strategy in a
            <br />
            shifting market
          </p>

          <p className="mt-6">Date: June 25, 2026</p>
        </div>

        {/* Button */}
        <button className="mt-7 h-[48px] w-full rounded-[8px] bg-[#332d0d] text-[12px] font-semibold uppercase tracking-[0.3em] text-white transition hover:opacity-90">
          Apply For Live Session
        </button>
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden w-full grid-cols-1 lg:grid lg:min-h-[376px] lg:grid-cols-[36.2%_27.2%_36.6%]">
        {/* Left Content */}
        <div className="flex items-center justify-center px-6 pb-10 pt-12 lg:justify-start lg:pb-0 lg:pl-[34px] lg:pr-0 lg:pt-0">
          <div className="w-full max-w-[275px] text-center">
            <p
              className="text-[18px] font-normal leading-[1.45] tracking-[-0.04em] text-[#332d0d]"
              style={{ fontFamily: `"The Seasons", serif` }}
            >
              Upcoming live sessions
            </p>

            <p
              className="mt-[22px] text-[18px] font-normal leading-[1.45] tracking-[-0.04em] text-[#332d0d]"
              style={{ fontFamily: `"The Seasons", serif` }}
            >
              Capital strategy in a shifting market
            </p>

            <p
              className="mt-[20px] text-[18px] font-normal leading-[1.45] tracking-[-0.04em] text-[#332d0d]"
              style={{ fontFamily: `"The Seasons", serif` }}
            >
              Date: June 25, 2026
            </p>

            <button className="mt-[25px] h-[32px] w-full rounded-[7px] bg-[#332d0d] text-[10px] font-semibold uppercase tracking-[0.55em] text-white transition hover:opacity-90">
              Apply For Live Session
            </button>
          </div>
        </div>

        {/* Center Image Card */}
        <div className="flex justify-center px-6 pb-10 lg:px-0 lg:pb-0 lg:pt-[40px]">
          <div className="relative flex h-[608px] w-[395px] items-center justify-center overflow-hidden bg-[#999994]">
            <img
              src={image1}
              alt="Capital Strategy in a Shifting Market"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/10" />

            <p className="absolute left-0 top-[9px] w-full text-center text-[7px] font-medium uppercase tracking-[0.12em] text-white">
              Polpharma Biologics Office Space Designed By Marta Chrapka
            </p>

            <p
              className="relative z-10 text-center text-[28px] font-normal uppercase leading-[1.1] tracking-[0.2em] text-white"
              style={{ fontFamily: `"The Seasons", serif` }}
            >
              Coming
              <br />
              Soon
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex items-center justify-center px-6 pb-12 lg:justify-start lg:pb-0 lg:pl-[61px] lg:pr-8 lg:pt-0">
          <div className="max-w-[240px]">
            <h2
              className="mb-[39px] text-center text-[24px] font-normal uppercase leading-none tracking-[0.08em] text-black lg:text-left"
              style={{ fontFamily: `"The Seasons", serif` }}
            >
              Live Sessions
            </h2>

            <p className="mb-[17px] text-[14px] font-medium leading-[1.4] text-black">
              Join upcoming live Council sessions alongside fellow members and
              invited experts.
            </p>

            <p className="mb-[17px] text-[14px] font-medium leading-[1.4] text-black">
              Submit your questions, challenges, or topics in advance for
              consideration.
            </p>

            <p className="text-[14px] font-medium leading-[1.4] text-black">
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
