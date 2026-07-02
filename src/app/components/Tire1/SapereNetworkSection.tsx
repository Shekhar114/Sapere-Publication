import React from "react";

import image1 from "../../../assets/PHASE3PICTURE/image25.png";
import movLogo from "../../../assets/PHASE3PICTURE/image24.png";

import image2 from "../../../assets/PHASE3PICTURE/image27.png";
import vedaraLogo from "../../../assets/PHASE3PICTURE/image28.png";

import image3 from "../../../assets/PHASE3PICTURE/image26.png";
import ascellLogo from "../../../assets/PHASE3PICTURE/image23.png";

import image4 from "../../../assets/PHASE3PICTURE/image38.png";
import theLuxury from "../../../assets/PHASE3PICTURE/theLuxury.png";

type PartnerCard = {
  id: number;
  title: string;
  description: string;
  bgImage: string;
  logo: string;
  logoClass: string;
  descClass: string;
};

const partners: PartnerCard[] = [
  {
    id: 1,
    title: "MOV",
    bgImage: image1,
    logo: movLogo,
    logoClass: "left-[68px] top-[92px] w-[88px]",
    descClass:
      "left-[195px] top-[92px] max-w-[120px] text-left text-[15px] leading-[1.2]",
    description:
      "MOV, a creative content studio specializing in high-impact visual storytelling, has partnered with Sapēre to bridge strategic brand building with compelling content creation.",
  },
  {
    id: 2,
    title: "Vedara",
    bgImage: image2,
    logo: vedaraLogo,
    logoClass: "left-1/2 top-[86px] w-[260px] -translate-x-1/2",
    descClass:
      "left-[78px] top-[180px] max-w-[245px] text-left text-[15px] leading-[1.18]",
    description:
      "Vedara, a leading luxury incubation and advisory platform, has partnered with Sapēre to bridge the gap between emerging talent and institutional intelligence.",
  },
  {
    id: 3,
    title: "Ascella Group",
    bgImage: image3,
    logo: ascellLogo,
    logoClass: "left-1/2 top-[88px] w-[260px] -translate-x-1/2",
    descClass:
      "left-[72px] top-[165px] max-w-[260px] text-left text-[15px] leading-[1.22]",
    description:
      "Ascella Group, an execution-led operating group focused on aligning technology, workforce, security, and growth functions, has partnered with Sapēre to bridge strategic vision with disciplined execution.",
  },
  {
    id: 4,
    title: "The Luxury Creators",
    bgImage: image4,
    logo: theLuxury,
    logoClass: "left-[108px] top-[60px] w-[205px]",
    descClass:
      "left-[108px] top-[165px] max-w-[235px] text-left text-[15px] leading-[1.24]",
    description:
      "The Luxury Creators, a specialist agency helping luxury brands scale through social media, influencer marketing, and performance campaigns, has partnered with Sapēre to bridge creative excellence with tangible commercial impact.",
  },
];

export default function SapereNetworkSection() {
  return (
    <section className="w-full bg-[#fbfaf2] text-[#0b3d17]">
      <div className="mx-auto min-h-screen w-full max-w-[1728px] px-[8px] pb-[70px] pt-[88px]">
        {/* Heading */}
        <div className="text-center">
          <h2
            className="font-normal uppercase text-[#073f18] text-[52px] leading-none tracking-[0.34em] md:text-[72px]"
            style={{ fontFamily: "'The Seasons', serif" }}
          >
            THE SAPĒRE NETWORK
          </h2>

          <p className="mx-auto mt-[62px] max-w-[1120px] text-center font-mono text-[20px] leading-[1.35] tracking-[0.06em] text-black">
            Behind every great founder is a trusted network.
            <br />
            Sapēre partners with carefully selected specialists to help members
            move faster, think bigger, and
            <br />
            build better.
          </p>

          <p className="mt-[30px] font-mono text-[20px] leading-none tracking-[0.08em] text-black">
            Acces available from Ascendō
          </p>

          <a
            href="#"
            className="mt-[34px] inline-flex items-center gap-2 font-sans text-[22px] font-normal uppercase leading-none tracking-[0.01em] text-black transition-opacity hover:opacity-70"
          >
            <span className="text-[30px] leading-none">→</span>
            Explore All Partners
          </a>
        </div>

        {/* Cards */}
        <div className="mt-[22px] grid grid-cols-1 gap-[26px] sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <article
              key={partner.id}
              className="relative h-[400px] w-full overflow-hidden bg-[#2f2b16]"
            >
              {/* Background Image */}
              <img
                src={partner.bgImage}
                alt={partner.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/45" />

              {/* Logo */}
              <img
                src={partner.logo}
                alt={`${partner.title} logo`}
                className={`absolute z-10 object-contain ${partner.logoClass}`}
              />

              {/* Description */}
              <p
                className={`absolute z-10 font-sans font-normal text-white ${partner.descClass}`}
              >
                {partner.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
