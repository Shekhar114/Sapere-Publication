import React from "react";
import image1 from "../../../assets/PHASE3PICTURE/image18.png";

const EditorialFeatureSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#fbfaf0] text-[#30280b]">
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

      {/* MOBILE VIEW */}
      <div className="flex flex-col md:hidden w-full">
        <div className="w-full h-[500px] overflow-hidden bg-black">
          <img
            src={image1}
            alt="Editorial Feature"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="px-6 py-10 flex flex-col items-center text-center">
          <h2
            className="mb-8 text-[32px] font-normal uppercase tracking-[0.2em]"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            EDITORIAL
            <br />
            FEATURE
          </h2>
          <div
            className="text-[16px] font-bold leading-[1.6] space-y-6"
            style={{ fontFamily: `"Inter", Arial, sans-serif` }}
          >
            <p>Your story. Your perspective. Your voice, amplified.</p>
            <p>
              Twice a year, selected Ēminēō members are featured in Sapēre’s
              publication through carefully curated profiles, in-depth
              conversations, and dedicated business coverage.
            </p>
            <div>
              <p className="uppercase mb-2">How to Apply</p>
              <p>
                If you believe your story or perspective would add value to the
                Sapēre ecosystem, you can submit a proposal.
              </p>
            </div>
            <p>
              Our editorial team will review it personally and get back to you.
            </p>
          </div>
          <button className="mt-10 h-[50px] w-full max-w-[340px] rounded-[6px] bg-[#3a300d] text-[13px] font-medium uppercase text-white">
            Submit Editorial Proposal
          </button>
        </div>
      </div>

      {/* DESKTOP VIEW (Unchanged) */}
      <div className="hidden md:block relative mx-auto min-h-[550px] w-full max-w-[1152px]">
        <div className="absolute left-0 top-0 h-[455px] w-[545px] overflow-hidden bg-black">
          <img
            src={image1}
            alt="Editorial Feature"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute left-[582px] top-[7px] w-[548px]">
          <h2
            className="mb-[34px] text-center text-[34px] font-normal uppercase leading-[1.7] tracking-[0.24em] text-[#30280b]"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            EDITORIAL
            <br />
            FEATURE
          </h2>
          <div
            className="text-[20px] font-bold leading-[1.12] text-[#30280b]"
            style={{ fontFamily: `"Inter", Arial, sans-serif` }}
          >
            <p className="mb-[24px]">
              Your story. Your perspective. Your voice, amplified.
            </p>
            <p className="mb-[24px] max-w-[530px]">
              Twice a year, selected Ēminēō members are featured in Sapēre’s
              publication through carefully curated profiles, in-depth
              conversations, and dedicated business coverage.
            </p>
            <p className="mb-[24px] max-w-[540px]">
              <span className="block uppercase">HOW TO APPLY</span>
              If you believe your story or perspective would add value to the
              Sapēre ecosystem, you can submit a proposal.
            </p>
            <p className="mb-[29px] max-w-[545px]">
              Our editorial team will review it personally and get back to you.
            </p>
            <button className="ml-[93px] h-[47px] w-[354px] rounded-[11px] bg-[#3a300d] text-[14px] font-medium uppercase text-white transition hover:bg-[#4a3d12] ">
              Submit Editorial Proposal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialFeatureSection;
