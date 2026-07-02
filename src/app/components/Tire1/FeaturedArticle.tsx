import React from "react";
import image1 from "../../../assets/PHASE3PICTURE/image16.png";

const FeaturedArticle = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#302c0e] text-white">
      <div className="relative mx-auto min-h-[740px] w-full max-w-[1386px]">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Cream Back Box */}
          <div className="absolute left-[36px] top-[43px] h-[623px] w-[404px] bg-[#f6f4ea]" />

          {/* Main Image Box */}
          <div className="absolute left-[46px] top-[120px] h-[470px] w-[624px] overflow-hidden">
            <img src={image1} alt="Featured article" className="w-full" />
          </div>

          {/* Right Content */}
          <div className="absolute left-[742px] top-[118px] w-[590px]">
            <h2
              className="text-[62px] font-normal uppercase leading-[1.38] tracking-[0.2em] text-white"
              style={{ fontFamily: "'The Seasons', serif" }}
            >
              FEATURED
              <br />
              ARTICLE
            </h2>

            <div className="mt-[74px]">
              <h3 className="font-sans text-[16px] font-bold uppercase leading-[1.2] tracking-[0.11em] text-white">
                THE NEW RULES OF CAPITAL IN LUXURY
              </h3>

              <p className="mt-[26px] max-w-[610px] font-sans text-[17px] font-normal leading-[1.35] tracking-[0.1em] text-white">
                How early-stage founders are rethinking funding,
                <br />
                valuation, and investor relationships in a post-hype market.
                <br />
                What smart capital structures actually look like in 2026 and
                <br />
                why traditional approaches are failing many new brands.
              </p>

              <p className="mt-[26px] font-sans text-[17px] font-normal italic leading-[1.2] tracking-[0.06em] text-white">
                Read time: 12 min
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <a
            href="#"
            className="absolute left-[780px] top-[617px] inline-flex items-center gap-[8px] font-sans text-[19px] font-normal uppercase leading-none tracking-[0.03em] text-white transition-opacity hover:opacity-70"
          >
            <span className="text-[22px] leading-none">→</span>
            Explore The Sapēre Editorial System
          </a>
        </div>

        {/* Mobile / Tablet Layout */}
        <div className="flex min-h-screen flex-col px-6 py-14 lg:hidden">
          <h2
            className="text-[42px] font-normal uppercase leading-[1.25] tracking-[0.18em] text-white"
            style={{ fontFamily: "'The Seasons', serif" }}
          >
            FEATURED
            <br />
            ARTICLE
          </h2>

          <div className="relative mt-10 h-[390px] w-full">
            <div className="absolute left-0 top-0 h-full w-[75%] bg-[#f6f4ea]" />

            <div className="absolute left-[4%] top-[70px] h-[250px] w-[96%] overflow-hidden">
              <img
                src={image1}
                alt="Featured article"
                className="h-full w-full scale-[1.04] object-cover object-[50%_42%]"
              />
            </div>
          </div>

          <div className="mt-10">
            <h3 className="font-sans text-[17px] font-bold uppercase leading-[1.3] tracking-[0.1em]">
              THE NEW RULES OF CAPITAL IN LUXURY
            </h3>

            <p className="mt-6 font-sans text-[17px] font-normal leading-[1.45] tracking-[0.05em]">
              How early-stage founders are rethinking funding, valuation, and
              investor relationships in a post-hype market. What smart capital
              structures actually look like in 2026 and why traditional
              approaches are failing many new brands.
            </p>

            <p className="mt-8 font-sans text-[17px] font-normal italic">
              Read time: 12 min
            </p>

            <a
              href="#"
              className="mt-10 inline-flex items-center gap-2 font-sans text-[17px] font-normal uppercase leading-[1.3] tracking-[0.03em] text-white"
            >
              <span className="text-[22px] leading-none">→</span>
              Explore The Sapēre Editorial System
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;
