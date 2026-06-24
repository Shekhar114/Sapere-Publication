import React from "react";
import Logo from "../../../assets/b3a4a46ae6ce743e601e5c2fda9dfb646639c587.png";

const WelcomeSection: React.FC = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden border-x-[1px] border-t-[2px] border-[#3d3d3d] bg-white text-[#302b12]">
      {/* Top Menu */}
      <header className="relative z-10 w-full px-[20px] pt-[22px]">
        {/* First Row */}
        <div
          className="grid w-full grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto] items-center text-center text-[12px] font-medium uppercase tracking-[0.02em] text-[#151515]"
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
          className="mt-[19px] grid w-full grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto] items-center text-center text-[12px] font-medium uppercase tracking-[0.02em] text-[#151515]"
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
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-[38px] pt-[34px] text-center">
        {/* Logo */}
        <div className="mb-[16px] flex h-[76px] w-[76px] items-center justify-center overflow-hidden">
          <img
            src={Logo}
            alt="Logo"
            className="h-full w-full object-contain grayscale opacity-45"
          />
        </div>

        {/* Heading */}
        <h1
          className="text-[43px] font-normal uppercase leading-[1.6] tracking-[0.22em] text-[#302b12] sm:text-[46px]"
          style={{ fontFamily: `"The Seasons", Georgia, serif` }}
        >
          <span className="relative inline-block">
            YOUR ACCESS

          </span>

          <br />

          <span className="relative inline-block">
            TO PROFICIO
            
          </span>
        </h1>

        {/* Text Content */}
        <div
          className="mt-[20px] max-w-[640px] text-[12px] font-medium leading-[1.15] text-[#161616]"
          style={{ fontFamily: `"Inter", Arial, sans-serif` }}
        >
          <p>You&apos;ve reached a new level of access.</p>

          <p className="mx-auto mt-[14px] max-w-[620px]">
            Prōficiō is designed for founders committed to long-term growth,
            relationships, and
            <br />
            active participation within the Sapēre ecosystem.
          </p>

          <p className="mt-[18px]">
            Because some opportunities begin with a conversation.
            <br />
            And some begin with being in the right room.
          </p>

          <p className="mt-[12px] font-extrabold">Priority Access</p>

          <p className="font-extrabold">
            Early invitations + preferred member pricing on all Sapere events
            and experiences.
          </p>

          <p className="mt-[20px] text-[10px] font-extrabold">
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