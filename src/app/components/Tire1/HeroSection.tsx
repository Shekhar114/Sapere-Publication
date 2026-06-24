import React from "react";

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

      {/* Top Navigation */}
      <header className="absolute left-0 top-[76px] z-10 flex w-full items-center justify-between px-[50px]">
        <p
          className="text-[16px]/[1.5] font-normal uppercase leading-none tracking-[0.22em]"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          THE EDITORIAL SYSTEM
        </p>

        <p
          className="text-[16px]/[1.5] font-normal uppercase leading-none tracking-[0.22em]"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          THE SAPERE MEMBERSHIP
        </p>

        <p
          className="text-[16px]/[1.5] font-normal uppercase leading-none tracking-[0.22em]"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          ACCESS SAPERE
        </p>
      </header>

      {/* Main Content */}
      <div className="flex min-h-screen w-full flex-col items-center justify-center pt-[45px] text-center">
        <p
          className="mb-[20px] text-[32px] font-normal leading-none tracking-[-0.04em] letter-spacing-[-0.02px]"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          The Future of Luxury
        </p>

        <h1
          className="text-[160px] font-normal uppercase leading-[0.82] tracking-[-0.035em] md:text-[228px] letter-spacing-[-0.02px]"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          SAPERE
        </h1>

        <p
          className="mt-[31px] text-[25px]/[1.2] font-normal uppercase leading-none tracking-[0.09em]"
          style={{ fontFamily: `"Inter", serif` }}
        >
          FOR THOSE WHO DARE TO BUILD IN THE WORLD OF LUXURY.
        </p>

        <button
          className="mt-[130px] border-b border-white pb-[4px] text-[20px] font-normal uppercase leading-none tracking-[0.28em]"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          ENTER SAPERE
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
