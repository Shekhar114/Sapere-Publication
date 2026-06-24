import React from "react";

const recordings = [
  "Capital Strategy in a Shifting Market",
  "Capital Strategy in a Shifting Market",
  "Capital Strategy in a Shifting Market",
];

const CouncilRecordingSection: React.FC = () => {
  return (
    <section className="min-h-screen w-full bg-[#F7F6EC] px-[30px] pb-[72px] pt-[78px] text-[#2f2a13]">
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
      <div className="mx-auto max-w-[900px] text-center">
        <h2
          className="text-[36px] font-normal uppercase leading-none tracking-[0.22em] md:text-[48px]"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          The Council Recording
        </h2>

        <div
          className="mx-auto mt-[42px] max-w-[780px] space-y-[22px] text-[18px] font-medium leading-[1.2] md:text-[20px]"
          style={{ fontFamily: `"Inter", sans-serif` }}
        >
          <p>Access the conversations happening inside The Council.</p>

          <p>
            A private mentorship series where founders, operators, investors,
            and industry experts share the realities of building within luxury.
          </p>

          <p>
            As an Ascendō member, you receive access to every recorded session
            within the archive. Live participation is reserved for Proficiō and
            Eminēo members.
          </p>
        </div>
      </div>

      {/* Recordings */}
      <div className="mx-auto mt-[42px] max-w-[1219px]">
        <div className="mb-[18px] flex justify-end">
          <h3
            className="border-b-[2px] border-[#2f2a13] text-[18px] font-bold uppercase leading-none md:text-[20px]"
            style={{ fontFamily: `"Inter", sans-serif` }}
          >
            Available Recordings
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-[16px] md:grid-cols-3">
          {recordings.map((title, index) => (
            <div
              key={index}
              className="relative flex h-[377px] items-end justify-center bg-[#9B9A94] px-8 pb-[34px]"
            >
              <p
                className="max-w-[280px] text-center text-[20px] font-normal leading-[1.55] tracking-[0.18em] text-[#2f2a13] md:text-[22px]"
                style={{ fontFamily: `"The Seasons", serif` }}
              >
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CouncilRecordingSection;
