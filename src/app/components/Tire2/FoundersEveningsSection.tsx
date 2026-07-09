import React from "react";
import image1 from "../../../assets/PHASE3PICTURE/image32.png";

const FoundersEveningsSection: React.FC = () => {
  return (
    <>
      {/* ================= MOBILE VIEW ================= */}
      <section className="relative block w-full overflow-hidden bg-black text-white md:hidden">
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

        {/* Background Image */}
        <img
          src={image1}
          alt="Founder Evenings"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 flex flex-col px-6 pb-8 pt-10">
          {/* Title */}
          <h1
            className="text-[30px] font-normal uppercase leading-none tracking-[0.32em]"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            FOUNDERS
          </h1>

          {/* Intro + Evenings row */}
          <div className="mt-4 flex items-start justify-between gap-3">
            <p className="max-w-[140px] text-[11px] font-medium uppercase leading-[1.35] tracking-[0.1em] text-white">
              Intimate gatherings where real conversations happen.
            </p>

            <h2
              className="text-[30px] font-normal uppercase leading-none tracking-[0.15em]"
              style={{ fontFamily: `"The Seasons", serif` }}
            >
              EVENINGS
            </h2>
          </div>

          {/* Event Card */}
          <div className="mt-8 w-full rounded-[22px] bg-white/25 px-6 py-7 text-[#3b3510]">
            <p className="text-center text-[20px] font-bold uppercase tracking-[0.1em]">
              June 2027
            </p>

            <h3 className="mt-5 text-[15px] font-bold uppercase leading-tight tracking-[0.04em]">
              Founder Evening – New York
            </h3>

            <div className="mt-4 space-y-[3px] text-[13px] font-semibold leading-[1.5] tracking-[0.01em]">
              <p>Date: Thursday, June 18, 2026</p>
              <p>Location: Private venue, Manhattan</p>
              <p>Format: Invitation-only dinner</p>
            </div>

            <div className="mt-5 space-y-4 text-[13px] leading-[1.5] tracking-[0.01em]">
              <p>
                A carefully curated dinner for 12–15 founders and select
                industry voices. Focused on honest dialogue around capital
                strategy, brand positioning, team building, and the realities of
                building in luxury today.
              </p>

              <p>
                These evenings are designed for depth, trust, and long-term
                relationship building — not traditional networking.
              </p>
            </div>

            <p className="mt-6 text-[12px] font-bold italic leading-[1.4] tracking-[0.02em]">
              Pricing: Complimentary for Ēmineō
            </p>
          </div>

          {/* CTA Button */}
          <button className="mt-6 h-[52px] w-full bg-white/15 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-white/25">
            Apply for Invitation. RSVP. →
          </button>
        </div>
      </section>

      {/* ================= DESKTOP VIEW - UNCHANGED ================= */}
      <section className="relative hidden min-h-screen w-full overflow-hidden bg-black text-white md:block">
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

        {/* Background Image */}
        <img
          src={image1}
          alt="Founder Evenings"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Extra Left Shadow */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/10" />

        {/* Main Title */}
        <h1
          className="absolute left-[6.2%] top-[13%] z-10 text-[clamp(34px,5vw,58px)] font-normal uppercase leading-none tracking-[0.35em]"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          FOUNDER
        </h1>

        {/* Small Intro Text */}
        <p className="absolute left-[9.7%] top-[26.5%] z-10 max-w-[145px] text-[8px] font-medium uppercase leading-[1.35] tracking-[0.18em] text-white">
          Intimate gatherings where real conversations happen.
        </p>

        {/* Evening Text */}
        <h2
          className="absolute left-[28.5%] top-[26%] z-10 text-[clamp(34px,5vw,58px)] font-normal uppercase leading-none tracking-[0.35em]"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          EVENINGS
        </h2>

        {/* CTA Button */}
        <button className="absolute left-0 top-[60.5%] z-10 bg-white/20 px-[18px] py-[17px] text-[10px] font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-sm transition hover:bg-white/30">
          → Apply for Invitation. RSVP.
        </button>

        {/* Right Event Card */}
        <div className="absolute right-[4%] top-[7%] z-10 w-[32.5%] min-w-[280px] max-w-[365px] rounded-[34px] bg-[#303030]/80 px-[42px] pb-[42px] pt-[48px] text-white shadow-2xl backdrop-blur-sm">
          <p className="text-center text-[18px] font-bold uppercase leading-none tracking-[0.18em]">
            June 2026
          </p>

          <h3 className="mt-[46px] text-left text-[10px] font-bold uppercase leading-tight tracking-[0.16em]">
            Founder Evening – New York
          </h3>

          <div className="mt-[18px] space-y-[3px] text-[9px] leading-[1.35] tracking-[0.11em]">
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
          </div>

          <div className="mt-[34px] space-y-[15px] text-[10px] leading-[1.45] tracking-[0.12em]">
            <p>
              A carefully curated dinner for 12–15 founders and select industry
              voices. Focused on honest dialogue around capital strategy, brand
              positioning, team building, and the realities of building in
              luxury today.
            </p>

            <p>
              These evenings are designed for depth, trust, and long-term
              relationship building — not traditional networking.
            </p>
          </div>

          <div className="mt-[42px] space-y-[8px] text-[7px] italic leading-[1.35] tracking-[0.16em] text-white/90">
            <p>Available to Ascendō, Prōficiō & Éminēō members</p>
            <p>
              Pricing: Complimentary for Prōficiō & Éminēō / Discounted for
              Ascendō
            </p>
          </div>
        </div>

        {/* Bottom Small Text */}
        <p className="absolute bottom-[4%] left-[3%] z-10 text-[5px] uppercase tracking-[0.25em] text-white/70">
          © Sapere Group — A collective network built around founder evenings
        </p>
      </section>
    </>
  );
};

export default FoundersEveningsSection;
