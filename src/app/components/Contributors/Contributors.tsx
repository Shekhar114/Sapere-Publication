import React from "react";

interface ContributorProfile {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string | null;
  tags: string[];
  articleCount: number;
}

const contributors: ContributorProfile[] = [
  {
    id: 1,
    name: "Christiana",
    role: "CONTRIBUTOR",
    description:
      "Hospitality writer capturing the craft of luxury hospitality and refined guest exp...",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
    tags: ["luxury fashion", "creative leadership"],
    articleCount: 24,
  },
  {
    id: 2,
    name: "Vinny Williams",
    role: "CONTRIBUTOR",
    description:
      "Vinny's features trace the people and craftsmanship behind the world's most coveted ateliers, from heritage houses to rising studios.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
    tags: ["craftsmanship", "features"],
    articleCount: 18,
  },
  {
    id: 3,
    name: "Amanda Ife",
    role: "CONTRIBUTOR",
    description:
      "Amanda translates runway beauty into everyday rituals, covering the formulations and techniques shaping modern grooming.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop",
    tags: ["beauty", "grooming"],
    articleCount: 15,
  },
  {
    id: 4,
    name: "Tilly K",
    role: "CONTRIBUTOR",
    description:
      "Tilly's eye for understated luxury brings a curated edge to our seasonal lookbooks and street style coverage.",
    image:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?q=80&w=600&auto=format&fit=crop",
    tags: ["style", "lookbook"],
    articleCount: 30,
  },
  {
    id: 5,
    name: "Vinny Veronica",
    role: "CONTRIBUTOR",
    description:
      "Veronica explores the spaces, rituals, and objects that define a life well curated, from interiors to travel.",
    image:
      "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=600&auto=format&fit=crop",
    tags: ["interiors", "travel"],
    articleCount: 12,
  },
  {
    id: 6,
    name: "Amanda Cyndi",
    role: "CONTRIBUTOR",
    description:
      "Cyndi's reporting sits at the crossroads of art, fashion, and society, profiling the names shaping today's cultural conversation.",
    image:
      "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?q=80&w=600&auto=format&fit=crop",
    tags: ["culture", "arts"],
    articleCount: 22,
  },
  {
    id: 7,
    name: "Shamada Ivor",
    role: "CONTRIBUTOR",
    description:
      "Shamada curates destination guides for the discerning traveller, from boutique retreats to fashion capitals.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=600&auto=format&fit=crop",
    tags: ["travel", "guides"],
    articleCount: 9,
  },
  {
    id: 8,
    name: "Maria Mariazz",
    role: "CONTRIBUTOR",
    description:
      "Maria advises on brand storytelling and visual direction, bringing an art-led perspective to every campaign she touches.",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=600&auto=format&fit=crop",
    tags: ["consulting", "visuals"],
    articleCount: 14,
  },
  {
    id: 9,
    name: "Anika",
    role: "CONTRIBUTOR",
    description:
      "Anika's essays explore identity and self-expression through the lens of personal style, drawing on her travels across Europe.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
    tags: ["essays", "identity"],
    articleCount: 11,
  },
  {
    id: 10,
    name: "Lorena",
    role: "CONTRIBUTOR",
    description:
      "Lorena's column unpacks the stories behind seasonal collections, pairing critical insight with an unmistakable voice.",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop",
    tags: ["columnist", "fashion"],
    articleCount: 28,
  },
  {
    id: 11,
    name: "Maya",
    role: "CONTRIBUTOR",
    description: "Bio coming soon.",
    image: null,
    tags: ["writing", "lifestyle"],
    articleCount: 4,
  },
  {
    id: 12,
    name: "Alexsim",
    role: "CONTRIBUTOR",
    description: "Bio coming soon.",
    image: null,
    tags: ["editorial", "culture"],
    articleCount: 2,
  },
];

const ArrowDown: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#3F4A30]"
  >
    <rect width="24" height="24" fill="#3F4A30" rx="2" />
    <path
      d="M12 7V17M12 17L8 13M12 17L16 13"
      stroke="#EEEBE4"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ContributorCard: React.FC<{ contributor: ContributorProfile }> = ({
  contributor,
}) => {
  const fallback = `https://i.pravatar.cc/600?u=${encodeURIComponent(
    contributor.name,
  )}`;

  return (
    <article className="flex w-[288px] flex-col">
      <div className="h-[399.65px] w-[288px] overflow-hidden bg-stone-300">
        <img
          src={contributor.image || fallback}
          alt={contributor.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = fallback;
          }}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mt-4 flex items-baseline justify-between">
        <h3 className="font-serif text-2xl font-semibold text-[#3F4A30]">
          {contributor.name}
        </h3>
        <span className="text-[10px] font-medium tracking-widest text-[#A9AC95]">
          {contributor.role}
        </span>
      </div>

      <div className="mt-3 flex items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {contributor.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[2px] border border-stone-300 bg-stone-100/40 px-2 py-0.5 text-[11px] text-stone-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <button className="flex shrink-0 items-center justify-center transition-opacity hover:opacity-90">
          <ArrowDown />
        </button>
      </div>

      <p className="mt-4 min-h-[40px] line-clamp-2 text-sm leading-relaxed text-stone-600">
        {contributor.description}
      </p>

      <div className="mt-4 flex items-center justify-between border-t border-stone-300/80 pt-3 text-[11px] font-medium tracking-wide">
        <span className="text-stone-500">
          {contributor.articleCount} ARTICLES PUBLISHED
        </span>
        <a
          href="#"
          className="text-stone-800 underline transition-colors hover:text-[#3F4A30]"
        >
          View articles
        </a>
      </div>
    </article>
  );
};

const Contributors: React.FC = () => {
  return (
    <section
      id="contributors"
      className="bg-[#EEEBE4] px-6 py-16 sm:px-10 md:px-16 md:py-24 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-16 text-center">
          <h2 className="font-serif text-4xl text-[#3F4A30] md:text-5xl">
            Contributors
          </h2>

          <p className="mx-auto mt-4 max-w-[323px] text-[18px]/[1.63] text-stone-500 sm:max-w-[606px] md:max-w-[858px]">
            Sapēre's brings together experts from across the luxury ecosystem,
            offering considered{" "}
            <span className="hidden lg:inline">
              <br />
            </span>
            perspectives on fashion, hospitality, technology, sustainability,
            cultural evolution, and more.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-24 gap-y-14">
          {contributors.map((contributor) => (
            <ContributorCard key={contributor.id} contributor={contributor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contributors;
