import React from "react";
import Logo from "../../../assets/b3a4a46ae6ce743e601e5c2fda9dfb646639c587.png";

const WelcomeSection: React.FC = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden border-x-[2px] border-t-[4px] border-[#4f4f4f] bg-white text-[#302b12]">
      {/* Top Menu */}
      <header className="relative z-10 w-full px-[20px] pt-[22px]">
        {/* First Row */}
        <div
          className="grid w-full grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto] items-center text-center text-[12px] font-medium uppercase tracking-[0.02em] text-[#1f1d12]"
          style={{ fontFamily: `"Inter", Arial, sans-serif` }}
        >
          <span className="text-[18px] leading-none">|</span>
          <span>Editorial System</span>
          <span className="text-[18px] leading-none">|</span>
          <span>Access Ascendo</span>
          <span className="text-[18px] leading-none">|</span>
          <span>Access Proficio</span>
          <span className="text-[18px] leading-none">|</span>
          <span>Access Emineo</span>
          <span className="text-[18px] leading-none">|</span>
        </div>

        {/* Second Row */}
        <div
          className="mt-[19px] grid w-full grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto] items-center text-center text-[12px] font-medium uppercase tracking-[0.02em] text-[#1f1d12]"
          style={{ fontFamily: `"Inter", Arial, sans-serif` }}
        >
          <span />
          <span />
          <span />
          <span>Events</span>
          <span className="text-[18px] leading-none">|</span>
          <span>Book Office Hours</span>
          <span />
          <span />
          <span />
        </div>
      </header>

      {/* Center Content */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-[22px] pt-[36px] text-center">
        {/* Logo */}
        <div className="mb-[20px] flex h-[74px] w-[74px] items-center justify-center overflow-hidden">
          <img
            src={Logo}
            alt="Logo"
            className="h-full w-full object-contain grayscale opacity-40"
          />
        </div>

        {/* Heading */}
        <h1
          className="relative text-[44px] font-normal uppercase leading-[1.55] tracking-[0.22em] text-[#302b12] sm:text-[48px]"
          style={{ fontFamily: `"The Seasons", Georgia, serif` }}
        >
          <span className="relative inline-block">YOUR ACCESS</span>

          <br />

          <span className="relative inline-block">TO ASCENDO</span>
        </h1>

        {/* Paragraphs */}
        <div
          className="mt-[18px] max-w-[595px] text-[12px] font-medium leading-[1.1] text-[#1f1d12]"
          style={{ fontFamily: `"Inter", Arial, sans-serif` }}
        >
          <p>You&apos;ve moved from learning to building.</p>

          <p className="mt-[14px]">
            Ascendō is where ideas become ventures and understanding becomes
            execution.
          </p>

          <p className="mx-auto mt-[14px] max-w-[575px]">
            Designed for founders actively building within luxury, this tier
            provides deeper guidance, strategic support, and access to the
            people, conversations, and opportunities that help businesses move
            forward.
            <br />
            This is where momentum begins.
          </p>

          <p className="mt-[22px] text-[10px] font-extrabold">
            We&apos;re glad you&apos;re here.
          </p>
        </div>
      </main>

      {/* Bottom Bar */}
      <div
        className="flex h-[30px] w-full items-center justify-center bg-[#302c0d] text-[10px] font-extrabold uppercase tracking-[0.02em] text-white"
        style={{ fontFamily: `"Inter", Arial, sans-serif` }}
      >
        NEXT EVENT
      </div>
    </section>
  );
};

export default WelcomeSection;
