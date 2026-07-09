import React from "react";
import image1 from "../../../assets/PHASE3PICTURE/image32.png";

const UpcomingEvents: React.FC = () => {
  return (
    <section className="w-full overflow-hidden bg-black select-none">
      <style>
        {`
          @font-face {
            font-family: "The Seasons";
            src: url("/fonts/TheSeasons-Regular.ttf") format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }

          /* DESKTOP ARTBOARD STABILIZATION (unchanged) */
          .ue-stage {
            width: min(100vw, 1000px);
            height: 800px;
            margin: 0 auto;
            position: relative;
            overflow: hidden;
            background: #000;
          }

          .ue-artboard {
            width: 1000px;
            height: 800px;
            position: relative;
            overflow: hidden;
            transform-origin: top left;
            color: #ffffff;
          }

          @media (max-width: 1000px) {
            .ue-artboard {
              transform: scale(calc(100vw / 1000));
            }
          }
        `}
      </style>

      {/* ========================================================================= */}
      {/* MOBILE VIEW - rebuilt with natural flow, no fixed-height artboard so long */}
      {/* text can never overlap or get clipped */}
      {/* ========================================================================= */}
      <div className="block md:hidden relative w-full overflow-hidden">
        {/* Full-bleed background image + overlay, spans the ENTIRE mobile
            section (behind hero copy AND behind the event card below),
            matching the reference design. Height is driven by the in-flow
            content beneath, so it always covers everything with no gap. */}
        <img
          src={image1}
          alt="Upcoming events background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Foreground content, all in normal flow so nothing ever overlaps */}
        <div className="relative z-10 px-6 pt-16 pb-10">
          <h1
            className="text-[40px] leading-none uppercase tracking-[0.25em] text-white font-normal"
            style={{ fontFamily: `"The Seasons", Georgia, serif` }}
          >
            Upcoming
          </h1>
          <h2
            className="mt-1 text-[40px] leading-none uppercase tracking-[0.25em] text-white font-normal"
            style={{ fontFamily: `"The Seasons", Georgia, serif` }}
          >
            Events
          </h2>

          <p className="mt-6 max-w-[280px] text-[11px] font-normal uppercase leading-[1.7] tracking-[0.05em] text-white/90">
            Sapēre curates intimate, high-value experiences designed for
            meaningful connection, strategic insight, and long-term relationship
            building.
          </p>

          {/* RSVP Button */}
          <button
            type="button"
            className="mt-10 flex h-[54px] w-full max-w-[300px] items-center justify-start rounded-r-xl bg-white/15 border-l-2 border-white/40 pl-6 text-[12px] font-medium uppercase tracking-[0.1em] text-white transition hover:bg-white/25"
          >
            → Secure your spot. RSVP.
          </button>
        </div>

        {/* Event Panel Card - light glassy translucent card so the background
            image reads through clearly, with warm dark text, matching the
            reference design exactly */}
        <aside className="relative z-10 mx-5 mt-10 rounded-[24px] border border-white/30 bg-[#EAE6DF]/40 p-7 shadow-2xl">
          <h3 className="text-center text-[13px] font-semibold uppercase tracking-[0.3em] text-[#5c5230]/80 mb-7">
            JUNE 2016
          </h3>

          {/* Event 1 */}
          <div className="mb-8">
            <h4 className="text-[16px] font-bold uppercase tracking-[0.05em] leading-tight text-[#2e2a14]">
              Founder Evening – New York
            </h4>
            <div className="mt-3 space-y-1 text-[13px] text-[#3d3720]">
              <p>
                <span className="font-semibold text-[#2e2a14]">Date:</span>{" "}
                Thursday, June 18, 2026
              </p>
              <p>
                <span className="font-semibold text-[#2e2a14]">Location:</span>{" "}
                Private venue, Manhattan
              </p>
              <p>
                <span className="font-semibold text-[#2e2a14]">Format:</span>{" "}
                Invitation-only dinner
              </p>
            </div>
            <p className="mt-4 text-[13px] font-light leading-[1.55] tracking-[0.02em] text-[#3d3720]">
              An intimate evening with 12–15 founders and select industry
              voices. Focused on honest conversation around capital raising,
              brand positioning, and navigating the current luxury landscape.
            </p>
            <p className="mt-3 text-[11px] font-light italic tracking-[0.02em] text-[#5c5230]">
              Limited to Ascendõ &amp; Prófició &amp; Émineõ members.
            </p>
          </div>

          <hr className="border-[#2e2a14]/15 my-7" />

          {/* Event 2 */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#5c5230] mb-1">
              Masterclass
            </p>
            <h4 className="text-[16px] font-bold uppercase tracking-[0.05em] leading-tight text-[#2e2a14]">
              Brand Positioning in a Crowded Market
            </h4>
            <div className="mt-3 space-y-1 text-[13px] text-[#3d3720]">
              <p>
                <span className="font-semibold text-[#2e2a14]">Date:</span>{" "}
                Wednesday, June 24, 2026
              </p>
              <p>
                <span className="font-semibold text-[#2e2a14]">Location:</span>{" "}
                Paris
              </p>
              <p>
                <span className="font-semibold text-[#2e2a14]">Format:</span>{" "}
                In-person workshop (limited to 20 participants)
              </p>
            </div>
            <p className="mt-4 text-[13px] font-light leading-[1.55] tracking-[0.02em] text-[#3d3720]">
              A practical half-day session exploring how early-stage luxury
              brands can create distinct positioning in an increasingly
              competitive and noisy environment.
            </p>
            <p className="mt-3 text-[11px] font-light italic tracking-[0.02em] text-[#5c5230]">
              Open to Ascendõ and above.
            </p>
          </div>
        </aside>

        {/* Small Studio Footer Credit */}
        <p className="relative z-10 px-6 py-8 text-[8px] font-normal uppercase leading-relaxed tracking-[0.2em] text-white/40">
          A Scene from a collaboration between Erased
          <br />
          Studio and Events Company Studio27
        </p>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP VIEW - unchanged */}
      {/* ========================================================================= */}
      <div className="hidden md:block">
        <div className="ue-stage">
          <div className="ue-artboard">
            {/* Background Image Setup */}
            <img
              src={image1}
              alt="Upcoming events background"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/25" />

            {/* Left Content Column */}
            <div className="absolute left-[60px] top-[140px] max-w-[480px]">
              <h1
                className="text-[52px] font-normal uppercase leading-none tracking-[0.32em] text-white"
                style={{ fontFamily: `"The Seasons", Georgia, serif` }}
              >
                Upcoming
              </h1>

              <div className="mt-[40px] flex items-start gap-6">
                <p className="w-[145px] text-[10px] font-normal uppercase leading-[1.8] tracking-[0.04em] text-white/90">
                  Sapēre curates intimate, high-value experiences designed for
                  meaningful connection, strategic insight, and long-term
                  relationship building.
                </p>
                <h2
                  className="text-[52px] font-normal uppercase leading-none tracking-[0.32em] text-white pt-1"
                  style={{ fontFamily: `"The Seasons", Georgia, serif` }}
                >
                  Events
                </h2>
              </div>
            </div>

            {/* RSVP Interaction Capsule */}
            <button
              type="button"
              className="absolute left-0 top-[440px] flex h-[54px] w-[290px] items-center justify-start rounded-r-[4px] bg-white/10 border-l-[3px] border-white/50 pl-14 text-[11px] font-medium uppercase tracking-[0.08em] text-white backdrop-blur-md transition hover:bg-white/20"
            >
              → Secure your spot. RSVP.
            </button>

            {/* Lower Footer Branding */}
            <p className="absolute left-[60px] bottom-[50px] text-[7px] font-normal uppercase leading-relaxed tracking-[0.22em] text-white/40">
              A Scene from a collaboration between Erased
              <br />
              Studio and Events Company Studio27
            </p>

            {/* Glassmorphic Event Card Dashboard */}
            <aside className="absolute right-[0px] top-[60px] w-[350px] rounded-[18px] border border-white/10 bg-[#161616]/65 p-8 text-white backdrop-blur-xl shadow-2xl flex flex-col">
              <div>
                <h3 className="text-center text-[12px] font-semibold uppercase tracking-[0.35em] text-white/50 mb-6">
                  JUNE 2016
                </h3>

                {/* Event 1 */}
                <div className="mb-6">
                  <h4 className="text-[14px] font-bold uppercase tracking-[0.03em] leading-snug text-white">
                    Founder Evening – New York
                  </h4>
                  <div className="mt-2.5 space-y-[2px] text-[11.5px] text-white/90">
                    <p>
                      <span className="font-medium text-white/70">Date:</span>{" "}
                      Thursday, June 18, 2026
                    </p>
                    <p>
                      <span className="font-medium text-white/70">
                        Location:
                      </span>{" "}
                      Private venue, Manhattan
                    </p>
                    <p>
                      <span className="font-medium text-white/70">Format:</span>{" "}
                      Invitation-only dinner
                    </p>
                  </div>
                  <p className="mt-3 text-[11.5px] font-normal leading-[1.45] tracking-[0.03em] text-white/75 text-justify">
                    An intimate evening with 12–15 founders and select industry
                    voices. Focused on honest conversation around capital
                    raising, brand positioning, and navigating the current
                    luxury landscape.
                  </p>
                  <p className="mt-2 text-[9.5px] font-light italic tracking-[0.02em] text-white/50">
                    Limited to Ascendõ &amp; Prófició &amp; Émineõ members.
                  </p>
                </div>
              </div>

              {/* Decorative Separator Line */}
              <div className="w-full h-[1px] bg-white/10 my-4" />

              {/* Event 2 */}
              <div>
                <p className="text-[9.5px] font-bold uppercase tracking-[0.25em] text-white/40 mb-0.5">
                  Masterclass
                </p>
                <h4 className="text-[14px] font-bold uppercase tracking-[0.03em] leading-snug text-white">
                  Brand Positioning in a Crowded Market
                </h4>
                <div className="mt-2.5 space-y-[2px] text-[11.5px] text-white/90">
                  <p>
                    <span className="font-medium text-white/70">Date:</span>{" "}
                    Wednesday, June 24, 2026
                  </p>
                  <p>
                    <span className="font-medium text-white/70">Location:</span>{" "}
                    Paris
                  </p>
                  <p>
                    <span className="font-medium text-white/70">Format:</span>{" "}
                    In-person workshop (limited to 20 participants)
                  </p>
                </div>
                <p className="mt-3 text-[11.5px] font-normal leading-[1.45] tracking-[0.03em] text-white/75 text-justify">
                  A practical half-day session exploring how early-stage luxury
                  brands can create distinct positioning in an increasingly
                  competitive and noisy environment.
                </p>
                <p className="mt-2 text-[9.5px] font-light italic tracking-[0.02em] text-white/50">
                  Open to Ascendõ and above.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
