import React from "react";

const SummitsSection: React.FC = () => {
  return (
    <section className="relative flex min-h-[438px] w-full items-center overflow-hidden bg-[#74746d] px-[32px] text-[#2f2a12]">
      {/* Font */}
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

      <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-[38%_1fr]">
        {/* Left Heading */}
        <div className="pt-2">
          <h2
            className="text-[58px] font-normal uppercase leading-[1.65] tracking-[0.16em] sm:text-[64px]"
            style={{
              fontFamily: `"The Seasons", Georgia, serif`,
            }}
          >
            <span className="block">THE</span>
            <span className="block">SUMMITS</span>
          </h2>
        </div>

        {/* Right Content */}
        <div className="max-w-[585px] md:pt-[6px]">
          <p
            className="mb-[16px] text-[20px] font-bold leading-[1.2]"
            style={{
              fontFamily: `"Inter", Arial, sans-serif`,
            }}
          >
            A selective initiative for high-potential founders building
            <br className="hidden md:block" />
            within luxury.
          </p>

          <p
            className="mb-[24px] text-[20px] font-medium leading-[1.2]"
            style={{
              fontFamily: `"Inter", Arial, sans-serif`,
            }}
          >
            Designed to identify promising businesses at an early stage
            <br className="hidden md:block" />
            and explore how Sapēre may be able to support their growth
            <br className="hidden md:block" />
            through strategic guidance, introductions, and visibility.
          </p>

          <p
            className="text-[20px] font-medium leading-[1.2]"
            style={{
              fontFamily: `"Inter", Arial, sans-serif`,
            }}
          >
            Applications are reviewed on an ongoing basis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SummitsSection;
