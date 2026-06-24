import React from "react";

const WorkshopAccess: React.FC = () => {
  return (
    <section className="relative flex min-h-screen w-full items-start justify-center overflow-hidden bg-[#5d5d58] px-5 text-white">
      {/* The Seasons Font */}
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

      <div className="mx-auto flex w-full max-w-[760px] flex-col items-center text-center">
        {/* Main Title */}
        <div className="pt-[118px]">
          <h2
            className="text-[48px] font-normal uppercase leading-none tracking-[0.22em] md:text-[62px]"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            THE
          </h2>

          <h1
            className="mt-[34px] text-[40px] font-normal uppercase leading-none tracking-[0.19em] md:text-[62px]"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            WORKSHOP ACCESS
          </h1>
        </div>

        {/* Content */}
        <div
          className="mt-[56px] flex max-w-[520px] flex-col items-center text-[16px] leading-[1.22] text-white"
          style={{ fontFamily: `"Inter", sans-serif` }}
        >
          <p className="font-bold">Upcoming workshop</p>

          <h3 className="mt-[9px] text-[20px] font-bold leading-[1.15]">
            Brand Positioning in a Competitive Luxury Market
          </h3>

          <div className="mt-[41px] text-[16px] font-normal leading-[1.2]">
            <p>Date: Saturday, June 27, 2026</p>
            <p>Time: 10:00 – 14:00 CET</p>
            <p>Format: In-person (Paris) + Live Stream</p>
          </div>

          <p className="mt-[19px] max-w-[470px] text-[16px] font-normal leading-[1.22]">
            A half-day intensive workshop focused on building distinct,
            long-term brand positioning in today’s noisy luxury landscape.
          </p>

          <p className="mt-[19px] max-w-[460px] text-[16px] font-normal leading-[1.22]">
            Led by senior strategists with 15+ years of experience scaling
            luxury brands.
          </p>

          <p className="mt-[34px] text-[13px] font-semibold italic leading-none">
            Members pricing: Ascendō members: €150
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkshopAccess;