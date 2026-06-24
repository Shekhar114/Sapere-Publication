import React, { useMemo, useState } from "react";
import Logo from "../../../assets/b3a4a46ae6ce743e601e5c2fda9dfb646639c587.png";

type EventItem = {
  id: string;
  title: string;
  price: number;
};

const events: EventItem[] = [
  {
    id: "founder-evening",
    title: "Founder Evening – New York (June 18)",
    price: 99,
  },
  {
    id: "workshop",
    title:
      "Workshop: The 10 things future luxury founders must get right (June 20)",
    price: 175,
  },
];

const RsvpPage: React.FC = () => {
  const [selectedEvents, setSelectedEvents] = useState<string[]>([
    "founder-evening",
  ]);

  const totalAmount = useMemo(() => {
    return events
      .filter((event) => selectedEvents.includes(event.id))
      .reduce((total, event) => total + event.price, 0);
  }, [selectedEvents]);

  const handleEventChange = (id: string) => {
    setSelectedEvents((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <main className="min-h-screen bg-[#b6b6b6] text-[#27220b]">
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

      {/* Top Section */}
      <section className="relative px-6 pt-14 pb-0">
        {/* Navbar */}
        <header className="mx-auto flex w-full max-w-[1050px] items-center justify-between text-[14px] uppercase tracking-[0.18em] text-white">
          <a href="/" className="font-serif">
            Home
          </a>

          <a href="/" className="font-serif">
            The Sapère Membership
          </a>

          <a href="/" className="font-serif">
            The Editorial System
          </a>
        </header>

        {/* Logo */}
        <div className="mt-14 flex justify-center">
          <img
            src={Logo}
            alt="Sapere Logo"
            className="h-[92px] w-[92px] object-contain opacity-60"
          />
        </div>

        {/* Heading */}
        <div className="mt-16 text-center">
          <h1
            className="text-[52px] uppercase tracking-[0.25em] text-white md:text-[62px]"
            style={{ fontFamily: `"The Seasons", Georgia, serif` }}
          >
            RSVP
          </h1>

          <p className="mx-auto mt-8 max-w-[760px] text-left text-[18px] leading-[1.35] text-white md:text-[20px]">
            Thank you for your interest. Please fill out the form below to
            request access.
            <br />
            We review every request personally and will get back to you within
            48 hours
          </p>
        </div>

        {/* Form Card */}
        <div className="mx-auto mt-16 max-w-[1015px] rounded-t-[18px] bg-[#f5f2e8] px-10 py-12 md:px-11 md:py-14">
          <form className="w-full">
            {/* Select Event */}
            <div>
              <h2
                className="mb-6 text-[32px] uppercase tracking-[0.22em]"
                style={{ fontFamily: `"The Seasons", Georgia, serif` }}
              >
                Select Event
              </h2>

              <div className="space-y-4">
                {events.map((event) => (
                  <label
                    key={event.id}
                    className="flex cursor-pointer items-start gap-3 text-[18px] leading-[1.35] text-[#27220b]"
                  >
                    <input
                      type="checkbox"
                      checked={selectedEvents.includes(event.id)}
                      onChange={() => handleEventChange(event.id)}
                      className="mt-[2px] h-[22px] w-[22px] cursor-pointer appearance-none rounded-[3px] border border-[#8d8a66] bg-transparent checked:bg-[#2a2508]"
                    />

                    <span>
                      {event.title}
                      {event.id === "workshop" && (
                        <>
                          {" "}
                          - <strong>€175</strong>
                        </>
                      )}
                    </span>
                  </label>
                ))}
              </div>

              <p className="mt-7 text-[18px]">
                <strong>Total Amount - </strong>
                {totalAmount}EURO
              </p>
            </div>

            {/* Name */}
            <div className="mt-14">
              <div className="mb-7 flex items-center gap-5">
                <h2
                  className="text-[32px] uppercase tracking-[0.22em]"
                  style={{ fontFamily: `"The Seasons", Georgia, serif` }}
                >
                  Name
                </h2>

                <span
                  className="text-[17px] tracking-[0.12em]"
                  style={{ fontFamily: `"The Seasons", Georgia, serif` }}
                >
                  *required*
                </span>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-4 block text-[18px]">First Name</label>
                  <input
                    type="text"
                    placeholder="/"
                    className="w-full border-b border-[#696332] bg-transparent px-2 pb-2 text-[22px] outline-none placeholder:text-[#27220b]"
                  />
                </div>

                <div>
                  <label className="mb-4 block text-[18px]">Last Name</label>
                  <input
                    type="text"
                    placeholder="/"
                    className="w-full border-b border-[#696332] bg-transparent px-2 pb-2 text-[22px] outline-none placeholder:text-[#27220b]"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="mt-10">
              <div className="mb-6 flex items-center gap-5">
                <h2
                  className="text-[32px] uppercase tracking-[0.22em]"
                  style={{ fontFamily: `"The Seasons", Georgia, serif` }}
                >
                  Email
                </h2>

                <span
                  className="text-[17px] tracking-[0.12em]"
                  style={{ fontFamily: `"The Seasons", Georgia, serif` }}
                >
                  *required*
                </span>
              </div>

              <input
                type="email"
                placeholder="|"
                className="w-full border-b border-[#696332] bg-transparent px-2 pb-2 text-[22px] outline-none placeholder:text-[#27220b]"
              />
            </div>

            {/* Company Sector */}
            <div className="mt-10">
              <h2
                className="mb-6 text-[32px] tracking-[0.18em]"
                style={{ fontFamily: `"The Seasons", Georgia, serif` }}
              >
                Company Sector:
              </h2>

              <input
                type="text"
                placeholder="|"
                className="w-full border-b border-[#696332] bg-transparent px-2 pb-2 text-[22px] outline-none placeholder:text-[#27220b]"
              />
            </div>

            {/* Additional Info */}
            <div className="mt-10">
              <h2
                className="mb-6 text-[32px] tracking-[0.18em]"
                style={{ fontFamily: `"The Seasons", Georgia, serif` }}
              >
                Additional information we need to know
              </h2>

              <input
                type="text"
                placeholder="|"
                className="w-full border-b border-[#696332] bg-transparent px-2 pb-2 text-[22px] outline-none placeholder:text-[#27220b]"
              />
            </div>

            {/* Button */}
            <div className="mt-16 flex justify-center">
              <button
                type="submit"
                className="h-[62px] w-full max-w-[395px] rounded-[10px] bg-[#302908] text-[15px] font-bold uppercase text-white transition hover:bg-[#1f1a05]"
              >
                RSVP & Proceed to Payment
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#292505] text-[#8f8b5b]">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-8 py-12 md:grid-cols-[1.5fr_0.8fr_1.4fr]">
          {/* Brand */}
          <div>
            <h2
              className="text-[30px] uppercase tracking-[0.04em] text-white"
              style={{ fontFamily: `"The Seasons", Georgia, serif` }}
            >
              Sapère
            </h2>

            <p className="mt-4 max-w-[410px] text-[13px] leading-[1.25]">
              An educational luxury publication exploring the forces shaping
              the global luxury industry. Through analysis, commentary, and
              lived experience, Sapère examines the structures, people, and
              ideas that define luxury beyond its surface.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-4 text-[15px] font-bold text-[#d1ca8d]">
              Explore
            </h3>

            <ul className="space-y-3 text-[13px]">
              <li>About Sapère</li>
              <li>Leadership</li>
              <li>Contributors</li>
              <li>Submit a pitch!</li>
              <li>Partnerships</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-2 text-[15px] font-bold text-[#d1ca8d]">
              Newsletter
            </h3>

            <p className="mb-5 text-[13px]">
              Weekly reflections and new essays
            </p>

            <input
              type="email"
              placeholder="Your email"
              className="h-[42px] w-full border border-[#55502a] bg-transparent px-4 text-[13px] outline-none placeholder:text-[#77724a]"
            />

            <button className="mt-3 h-[42px] w-full bg-[#96945e] text-[13px] font-bold text-white">
              Signup for Newsletter
            </button>
          </div>
        </div>

        <div className="border-t border-[#403a13]">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-5 px-8 py-6 text-[11px] md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-5">
              <img
                src={Logo}
                alt="Sapere Logo"
                className="h-[45px] w-[45px] object-contain opacity-45"
              />
              <span>© 2026 Sapère. All rights reserved.</span>
            </div>

            <div className="flex gap-8">
              <span>Instagram</span>
              <span>TikTok</span>
              <span>LinkedIn</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default RsvpPage;