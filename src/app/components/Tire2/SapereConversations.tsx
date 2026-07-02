import React from "react";
import image1 from "../../../assets/PHASE3PICTURE/image30.png";

const SapereConversations: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden border-[4px] bg-[#fffef4]">
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

      <div className="mx-auto grid min-h-[840px] w-full max-w-[1440px] grid-cols-1 px-6 py-12 lg:grid-cols-[584px_1fr] lg:gap-[55px] lg:px-[92px] lg:py-[74px]">
        {/* Left Image */}
        <div className="relative h-[500px] w-full overflow-hidden lg:h-[708px] lg:w-[584px]">
          <img
            src={image1}
            alt="The Quiet Power of Positioning"
            className="h-full w-full object-cover"
          />

          {/* Image Overlay Text */}
          <div
            className="absolute left-1/2 top-[29%] w-full -translate-x-1/2 text-center text-white"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            <h3 className="text-[34px] font-normal uppercase leading-[1.5] tracking-[0.34em] sm:text-[42px] lg:text-[43px] lg:tracking-[0.42em]">
              THE QUIET
              <br />
              POWER OF
              <br />
              POSITIONING
            </h3>

            <p className="mt-[28px] text-[26px] font-normal uppercase tracking-[0.24em] lg:text-[31px]">
              EP. 1
            </p>
          </div>

          <p className="absolute bottom-[35px] right-[18px] text-[6px] uppercase tracking-[0.03em] text-white/60">
            Skin Club Interior Photo by: David Zarzoso
          </p>
        </div>

        {/* Right Content */}
        <div className="flex items-start pt-10 lg:pt-[16px]">
          <div className="w-full max-w-[590px]">
            <h2
              className="text-[38px] font-normal uppercase leading-[1.45] tracking-[0.14em] text-[#0d3a12] sm:text-[42px] lg:text-[42px]"
              style={{ fontFamily: `"The Seasons", serif` }}
            >
              THE SAPĒRE
              <br />
              CONVERSATIONS
            </h2>

            <div
              className="mt-[34px] text-[#111111]"
              style={{ fontFamily: `"Courier New", monospace` }}
            >
              <p className="max-w-[585px] text-[20px] font-bold uppercase leading-[1.45] tracking-[0.23em]">
                EPISODE: “THE QUIET POWER OF POSITIONING”
              </p>

              <p className="mt-[25px] max-w-[560px] text-[20px] font-normal leading-[1.35] tracking-[0.04em]">
                With: Elena Moreau — Founder &amp; Creative
                <br />
                Director, Atelier No. 7
              </p>

              <p className="mt-[30px] text-[20px] font-normal leading-[1.35] tracking-[0.04em]">
                Moderated by: Shahzad Haider
              </p>

              <p className="mt-[30px] max-w-[575px] text-[20px] font-normal leading-[1.35] tracking-[0.04em]">
                In this conversation, we explore why positioning is often
                misunderstood in luxury, how strong brands create clarity
                without chasing attention, and why long-term perception matters
                more than short-term visibility.
              </p>

              <p className="mt-[28px] text-[18px] italic leading-[1.4] tracking-[0.22em]">
                Duration: 47 minutes
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-[39px] flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-[55px]">
              <button className="h-[42px] w-full rounded-full bg-[#302904] text-[18px] font-normal uppercase tracking-[0.01em] text-white transition hover:bg-[#453b08] sm:w-[292px]">
                Play Episode
              </button>

              <a
                href="#"
                className="flex items-center text-[18px] font-extrabold uppercase tracking-[-0.02em] text-[#111111] no-underline"
                style={{ fontFamily: `"Arial", sans-serif` }}
              >
                <span className="mr-[5px] text-[22px] leading-none">→</span>
                Explore All Episodes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SapereConversations;
