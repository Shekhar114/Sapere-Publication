import React, { useState } from "react";
import Logo from "../../../assets/b3a4a46ae6ce743e601e5c2fda9dfb646639c587.png";

const days = [
  { day: "Tue", date: "Today" },
  { day: "Wed", date: "29" },
  { day: "Thu", date: "29" },
  { day: "Fir", date: "30" },
  { day: "Sat", date: "31" },
];

const times = [
  "9:00 am",
  "9:30 am",
  "10:00 am",
  "10:30 am",
  "11:00 am",
  "11:30 am",
  "12:00 pm",
  "12:30 pm",
  "1:00 pm",
  "1:30 pm",
  "2:00 pm",
  "2:30 pm",
  "3:00 pm",
  "3:30 pm",
  "4:00 pm",
];

const BookOfficeHours: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <main className="min-h-screen bg-[#adadad] text-[#342d12]">
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

      {/* Header */}
      <section className="relative px-6 pt-12 pb-10 text-white">
        <header className="mx-auto flex max-w-[980px] items-center justify-between text-[13px] uppercase tracking-[0.22em]">
          <a href="#" className="hover:opacity-70">
            Home
          </a>
          <a href="#" className="hover:opacity-70">
            The Sapēre Membership
          </a>
          <a href="#" className="hover:opacity-70">
            The Editorial System
          </a>
        </header>

        <div className="mt-12 flex justify-center">
          <img
            src={Logo}
            alt="Sapere Logo"
            className="h-[105px] w-[105px] object-contain opacity-45"
          />
        </div>

        <div className="mx-auto mt-12 max-w-[850px] text-center">
          <h1
            className="text-[42px] uppercase leading-none tracking-[0.22em] text-white md:text-[58px]"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            Book Office Hours
          </h1>

          <p className="mx-auto mt-8 max-w-[720px] text-[17px] font-semibold leading-[1.25] text-white md:text-[20px]">
            30-minute focused strategy sessions with Sapēre experts.
            <br />
            These sessions are designed to give you direct, actionable guidance
            on your biggest challenges right now.
          </p>
        </div>
      </section>

      {/* Form Card */}
      <section className="px-6 pb-0">
        <div className="mx-auto max-w-[1000px] rounded-t-[18px] bg-[#f2f0e7] px-8 py-12 md:px-10 lg:px-12">
          <form className="space-y-10">
            {/* Name */}
            <div>
              <div className="mb-8 flex items-center gap-6">
                <h2
                  className="text-[32px] uppercase tracking-[0.2em]"
                  style={{ fontFamily: `"The Seasons", serif` }}
                >
                  Name
                </h2>
                <span
                  className="text-[14px] tracking-[0.15em]"
                  style={{ fontFamily: `"The Seasons", serif` }}
                >
                  *required*
                </span>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="mb-4 block text-[16px] font-semibold">
                    First Name
                  </span>
                  <input
                    type="text"
                    placeholder="/"
                    className="w-full border-0 border-b border-[#7d7b52] bg-transparent pb-2 text-[18px] outline-none placeholder:text-[#342d12]"
                  />
                </label>

                <label className="block">
                  <span className="mb-4 block text-[16px] font-semibold">
                    Last Name
                  </span>
                  <input
                    type="text"
                    placeholder="/"
                    className="w-full border-0 border-b border-[#7d7b52] bg-transparent pb-2 text-[18px] outline-none placeholder:text-[#342d12]"
                  />
                </label>
              </div>
            </div>

            {/* Email */}
            <div>
              <div className="mb-7 flex items-center gap-6">
                <h2
                  className="text-[32px] uppercase tracking-[0.2em]"
                  style={{ fontFamily: `"The Seasons", serif` }}
                >
                  Email
                </h2>
                <span
                  className="text-[14px] tracking-[0.15em]"
                  style={{ fontFamily: `"The Seasons", serif` }}
                >
                  *required*
                </span>
              </div>

              <input
                type="email"
                placeholder="/"
                className="w-full border-0 border-b border-[#7d7b52] bg-transparent pb-2 text-[18px] outline-none placeholder:text-[#342d12]"
              />
            </div>

            {/* Company */}
            <div>
              <h2
                className="mb-7 text-[31px] tracking-[0.18em]"
                style={{ fontFamily: `"The Seasons", serif` }}
              >
                Company ♣ Sector:
              </h2>

              <input
                type="text"
                placeholder="/"
                className="w-full border-0 border-b border-[#7d7b52] bg-transparent pb-2 text-[18px] outline-none placeholder:text-[#342d12]"
              />
            </div>

            {/* Session Details */}
            <div>
              <h2
                className="mb-5 text-[31px] tracking-[0.16em]"
                style={{ fontFamily: `"The Seasons", serif` }}
              >
                Session Details
              </h2>

              <label className="block">
                <span
                  className="mb-2 block text-[19px] tracking-[0.14em]"
                  style={{ fontFamily: `"The Seasons", serif` }}
                >
                  What would you like to discuss?
                </span>

                <span className="mb-4 block text-[14px] font-semibold">
                  (Please be as specific as possible. The more clarity you give,
                  the more valuable the session will be)
                </span>

                <input
                  type="text"
                  placeholder="/"
                  className="w-full border-0 border-b border-[#7d7b52] bg-transparent pb-2 text-[18px] outline-none placeholder:text-[#342d12]"
                />
              </label>
            </div>

            {/* Time + Pricing */}
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
              <div>
                <h2
                  className="mb-8 text-[27px] tracking-[0.18em] md:text-[32px]"
                  style={{ fontFamily: `"The Seasons", serif` }}
                >
                  Preferred Time ♣ CEST ♣
                </h2>

                <div className="flex flex-wrap gap-4">
                  {days.map((item, index) => (
                    <button
                      key={`${item.day}-${item.date}`}
                      type="button"
                      onClick={() => setSelectedDay(index)}
                      className={`h-[58px] w-[84px] rounded-[10px] text-[14px] font-bold leading-[1.25] transition ${
                        selectedDay === index
                          ? "bg-[#302a0e] text-white"
                          : "bg-[#e9e8e2] text-[#302a0e]"
                      }`}
                    >
                      {item.day}
                      <br />
                      {item.date}
                    </button>
                  ))}
                </div>

                <div className="mt-6 flex max-w-[560px] flex-wrap gap-4">
                  {times.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`rounded-[8px] px-4 py-3 text-[14px] font-bold transition ${
                        selectedTime === time
                          ? "bg-[#302a0e] text-white"
                          : "bg-[#e9e8e2] text-[#302a0e]"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <h2
                className="whitespace-nowrap text-[27px] tracking-[0.16em] md:text-[32px] lg:pt-[2px]"
                style={{ fontFamily: `"The Seasons", serif` }}
              >
                Pricing: 100EURO
              </h2>
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="rounded-[10px] bg-[#302a0e] px-10 py-5 text-[14px] font-extrabold uppercase text-white transition hover:bg-[#4a421a]"
              >
                Book Session & Proceed To Payment
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#292405] px-6 pt-12 text-[#8d8a60]">
        <div className="mx-auto grid max-w-[1250px] gap-12 pb-10 md:grid-cols-[1.5fr_1fr_1.45fr]">
          <div>
            <h3
              className="mb-5 text-[25px] uppercase tracking-[0.08em] text-white"
              style={{ fontFamily: `"The Seasons", serif` }}
            >
              Sapēre
            </h3>
            <p className="max-w-[420px] text-[13px] leading-[1.35]">
              An educational luxury publication exploring the forces shaping
              the global luxury industry. Through analysis, commentary, and
              lived experience, Sapēre examines the structures, people, and
              ideas that define luxury beyond its surface.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-[15px] font-bold text-[#a6a36e]">
              Explore
            </h4>
            <ul className="space-y-3 text-[13px]">
              <li>About Sapēre</li>
              <li>Leadership</li>
              <li>Contributors</li>
              <li>Submit a pitch!</li>
              <li>Partnerships</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[15px] font-bold text-[#a6a36e]">
              Newsletter
            </h4>
            <p className="mb-4 text-[13px]">
              Weekly reflections and new essays
            </p>

            <input
              type="email"
              placeholder="Your email"
              className="mb-3 h-[42px] w-full border border-[#6f6b38] bg-transparent px-4 text-[13px] outline-none placeholder:text-[#6f6b38]"
            />

            <button className="h-[42px] w-full bg-[#8f8d55] text-[13px] font-bold text-white">
              Signup for Newsletter
            </button>
          </div>
        </div>

        <div className="mx-auto flex max-w-[1250px] items-center justify-between border-t border-[#423b14] py-6 text-[12px]">
          <div className="flex items-center gap-5">
            <img
              src={Logo}
              alt="Sapere Logo"
              className="h-[38px] w-[38px] object-contain opacity-40"
            />
            <span>© 2026 Sapēre. All rights reserved.</span>
          </div>

          <div className="hidden gap-8 md:flex">
            <span>Instagram</span>
            <span>Tiktok</span>
            <span>LinkedIn</span>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default BookOfficeHours;