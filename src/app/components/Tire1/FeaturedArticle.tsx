import React from "react";

const FeaturedArticle = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#302c0e] text-white">
      <div className="relative mx-auto min-h-[835px] max-w-[1280px]">
        {/* Left Image Placeholder Design */}
        <div className="absolute left-[32px] top-[113px] hidden h-[608px] w-[393px] bg-[#e7e7e7] md:block" />

        <div className="absolute left-[133px] top-[193px] hidden h-[440px] w-[511px] bg-[#c7c1c1] md:block" />

        {/* Right Content */}
        <div className="absolute left-[750px] top-[128px] hidden max-w-[430px] md:block">
          <h2 className="font-['The_Seasons'] text-[61px]/[1.58px] font-normal uppercase leading-[1.5] tracking-[10px] text-white letter-spacing-[16px]">
            Featured
            <br />
            Article
          </h2>

          <div className="mt-[28px]">
            <h3 className="text-[20px]/[1.2] font-bold leading-tight">
              The New Rules of Capital in Luxury
            </h3>

            <p className="mt-[24px] text-[20px]/[1.2] font-medium leading-[1.15]">
              How early-stage founders are rethinking funding, valuation, and
              investor relationships in a post-hype market. What smart capital
              structures actually look like in 2026 and why traditional
              approaches are failing many new brands.
            </p>
          </div>

          <p className="mt-[100px] text-[20px]/[1.2] font-bold italic">
            Read time: 12 min
          </p>

          <a
            href="#"
            className="mt-[66px] inline-block text-[20px]/[1.2] font-bold underline underline-offset-[4px]"
          >
            Explore The Sapere Editorial System
          </a>
        </div>

        {/* Mobile Layout */}
        <div className="flex min-h-screen flex-col px-6 py-16 md:hidden">
          <h2 className="font-['The_Seasons'] text-[44px] font-normal uppercase leading-[1.25] tracking-[7px]">
            Featured
            <br />
            Article
          </h2>

          <div className="relative mt-10 h-[360px] w-full">
            <div className="absolute left-0 top-0 h-full w-[72%] bg-[#e7e7e7]" />
            <div className="absolute left-[15%] top-[48px] h-[240px] w-[85%] bg-[#c7c1c1]" />
          </div>

          <div className="mt-10">
            <h3 className="text-[20px] font-bold leading-tight">
              The New Rules of Capital in Luxury
            </h3>

            <p className="mt-5 text-[18px] leading-[1.25]">
              How early-stage founders are rethinking funding, valuation, and
              investor relationships in a post-hype market. What smart capital
              structures actually look like in 2026 and why traditional
              approaches are failing many new brands.
            </p>

            <p className="mt-10 text-[18px] font-bold italic">
              Read time: 12 min
            </p>

            <a
              href="#"
              className="mt-8 inline-block text-[18px] font-bold underline underline-offset-[4px]"
            >
              Explore The Sapere Editorial System
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;
