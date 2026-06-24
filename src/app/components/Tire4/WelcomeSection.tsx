import React from "react";
import Logo from "../../../assets/b3a4a46ae6ce743e601e5c2fda9dfb646639c587.png";

const WelcomeSection: React.FC = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden border-x-[1px] border-t-[2px] border-[#3d3d3d] bg-[#cfcfcf] text-[#302b12]">
      {/* Top Menu */}
      <header className="relative z-10 w-full px-[22px] pt-[28px]">
        {/* First Row */}
        <div
          className="grid w-full grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto] items-center text-center text-[16px] font-medium uppercase tracking-[0.01em] text-[#24210e]"
          style={{ fontFamily: `"Inter", Arial, sans-serif` }}
        >
          <span className="text-[22px] leading-none">|</span>
          <span>Editorial System</span>

          <span className="text-[22px] leading-none">|</span>
          <span>Access Ascendo</span>

          <span className="text-[22px] leading-none">|</span>
          <span>Access Proficio</span>

          <span className="text-[22px] leading-none">|</span>
          <span>Access Emineo</span>

          <span className="text-[22px] leading-none">|</span>
        </div>

        {/* Second Row */}
        <div
          className="mt-[28px] grid w-full grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto] items-center text-center text-[16px] font-medium uppercase tracking-[0.01em] text-[#24210e]"
          style={{ fontFamily: `"Inter", Arial, sans-serif` }}
        >
          <span />
          <span />
          <span />
          <span>Events</span>

          <span className="text-[22px] leading-none">|</span>
          <span>Book Office Hours</span>

          <span />
          <span />
          <span />
        </div>
      </header>

      {/* Center Content */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-[48px] pt-[28px] text-center">
        {/* Logo */}
        <div className="mb-[34px] flex h-[86px] w-[86px] items-center justify-center overflow-hidden">
          <img
            src={Logo}
            alt="Logo"
            className="h-full w-full object-contain grayscale opacity-40"
          />
        </div>

        {/* Heading */}
        <h1
          className="text-[54px] font-normal uppercase leading-[1.7] tracking-[0.22em] text-[#302b12] sm:text-[58px]"
          style={{ fontFamily: `"The Seasons", Georgia, serif` }}
        >
          <span className="inline-block">YOUR ACCESS</span>
          <br />
          <span className="inline-block">TO EMINEO</span>
        </h1>

        {/* Text Content */}
        <div
          className="mt-[20px] max-w-[720px] text-[16px] font-medium leading-[1.25] text-[#24210e]"
          style={{ fontFamily: `"Inter", Arial, sans-serif` }}
        >
          <p>\You&apos;ve reached the highest level of access.</p>

          <p className="mx-auto mt-[16px] max-w-[680px]">
            Ēminēo represents full participation within the Sapēre ecosystem.
          </p>

          <p className="mx-auto mt-[18px] max-w-[680px]">
            This is where relationships become partnerships, introductions
            become opportunities,
            <br />
            and access becomes advantage.
          </p>

          <p className="mt-[10px] font-extrabold">Priority Access</p>

          <p className="mx-auto max-w-[690px] font-extrabold leading-[1.15]">
            Early invitations. Preferred booking. Complimentary access to every
            Sapere event and
            <br />
            private experience.
          </p>

          <p className="mt-[24px] text-[12px] font-extrabold">
            We&apos;re honored to have you with us.
          </p>
        </div>
      </main>

      {/* Bottom Bar */}
      <div
        className="flex h-[41px] w-full items-center justify-center bg-[#302c0d] text-[13px] font-extrabold uppercase tracking-[0.01em] text-white"
        style={{ fontFamily: `"Inter", Arial, sans-serif` }}
      >
        NEXT EVENT
      </div>
    </section>
  );
};

export default WelcomeSection;