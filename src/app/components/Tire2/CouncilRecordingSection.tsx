import React from "react";

import image1 from "../../../assets/PHASE3PICTURE/image11.png";
import image2 from "../../../assets/PHASE3PICTURE/image21.png";
import image3 from "../../../assets/PHASE3PICTURE/image20.png";

type RecordingItem = {
  image: string;
  caption: string;
  title: string;
};

const recordings: RecordingItem[] = [
  {
    image: image1,
    caption: "POLPHARMA BIOLOGICS OFFICE SPACE DESIGNED BY MARTA CHRAPKA",
    title: "Capital Strategy in a Shifting Market",
  },
  {
    image: image2,
    caption:
      "A CUSTOM 22REBUILT STONE DESK AND VINTAGE AKARI LAMP AT THE PERCEPTION OFFICE SPACE DESIGNED BY 22RE",
    title: "The Realities of Brand Positioning",
  },
  {
    image: image3,
    caption:
      "INTERIOR OF THE JACQUEMUS HEADQUARTERS IN PARIS, DESIGNED BY OMA, PHOTO BY JULIEN THOMAS HAMON",
    title: "Navigating Power Structures in Luxury",
  },
];

const CouncilRecordingSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F7F6EC] px-[27px] pb-[57px] pt-[58px] text-[#302c0e]">
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

      {/* Top Content */}
      <div className="mx-auto max-w-[930px] text-center">
        <h2
          className="text-[34px] font-normal uppercase leading-none tracking-[0.22em] text-[#302c0e] sm:text-[42px] md:text-[48px]"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          The Council Recording
        </h2>

        <div
          className="mx-auto mt-[42px] max-w-[790px] space-y-[22px] text-[18px] font-semibold leading-[1.14] text-[#302c0e] md:text-[20px]"
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
      <div className="mx-auto mt-[43px] max-w-[1204px]">
        <div className="mb-[16px] flex justify-center">
          <h3
            className="border-b-2 border-[#302c0e] text-center text-[19px] font-extrabold uppercase leading-none text-[#302c0e] md:text-[20px]"
            style={{ fontFamily: `"Inter", sans-serif` }}
          >
            Available Recordings
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-[15px] md:grid-cols-3">
          {recordings.map((item, index) => (
            <div
              key={index}
              className="relative h-[512px] w-full overflow-hidden bg-[#9b9a94]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
              />

              {/* Dark overlay for readable white text */}
              <div className="absolute inset-0 bg-black/10" />

              {/* Top Caption */}
              <p
                className="absolute left-1/2 top-[16px] w-[78%] -translate-x-1/2 text-center text-[7px] font-normal uppercase leading-[1.25] tracking-[0.04em] text-white/90"
                style={{ fontFamily: `"Inter", sans-serif` }}
              >
                {item.caption}
              </p>

              {/* Bottom Title */}
              <div className="absolute bottom-[34px] left-0 right-0 flex justify-center px-8">
                <h4
                  className="max-w-[300px] text-center text-[21px] font-normal uppercase leading-[1.45] tracking-[0.18em] text-white md:text-[22px]"
                  style={{ fontFamily: `"The Seasons", serif` }}
                >
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-[40px] flex justify-center">
          <button
            className="h-[58px] rounded-[11px] bg-[#302c0e] px-[32px] text-[15px] font-extrabold uppercase tracking-[-0.01em] text-white transition hover:opacity-90"
            style={{ fontFamily: `"Inter", sans-serif` }}
          >
            Browse All Recordings
          </button>
        </div>
      </div>
    </section>
  );
};

export default CouncilRecordingSection;
