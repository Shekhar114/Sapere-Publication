import React from "react";

import image1 from "../../../assets/PHASE3PICTURE/image33.png";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
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

      {/* Background Image */}
      <img
        src={image1}
        alt="Hero Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Top Navigation */}
      <header
        className="absolute left-1/2 top-[52px] z-20 grid w-full max-w-[990px] -translate-x-1/2 grid-cols-3 items-center"
        style={{ fontFamily: `"The Seasons", serif` }}
      >
        <p className="text-left text-[16px] font-normal uppercase leading-none tracking-[-0.02em]">
          HOME
        </p>

        <p className="text-center text-[16px] font-normal uppercase leading-none tracking-[-0.02em]">
          THE SAPÈRE MEMBERSHIP
        </p>

        <p className="text-right text-[16px] font-normal uppercase leading-none tracking-[-0.02em]">
          THE EDITORIAL SYSTEM
        </p>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center text-center">
        <h1
          className="mt-[58px] text-[54px] font-normal uppercase leading-[1.42] tracking-[0.02em] sm:text-[64px] md:text-[72px]"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          WELCOME TO
          <br />
          PROFICIO
        </h1>

        <p
          className="mt-[38px] text-[16px] font-normal uppercase leading-none tracking-[0.52em]"
          style={{ fontFamily: `"Inter", sans-serif` }}
        >
          I ADVANCE
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
