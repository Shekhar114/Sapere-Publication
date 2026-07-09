import React from "react";
import Logo from "../../assets/b3a4a46ae6ce743e601e5c2fda9dfb646639c587.png";

const exploreLinks = [
  "The Editorial System",
  "Access Prōficīō",
  "Access Ascendō",
  "Access Ēmineō",
  "Membership",
];

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-[#292306] text-[#b3ad87]">
      {/* MOBILE VIEW */}
      <div className="block w-full md:hidden">
        <div className="mx-auto w-full max-w-[520px] px-8 pt-10 pb-8">
          {/* Title */}
          <h2
            className="mb-4 text-[32px] font-normal leading-none tracking-[0.08em] text-white"
            style={{ fontFamily: `"The Seasons", Georgia, serif` }}
          >
            SAPĒRE
          </h2>

          {/* Description */}
          <p className="text-[14px] leading-[1.5] text-[#8d8966]">
            An educational luxury publication exploring the forces shaping the
            global luxury industry. Through analysis, commentary, and lived
            experience, Sapēre examines the structures, people, and ideas that
            define luxury beyond its surface.
          </p>

          {/* Explore */}
          <div className="mt-10">
            <h3 className="mb-4 text-[17px] font-bold text-[#b3ad87]">
              Explore
            </h3>

            <ul className="space-y-[16px] text-[15px]">
              {exploreLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition-colors duration-200 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="mt-10">
            <h3 className="mb-2 text-[17px] font-bold text-[#b3ad87]">
              Newsletter
            </h3>

            <p className="mb-4 text-[14px] text-[#8d8966]">
              Weekly reflections and new essays
            </p>

            <form className="w-full">
              <input
                type="email"
                placeholder="Your email"
                className="h-[44px] w-full border border-[#514b2b] bg-transparent px-4 text-[14px] text-white outline-none placeholder:text-[#68623f]"
              />

              <button
                type="submit"
                className="mt-3 h-[42px] w-full bg-[#858751] text-[14px] font-bold text-white transition-opacity duration-200 hover:opacity-90"
              >
                Signup for Newsletter
              </button>
            </form>
          </div>

          {/* Bottom */}
          <div className="mt-10 border-t border-[#403916] pt-6">
            <div className="flex items-center gap-4">
              <div className="flex h-[45px] w-[45px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#8d8966]/50">
                <img
                  src={Logo}
                  alt="Sapēre"
                  className="h-full w-full object-contain p-[6px]"
                />
              </div>

              <p className="text-[12px] leading-[1.4] tracking-[0.03em] text-[#746f4d]">
                © 2026 Sapēre. All rights reserved.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-center gap-7 text-[13px] text-[#746f4d]">
              <a href="#" className="transition-colors duration-200 hover:text-white">Instagram</a>
              <a href="#" className="transition-colors duration-200 hover:text-white">TikTok</a>
              <a href="#" className="transition-colors duration-200 hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP / TABLET VIEW */}
      <div className="mx-auto hidden w-full max-w-[1280px] px-8 pt-12 md:block">
        <div className="grid grid-cols-1 gap-12 pb-8 md:grid-cols-[1.2fr_0.8fr_1.25fr] md:gap-20">
          {/* Left */}
          <div>
            <h2
              className="mb-4 text-[30px] font-normal leading-none tracking-[0.08em] text-white"
              style={{ fontFamily: `"The Seasons", Georgia, serif` }}
            >
              SAPĒRE
            </h2>

            <p className="max-w-[390px] text-[14px] leading-[1.15] text-[#8d8966]">
              An educational luxury publication exploring the forces shaping the
              global luxury industry. Through analysis, commentary, and lived
              experience, Sapēre examines the structures, people, and ideas that
              define luxury beyond its surface.
            </p>
          </div>

          {/* Explore */}
          <div className="md:pl-3">
            <h3 className="mb-4 text-[16px] font-bold text-[#b3ad87]">
              Explore
            </h3>

            <ul className="space-y-[12px] text-[14px]">
              {[
                "About Sapēre",
                "Leadership",
                "Contributors",
                "Submit a pitch!",
                "Partnerships",
                "Contact",
                "Privacy Policy",
                "Terms and Conditions",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors duration-200 hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-2 text-[16px] font-bold text-[#b3ad87]">
              Newsletter
            </h3>

            <p className="mb-4 text-[14px] text-[#8d8966]">
              Weekly reflections and new essays
            </p>

            <form className="w-full max-w-[398px]">
              <input
                type="email"
                placeholder="Your email"
                className="h-[42px] w-full border border-[#514b2b] bg-transparent px-4 text-[14px] text-white outline-none placeholder:text-[#68623f]"
              />

              <button
                type="submit"
                className="mt-3 h-[39px] w-full bg-[#858751] text-[14px] font-bold text-white transition-opacity duration-200 hover:opacity-90"
              >
                Signup for Newsletter
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#403916] py-[18px]">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-5">
              <div className="flex h-[45px] w-[45px] items-center justify-center rounded-full border border-[#8d8966]/50">
                <span
                  className="text-[18px] text-[#b3ad87]"
                  style={{ fontFamily: `"The Seasons", Georgia, serif` }}
                >
                  S
                </span>
              </div>

              <p className="text-[12px] tracking-[0.03em] text-[#746f4d]">
                © 2026 Sapēre. All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-7 text-[12px] text-[#746f4d]">
              <a href="#" className="transition-colors duration-200 hover:text-white">Instagram</a>
              <a href="#" className="transition-colors duration-200 hover:text-white">TikTok</a>
              <a href="#" className="transition-colors duration-200 hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}