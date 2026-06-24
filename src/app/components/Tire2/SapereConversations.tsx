import React from "react";

const SapereConversations: React.FC = () => {
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

      <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-[57%_43%]">
        {/* Left Media Box */}
        <div className="flex items-end lg:items-start">
          <div className="mt-0 h-[360px] w-full bg-[#c7c2c2] sm:h-[480px] lg:mt-[73px] lg:h-[680px]" />
        </div>

        {/* Right Content */}
        <div className="flex items-center px-6 py-16 sm:px-10 lg:items-start lg:px-4 lg:py-0">
          <div className="w-full max-w-[500px] lg:ml-[0px] lg:mt-[126px]">
            <h2
              className="mb-[42px] text-[40px] font-normal uppercase leading-[1.6] tracking-[0.14em] text-[#302907] sm:text-[48px]"
              style={{ fontFamily: `"The Seasons", serif` }}
            >
              THE SAPERE
              <br />
              CONVERSATIONS
            </h2>

            <div className="space-y-[24px] font-sans text-[20px] font-extrabold leading-[1.18] text-[#3b3209]">
              <p>Episode: “The Quiet Power of Positioning”</p>

              <p>
                With: Elena Moreau — Founder &amp; Creative Director,
                <br />
                Atelier No. 7
              </p>

              <p>Moderated by: Shahzad Haider</p>

              <p className="max-w-[475px]">
                In this conversation, we explore why positioning is often
                misunderstood in luxury, how strong brands create clarity
                without chasing attention, and why long-term perception matters
                more than short-term visibility.
              </p>

              <p className="italic">Duration: 47 minutes</p>
            </div>

            {/* Buttons */}
            <div className="mt-[32px] flex flex-col gap-6 sm:flex-row sm:items-center lg:gap-[38px]">
              <button className="h-[53px] w-full rounded-[12px] bg-[#40360b] text-[16px] font-medium uppercase tracking-[0.02em] text-white transition hover:bg-[#51440d] sm:w-[292px]">
                Play Episode
              </button>

              <a
                href="#"
                className="text-[14px] font-extrabold uppercase text-[#3b3209] underline underline-offset-2"
              >
                Explore All Episodes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SapereConversations;
