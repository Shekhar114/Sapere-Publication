import React from "react";

import image1 from "../../../assets/PHASE3PICTURE/image35.png";
import Logo from "../../../assets/b3a4a46ae6ce743e601e5c2fda9dfb646639c587.png";

const HeroSection: React.FC = () => {
  return (
    <>
      {/* MOBILE VIEW */}
      <section
        className="relative flex min-h-screen w-full flex-col overflow-hidden bg-cover bg-center bg-no-repeat text-white md:hidden"
        style={{
          backgroundImage: `url(${image1})`,
        }}
      >
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

        {/* Dark overlay */}
        <div className="absolute inset-0 z-0 bg-black/30" />

        {/* Top Navigation */}
        <header className="relative z-20 grid w-full grid-cols-3 items-start gap-2 px-4 pt-6">
          <p
            className="text-left text-[10px] font-normal uppercase leading-tight tracking-[0.03em]"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            HOME
          </p>

          <p
            className="text-center text-[10px] font-normal uppercase leading-tight tracking-[0.03em]"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            THE SAPĒRE
            <br />
            MEMBERSHIP
          </p>

          <p
            className="text-right text-[10px] font-normal uppercase leading-tight tracking-[0.03em]"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            THE EDITORIAL
            <br />
            SYSTEM
          </p>
        </header>

        {/* Main Content */}
        <div className="relative z-10 flex w-full flex-1 flex-col items-center px-6 text-center">
          {/* Logo */}
          <div className="mt-[260px] flex h-[110px] w-[110px] items-center justify-center">
            <img
              src={Logo}
              alt="Ascendo Logo"
              className="h-full w-full object-contain opacity-90 brightness-0 invert"
            />
          </div>

          {/* Heading */}
          <h1
            className="mt-[30px] text-[38px] font-normal uppercase leading-[1.25] tracking-[0.02em]"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            YOUR ACCESS
            <br />
            TO ASCENDO
          </h1>

          {/* Sub Text */}
          <p
            className="mt-[24px] text-[13px] font-normal uppercase leading-none tracking-[0.4em]"
            style={{ fontFamily: `"Inter", sans-serif` }}
          >
            I BUILD
          </p>
        </div>
      </section>

      {/* DESKTOP VIEW */}
      <section
        className="relative hidden min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat text-white md:block"
        style={{
          backgroundImage: `url(${image1})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 z-0 bg-black/25" />

        {/* Top Navigation */}
        <header className="absolute left-0 top-[55px] z-20 grid w-full grid-cols-3 items-center px-[250px]">
          <p
            className="text-center text-[16px] font-normal uppercase leading-none tracking-[0.04em]"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            HOME
          </p>

          <p
            className="text-center text-[16px] font-normal uppercase leading-none tracking-[0.04em]"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            THE SAPERE MEMBERSHIP
          </p>

          <p
            className="text-center text-[16px] font-normal uppercase leading-none tracking-[0.04em]"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            THE EDITORIAL SYSTEM
          </p>
        </header>

        {/* Main Content */}
        <div className="relative z-10 flex min-h-screen w-full flex-col items-center text-center">
          {/* Logo */}
          <div className="mt-[225px] flex h-[85px] w-[85px] items-center justify-center">
            <img
              src={Logo}
              alt="Ascendo Logo"
              className="h-[82px] w-[82px] object-contain opacity-80 brightness-0 invert"
            />
          </div>

          {/* Heading */}
          <h1
            className="mt-[55px] text-[78px] font-normal uppercase leading-[1.34] tracking-[0.02em]"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            WELCOME TO
            <br />
            ASCENDŌ
          </h1>

          {/* Sub Text */}
          <p
            className="mt-[38px] text-[15px] font-normal uppercase leading-none tracking-[0.45em]"
            style={{ fontFamily: `"Inter", sans-serif` }}
          >
            I BUILD
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
