import React from "react";

const CoCreationSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-[#302b12]">
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

      <div className="mx-auto flex min-h-screen w-full max-w-[1280px] items-center justify-center px-4 py-16 lg:px-0 lg:py-0">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[600px_2px_537px] lg:gap-[54px]">
          {/* Left Content */}
          <div className="flex w-full flex-col items-center text-center">
            <h2
              className="mb-[42px] text-[34px] font-normal uppercase leading-[1.85] tracking-[0.26em] md:text-[38px]"
              style={{ fontFamily: `"The Seasons", Georgia, serif` }}
            >
              CO CREATION
              <br />
              OPPORTUNITIES
            </h2>

            <div
              className="max-w-[585px] text-[20px] font-bold leading-[1.18] tracking-[-0.04em]"
              style={{ fontFamily: `"Arial", sans-serif` }}
            >
              <p className="mb-[24px]">
                Sapēre is built with its members, not simply for them.
              </p>

              <p className="mb-[24px]">
                Whether you have an idea, project, partnership opportunity,
                article concept, event proposal, or unique perspective, we
                welcome submissions that could contribute to the ecosystem.
              </p>

              <p>
                Our team reviews each proposal and may invite selected members
                to collaborate on future initiatives.
              </p>
            </div>

            <button
              className="mt-[32px] h-[52px] w-full max-w-[600px] rounded-[10px] bg-[#302b12] text-[16px] font-normal uppercase tracking-[-0.02em] text-white transition hover:bg-[#433c18]"
              style={{ fontFamily: `"Arial", sans-serif` }}
            >
              SUBMIT A&nbsp; CO-CREATION PROPOSAL
            </button>
          </div>

          {/* Center Divider */}
          <div className="hidden h-[619px] w-[2px] bg-[#302b12] lg:block" />

          {/* Right Image Box */}
          <div className="flex w-full justify-center lg:justify-start">
            <div className="h-[320px] w-full max-w-[537px] bg-[#c7c1c1] md:h-[460px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoCreationSection;