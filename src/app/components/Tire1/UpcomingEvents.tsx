import React from "react";
import image1 from "../../../assets/PHASE3PICTURE/image32.png";

const UpcomingEvents: React.FC = () => {
  return (
    <section className="w-full overflow-hidden bg-black">
      <style>
        {`
          @font-face {
            font-family: "The Seasons";
            src: url("/fonts/TheSeasons-Regular.ttf") format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }

          .ue-stage {
            width: min(100vw, 756px);
            height: 622px;
            margin: 0 auto;
            position: relative;
            overflow: hidden;
            background: #000;
          }

          .ue-artboard {
            width: 756px;
            height: 622px;
            position: relative;
            overflow: hidden;
            transform-origin: top left;
            color: #ffffff;
          }

          @media (max-width: 756px) {
            .ue-stage {
              height: 82.275vw;
            }

            .ue-artboard {
              transform: scale(calc(100vw / 756));
            }
          }
        `}
      </style>

      <div className="ue-stage">
        <div className="ue-artboard">
          {/* Background Image */}
          <img
            src={image1}
            alt="Upcoming events background"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/15" />

          {/* Left Heading */}
          <h1
            className="absolute left-[62px] top-[58px] text-[40px] font-normal uppercase leading-none tracking-[0.33em] text-white"
            style={{ fontFamily: `"The Seasons", Georgia, serif` }}
          >
            Upcoming
          </h1>

          {/* Left Paragraph */}
          <p className="absolute left-[88px] top-[129px] w-[130px] text-[9px] font-semibold uppercase leading-[1.8] tracking-[0.04em] text-white">
            Sapēre curates intimate, high-value experiences designed for
            meaningful connection, strategic insight, and long-term relationship
            building.
          </p>

          {/* Events Heading */}
          <h2
            className="absolute left-[247px] top-[130px] text-[40px] font-normal uppercase leading-none tracking-[0.35em] text-white"
            style={{ fontFamily: `"The Seasons", Georgia, serif` }}
          >
            Events
          </h2>

          {/* RSVP Button */}
          <button className="absolute left-0 top-[310px] h-[35px] w-[231px] rounded-[6px] bg-white/20 pl-[72px] text-left text-[8px] font-medium uppercase tracking-[0.02em] text-white backdrop-blur-sm transition hover:bg-white/30">
            → Secure your spot. RSVP.
          </button>

          {/* Small footer text */}
          <p className="absolute left-[55px] bottom-[31px] text-[4px] font-medium uppercase tracking-[0.18em] text-white/70">
            A Sapēre from X · Collaborated Events Studio and Events
            <br />
            Company Fiction
          </p>

          {/* Right Card */}
          <aside className="absolute right-[25px] top-[35px] h-[549px] w-[225px] rounded-[24px] border border-[#626247]/60 bg-[#343620]/95 px-[26px] text-white shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
            <h3 className="absolute left-0 top-[15px] w-full text-center text-[16px] font-extrabold uppercase tracking-[0.03em]">
              June 2026
            </h3>

            {/* Event 1 */}
            <div className="absolute left-[26px] right-[22px] top-[80px]">
              <div className="grid grid-cols-[58px_60px_10px_1fr] text-[10px] font-extrabold uppercase leading-[1.1] tracking-[-0.02em]">
                <p>
                  Founder
                  <br />
                  York
                </p>
                <p>Evening</p>
                <p>–</p>
                <p>New</p>
              </div>

              <div className="mt-[16px] space-y-[1px] text-[9px] font-extrabold leading-[1.15] tracking-[0.01em]">
                <p>
                  Date:{" "}
                  <span className="ml-[18px]">Thursday, June 18, 2026</span>
                </p>
                <p>Location: Private venue, Manhattan</p>
                <p>Format: Invitation-only dinner</p>
              </div>

              <p className="mt-[26px] text-justify text-[9px] font-medium leading-[1.15] tracking-[0.08em] text-white">
                An intimate evening with 12–15 founders and select industry
                voices. Focused on honest conversation around capital raising,
                brand positioning, and navigating the current luxury landscape.
              </p>

              <p className="mt-[14px] text-[6.5px] font-medium italic leading-none text-white">
                Limited to Ascendõ &amp; Prófició &amp; Émineõ members.
              </p>
            </div>

            {/* Event 2 */}
            <div className="absolute left-[26px] right-[22px] top-[310px]">
              <div className="text-[10px] font-extrabold uppercase leading-[1.05] tracking-[0.01em]">
                <p className="text-center">Workshop</p>

                <div className="mt-[2px] flex items-center justify-between">
                  <span>Brand</span>
                  <span>Positioning</span>
                  <span>In</span>
                  <span>A</span>
                </div>

                <p>Crowded Market</p>
              </div>

              <div className="mt-[27px] space-y-[1px] text-[9px] font-extrabold leading-[1.15] tracking-[0.01em]">
                <p>Date: Wednesday, June 24, 2026</p>
                <p>Location: Paris</p>
                <p>
                  Format: In-person workshop &#40;limited to 20
                  participants&#41;
                </p>
              </div>

              <p className="mt-[30px] text-justify text-[9px] font-medium leading-[1.15] tracking-[0.08em] text-white">
                A practical half-day session exploring how early-stage luxury
                brands can create distinct positioning in an increasingly
                competitive and noisy environment.
              </p>

              <p className="mt-[17px] text-[6.5px] font-medium italic leading-none text-white">
                Open to Ascendõ and above.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
