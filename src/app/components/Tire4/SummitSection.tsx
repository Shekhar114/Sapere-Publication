import React from "react";

const SummitSection: React.FC = () => {
  return (
    <section className="relative flex min-h-[421px] w-full overflow-hidden border border-[#1f1f1f] bg-[#cfcfcf] text-[#29240f]">
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

      {/* Left Side */}
      <div className="relative flex w-[42%] flex-col justify-between px-[24px] pb-[54px] pt-[70px] max-md:w-full max-md:px-6 max-md:py-10">
        <h1
          className="text-[56px] font-normal uppercase leading-[1.58] tracking-[0.18em] text-[#29240f] max-md:text-[44px]"
          style={{ fontFamily: `"The Seasons", Georgia, serif` }}
        >
          THE
          <br />
          SUMMITS
        </h1>

        <button
          className="absolute bottom-[54px] left-0 h-[48px] w-[389px] rounded-r-[11px] bg-[#332d08] px-[50px] text-left text-[14px] font-medium uppercase tracking-[0.01em] text-white max-md:static max-md:mt-10 max-md:w-full max-md:rounded-[10px] max-md:px-6"
          style={{ fontFamily: `"Inter", Arial, sans-serif` }}
        >
          Apply for Summit Invitation. RSVP.
        </button>
      </div>

      {/* Right Side */}
      <div
        className="flex w-[58%] flex-col px-[36px] pt-[59px] max-md:hidden"
        style={{ fontFamily: `"Inter", Arial, sans-serif` }}
      >
        <div className="max-w-[665px]">
          <h2 className="mb-[39px] text-center text-[24px] font-extrabold leading-none text-[#29240f]">
            Sapère Summit 2026
          </h2>

          <p className="mb-[14px] text-[18px] font-extrabold leading-none text-[#29240f]">
            “Positioning for the Next Decade”
          </p>

          <p className="mb-[23px] text-[18px] font-medium leading-[1.25] text-[#211d0d]">
            Date: October 16–18, 2026
            <br />
            Location: Private estate, Tuscany, Italy
          </p>

          <p className="mb-[28px] max-w-[650px] text-[20px] font-medium leading-[1.13] text-[#211d0d]">
            An intimate, invitation-only gathering for the highest tier of the
            Sapère community. Three days of deep strategic conversations,
            workshops, and relationship building among ambitious founders,
            operators, and selected industry leaders.
          </p>

          <p className="text-[12px] font-bold italic leading-none text-[#211d0d]">
            For Émineō members: Complimentary access + guest invitation option.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SummitSection;
