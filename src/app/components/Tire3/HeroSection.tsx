import React from "react";

import image1 from "../../../assets/PHASE3PICTURE/image33.png";
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
              alt="Proficio Logo"
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
            TO PROFICIO
          </h1>

          {/* Sub Text */}
          <p
            className="mt-[24px] text-[13px] font-normal uppercase leading-none tracking-[0.4em]"
            style={{ fontFamily: `"Inter", sans-serif` }}
          >
            I ADVANCE
          </p>
        </div>
      </section>

      {/* DESKTOP VIEW - UNCHANGED */}
      <section className="relative hidden min-h-screen w-full overflow-hidden bg-black text-white md:block">
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
    </>
  );
};

export default HeroSection;
