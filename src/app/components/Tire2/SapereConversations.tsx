import React from "react";
import image1 from "../../../assets/PHASE3PICTURE/image30.png";
import imageMobile from "../../../assets/PHASE3PICTURE/image30.png"; // apni mobile image path lagao

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

      {/* ================= MOBILE VIEW ================= */}
      <div className="block w-full px-6 py-10 lg:hidden">
        {/* Image */}
        <div className="relative h-[390px] w-full overflow-hidden">
          <img
            src={imageMobile}
            alt="The Sapēre Conversations"
            className="h-full w-full object-cover"
          />

          {/* Image Overlay Text */}
          <div
            className="absolute left-1/2 top-[36%] w-full -translate-x-1/2 px-4 text-center text-white"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            <p className="text-[11px] font-normal uppercase tracking-[0.28em]">
              The Sapere Conversations
            </p>

            <h3 className="mt-[6px] text-[26px] font-normal uppercase leading-[1.15] tracking-[0.1em]">
              A Founders Path
            </h3>

            <p
              className="mt-[6px] text-[9px] font-normal normal-case tracking-[0.04em] text-white/85"
              style={{ fontFamily: `"Inter", sans-serif` }}
            >
              The First Episode of the Sapère Conversations
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mt-8 w-full">
          <h2
            className="text-center text-[34px] font-normal uppercase leading-[1.25] tracking-[0.1em] text-[#0d3a12]"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            THE SAPĒRE
            <br />
            CONVERSATIONS
          </h2>

          <div
            className="mt-6 text-[#111111]"
            style={{ fontFamily: `"Courier New", monospace` }}
          >
            <p className="text-[14px] font-bold uppercase leading-[1.4] tracking-[0.08em]">
              Episode: “The Quiet Power of Positioning”
            </p>

            <p className="mt-4 text-[14px] font-normal leading-[1.45] tracking-[0.01em]">
              With: Elena Moreau — Founder &amp; Creative Director, Atelier No.
              7
            </p>

            <p className="mt-4 text-[14px] font-normal leading-[1.45] tracking-[0.01em]">
              Moderated by: <span className="font-bold">Shahzad Haider</span>
            </p>

            <p className="mt-4 text-[14px] font-normal leading-[1.5] tracking-[0.01em]">
              In this conversation, we explore why positioning is often
              misunderstood in luxury, how strong brands create clarity without
              chasing attention, and why long-term perception matters more than
              short-term visibility.
            </p>

            <p className="mt-5 text-[13px] font-bold leading-[1.4] tracking-[0.02em]">
              Duration: 47 minutes
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col items-center gap-4">
            <button className="h-[46px] w-full max-w-[300px] rounded-full bg-[#302904] text-[16px] font-normal uppercase tracking-[0.01em] text-white transition hover:bg-[#453b08]">
              Play Episode
            </button>

            <a
              href="#"
              className="flex items-center text-[14px] font-bold uppercase tracking-[0.02em] text-[#111111] underline underline-offset-2"
              style={{ fontFamily: `"Arial", sans-serif` }}
            >
              Explore All Episodes
            </a>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP VIEW - UNCHANGED ================= */}
      <div className="mx-auto hidden min-h-[840px] w-full max-w-[1440px] grid-cols-1 px-6 py-12 lg:grid lg:grid-cols-[584px_1fr] lg:gap-[55px] lg:px-[92px] lg:py-[74px]">
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
