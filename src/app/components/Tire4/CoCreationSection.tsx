import React from "react";
import image1 from "../../../assets/PHASE3PICTURE/image19.png";

const CoCreationSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#fbfaf0] text-[#302b12]">
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

      <div className="mx-auto flex w-full max-w-[1123px] flex-col items-center px-6 py-12 lg:min-h-[665px] lg:flex-row lg:px-0 lg:py-0">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[590px_2px_496px] lg:gap-[31px]">
          {/* Mobile-first layout: Image on top, Content on bottom */}
          {/* Right Image (appears first on mobile due to flex-col-reverse/order) */}
          <div className="order-1 flex w-full justify-center lg:order-3 lg:justify-start">
            <img
              src={image1}
              alt="Co creation opportunity"
              className="h-[400px] w-full max-w-[496px] object-cover md:h-[416px]"
            />
          </div>

          {/* Center Divider */}
          <div className="hidden h-[558px] w-[2px] bg-[#302b12] lg:order-2 lg:block" />

          {/* Left Content */}
          <div className="order-3 flex w-full flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
            <h2
              className="mb-8 text-[32px] font-normal uppercase leading-[1.2] tracking-[0.1em] text-[#171407] md:text-[38px]"
              style={{ fontFamily: `"The Seasons", Georgia, serif` }}
            >
              CO CREATION
              <br />
              OPPORTUNITIES
            </h2>

            <div
              className="max-w-[560px] text-[16px] leading-[1.6] tracking-normal text-[#302b12] md:text-[18px]"
              style={{ fontFamily: `"Arial", sans-serif` }}
            >
              <p className="mb-6">
                Sapēre is built with its members, not simply for them.
              </p>

              <p className="mb-6">
                Whether you have an idea, project, partnership opportunity,
                article concept, event proposal, or unique perspective, we
                welcome submissions that could contribute to the ecosystem.
              </p>

              <p className="mb-8">
                Our team reviews each proposal and may invite selected members
                to collaborate on future initiatives.
              </p>
            </div>

            <button
              className="h-[52px] w-full max-w-[340px] rounded-[6px] bg-[#302b12] text-[13px] font-normal uppercase tracking-[0.1em] text-white transition hover:bg-[#433c18]"
              style={{ fontFamily: `"Arial", sans-serif` }}
            >
              SUBMIT A CO-CREATION PROPOSAL
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoCreationSection;
