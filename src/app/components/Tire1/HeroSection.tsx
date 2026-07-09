import React from "react";
import image1 from "../../../assets/PHASE3PICTURE/image10.jpeg";
import Logo from "../../../assets/b3a4a46ae6ce743e601e5c2fda9dfb646639c587.png";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050505] text-white">
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

      {/* Mobile Background Only */}
      <img
        src={image1}
        alt="Sapere Mobile Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Mobile Dark Overlay Only */}
      <div className="absolute inset-0 bg-black/20 lg:hidden" />

      {/* Top Navigation */}
      <header className="absolute left-0 top-[78px] z-10 flex w-full flex-col items-center justify-start gap-[20px] px-6 text-center lg:top-[76px] lg:flex-row lg:items-center lg:justify-between lg:px-[50px]">
        <p
          className="text-[16px]/[1.4] font-normal uppercase leading-none tracking-[0.04em] lg:text-[16px]/[1.5] lg:tracking-[0.22em]"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          THE EDITORIAL SYSTEM
        </p>

        <p
          className="text-[16px]/[1.4] font-normal uppercase leading-none tracking-[0.04em] lg:text-[16px]/[1.5] lg:tracking-[0.22em]"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          THE SAPĒRE MEMBERSHIP
        </p>

        <p
          className="text-[16px]/[1.4] font-normal uppercase leading-none tracking-[0.04em] lg:text-[16px]/[1.5] lg:tracking-[0.22em]"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          ACCESS SAPĒRE
        </p>
      </header>

      {/* Mobile Logo Only */}
      <div className="absolute left-1/2 top-[230px] z-10 flex -translate-x-1/2 justify-center lg:hidden">
        <img
          src={Logo}
          alt="Sapere Logo"
          className="h-[88px] w-[88px] object-contain opacity-90"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-start px-6 pt-[356px] text-center lg:justify-center lg:px-0 lg:pt-[45px]">
        <p
          className="mb-[50px] text-[31px]/[1.2] font-bold leading-none tracking-[-0.02em] lg:mb-[40px] lg:text-[32px] lg:tracking-[-0.04em] letter-spacing-[-.02px]"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          The Future of Luxury
        </p>

        <h1
          className="text-[228px]/[24px] letter-spacing-[4px] font-normal uppercase leading-[0.82] tracking-[-0.04em] min-[350px]:text-[94px] sm:text-[112px] lg:text-[228px] lg:tracking-[-0.035em]"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          SAPĒRE
        </h1>

        <p
          className="mt-[31px] max-w-[350px] text-[17px]/[1.45] font-normal uppercase leading-[1.45] tracking-[0.32em] lg:max-w-none lg:text-[25px]/[1.2] lg:leading-none lg:tracking-[0.09em] letter-spacing-[33%]"
          style={{ fontFamily: `"Inter", serif` }}
        >
          FOR THOSE WHO DARE TO BUILD IN THE WORLD OF LUXURY.
        </p>

        <button
          className="mt-[52px] min-w-[180px] border-b-2 border-white pb-[18px] text-center text-[20px]/[1.2] letter-spacing-[4px] font-bold uppercase leading-none tracking-[0.02em] lg:mt-[130px] lg:min-w-0 lg:border-b lg:pb-[4px] lg:tracking-[0.28em]"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          ENTER SAPĒRE
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
