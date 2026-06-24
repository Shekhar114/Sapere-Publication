import React from "react";
import Logo from "../../../assets/b3a4a46ae6ce743e601e5c2fda9dfb646639c587.png";

const PartnerNetworkRequest: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#b6b6b4] text-white">
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
      <section className="relative flex w-full flex-col items-center px-6 pb-16 pt-12">
        {/* Top Navbar */}
        <nav
          className="flex w-full max-w-[1040px] items-center justify-between text-[14px] uppercase tracking-[0.22em] text-white/90"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          <a href="#">Home</a>
          <a href="#">The Sapère Membership</a>
          <a href="#">The Editorial System</a>
        </nav>

        {/* Logo */}
        <div className="mt-12 flex h-[90px] w-[90px] items-center justify-center opacity-70">
          <img
            src={Logo}
            alt="Sapere Logo"
            className="h-full w-full object-contain grayscale"
          />
        </div>

        {/* Heading */}
        <h1
          className="mt-12 text-center text-[38px] uppercase tracking-[0.24em] text-white md:text-[58px]"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          The Partner Network
        </h1>

        <h2
          className="mt-10 text-center text-[26px] uppercase tracking-[0.26em] text-white md:text-[36px]"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          Intriduction Request
        </h2>

        <p className="mt-7 max-w-[760px] text-center text-[18px] font-semibold leading-[1.2] text-white">
          Whatever your company needs next, we know who to call.
          <br />
          Members gain access to a curated ecosystem of specialists, advisors,
          and service providers, so whatever comes next, you know where to turn.
        </p>

        <p className="mt-7 text-center text-[18px] font-bold text-white">
          Please submit your request below.
        </p>

        <p className="mt-2 text-center text-[15px] font-semibold italic text-white/80">
          We review every submission personally and aim to respond within 48–72
          hours
        </p>
      </section>

      {/* Form Card */}
      <section className="px-5">
        <div className="mx-auto max-w-[1000px] rounded-t-[18px] bg-[#f7f5ec] px-10 py-12 text-[#31290b] md:px-12 md:py-14">
          {/* Name */}
          <div className="mb-10">
            <div className="mb-8 flex items-center gap-6">
              <h3
                className="text-[32px] uppercase tracking-[0.12em]"
                style={{ fontFamily: `"The Seasons", serif` }}
              >
                Name
              </h3>
              <span
                className="text-[15px] tracking-[0.15em]"
                style={{ fontFamily: `"The Seasons", serif` }}
              >
                *required*
              </span>
            </div>

            <div className="grid gap-7 md:grid-cols-2">
              <div>
                <label className="mb-4 block text-[18px] font-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="/"
                  className="w-full border-b-2 border-[#858456] bg-transparent px-2 pb-2 text-[20px] text-[#31290b] outline-none placeholder:text-[#31290b]"
                />
              </div>

              <div>
                <label className="mb-4 block text-[18px] font-semibold">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="/"
                  className="w-full border-b-2 border-[#858456] bg-transparent px-2 pb-2 text-[20px] text-[#31290b] outline-none placeholder:text-[#31290b]"
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="mb-10">
            <div className="mb-7 flex items-center gap-6">
              <h3
                className="text-[32px] uppercase tracking-[0.12em]"
                style={{ fontFamily: `"The Seasons", serif` }}
              >
                Email
              </h3>
              <span
                className="text-[15px] tracking-[0.15em]"
                style={{ fontFamily: `"The Seasons", serif` }}
              >
                *required*
              </span>
            </div>

            <input
              type="email"
              placeholder="|"
              className="w-full border-b-2 border-[#858456] bg-transparent px-2 pb-2 text-[20px] text-[#31290b] outline-none placeholder:text-[#31290b]"
            />
          </div>

          {/* Company Sector */}
          <div className="mb-10">
            <h3
              className="mb-7 text-[32px] tracking-[0.18em]"
              style={{ fontFamily: `"The Seasons", serif` }}
            >
              Company Sector:
            </h3>

            <input
              type="text"
              placeholder="|"
              className="w-full border-b-2 border-[#858456] bg-transparent px-2 pb-2 text-[20px] text-[#31290b] outline-none placeholder:text-[#31290b]"
            />
          </div>

          {/* Session Details */}
          <div>
            <h3
              className="mb-7 text-[32px] tracking-[0.18em]"
              style={{ fontFamily: `"The Seasons", serif` }}
            >
              Session Details
            </h3>

            <label
              className="mb-3 block text-[17px] tracking-[0.16em]"
              style={{ fontFamily: `"The Seasons", serif` }}
            >
              Partner you’d like an introduction to:*
            </label>
            <input
              type="text"
              placeholder="/"
              className="mb-5 w-full border-b-2 border-[#858456] bg-transparent px-2 pb-2 text-[20px] text-[#31290b] outline-none placeholder:text-[#31290b]"
            />

            <label
              className="mb-3 block text-[17px] tracking-[0.16em]"
              style={{ fontFamily: `"The Seasons", serif` }}
            >
              Describe your request and what you’re hoping to achieve:
            </label>
            <input
              type="text"
              placeholder="/"
              className="w-full border-b-2 border-[#858456] bg-transparent px-2 pb-2 text-[20px] text-[#31290b] outline-none placeholder:text-[#31290b]"
            />
          </div>

          <p className="mx-auto mt-14 max-w-[870px] text-center text-[12px] font-bold leading-[1.25] text-[#31290b]">
            Your request will be reviewed personally within 24–48 hours. We will
            then connect you directly with the most relevant specialist or
            handle the arrangement on your behalf.
          </p>

          <div className="mt-14 flex justify-center">
            <button className="rounded-[10px] bg-[#2d2606] px-9 py-4 text-[14px] font-extrabold uppercase text-white transition hover:bg-[#443a0d] md:px-12">
              Book Session & Proceed To Payment
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#292501] text-[#8f8b5f]">
        <div className="mx-auto grid max-w-[1220px] gap-12 px-8 py-12 md:grid-cols-[1.3fr_0.8fr_1.2fr]">
          {/* Brand */}
          <div>
            <h2
              className="text-[28px] uppercase tracking-[0.08em] text-[#f7f5ec]"
              style={{ fontFamily: `"The Seasons", serif` }}
            >
              Sapère
            </h2>

            <p className="mt-5 max-w-[390px] text-[13px] leading-[1.15]">
              An educational luxury publication exploring the forces shaping the
              global luxury industry. Through analysis, commentary, and lived
              experience, Sapère examines the structures, people, and ideas that
              define luxury beyond its surface.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-5 text-[15px] font-bold text-[#b8b380]">
              Explore
            </h4>

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
            <h4 className="mb-2 text-[15px] font-bold text-[#b8b380]">
              Newsletter
            </h4>

            <p className="mb-4 text-[13px]">
              Weekly reflections and new essays
            </p>

            <input
              type="email"
              placeholder="Your email"
              className="h-[42px] w-full border border-[#55512a] bg-transparent px-5 text-[13px] text-white outline-none placeholder:text-[#6d6840]"
            />

            <button className="mt-3 h-[42px] w-full bg-[#8b8b52] text-[13px] font-bold text-white">
              Signup for Newsletter
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#3c360b] px-8 py-5">
          <div className="mx-auto flex max-w-[1220px] flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <img
                src={Logo}
                alt="Sapere Logo"
                className="h-[40px] w-[40px] object-contain opacity-50 grayscale"
              />
              <p className="text-[12px]">© 2026 Sapère. All rights reserved.</p>
            </div>

            <div className="flex gap-8 text-[12px]">
              <a href="#">Instagram</a>
              <a href="#">TikTok</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default PartnerNetworkRequest;