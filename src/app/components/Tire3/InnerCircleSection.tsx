import React from "react";

const InnerCircleSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8F7EF] text-[#111111]">
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

      {/* Top Dark Line */}
      <div className="h-[28px] w-full bg-[#39310f]" />

      {/* Main Content */}
      <div className="relative mx-auto min-h-[365px] w-full px-[110px] pt-[78px] pb-[70px]">
        {/* Left Content */}
        <div className="max-w-[1060px]">
          <h2
            className="whitespace-nowrap text-[58px] font-normal uppercase leading-none tracking-[0.30em] text-black"
            style={{ fontFamily: `"The Seasons", Georgia, serif` }}
          >
            THE INNER CIRCLE
          </h2>

          <div
            className="mt-[46px] max-w-[1040px] text-[27px] font-normal leading-[1.48] tracking-[0.24em] text-black"
            style={{ fontFamily: `"Inter", Arial, sans-serif` }}
          >
            <p className="max-w-[1040px]">
              The Inner Circle is a private network exclusively for Sapère
              <br />
              members.
            </p>

            <p className="mt-[40px] max-w-[1120px]">
              Here, founders, operators, creatives, and entrepreneurs
              <br />
              connect directly with one another, creating opportunities for
              <br />
              collaboration, learning, introductions, and long-term
              <br />
              relationships.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          className="absolute right-[118px]  flex h-[70px] w-[700px] items-center justify-center rounded-[16px] bg-[#3a3210] text-[30px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#4a4014]"
          style={{ fontFamily: `"Inter", Arial, sans-serif` }}
        >
          JOIN THE INNER CIRCLE
        </button>
      </div>
    </section>
  );
};

export default InnerCircleSection;
