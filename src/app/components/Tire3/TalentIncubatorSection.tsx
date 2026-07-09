import React from "react";
import image1 from "../../../assets/PHASE3PICTURE/image29.png";

const TalentIncubatorSection: React.FC = () => {
  return (
    <>
      {/* ================= MOBILE VIEW ================= */}
      <section className="relative block min-h-[540px] w-full overflow-hidden bg-[#73736B] px-6 pb-10 pt-10 text-white md:hidden">
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

        {/* Background Image */}
        <img
          src={image1}
          alt="Talent Incubator"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Dark / Vintage Overlay */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-[#6f674f]/35 mix-blend-multiply" />

        {/* Content */}
        <div className="relative z-10">
          {/* Heading */}
          <h2
            className="text-center text-[30px] font-normal uppercase leading-[1.25] tracking-[0.08em] text-white"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            The Talent
            <br />
            Incubator
          </h2>

          {/* Text */}
          <div
            className="mx-auto mt-6 max-w-[335px] text-[15px] leading-[1.4] tracking-[0.01em] text-white"
            style={{ fontFamily: `"Inter", Arial, sans-serif` }}
          >
            <p className="font-bold">
              A selective initiative for high-potential founders building within
              luxury.
            </p>

            <p className="mt-5 font-normal">
              Designed to identify promising businesses at an early stage and
              explore how Sapēre may be able to support their growth through
              strategic guidance, introductions, and visibility.
            </p>

            <p className="mt-5 font-normal">
              Applications are reviewed on an ongoing basis.
            </p>
          </div>

          {/* Button */}
          <button
            className="mt-8 flex h-[54px] w-full items-center justify-center rounded-[14px] bg-white/25 text-[14px] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-[2px] transition-all duration-300 hover:bg-white/35"
            style={{ fontFamily: `"Inter", Arial, sans-serif` }}
          >
            Apply For Consideration
          </button>
        </div>
      </section>

      {/* ================= DESKTOP VIEW - UNCHANGED ================= */}
      <section className="relative hidden h-[630px] w-full overflow-hidden bg-[#73736B] text-white md:block">
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

        {/* Background Image */}
        <img
          src={image1}
          alt="Talent Incubator"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Dark / Vintage Overlay */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-[#6f674f]/35 mix-blend-multiply" />

        {/* Heading */}
        <h2
          className="absolute left-1/2 top-[66px] z-10 -translate-x-1/2 whitespace-nowrap text-center text-[56px] font-normal uppercase leading-none tracking-[0.28em] text-white"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          The Talent Incubator
        </h2>

        {/* Left Content */}
        <div
          className="absolute left-[164px] top-[260px] z-10 max-w-[820px] text-[21px] font-normal leading-[1.35] tracking-[0.18em] text-white"
          style={{ fontFamily: `"Inter", Arial, sans-serif` }}
        >
          <p className="mb-[34px]">
            A selective initiative for high-potential founders building
            <br />
            within luxury.
          </p>

          <p className="mb-[30px]">
            Designed to identify promising businesses at an early stage
            <br />
            and explore how Sapère may be able to support their growth
            <br />
            through strategic guidance, introductions, and visibility.
          </p>

          <p>Applications are reviewed on an ongoing basis.</p>
        </div>

        {/* Button */}
        <button
          className="absolute bottom-[143px] left-[984px] z-10 flex h-[62px] w-[496px] items-center justify-center rounded-[10px] bg-white/22 px-8 text-[21px] font-medium uppercase tracking-[0.32em] text-white backdrop-blur-[2px] transition-all duration-300 hover:bg-white/30"
          style={{ fontFamily: `"Inter", Arial, sans-serif` }}
        >
          Apply For Consideration
        </button>
      </section>
    </>
  );
};

export default TalentIncubatorSection;
