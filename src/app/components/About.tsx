import React from "react";

interface EditorialValueItem {
  title: string;
  description: string;
}

const editorialValues: EditorialValueItem[] = [
  {
    title: "INDEPENDENCE",
    description:
      "We maintain complete editorial independence. No brand partnerships, sponsored content, or paid placements influence our coverage.",
  },
  {
    title: "EXPERTISE",
    description:
      "Our contributors are selected for their deep knowledge and professional experience within the luxury industry.",
  },
  {
    title: "INTELLECTUAL RIGOR",
    description:
      "We fact-check claims, cite sources, and approach luxury with the seriousness it deserves as a significant global industry.",
  },
  {
    title: "NUANCE",
    description:
      "We reject simplistic narratives. Luxury is complex, and our coverage reflects that complexity.",
  },
];

const AboutSapere: React.FC = () => {
  return (
    <div className="w-full font-sans antialiased text-[#1C1917] bg-[#FDFBF7]">
      {/* 1. Header Section */}
      <header className="bg-[#FBF9F4] border-b border-[#E7E5E4] px-6 py-16 text-center sm:px-12 sm:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-5xl text-[#16421B] tracking-wide">
            About Sapēre
          </h1>
          <p className="mt-4 font-serif text-xl sm:text-2xl text-[#877F6C] italic font-medium">
            Luxury industry understood
          </p>
          <p className="mt-8 text-base sm:text-lg text-[#57534E] leading-relaxed max-w-xl mx-auto">
            An educational publication dedicated to understanding the luxury
            industry.
          </p>
        </div>
      </header>

      {/* 2. Main Narrative Content Section */}
      <section className="px-6 py-16 sm:px-12 sm:py-24 lg:px-24">
        <div className="max-w-3xl mx-auto space-y-8 text-base sm:text-lg text-[#44403C] leading-relaxed tracking-wide font-normal">
          <p>
            While luxury is widely discussed, it is often understood only at the
            surface level, through products, aesthetics, and aspiration. Behind
            that surface lies a complex ecosystem shaped by capital, heritage,
            strategic decision-making, cultural influence, and the individuals
            who quietly shape its direction.
          </p>

          <p className="font-medium text-[#1C1917]">
            Sapēre exists to explore that deeper layer.
          </p>

          <p>
            Through essays, analysis, and commentary, the publication examines
            the structures, ideas, and dynamics that define the luxury industry.
            Rather than focusing solely on launches or trends, Sapēre looks at
            how the industry functions: how brands grow, how influence moves,
            how institutions shape the sector, and how cultural and economic
            forces interact.
          </p>

          <p>
            The publication is written for readers who want to understand luxury
            beyond its appearance. Many of our readers are professionals
            building or entering the industry, while others simply seek a
            clearer understanding of how one of the world's most influential
            sectors operates.
          </p>

          <p>
            Sapēre is also shaped by the voices of contributors who work within
            the luxury ecosystem itself. Through columns and essays, they share
            insights drawn from experience, offering perspectives that rarely
            appear in traditional luxury media.
          </p>

          <p>
            Our ambition is to create a platform where luxury can be discussed
            thoughtfully, critically, and with intellectual curiosity.
          </p>

          <p>
            Over time, Sapēre aims to grow beyond a publication into a broader
            knowledge platform through industry dossiers, institutional
            collaborations, and collectible print editions that document the
            evolution of the sector.
          </p>

          {/* Core Manifestation Quote Box */}
          <div className="pt-10 pb-4 text-center border-t border-[#E7E5E4] mt-12">
            <p className="font-serif text-lg sm:text-xl text-[#16421B] leading-relaxed">
              At its core, Sapēre is built on a simple idea:
              <span className="block mt-1 font-semibold italic text-[#16421B]">
                the luxury industry deserves to be understood as carefully as it
                is admired.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* 3. Editorial Values Grid Block */}
      <section className="bg-[#D6D3D1] bg-opacity-60 px-6 py-16 sm:px-12 sm:py-24 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#16421B] mb-12 sm:mb-16">
            Editorial values
          </h2>

          {/* Responsive Grid System matching your Desktop vs Tablet vs Mobile layouts */}
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-16 lg:gap-x-20">
            {editorialValues.map((value, idx) => (
              <div key={idx} className="flex flex-col space-y-3">
                <h3 className="text-xs sm:text-sm font-semibold tracking-widest text-[#57534E] uppercase">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-[#44403C] leading-relaxed font-normal">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Call To Action Footer Section */}
      <section className="bg-[#FBF9F4] px-6 py-16 text-center sm:px-12 sm:py-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#16421B]">
            Join the conversation
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#57534E] leading-relaxed max-w-xl mx-auto">
            We welcome pitches from writers, researchers, and industry
            professionals who share our commitment to thoughtful luxury
            analysis.
          </p>

          {/* Action Interactive Elements */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-[#0A2610] text-[#FDFBF7] text-sm font-medium tracking-wide rounded-sm hover:bg-[#123A19] transition-colors duration-200 shadow-sm">
              Submit a pitch
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 border border-[#16421B] text-[#16421B] text-sm font-medium tracking-wide rounded-sm hover:bg-[#16421B] hover:text-[#FDFBF7] transition-all duration-200">
              Get in touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSapere;
