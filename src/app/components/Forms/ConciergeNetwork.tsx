import React from "react";
import Logo from "../../../assets/b3a4a46ae6ce743e601e5c2fda9dfb646639c587.png";

const ConciergeNetwork: React.FC = () => {
  return (
    <main className="min-h-screen w-full bg-[#b3b3b3] text-white">
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

      {/* Hero Section */}
      <section className="w-full px-6 pt-14 md:px-28">
        {/* Navbar */}
        <header className="mx-auto grid max-w-[1050px] grid-cols-3 items-center text-center">
          <a
            href="#"
            className="text-left text-[15px] uppercase tracking-[0.18em] text-white/90"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            Home
          </a>

          <a
            href="#"
            className="text-[15px] uppercase tracking-[0.18em] text-white/90"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            The Sapère Membership
          </a>

          <a
            href="#"
            className="text-right text-[15px] uppercase tracking-[0.18em] text-white/90"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            The Editorial System
          </a>
        </header>

        {/* Logo */}
        <div className="mt-14 flex justify-center">
          <img
            src={Logo}
            alt="Sapere Logo"
            className="h-[92px] w-[92px] object-contain opacity-60 grayscale"
          />
        </div>

        {/* Heading */}
        <div className="mt-20 text-center">
          <h1
            className="text-[42px] font-normal uppercase leading-none tracking-[0.22em] md:text-[64px]"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            The Concierge Network
          </h1>

          <p className="mx-auto mt-10 max-w-[960px] text-[18px] font-semibold leading-[1.15] text-white md:text-[20px]">
            You're building the company. Let someone else handle life.
            <br />
            Whether you need restaurant reservations, travel planning, personal
            sourcing, household support,
            <br />
            special requests, or help managing everyday logistics, our trusted
            concierge partners are here to make
            <br />
            life easier.
          </p>
        </div>

        {/* Form Card */}
        <section className="mx-auto mt-20 max-w-[1000px] rounded-t-[18px] bg-[#f4f3ea] px-10 py-12 text-[#393314] md:px-10 md:py-14">
          <form className="w-full">
            {/* Name */}
            <div>
              <div className="mb-8 flex items-end gap-6">
                <h2
                  className="text-[34px] uppercase tracking-[0.12em]"
                  style={{ fontFamily: `"The Seasons", serif` }}
                >
                  Name
                </h2>
                <span
                  className="pb-2 text-[16px] tracking-[0.12em]"
                  style={{ fontFamily: `"The Seasons", serif` }}
                >
                  *required*
                </span>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label className="mb-5 block text-[18px] font-bold">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="/"
                    className="w-full border-0 border-b-2 border-[#7b7b45] bg-transparent pb-2 text-[20px] text-[#393314] outline-none placeholder:text-[#393314]"
                  />
                </div>

                <div>
                  <label className="mb-5 block text-[18px] font-bold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="/"
                    className="w-full border-0 border-b-2 border-[#7b7b45] bg-transparent pb-2 text-[20px] text-[#393314] outline-none placeholder:text-[#393314]"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="mt-10">
              <div className="mb-8 flex items-end gap-6">
                <h2
                  className="text-[34px] uppercase tracking-[0.12em]"
                  style={{ fontFamily: `"The Seasons", serif` }}
                >
                  Email
                </h2>
                <span
                  className="pb-2 text-[16px] tracking-[0.12em]"
                  style={{ fontFamily: `"The Seasons", serif` }}
                >
                  *required*
                </span>
              </div>

              <input
                type="email"
                placeholder="|"
                className="w-full border-0 border-b-2 border-[#7b7b45] bg-transparent pb-2 text-[20px] text-[#393314] outline-none placeholder:text-[#393314]"
              />
            </div>

            {/* Company Sector */}
            <div className="mt-10">
              <h2
                className="mb-8 text-[34px] tracking-[0.18em]"
                style={{ fontFamily: `"The Seasons", serif` }}
              >
                Company Sector:
              </h2>

              <input
                type="text"
                placeholder="|"
                className="w-full border-0 border-b-2 border-[#7b7b45] bg-transparent pb-2 text-[20px] text-[#393314] outline-none placeholder:text-[#393314]"
              />
            </div>

            {/* Request details */}
            <div className="mt-10">
              <h2
                className="mb-7 text-[34px] tracking-[0.18em]"
                style={{ fontFamily: `"The Seasons", serif` }}
              >
                Request details
              </h2>

              <label
                className="mb-3 block text-[21px] tracking-[0.12em]"
                style={{ fontFamily: `"The Seasons", serif` }}
              >
                Type of assistance
              </label>

              <p className="mb-4 text-[16px] font-medium">
                Describe your request in detail: (The more context you provide,
                the better we can assist you)
              </p>

              <textarea
                placeholder="/"
                rows={2}
                className="w-full resize-none border-0 border-b-2 border-[#7b7b45] bg-transparent pb-2 text-[20px] text-[#393314] outline-none placeholder:text-[#393314]"
              />
            </div>

            {/* Preferences */}
            <div className="mt-8">
              <label
                className="mb-4 block text-[21px] tracking-[0.12em]"
                style={{ fontFamily: `"The Seasons", serif` }}
              >
                Any specific preferences or constraints?
              </label>

              <input
                type="text"
                placeholder="/"
                className="w-full border-0 border-b-2 border-[#7b7b45] bg-transparent pb-2 text-[20px] text-[#393314] outline-none placeholder:text-[#393314]"
              />
            </div>

            <p className="mx-auto mt-16 max-w-[850px] text-center text-[13px] font-black leading-[1.15]">
              Your request will be reviewed personally within 24–48 hours. We
              will then connect you directly with the most relevant specialist
              or handle the arrangement on your behalf.
            </p>

            <div className="mt-12 flex justify-center">
              <button
                type="submit"
                className="h-[60px] w-full max-w-[390px] rounded-[10px] bg-[#2b2507] text-[15px] font-black uppercase text-white transition hover:bg-[#3a3210]"
              >
                Submit Concierge Request
              </button>
            </div>
          </form>
        </section>
      </section>

      {/* Footer */}
      <footer className="bg-[#272300] text-[#8f8b59]">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-8 py-12 md:grid-cols-[1.4fr_0.7fr_1fr] md:px-8">
          {/* Brand */}
          <div>
            <h2
              className="mb-5 text-[28px] uppercase tracking-[0.08em] text-[#f3f1df]"
              style={{ fontFamily: `"The Seasons", serif` }}
            >
              Sapère
            </h2>

            <p className="max-w-[420px] text-[14px] font-medium leading-[1.15]">
              An educational luxury publication exploring the forces shaping
              the global luxury industry. Through analysis, commentary, and
              lived experience, Sapère examines the structures, people, and
              ideas that define luxury beyond its surface.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-5 text-[16px] font-black text-[#9f9b68]">
              Explore
            </h3>

            <ul className="space-y-3 text-[14px] font-semibold">
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
            <h3 className="mb-2 text-[16px] font-black text-[#9f9b68]">
              Newsletter
            </h3>

            <p className="mb-5 text-[14px] font-semibold">
              Weekly reflections and new essays
            </p>

            <input
              type="email"
              placeholder="Your email"
              className="h-[42px] w-full border border-[#58512b] bg-transparent px-4 text-[14px] outline-none placeholder:text-[#625d35]"
            />

            <button className="mt-3 h-[40px] w-full bg-[#939454] text-[14px] font-black text-white">
              Signup for Newsletter
            </button>
          </div>
        </div>

        <div className="border-t border-[#433d17] px-8 py-5">
          <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-5">
            <div className="flex items-center gap-5">
              <img
                src={Logo}
                alt="Sapere Logo"
                className="h-[42px] w-[42px] object-contain opacity-50 grayscale"
              />
              <p className="text-[13px] font-semibold">
                © 2026 Sapère. All rights reserved.
              </p>
            </div>

            <div className="hidden gap-8 text-[13px] font-semibold md:flex">
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

export default ConciergeNetwork;