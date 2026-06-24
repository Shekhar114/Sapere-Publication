import React from "react";

type EventItem = {
  eyebrow?: string;
  title: string;
  date: string;
  location: string;
  format: string;
  description: string;
  note: string;
};

const events: EventItem[] = [
  {
    title: "Founder Evening – New York",
    date: "Thursday, June 18, 2026",
    location: "Private venue, Manhattan",
    format: "Invitation-only dinner",
    description:
      "An intimate evening with 12–15 founders and select industry voices. Focused on honest conversation around capital raising, brand positioning, and navigating the current luxury landscape.",
    note: "Limited to Ascendõ & Prófició & Émineõ members.",
  },
  {
    eyebrow: "Workshop",
    title: "Brand Positioning in a Crowded Market",
    date: "Wednesday, June 24, 2026",
    location: "Paris",
    format: "In-person workshop (limited to 20 participants)",
    description:
      "A practical half-day session exploring how early-stage luxury brands can create distinct positioning in an increasingly competitive and noisy environment.",
    note: "Open to Ascendõ and above.",
  },
];

const UpcomingEvents: React.FC = () => {
  return (
    <section
      className="relative min-h-screen overflow-hidden border-t-[7px] border-[#2f2614] bg-[#f6dfdc] px-6 py-10 md:px-8 md:py-12"
      // style={{
      //   backgroundImage:
      //     "repeating-linear-gradient(90deg, #f6dfdc 0px, #f6dfdc 104px, #f7f7f4 104px, #f7f7f4 118px)",
      // }}
    >
      <div className="mx-auto grid min-h-[650px] max-w-[1180px] grid-cols-1 gap-10 md:grid-cols-[1fr_345px]">
        {/* Left Content */}
        <div className="relative min-h-[520px] text-[#4b2b16]">
          <h1
            className="pt-12 text-[61px]/[1.58px] uppercase leading-none tracking-[0.18em] md:pt-14 md:text-[58px]"
            style={{ fontFamily: "'The Seasons', Georgia, serif" }}
          >
            Upcoming
          </h1>

          <div className="mt-10 flex flex-col gap-8 md:mt-12 md:flex-row md:items-start">
            <p className="max-w-[225px] text-[16px]/[1.2] font-medium leading-[1.05] text-[#3b2416]">
              Sapēre curates intimate, high-value experiences designed for
              meaningful connection, strategic insight, and long-term
              relationship building.
            </p>

            <h2
              className="text-[61px]/[1.58px]  uppercase leading-none tracking-[0.22em] md:ml-8 mt-4"
              style={{ fontFamily: "'The Seasons', Georgia, serif" }}
            >
              Events
            </h2>
          </div>

          <button className="mt-28 rounded-md bg-[#9a8b86]/55 px-8 py-4 text-[17px] font-bold uppercase tracking-[-0.03em] text-white backdrop-blur-sm transition hover:bg-[#7f706b]/70 md:absolute md:bottom-[155px] md:left-0 md:mt-0">
            Secure Your Spot. RSVP.
          </button>
        </div>

        {/* Right Event Card */}
        <div className="flex items-start justify-center md:justify-end">
          <div className="w-full max-w-[345px] rounded-[10px] bg-[#4a260d]/95 px-6 py-7 text-[#d7c8c5] shadow-lg md:min-h-[658px]">
            <h3 className="mb-5 text-center text-[18px] font-bold uppercase">
              June 2016
            </h3>

            {events.map((event, index) => (
              <div key={index} className={index === 1 ? "mt-9" : ""}>
                {event.eyebrow && (
                  <p className="mb-4 text-center text-[18px] font-bold">
                    {event.eyebrow}
                  </p>
                )}

                <h4 className="mb-5 text-[18px] font-bold leading-[1.15]">
                  {event.title}
                </h4>

                <div className="space-y-4 text-[14px] font-bold leading-tight">
                  <p>
                    Date: <span>{event.date}</span>
                  </p>
                  <p>
                    Location: <span>{event.location}</span>
                  </p>
                  <p>
                    Format: <span>{event.format}</span>
                  </p>
                </div>

                <p className="mt-5 text-[12px] font-medium leading-[1.05]">
                  {event.description}
                </p>

                <p className="mt-8 text-[12px] font-semibold italic leading-tight">
                  {event.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
