import React from "react";

const TalentIncubatorSection: React.FC = () => {
  return (
    <section className="relative min-h-[439px] w-full overflow-hidden bg-[#73736B] text-[#302905]">
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

      {/* Heading */}
      <h2
        className="absolute right-[32px] top-[41px] text-right text-[38px] font-normal uppercase leading-none tracking-[0.22em] text-[#302905]"
        style={{ fontFamily: `"The Seasons", serif` }}
      >
        The Talent Incubator
      </h2>

      {/* Left Content */}
      <div
        className="absolute left-[33px] top-[216px] max-w-[590px] text-[20px] font-normal leading-[1.22] tracking-[-0.02em] text-[#302905]"
        style={{ fontFamily: `"Inter", Arial, sans-serif` }}
      >
        <p className="mb-[15px] font-bold">
          A selective initiative for high-potential founders building <br />
          within luxury.
        </p>

        <p className="mb-[22px]">
          Designed to identify promising businesses at an early stage <br />
          and explore how Sapère may be able to support their growth <br />
          through strategic guidance, introductions, and visibility.
        </p>

        <p>Applications are reviewed on an ongoing basis.</p>
      </div>

      {/* Button */}
      <button
        className="absolute bottom-[38px] left-[675px] flex h-[51px] w-[548px] items-center justify-center rounded-[10px] bg-[#302905] text-[16px] font-medium uppercase tracking-[-0.02em] text-white transition-opacity hover:opacity-90"
        style={{ fontFamily: `"Inter", Arial, sans-serif` }}
      >
        Join The Inner Circle
      </button>
    </section>
  );
};

export default TalentIncubatorSection;