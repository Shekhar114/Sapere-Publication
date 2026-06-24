import React from "react";

const FoundersEveningsSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#f8f8f6] text-[#2f2910]">
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

      {/* Main Title */}
      <h1
        className="absolute left-[1.2%] top-[12%] text-[clamp(30px,4.8vw,74px)] font-normal uppercase leading-none tracking-[0.34em]"
        style={{ fontFamily: `"The Seasons", serif` }}
      >
        FOUNDERS
      </h1>

      {/* Small Text */}
      <p className="absolute left-[1.2%] top-[28%] max-w-[125px] text-[7px] font-medium leading-[1.15] text-black md:text-[8px]">
        Intimate gatherings where real conversations happen.
      </p>

      {/* Evening Text */}
      <h2
        className="absolute left-[21.5%] top-[26%] text-[clamp(30px,4.7vw,72px)] font-normal uppercase leading-none tracking-[0.34em]"
        style={{ fontFamily: `"The Seasons", serif` }}
      >
        EVENINGS
      </h2>

      {/* CTA Button */}
      <button className="absolute left-0 top-[65%] bg-[#b9b9b9] px-[8px] py-[7px] text-[10px] font-bold uppercase leading-none text-white transition hover:bg-[#9f9f9f]">
        Apply for Founder Evening Invitation. RSVP
      </button>

      {/* Event Card */}
      <div className="absolute right-[5%] top-[20%] w-[190px] rounded-[6px] bg-[#2c2708] px-[15px] py-[14px] text-white shadow-sm md:w-[clamp(190px,30vw,360px)] md:px-[28px] md:py-[26px]">
        <p className="text-center text-[11px] font-bold leading-none md:text-[18px]">
          June 2026
        </p>

        <h3 className="mt-[14px] text-center text-[11px] font-bold leading-tight md:text-[18px]">
          Founder Evening – New York
        </h3>

        <div className="mt-[14px] space-y-[8px] text-[7px] leading-[1.25] md:text-[12px]">
          <p>
            <span className="font-bold">Date:</span> Thursday, June 18, 2026
          </p>

          <p>
            <span className="font-bold">Time:</span> 7:30 PM – 11:00 PM
          </p>

          <p>
            <span className="font-bold">Location:</span> Private venue,
            Manhattan
          </p>

          <p className="pt-[4px]">
            A carefully curated dinner for 12–15 founders and select industry
            voices. Focused on honest dialogue around capital strategy, brand
            positioning, team building, and the realities of building in luxury
            today.
          </p>

          <p>
            These evenings are designed for depth, trust, and long-term
            relationship building — not traditional networking.
          </p>

          <p className="pt-[6px] italic">Pricing: Complimentary for Emmé’s</p>
        </div>
      </div>
    </section>
  );
};

export default FoundersEveningsSection;
