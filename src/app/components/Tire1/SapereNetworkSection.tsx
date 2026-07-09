import React from "react";

// Your image imports
import image1 from "../../../assets/PHASE3PICTURE/image25.png";
import movLogo from "../../../assets/PHASE3PICTURE/image24.png";
import image2 from "../../../assets/PHASE3PICTURE/image27.png";
import vedaraLogo from "../../../assets/PHASE3PICTURE/image28.png";
import image3 from "../../../assets/PHASE3PICTURE/image26.png";
import ascellLogo from "../../../assets/PHASE3PICTURE/image231.png";
import image4 from "../../../assets/PHASE3PICTURE/image38.png";
import theLuxury from "../../../assets/PHASE3PICTURE/theLuxury1.png";

const partners = [
  {
    id: 1,
    title: "MOV",
    bgImage: image1,
    logo: movLogo,
    footerText:
      "THE YUPPIE COLLECTION BY ROBERT KUPISZ, PHOTOGRAPHED BY AGATA SERGE",
  },
  {
    id: 2,
    title: "Vedara",
    bgImage: image2,
    logo: vedaraLogo,
    footerText:
      "THE LIBRARY IN CASA TAO BY HW STUDIO ARQUITECTOS. PHOTO BY CÉSAR BÉJAR",
  },
  {
    id: 3,
    title: "Ascella Group",
    bgImage: image3,
    logo: ascellLogo,
    footerText:
      "THE 10AM LOFTS IN ATHENS, A BRUTALIST PENTHOUSE BY STUDIO ANDREW TROTTER. PHOTO BY SALVA LÓPEZ",
  },
  {
    id: 4,
    title: "The Luxury Creators",
    bgImage: image4,
    logo: theLuxury,
    footerText: "PHX X DAVID BOWIE LOOKBOOK",
  },
];

export default function SapereNetworkSection() {
  return (
    <section className="w-full overflow-hidden bg-[#fbfaf2] text-[#1a1a1a]">
      <div className="mx-auto w-full max-w-[1680px] px-4 pb-[80px] pt-[90px] sm:px-6 lg:px-12">
        {/* Header Section */}
        <div className="mx-auto mb-[56px] flex flex-col items-center text-center">
          <h2
            className="text-[clamp(32px,5vw,56px)] font-normal uppercase leading-tight tracking-[0.25em]"
            style={{ fontFamily: "'The Seasons', Times, serif" }}
          >
            THE SAPERE NETWORK
          </h2>
        </div>

        {/* Tailwind Native Slider */}
        <div className="flex w-full gap-4 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-visible lg:pb-0">
          {partners.map((partner) => (
            <article
              key={partner.id}
              className="relative aspect-[3/4] min-w-[85%] flex-shrink-0 snap-center overflow-hidden bg-[#1a1a1a] sm:min-w-[45%] lg:min-w-0"
            >
              <img
                src={partner.bgImage}
                alt={partner.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <img
                  src={partner.logo}
                  alt={partner.title}
                  className="max-h-[45%] max-w-[80%] object-contain select-none"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-right">
                <p className="ml-auto max-w-[90%] font-sans text-[9px] font-light uppercase tracking-[0.08em] leading-[1.3] text-white/80">
                  {partner.footerText}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
