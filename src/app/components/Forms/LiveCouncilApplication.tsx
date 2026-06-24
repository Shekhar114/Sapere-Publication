import React, { useState } from "react";
import Logo from "../../../assets/your-logo.png"; // change this path

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

const topics = [
  "Positioning & brand strategy",
  "Capital & funding",
  "Team & leadership",
  "Market entry & expansion",
  "Other (please specify)",
];

const LiveCouncilApplication: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <main className="min-h-screen bg-[#b7b7b7] text-[#302b12]">
      {/* Hero */}
      <section className="relative px-6 pt-14">
        {/* Navbar */}
        <nav
          className="mx-auto flex max-w-[1100px] items-center justify-between text-[13px] uppercase tracking-[0.18em] text-white"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          <a href="#">Home</a>
          <a href="#">The Sapère Membership</a>
          <a href="#">The Editorial System</a>
        </nav>

        {/* Logo */}
        <div className="mt-14 flex justify-center">
          <img
            src={Logo}
            alt="Sapère Logo"
            className="h-[95px] w-[95px] object-contain opacity-60 grayscale"
          />
        </div>

        {/* Title */}
        <div className="mt-12 text-center text-white">
          <h1
            className="text-[42px] uppercase leading-[1.35] tracking-[0.18em] md:text-[58px]"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            Live Council <br /> Application
          </h1>

          <p className="mx-auto mt-8 max-w-[920px] text-[15px] font-semibold leading-[1.25] md:text-[18px]">
            Live Council sessions are intimate, high-level group discussions
            where members can engage directly, ask questions, and participate in
            strategic conversations on topics relevant to building in luxury.
          </p>
        </div>

        {/* Form Card */}
        <section className="mx-auto mt-16 max-w-[990px] rounded-t-[18px] bg-[#f3f1e8] px-8 py-12 md:px-11">
          <form className="space-y-9">
            {/* Name */}
            <div>
              <div className="mb-6 flex items-end gap-6">
                <h2
                  className="text-[28px] uppercase tracking-[0.18em]"
                  style={{ fontFamily: `"The Seasons", serif` }}
                >
                  Name
                </h2>
                <span className="text-[13px] tracking-[0.15em]">
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
                    className="w-full border-0 border-b-2 border-[#8c8a5a] bg-transparent px-2 py-2 text-[16px] outline-none"
                  />
                </label>

                <label className="block">
                  <span className="mb-4 block text-[16px] font-semibold">
                    Last Name
                  </span>
                  <input
                    type="text"
                    className="w-full border-0 border-b-2 border-[#8c8a5a] bg-transparent px-2 py-2 text-[16px] outline-none"
                  />
                </label>
              </div>
            </div>

            {/* Email */}
            <div>
              <div className="mb-4 flex items-end gap-6">
                <h2
                  className="text-[28px] uppercase tracking-[0.18em]"
                  style={{ fontFamily: `"The Seasons", serif` }}
                >
                  Email
                </h2>
                <span className="text-[13px] tracking-[0.15em]">
                  *required*
                </span>
              </div>

              <input
                type="email"
                className="w-full border-0 border-b-2 border-[#8c8a5a] bg-transparent px-2 py-2 text-[16px] outline-none"
              />
            </div>

            {/* Company */}
            <div>
              <h2
                className="mb-4 text-[28px] tracking-[0.15em]"
                style={{ fontFamily: `"The Seasons", serif` }}
              >
                Company / Sector:
              </h2>

              <input
                type="text"
                className="w-full border-0 border-b-2 border-[#8c8a5a] bg-transparent px-2 py-2 text-[16px] outline-none"
              />
            </div>

            {/* Session Interest */}
            <div>
              <h2
                className="mb-4 text-[20px] tracking-[0.18em]"
                style={{ fontFamily: `"The Seasons", serif` }}
              >
                Session interest
              </h2>

              <p
                className="mb-3 text-[15px] tracking-[0.15em]"
                style={{ fontFamily: `"The Seasons", serif` }}
              >
                Preferred Topic Theme
              </p>

              <div className="space-y-3">
                {topics.map((topic) => (
                  <label
                    key={topic}
                    className="flex cursor-pointer items-center gap-3 text-[14px] font-semibold"
                  >
                    <input
                      type="checkbox"
                      className="h-[19px] w-[19px] appearance-none rounded-[3px] border border-[#9f9d80] bg-transparent checked:bg-[#302b12]"
                    />
                    {topic}
                  </label>
                ))}
              </div>

              <label className="mt-6 block">
                <span
                  className="mb-4 block text-[19px] tracking-[0.16em]"
                  style={{ fontFamily: `"The Seasons", serif` }}
                >
                  Any specific questions you’d like addressed in the session?
                </span>

                <input
                  type="text"
                  className="w-full border-0 border-b-2 border-[#8c8a5a] bg-transparent px-2 py-2 text-[16px] outline-none"
                />
              </label>
            </div>

            {/* Availability */}
            <div className="pt-8">
              <h2
                className="mb-8 text-[32px] tracking-[0.13em]"
                style={{ fontFamily: `"The Seasons", serif` }}
              >
                Availability
              </h2>

              <div className="mb-6 flex flex-wrap gap-4">
                {days.map((item, index) => (
                  <button
                    type="button"
                    key={`${item.day}-${index}`}
                    onClick={() => setSelectedDay(index)}
                    className={`h-[56px] min-w-[82px] rounded-[11px] text-[14px] font-bold leading-[1.4] ${
                      selectedDay === index
                        ? "bg-[#302b12] text-white"
                        : "bg-[#eae9e5] text-[#302b12]"
                    }`}
                  >
                    <span className="block">{item.day}</span>
                    <span className="block">{item.date}</span>
                  </button>
                ))}
              </div>

              <div className="grid max-w-[500px] grid-cols-3 gap-4 md:grid-cols-5">
                {times.map((time) => (
                  <button
                    type="button"
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`rounded-[10px] px-3 py-3 text-[14px] font-bold ${
                      selectedTime === time
                        ? "bg-[#302b12] text-white"
                        : "bg-[#eae9e5] text-[#302b12]"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <p className="pt-8 text-center text-[12px] font-extrabold leading-[1.25]">
              Your application will be reviewed by the Sapère team. We’ll
              confirm your spot in the next upcoming Live Council session and
              send you the details, agenda, and link.
            </p>

            <div className="flex justify-center pt-8">
              <button
                type="submit"
                className="rounded-[10px] bg-[#302b12] px-10 py-5 text-[13px] font-extrabold uppercase text-white transition hover:bg-[#4a421b]"
              >
                Submit Application for Live Council
              </button>
            </div>
          </form>
        </section>
      </section>

      {/* Footer */}
      <footer className="bg-[#292406] text-[#8b875a]">
        <div className="mx-auto grid max-w-[1220px] gap-12 px-8 py-12 md:grid-cols-[1.5fr_1fr_1.4fr]">
          <div>
            <h2
              className="mb-4 text-[26px] text-white"
              style={{ fontFamily: `"The Seasons", serif` }}
            >
              SAPÈRE
            </h2>
            <p className="max-w-[360px] text-[13px] leading-[1.25]">
              An educational luxury publication exploring the forces shaping the
              global luxury industry. Through analysis, commentary, and lived
              experience, Sapère examines the structures, people, and ideas that
              define luxury beyond its surface.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-[15px] font-bold text-[#a4a174]">
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

          <div>
            <h3 className="mb-2 text-[15px] font-bold text-[#a4a174]">
              Newsletter
            </h3>
            <p className="mb-5 text-[13px]">Weekly reflections and new essays</p>

            <input
              type="email"
              placeholder="Your email"
              className="mb-2 w-full border border-[#4c471d] bg-transparent px-5 py-4 text-[13px] outline-none placeholder:text-[#746f42]"
            />

            <button className="w-full bg-[#898b58] py-4 text-[13px] font-bold text-white">
              Signup for Newsletter
            </button>
          </div>
        </div>

        <div className="border-t border-[#474019]">
          <div className="mx-auto flex max-w-[1220px] items-center justify-between px-8 py-5 text-[11px]">
            <div className="flex items-center gap-5">
              <img
                src={Logo}
                alt="Sapère Logo"
                className="h-[38px] w-[38px] object-contain opacity-40 grayscale"
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

export default LiveCouncilApplication;