import React from "react";
import image1 from "../../../assets/PHASE3PICTURE/image15.png";

const WorkshopAccess: React.FC = () => {
  return (
    <section className="relative min-h-screen w-screen overflow-hidden bg-black text-white">
      {/* Font + Page Reset */}
      <style>
        {`
          @font-face {
            font-family: "The Seasons";
            src: url("/fonts/TheSeasons-Regular.ttf") format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }

          html, body, #root {
            margin: 0;
            padding: 0;
            width: 100%;
            overflow-x: hidden;
          }
        `}
      </style>

      {/* Background Image - slightly zoomed to remove left/right edge */}
      <img
        src={image1}
        alt="Workshop Access"
        className="absolute left-1/2 top-1/2 h-[104%] w-[104%] -translate-x-1/2 -translate-y-1/2 object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full flex-col items-center px-4 pb-[90px] text-center">
        {/* Title Box */}
        <div className="mt-[115px] flex w-full max-w-[765px] flex-col items-center border-[4px] px-4 pb-[14px] pt-[2px]">
          <h2
            className="text-[40px] font-normal uppercase leading-none tracking-[0.34em] md:text-[55px]"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            THE
          </h2>

          <h1
            className="mt-[19px] text-[35px] font-normal uppercase leading-none tracking-[0.28em] md:text-[53px]"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            WORKSHOP ACCESS
          </h1>
        </div>

        {/* Workshop Details */}
        <div
          className="mt-[38px] flex max-w-[560px] flex-col items-center text-white"
          style={{ fontFamily: `"Inter", Arial, sans-serif` }}
        >
          <p className="text-[16px] font-bold uppercase leading-none tracking-[0.16em]">
            Upcoming Workshop
          </p>

          <h3 className="mt-[9px] text-[20px] font-extrabold uppercase leading-[1.15] tracking-[0.12em]">
            Brand Positioning in a Competitive Luxury Market
          </h3>

          <div className="mt-[58px] text-[16px] font-normal leading-[1.35]">
            <p>Date: Saturday, June 27, 2026</p>
            <p>Time: 10:00 – 14:00 CET</p>
            <p>Format: In-person Paris + Live Stream</p>
          </div>

          <p className="mt-[20px] max-w-[430px] text-[16px] font-normal leading-[1.28]">
            A half-day intensive workshop focused on building distinct,
            long-term brand positioning in today’s noisy luxury landscape.
          </p>

          <p className="mt-[22px] max-w-[430px] text-[16px] font-normal leading-[1.28]">
            Led by senior strategists with 15+ years of experience scaling
            luxury brands.
          </p>

          <p className="mt-[25px] text-[13px] font-medium italic leading-none">
            Members pricing: Ascendō members: €150
          </p>

          <button
            type="button"
            className="mt-[68px] h-[35px] w-[236px] rounded-full border border-[#b7b75a] bg-[#383911]/75 text-[15px] font-normal uppercase leading-none text-white transition hover:bg-[#4a4b17]"
          >
            Apply for Workshop
          </button>
        </div>

        {/* Bottom Credit */}
        <p
          className="absolute bottom-[48px] right-[73px] max-w-[310px] text-left text-[6px] font-normal uppercase leading-[1.25] tracking-[0.08em] text-white/70"
          style={{ fontFamily: `"Inter", Arial, sans-serif` }}
        >
          Works by Le Corbusier, Pierre Jeanneret and Lucie Rie at the
          Provenance Exhibition in Lech, Austria.
        </p>
      </div>
    </section>
  );
};

export default WorkshopAccess;
