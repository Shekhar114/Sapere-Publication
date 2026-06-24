import React from "react";
import Logo from "../../../assets/b3a4a46ae6ce743e601e5c2fda9dfb646639c587.png";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#666666] text-white">
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

      {/* Top Navigation */}
      <header
        className="absolute left-0 top-[78px] z-20 grid w-full grid-cols-3 items-center px-[50px]"
        style={{ fontFamily: `"The Seasons", serif` }}
      >
        <p className="text-left text-[16px] font-normal uppercase leading-none tracking-[0.22em]">
          THE EDITORIAL SYSTEM
        </p>

        <p className="text-center text-[16px] font-normal uppercase leading-none tracking-[0.22em]">
          THE SAPERE MEMBERSHIP
        </p>

        <p className="text-right text-[16px] font-normal uppercase leading-none tracking-[0.22em]">
          ACCESS SAPERE
        </p>
      </header>

      {/* Center Logo */}
      <div className="absolute left-1/2 top-[188px] z-10 -translate-x-1/2">
        <img
          src={Logo}
          alt="Logo"
          className="h-[140px] w-[140px] object-contain opacity-35 grayscale"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center pt-[118px] text-center">
        <h1
          className="text-[54px] font-normal uppercase leading-[1.78] tracking-[0.16em] md:text-[62px]"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          WELCOME TO
          <br />
          PROFICIO
        </h1>

        <button
          className="mt-[42px] text-[20px] font-semibold uppercase leading-none tracking-[-0.03em]"
          style={{ fontFamily: `"Inter", sans-serif` }}
        >
          ADVANCE
        </button>
      </div>
    </section>
  );
};

export default HeroSection;