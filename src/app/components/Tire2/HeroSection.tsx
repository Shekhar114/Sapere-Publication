import React from "react";
import Logo from "../../../assets/b3a4a46ae6ce743e601e5c2fda9dfb646639c587.png";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#686866] text-white">
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
      <header className="absolute left-0 top-[76px] z-20 grid w-full grid-cols-3 items-center px-[50px]">
        <p
          className="text-left text-[16px] font-normal uppercase leading-none tracking-[0.22em]"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          THE EDITORIAL SYSTEM
        </p>

        <p
          className="text-center text-[16px] font-normal uppercase leading-none tracking-[0.22em]"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          THE SAPERE MEMBERSHIP
        </p>

        <p
          className="text-right text-[16px] font-normal uppercase leading-none tracking-[0.22em]"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          ACCESS SAPERE
        </p>
      </header>

      {/* Main Content */}
      <div className="flex min-h-screen w-full flex-col items-center text-center">
        {/* Logo */}
        <div className="mt-[184px] flex h-[145px] w-[145px] items-center justify-center">
          <img
            src={Logo}
            alt="Ascendo Logo"
            className="h-[135px] w-[135px] object-contain opacity-40 brightness-0"
          />
        </div>

        {/* Heading */}
        <h1
          className="mt-[58px] text-[60px] font-normal uppercase leading-[1.6] tracking-[0.1em]"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          WELCOME TO
          <br />
          ASCENDO
        </h1>

        {/* Sub Text */}
        <p
          className="mt-[28px] text-[20px] font-normal uppercase leading-none tracking-[-0.02em]"
          style={{ fontFamily: `"Inter", sans-serif` }}
        >
          BUILD
        </p>
      </div>
    </section>
  );
};

export default HeroSection;