import React from "react";

const EditorialFeatureSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
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

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1215px] items-center">
        {/* Left Image / Placeholder */}
        <div className="absolute left-0 top-[167px] h-[500px] w-[602px] bg-[#c7c2c2]" />

        {/* Right Content */}
        <div className="ml-auto flex w-full max-w-[600px] flex-col pr-[102px]">
          <h2
            className="mb-[43px] text-center text-[40px] font-normal uppercase leading-[1.6] tracking-[0.22em] text-[#30280b]"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            EDITORIAL
            <br />
            FEATURE
          </h2>

          <div
            className="max-w-[565px] text-[20px] font-bold leading-[1.18] text-[#30280b]"
            style={{ fontFamily: `"Inter", Arial, sans-serif` }}
          >
            <p className="mb-[25px]">
              Your story. Your perspective. Your voice, amplified.
            </p>

            <p className="mb-[25px]">
              Twice a year, selected Ēminēō members are featured in Sapēre's
              publication through carefully curated profiles, in-depth
              conversations, and dedicated business coverage.
            </p>

            <p className="mb-[25px]">
              <span className="block">How to Apply</span>
              If you believe your story or perspective would add value to the
              Sapēre ecosystem, you can submit a proposal.
            </p>

            <p className="mb-[33px]">
              Our editorial team will review it personally and get back to you.
            </p>

            <button className="ml-[105px] h-[51px] w-[392px] rounded-[11px] bg-[#3a300d] text-[16px] font-medium uppercase text-white transition hover:bg-[#4a3d12]">
              Submit Editorial Proposal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialFeatureSection;