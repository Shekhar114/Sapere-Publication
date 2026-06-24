import React from "react";

const InnerCircleSection: React.FC = () => {
  return (
    <section className="relative min-h-[395px] w-full overflow-hidden bg-black px-8 py-[86px] text-[#332c0f]">
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

      {/* Left Content */}
      <div className="max-w-[610px]">
        <h2
          className="text-[38px] font-normal uppercase leading-none tracking-[0.22em] md:text-[40px]"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          THE INNER CIRCLE
        </h2>

        <div
          className="mt-[38px] max-w-[585px] text-[20px] font-extrabold leading-[1.15] tracking-[-0.02em]"
          style={{ fontFamily: `"Inter", Arial, sans-serif` }}
        >
          <p>
            The Inner Circle is a private network exclusively for Sapére
            members.
          </p>

          <p className="mt-[18px]">
            Here, founders, operators, creatives, and entrepreneurs connect
            directly with one another, creating opportunities for collaboration,
            learning, introductions, and long-term relationships.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <button
        className="mt-12 flex h-[52px] w-full items-center justify-center rounded-[9px] bg-[#3a3210] text-[16px] font-medium uppercase tracking-[-0.01em] text-white transition hover:bg-[#4a4014] md:absolute md:bottom-[73px] md:right-8 md:mt-0 md:w-[547px]"
        style={{ fontFamily: `"Inter", Arial, sans-serif` }}
      >
        JOIN THE INNER CIRCLE
      </button>
    </section>
  );
};

export default InnerCircleSection;