import React from "react";
import Logo from "../../../assets/logo.png"; // apna logo path yaha set karo

const TalentIncubatorApplication: React.FC = () => {
  return (
    <main className="min-h-screen w-full bg-[#b7b7b7] text-white">
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

      {/* Hero */}
      <section className="mx-auto w-full max-w-[1180px] px-6 pb-20 pt-16 text-center">
        {/* Navbar */}
        <nav
          className="mb-14 grid grid-cols-3 items-center text-[13px] uppercase tracking-[0.24em] text-white/90"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          <a href="#" className="justify-self-start">
            Home
          </a>
          <a href="#" className="justify-self-center">
            The Sapēre Membership
          </a>
          <a href="#" className="justify-self-end">
            The Editorial System
          </a>
        </nav>

        {/* Logo */}
        <div className="mb-14 flex justify-center">
          <img
            src={Logo}
            alt="Sapere Logo"
            className="h-[110px] w-[110px] object-contain opacity-60"
          />
        </div>

        <h1
          className="mx-auto max-w-[780px] text-[42px] uppercase leading-[1.35] tracking-[0.24em] text-white md:text-[58px]"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          Talent Incubator <br /> Application
        </h1>

        <div className="mx-auto mt-10 max-w-[870px] font-sans text-[17px] font-semibold leading-[1.25] text-white">
          <p>
            The Talent Incubator is Sapēre’s most selective program.
            <br />
            We identify exceptional founders, ventures, and ideas with long-term
            potential. Selected applicants may be invited into a tailored support
            process.
          </p>

          <p className="mt-7 text-[14px] italic text-white/80">
            We review applications carefully and respond within 10–14 days.
          </p>
        </div>
      </section>

      {/* Form Card */}
      <section className="mx-auto w-full max-w-[1040px] rounded-t-[20px] bg-[#f5f3ea] px-10 py-12 text-[#332c13] md:px-11">
        <form className="w-full">
          {/* Name */}
          <div>
            <div className="mb-8 flex items-end gap-5">
              <h2
                className="text-[33px] uppercase tracking-[0.18em]"
                style={{ fontFamily: `"The Seasons", serif` }}
              >
                Name
              </h2>
              <span
                className="pb-1 text-[16px] tracking-[0.16em]"
                style={{ fontFamily: `"The Seasons", serif` }}
              >
                *required*
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="mb-5 block font-sans text-[16px] font-semibold">
                  First Name
                </span>
                <input
                  type="text"
                  placeholder="/"
                  className="w-full border-b border-[#777748] bg-transparent pb-2 font-sans text-[18px] text-[#332c13] outline-none placeholder:text-[#332c13]"
                />
              </label>

              <label className="block">
                <span className="mb-5 block font-sans text-[16px] font-semibold">
                  Last Name
                </span>
                <input
                  type="text"
                  placeholder="/"
                  className="w-full border-b border-[#777748] bg-transparent pb-2 font-sans text-[18px] text-[#332c13] outline-none placeholder:text-[#332c13]"
                />
              </label>
            </div>
          </div>

          {/* Email */}
          <div className="mt-10">
            <div className="mb-6 flex items-end gap-5">
              <h2
                className="text-[33px] uppercase tracking-[0.18em]"
                style={{ fontFamily: `"The Seasons", serif` }}
              >
                Email
              </h2>
              <span
                className="pb-1 text-[16px] tracking-[0.16em]"
                style={{ fontFamily: `"The Seasons", serif` }}
              >
                *required*
              </span>
            </div>

            <input
              type="email"
              placeholder="/"
              className="w-full border-b border-[#777748] bg-transparent pb-2 font-sans text-[18px] text-[#332c13] outline-none placeholder:text-[#332c13]"
            />
          </div>

          {/* Company */}
          <div className="mt-10">
            <h2
              className="mb-7 text-[32px] tracking-[0.18em]"
              style={{ fontFamily: `"The Seasons", serif` }}
            >
              Company / Sector:
            </h2>

            <input
              type="text"
              placeholder="/"
              className="w-full border-b border-[#777748] bg-transparent pb-2 font-sans text-[18px] text-[#332c13] outline-none placeholder:text-[#332c13]"
            />
          </div>

          {/* Website */}
          <div className="mt-10">
            <h2
              className="mb-7 text-[32px] tracking-[0.18em]"
              style={{ fontFamily: `"The Seasons", serif` }}
            >
              Website / Socials
            </h2>

            <input
              type="text"
              placeholder="/"
              className="w-full border-b border-[#777748] bg-transparent pb-2 font-sans text-[18px] text-[#332c13] outline-none placeholder:text-[#332c13]"
            />
          </div>

          {/* Your Company */}
          <div className="mt-5">
            <h3
              className="mb-5 text-[18px] tracking-[0.2em]"
              style={{ fontFamily: `"The Seasons", serif` }}
            >
              Your company
            </h3>

            <p
              className="mb-3 text-[17px] tracking-[0.12em]"
              style={{ fontFamily: `"The Seasons", serif` }}
            >
              Stage
            </p>

            <div className="space-y-3 font-sans text-[13px] font-semibold">
              {[
                "Pre-launch / Idea Stage",
                "0-1 year",
                "1-3 year",
                "Other",
              ].map((item) => (
                <label key={item} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="h-[20px] w-[20px] appearance-none rounded-[2px] border border-[#8c8b63] bg-transparent checked:bg-[#3d350d]"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-7">
            <label className="block">
              <span
                className="mb-4 block text-[18px] tracking-[0.18em]"
                style={{ fontFamily: `"The Seasons", serif` }}
              >
                Short description of your brand / venture *2–3 sentences*:
              </span>
              <input
                type="text"
                placeholder="/"
                className="w-full border-b border-[#777748] bg-transparent pb-2 font-sans text-[18px] text-[#332c13] outline-none placeholder:text-[#332c13]"
              />
            </label>

            <label className="block">
              <span
                className="mb-4 block text-[18px] tracking-[0.15em]"
                style={{ fontFamily: `"The Seasons", serif` }}
              >
                Current traction *revenue, customers, key milestones, funding,
                etc.*:
              </span>
              <input
                type="text"
                placeholder="/"
                className="w-full border-b border-[#777748] bg-transparent pb-2 font-sans text-[18px] text-[#332c13] outline-none placeholder:text-[#332c13]"
              />
            </label>
          </div>

          {/* Why */}
          <div className="mt-12">
            <h2
              className="mb-12 text-[32px] tracking-[0.16em]"
              style={{ fontFamily: `"The Seasons", serif` }}
            >
              Why Sapēre talent incubator?
            </h2>

            <div className="space-y-10">
              <label className="block">
                <span
                  className="mb-5 block text-[18px] tracking-[0.16em]"
                  style={{ fontFamily: `"The Seasons", serif` }}
                >
                  What is the biggest challenge currently holding your company
                  back?
                </span>
                <input
                  type="text"
                  placeholder="/"
                  className="w-full border-b border-[#777748] bg-transparent pb-2 font-sans text-[18px] text-[#332c13] outline-none placeholder:text-[#332c13]"
                />
              </label>

              <label className="block">
                <span
                  className="mb-5 block text-[18px] tracking-[0.15em]"
                  style={{ fontFamily: `"The Seasons", serif` }}
                >
                  Why do you feel this is the right moment for your company to
                  join the talent incubator?
                </span>
                <input
                  type="text"
                  placeholder="/"
                  className="w-full border-b border-[#777748] bg-transparent pb-2 font-sans text-[18px] text-[#332c13] outline-none placeholder:text-[#332c13]"
                />
              </label>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <button
              type="submit"
              className="h-[62px] w-full max-w-[410px] rounded-[10px] bg-[#3b340d] font-sans text-[13px] font-extrabold uppercase text-white transition hover:bg-[#2d2708]"
            >
              Submit Application
            </button>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-[#201b03] px-8 pb-8 pt-12 text-[#87875d]">
        <div className="mx-auto grid max-w-[1260px] gap-12 md:grid-cols-[1.25fr_0.7fr_1.2fr]">
          <div>
            <h2
              className="mb-5 text-[28px] uppercase tracking-[0.12em] text-white"
              style={{ fontFamily: `"The Seasons", serif` }}
            >
              Sapēre
            </h2>

            <p className="max-w-[390px] font-sans text-[13px] leading-[1.35]">
              An educational luxury publication exploring the forces shaping the
              global luxury industry. Through analysis, commentary, and lived
              experience, Sapēre examines the structures, people, and ideas that
              define luxury beyond its surface.
            </p>
          </div>

          <div>
            <h3 className="mb-5 font-sans text-[14px] font-bold text-[#9b9b68]">
              Explore
            </h3>

            <ul className="space-y-3 font-sans text-[13px]">
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
            <h3 className="mb-2 font-sans text-[14px] font-bold text-[#9b9b68]">
              Newsletter
            </h3>

            <p className="mb-5 font-sans text-[13px]">
              Weekly reflections and new essays
            </p>

            <input
              type="email"
              placeholder="Your email"
              className="mb-4 h-[44px] w-full border border-[#4e481e] bg-transparent px-4 font-sans text-[13px] text-white outline-none placeholder:text-[#696944]"
            />

            <button className="h-[42px] w-full bg-[#8d8d58] font-sans text-[13px] font-bold text-white">
              Signup for Newsletter
            </button>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-[1260px] items-center justify-between border-t border-[#332d0e] pt-5 text-[11px]">
          <div className="flex items-center gap-5">
            <img
              src={Logo}
              alt="Sapere Logo"
              className="h-[36px] w-[36px] object-contain opacity-40"
            />
            <p>© 2026 Sapēre. All rights reserved.</p>
          </div>

          <div className="flex gap-8">
            <span>Instagram</span>
            <span>TikTok</span>
            <span>LinkedIn</span>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default TalentIncubatorApplication;