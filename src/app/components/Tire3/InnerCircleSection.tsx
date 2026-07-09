import React from "react";

const InnerCircleSection: React.FC = () => {
  return (
    <>
      {/* ================= MOBILE VIEW - UNCHANGED ================= */}
      <section className="relative block w-full overflow-hidden bg-[#F8F7EF] px-7 py-14 text-center text-[#111111] md:hidden">
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

        {/* Heading */}
        <h2
          className="text-[32px] font-normal uppercase leading-[1.25] tracking-[0.1em] text-black"
          style={{ fontFamily: `"The Seasons", Georgia, serif` }}
        >
          THE INNER
          <br />
          CIRCLE
        </h2>

        {/* Text */}
        <div
          className="mx-auto mt-6 max-w-[335px] text-[15px] leading-[1.4] tracking-[0.01em] text-black"
          style={{ fontFamily: `"Inter", Arial, sans-serif` }}
        >
          <p className="font-bold">
            The Inner Circle is a private network exclusively for Sapēre
            members.
          </p>

          <p className="mt-5 font-normal">
            Here, founders, operators, creatives, and entrepreneurs connect
            directly with one another, creating opportunities for collaboration,
            learning, introductions, and long-term relationships.
          </p>
        </div>

        {/* CTA Button */}
        <button
          className="mt-8 flex h-[54px] w-full items-center justify-center rounded-[16px] bg-[#3a3210] text-[14px] font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#4a4014]"
          style={{ fontFamily: `"Inter", Arial, sans-serif` }}
        >
          Join The Inner Circle
        </button>
      </section>

      {/* ================= DESKTOP VIEW ================= */}
      <section className="relative hidden w-full overflow-hidden bg-[#F8F7EF] text-[#111111] md:block">
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

        {/* Main Content */}
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-[1fr_auto] items-center gap-10 px-8 py-16 lg:px-[32px]">
          {/* Left Content */}
          <div className="max-w-[640px]">
            <h2
              className="text-[42px] font-normal uppercase leading-none tracking-[0.06em] text-black"
              style={{ fontFamily: `"The Seasons", Georgia, serif` }}
            >
              THE INNER CIRCLE
            </h2>

            <div
              className="mt-[26px] max-w-[610px] text-[17px] font-normal leading-[1.5] tracking-[0.01em] text-black"
              style={{ fontFamily: `"Inter", Arial, sans-serif` }}
            >
              <p className="font-bold">
                The Inner Circle is a private network exclusively for Sapēre
                members.
              </p>

              <p className="mt-4 text-justify">
                Here, founders, operators, creatives, and entrepreneurs connect
                directly with one another, creating opportunities for
                collaboration, learning, introductions, and long-term
                relationships.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            className="flex h-[54px] w-[420px] shrink-0 items-center justify-center rounded-[14px] bg-[#3a3210] text-[15px] font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#4a4014]"
            style={{ fontFamily: `"Inter", Arial, sans-serif` }}
          >
            Join The Inner Circle
          </button>
        </div>
      </section>
    </>
  );
};

export default InnerCircleSection;
