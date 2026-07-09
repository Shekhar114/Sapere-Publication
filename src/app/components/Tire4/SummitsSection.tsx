import React from "react";

const SummitsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#FCFAF5] px-6 py-16 md:px-16 lg:px-24">
      {/* Font Injection */}
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

      {/* Main Layout Container */}
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 md:flex-row md:gap-16 lg:gap-24 h-full">
        {/* Left Side (Desktop) / Top Side (Mobile) - "THE SUMMITS" */}
        <div className="w-full md:w-[35%] flex-shrink-0 text-center md:text-left">
          <h2
            className="text-[44px] leading-[1.2] tracking-[0.08em] text-[#2c2813] md:text-[64px]"
            style={{ fontFamily: `"The Seasons", Georgia, serif` }}
          >
            THE
            <br />
            SUMMITS
          </h2>
        </div>

        {/* Right Side (Desktop) / Bottom Side (Mobile) - Body Content */}
        <div className="flex w-full flex-col text-center md:text-left text-[#2c2813]">
          <h3 className="mb-6 text-[28px] font-bold text-[#2c2813] md:mb-8 md:text-[32px]">
            Sapēre Summit 2027
          </h3>

          {/* Middle Text Content - explicitly structured to prevent overflow */}
          <div className="flex w-full flex-col text-left">
            <p className="mb-4 text-[18px] font-bold md:text-[20px]">
              “Positioning for the Next Decade”
            </p>

            <div className="mb-6 space-y-1 text-[16px] font-bold md:text-[18px]">
              <p>Date - revealing soon</p>
              <p>Location - revealing soon</p>
            </div>

            <p className="mb-8 text-[16px] leading-[1.5] md:text-[18px] md:leading-[1.6]">
              An intimate gathering for the highest tier of the Sapēre
              community. Day filled with strategic conversations, masterclasses
              and relationship building among ambitious founders and industry
              leaders
            </p>

            <p className="mb-8 text-[14px] font-semibold italic md:text-[15px]">
              For Ēmineō members: Complimentary access + guest invitation
              option.
            </p>

            {/* RSVP Button */}
            <button className="flex w-full items-center justify-center rounded-[8px] bg-[#2c2813] px-6 py-4 text-[13px] font-semibold tracking-wider text-[#FCFAF5] transition-opacity hover:opacity-90 md:w-fit md:px-8">
              <span className="mr-2 text-lg leading-none">→</span>
              APPLY FOR SUMMIT INVITATION. RSVP.
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummitsSection;
