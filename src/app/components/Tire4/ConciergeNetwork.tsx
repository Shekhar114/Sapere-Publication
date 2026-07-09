import React from "react";
import image1 from "../../../assets/PHASE3PICTURE/image17.png";

const ConciergeNetwork: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black text-white">
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

      {/* MOBILE VIEW (Vertical Flow) */}
      <div className="flex md:hidden flex-col w-full h-full relative">
        <div className="absolute inset-0">
          <img
            src={image1}
            alt="Concierge Network"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 p-6 pt-12 flex flex-col gap-6">
          <h1
            className="text-[36px] font-normal uppercase leading-[1.1] tracking-[0.05em]"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            Concierge
            <br />
            Network
          </h1>

          <p className="text-[16px] font-semibold uppercase tracking-tight">
            Personalized support for the details that matter.
          </p>

          <div className="text-[14px] font-medium leading-[1.5] space-y-4">
            <p>
              You're building a company. Let someone else handle the logistics
              of life.
            </p>
            <p>
              Through the Sapère Concierge Network, members gain access to
              trusted concierge partners who can assist with travel planning,
              restaurant reservations, event access, personal requests, gifting,
              and other day-to-day arrangements.
            </p>
            <p>
              Designed to reduce friction, save time, and help you stay focused
              on what matters most.
            </p>

            <div>
              <p className="font-bold">How it works:</p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Submit your request for concierge</li>
                <li>We connect you to our trusted concierge partner</li>
                <li>
                  Enjoy personalized assistance and preferred member treatment
                </li>
              </ul>
            </div>
          </div>

          <p className="text-[10px] font-semibold text-white/70 italic">
            A detail of a Rojo Indio suit in Super 130s ItailCreative direction
            for Husbands Parisan fabric, from Pitti Uomo
          </p>

          <button className="h-[54px] w-full rounded-[8px] bg-white/20 backdrop-blur-md text-[14px] font-semibold uppercase tracking-wider border border-white/30">
            Submit a Concierge Request
          </button>
        </div>
      </div>

      {/* DESKTOP VIEW (Unchanged) */}
      <div className="hidden md:block">
        <img
          src={image1}
          alt="Concierge Network"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute right-[26px] top-[92px] z-10 text-right">
          <h1
            className="text-[50px] font-normal uppercase leading-none tracking-[0.22em] text-white"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            Concierge Network
          </h1>
          <p className="mt-[31px] text-[18px] font-semibold uppercase tracking-[0.02em] text-white">
            Personalized support for the details that matter.
          </p>
        </div>

        <div className="absolute left-[29px] top-[230px] z-10 max-w-[560px] text-[15px] font-semibold leading-[1.08] tracking-[-0.01em] text-white">
          <p>
            You're building a company. Let someone else handle the logistics of
            life.
          </p>
          <p className="mt-[18px] max-w-[520px]">
            Through the Sapère Concierge Network, members gain access to trusted
            concierge partners who can assist with travel planning, restaurant
            reservations, event access, personal requests, gifting, and other
            day-to-day arrangements.
          </p>
          <p className="mt-[18px] max-w-[560px]">
            Designed to reduce friction, save time, and help you stay focused on
            what matters most.
          </p>
          <div className="mt-[18px]">
            <p>How it works:</p>
            <ul className="list-disc pl-[14px]">
              <li>Submit your request</li>
              <li>We connect you with the most relevant concierge partner</li>
              <li>
                Enjoy personalized assistance and preferred member treatment
              </li>
            </ul>
          </div>
        </div>

        <button className="absolute bottom-[78px] right-[125px] z-10 h-[47px] w-[356px] rounded-[9px] bg-[#4b3a17]/90 text-[14px] font-semibold uppercase tracking-[0.01em] text-white">
          Submit a Concierge Request
        </button>

        <p className="absolute bottom-[74px] left-[29px] z-10 max-w-[390px] text-[12px] font-semibold leading-[1.15] text-white">
          A detail of a Rojo Indio suit in Super 130s ItailCreative direction
          for Husbands Parisan fabric, from Pitti Uomo
        </p>
      </div>
    </section>
  );
};

export default ConciergeNetwork;
