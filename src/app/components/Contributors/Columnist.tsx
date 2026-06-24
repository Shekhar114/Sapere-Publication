import React from "react";

interface ColumnistProfile {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string | null;
}

const columnists: ColumnistProfile[] = [
  {
    id: 1,
    name: "Calvin Klein",
    role: "COLUMNIST",
    description:
      "Calvin's column follows fashion's most storied cities, pairing destination guides with notes on the houses that built them.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Kenneth Konrad",
    role: "COLUMNIST",
    description:
      "Kenneth writes on tailoring and menswear with a focus on craftsmanship, pairing classic codes with a modern point of view.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Yui Hira",
    role: "COLUMNIST",
    description: "Bio coming soon.",
    image: null,
  },
  {
    id: 4,
    name: "Mathias",
    role: "COLUMNIST",
    description: "Bio coming soon.",
    image: null,
  },
  {
    id: 5,
    name: "Sarah Smith",
    role: "COLUMNIST",
    description: "Bio coming soon.",
    image: null,
  },
];

const ArrowDownBox: React.FC = () => (
  <div className="w-[24px] h-[24px] bg-[#3F4A30] flex items-center justify-center rounded-[2px] shrink-0">
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5V19M12 19L6 13M12 19L18 13"
        stroke="#EEEBE4"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const ColumnistCard: React.FC<{ columnist: ColumnistProfile }> = ({
  columnist,
}) => {
  return (
    <article className="flex flex-col w-[320px] bg-[#F2EFE9] p-4 shadow-sm border border-stone-200/40">
      <div className="w-[288px] h-[399.65px] overflow-hidden bg-[#C5C5C5] mx-auto">
        {columnist.image ? (
          <img
            src={columnist.image}
            alt={columnist.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-[#C5C5C5]" />
        )}
      </div>

      <div className="mt-4 flex items-baseline justify-between px-1">
        <h3 className="font-serif text-[22px] font-bold text-[#1C2D17] tracking-tight">
          {columnist.name}
        </h3>

        <span className="text-[10px] font-medium tracking-widest text-[#767A6B]">
          {columnist.role}
        </span>
      </div>

      <div className="mt-3 flex items-center justify-between gap-2 px-1">
        <div className="flex gap-1.5 flex-wrap">
          <span className="px-2 py-1 text-[11px] font-medium text-[#555A4E] bg-[#E5E2DA] rounded-[1px]">
            luxury fashion
          </span>

          <span className="px-2 py-1 text-[11px] font-medium text-[#555A4E] bg-[#E5E2DA] rounded-[1px]">
            creative leadership
          </span>
        </div>

        <button type="button" className="transition-opacity hover:opacity-90">
          <ArrowDownBox />
        </button>
      </div>

      <p className="mt-4 text-[13.5px] leading-relaxed text-[#555A4E] px-1 line-clamp-2 min-h-[40px]">
        {columnist.description}
      </p>

      <div className="mt-5 pt-3 border-t border-[#DCD9D0] flex items-center justify-between text-[11px] font-bold tracking-wide px-1">
        <span className="text-[#767A6B]">24 ARTICLES PUBLISHED</span>

        <a
          href="#"
          className="underline text-[#1C2D17] hover:text-[#3F4A30] transition-colors"
        >
          View articles
        </a>
      </div>
    </article>
  );
};

const Columnist: React.FC = () => {
  return (
    <section id="columnist" className="bg-[#EEEBE4] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto mb-16 text-center">
          <h2 className="font-serif text-4xl text-[#3F4A30] md:text-5xl">
            Columnists
          </h2>
        </div>

        {/* 
          3 cards per row on large screen.
          If last row has less than 3 cards, it will start from left.
        */}
        <div className="mx-auto grid max-w-[1104px] grid-cols-1 justify-items-center gap-y-10 md:grid-cols-2 md:justify-items-start md:gap-x-[72px] xl:grid-cols-3">
          {columnists.map((columnist) => (
            <ColumnistCard key={columnist.id} columnist={columnist} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Columnist;
