import React from "react";

const ConciergeNetwork: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#c9c9c9] text-white">
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

      {/* Main Heading */}
      <div className="absolute right-[22px] top-[56px] text-right">
        <h1
          className="text-[42px] font-normal uppercase leading-none tracking-[0.22em] md:text-[44px]"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          Concierge Netwoek
        </h1>

        <p className="mt-[24px] text-[14px] font-semibold uppercase tracking-[0.02em]">
          Personalized support for the details that matter.
        </p>
      </div>

      {/* Left Content */}
      <div className="absolute left-[23px] top-[181px] max-w-[405px] text-[11.5px] font-semibold leading-[1.08] tracking-[-0.01em]">
        <p>
          You’re building a company. Let someone else handle the logistics of
          life.
        </p>

        <p className="mt-[17px]">
          Through the Sapère Concierge Network, members gain access to trusted
          concierge partners who can assist with travel planning, restaurant
          reservations, event access, personal requests, gifting, and other
          day-to-day arrangements.
        </p>

        <p className="mt-[17px]">
          Designed to reduce friction, save time, and help you stay focused on
          what matters most.
        </p>

        <div className="mt-[17px]">
          <p>How it works:</p>
          <ul className="list-disc pl-[12px]">
            <li>Submit your request</li>
            <li>We connect you with the most relevant concierge partner</li>
            <li>Enjoy personalized assistance and preferred member treatment</li>
          </ul>
        </div>
      </div>

      {/* Button */}
      <button className="absolute left-[489px] top-[328px] h-[36px] rounded-[8px] bg-[#3b3212] px-[15px] text-[11px] font-semibold uppercase text-white">
        Submit a Concierge Request
      </button>

      {/* Bottom Caption */}
      <p className="absolute bottom-[47px] left-[23px] max-w-[310px] text-[9.5px] font-semibold leading-[1.15]">
        A detail of a Rojo Indio suit in Super 130s ItailCreative direction
        for Husbands Parisan fabric, from Pitti Uomo
      </p>
    </section>
  );
};

export default ConciergeNetwork;