import React from "react";
import image1 from "../../../assets/PHASE3PICTURE/image14.png"; // apni roundtable image path lagao

const RoundtableSection: React.FC = () => {
  return (
    <section className="w-full overflow-hidden bg-[#fbfaf1] text-[#302b12]">
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

      <div className="mx-auto grid min-h-[612px] w-full max-w-[1280px] grid-cols-1 lg:grid-cols-[50%_50%]">
        {/* Left Content */}
        <div className="order-2 flex flex-col bg-[#2e2a14] px-6 pb-14 pt-10 text-[#EAE6DF] sm:px-10 lg:order-none lg:bg-transparent lg:px-0 lg:pb-0 lg:pt-0 lg:text-[#302b12]">
          {/* Title */}
          <div className="text-center lg:ml-[49px] lg:w-[445px]">
            <h1
              className="text-[52px] font-normal uppercase leading-none tracking-[0.22em] sm:text-[60px] lg:text-[62px] mt-6"
              style={{ fontFamily: `"The Seasons", Georgia, serif` }}
            >
              THE
            </h1>

            <h1
              className="mt-8 text-[44px] font-normal uppercase leading-none tracking-[0.22em] sm:text-[54px] lg:mt-10 lg:text-[61px]"
              style={{ fontFamily: `"The Seasons", Georgia, serif` }}
            >
              ROUNDTABLE
            </h1>
          </div>

          {/* Text */}
          <div className="mt-12 max-w-[515px] text-center mx-auto lg:mx-0 lg:ml-[33px] lg:mt-[54px] lg:text-left">
            <h3 className="text-[18px] font-extrabold uppercase leading-[1.2] sm:text-[20px]">
              A MONTHLY GATHERING FOR LUXURY FOUNDERS.
            </h3>

            <p className="mt-6 text-[20px] font-medium leading-[1.2] tracking-[0.01em] sm:text-[22px] lg:text-[22px]">
              The Roundtable is an intimate, structured space where members come
              together to share real challenges, exchange ideas, and support one
              another through honest conversation and collective intelligence.
            </p>

            <p className="mt-6 text-[20px] font-medium leading-[1.2] sm:text-[22px]">
              Available to all Sapēre members.
            </p>

            <p className="mt-8 max-w-[470px] text-[19px] font-extrabold leading-[1.2] sm:text-[20px] mx-auto lg:mx-0">
              We believe real progress happens in the right room, with the right
              people.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="order-1 flex items-start justify-center px-0 pb-0 lg:order-none lg:block lg:px-0 lg:pb-0">
          <div className="relative h-[520px] w-full overflow-hidden sm:h-[560px] lg:ml-[2px] lg:mt-[85px] lg:h-[440px] lg:w-[606px]">
            <img
              src={image1}
              alt="Roundtable meeting space"
              className="h-full w-full object-cover"
            />
            {/* Caption overlay - mobile only */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 pb-3 pt-10 lg:hidden">
              <p className="text-[10px] font-medium uppercase leading-[1.4] tracking-[0.08em] text-white">
                A meeting space designed by Stiff + Trevillion
                <br />
                for The Office Group (TOG) and Fora
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoundtableSection;
