import React from "react";

type PartnerCard = {
  id: number;
  title: string;
  description: string;
  image?: string;
};

const partners: PartnerCard[] = [
  {
    id: 1,
    title: "MOV",
    description:
      "MOV, a creative content studio specializing in high-impact visual storytelling, has partnered with Sapēre to bridge strategic brand building with compelling content creation.",
  },
  {
    id: 2,
    title: "Vedara",
    description:
      "Vedara, a leading luxury incubation and advisory platform, has partnered with Sapēre to bridge the gap between emerging talent and institutional intelligence.",
  },
  {
    id: 3,
    title: "Ascella Group",
    description:
      "Ascella Group, an execution-led operating group focused on aligning technology, workforce, security, and growth functions, has partnered with Sapēre to bridge strategic vision with disciplined execution.",
  },
  {
    id: 4,
    title: "The Luxury Creators",
    description:
      "The Luxury Creators, a specialist agency helping luxury brands scale through social media, influencer marketing, and performance campaigns, has partnered with Sapēre to bridge creative excellence with tangible commercial impact.",
  },
];

export default function SapereNetworkSection() {
  return (
    <section className="w-full bg-white px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1215px]">
        {/* Heading */}
        <div className="text-center">
          <h2
            className="text-[61px]/[1.58px]  uppercase leading-none tracking-[0.18em] text-[#37300d] md:text-[58px] md:tracking-[0.22em] letter-spacing-[160x]"
            style={{ fontFamily: "'The Seasons', serif" }}
          >
            The Sapere Network
          </h2>

          <p className="mx-auto mt-12 max-w-[950px] text-center text-[20px]/[1.2]  leading-[1.25] text-[#39320e] md:text-[20px]">
            Behind every great founder is a trusted network. Sapēre partners
            with carefully selected specialists
            <br className="hidden md:block" />
            to help members move faster, think bigger and build better.
          </p>

          <p className="mt-7 text-[20px]/[1.2] text-[#39320e]">
            Acces available from Ascendō
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="min-h-[341px] bg-[#39330f] px-4 pb-6 pt-4"
            >
              {/* Image Placeholder */}
              <div className="h-[126px] w-full bg-[#d9d9d9]">
                {partner.image && (
                  <img
                    src={partner.image}
                    alt={partner.title}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>

              <p className="mt-6 text-center text-[16px]/[1.2] font-normal leading-[1.12] text-white">
                {partner.description}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-block border-b border-black text-[16px]  uppercase leading-none text-[#39320e] transition-opacity hover:opacity-70 font-bold"
          >
            Explore All Partners
          </a>
        </div>
      </div>
    </section>
  );
}
