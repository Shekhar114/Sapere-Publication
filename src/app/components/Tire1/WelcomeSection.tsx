import React from "react";
import Logo from "../../../assets/b3a4a46ae6ce743e601e5c2fda9dfb646639c587.png";

const WelcomeSection = () => {
  return (
    <>
      {/* ================= MOBILE VIEW ================= */}
      <section className="relative block w-full overflow-hidden bg-[#ffffff] px-7 pb-16 pt-16 text-center text-[#2f2a13] md:hidden">
        {/* Logo */}
        <div className="mx-auto flex h-[105px] w-[110px] items-center justify-center">
          <img
            src={Logo}
            alt="Logo"
            className="h-full w-full object-contain brightness-0"
          />
        </div>

        {/* Heading */}
        <h1
          className="mt-7 whitespace-nowrap text-[clamp(22px,7vw,28px)] font-normal uppercase leading-none tracking-[0.1em] text-black"
          style={{ fontFamily: "'The Seasons', Georgia, serif" }}
        >
          WELCOME TO SAPERE
        </h1>

        {/* Greeting */}
        <p className="mt-7 text-[14px] font-medium tracking-[0.02em] text-[#2f2a13]">
          Hello, Name
        </p>

        {/* Paragraph Content */}
        <div className="mx-auto mt-5 max-w-[330px] text-[13.5px] font-medium leading-[1.55] tracking-[0.01em] text-[#111111]">
          <p>You've reached a new level of access.</p>

          <p className="mt-6">
            Prōficiō is designed for founders committed to long-term growth,
            relationships, and active participation within the Sapēre ecosystem.
          </p>

          <p className="mt-6">
            Because some opportunities begin with a conversation.
            <br />
            And some begin with being in the right room.
          </p>

          <p className="mt-7 font-bold leading-[1.55]">
            Priority Access
            <br />
            Early invitations + preferred member pricing on all Sapēre events
            and experiences.
          </p>

          <p
            className="mt-8 text-[15px] font-normal italic tracking-[0.02em] text-[#2f2a13]"
            style={{ fontFamily: "'The Seasons', Georgia, serif" }}
          >
            We're glad you're here.
          </p>
        </div>
      </section>

      {/* ================= DESKTOP VIEW ================= */}
      <section className="relative hidden min-h-screen w-full overflow-hidden bg-[#fbfaf0] text-[#3b2417] md:block">
        {/* Top Menu */}
        <div
          className="relative z-10 flex w-full flex-col gap-4 px-6 pt-8 text-[16px] font-medium uppercase tracking-[0.03em]"
          style={{ fontFamily: `"Inter", sans-serif` }}
        >
          <div className="flex w-full items-center justify-between">
            <span>|</span>
            <span>Editorial System</span>
            <span>|</span>
            <span>Access Ascendo</span>
            <span>|</span>
            <span>Access Proficio</span>
            <span>|</span>
            <span>Access Emineo</span>
            <span>|</span>
          </div>

          <div className="flex w-full items-center justify-between">
            <span>|</span>
            <span>Founder Evenings</span>
            <span>|</span>
            <span>Masterclasses</span>
            <span>|</span>
            <span>Private Strategy Hour</span>
            <span>|</span>
            <span>Summit</span>
            <span>|</span>
          </div>
        </div>

        {/* Center Content */}
        <div className="relative z-10 my-10 flex min-h-[680px] flex-col items-center justify-center px-5 text-center">
          {/* Logo */}
          <div className="mb-6 flex h-[145px] w-[136px] items-center justify-center">
            <div className="flex items-center justify-center overflow-hidden">
              <img
                src={Logo}
                alt="Logo"
                className="object-contain brightness-0"
              />
            </div>
          </div>

          {/* Heading */}
          <h1
            className="text-[62px] font-normal leading-[1.15] tracking-[0.06em] text-[#3b2417]"
            style={{ fontFamily: "'The Seasons', Georgia, serif" }}
          >
            WELCOME TO
            <br />
            SAPERE
          </h1>

          {/* Greeting */}
          <p className="mt-6 text-[16px] font-medium tracking-[0.02em] text-[#3b2417]">
            Hello, Name
          </p>

          {/* Paragraphs */}
          <div className="mt-6 max-w-[780px] text-[16px] font-medium leading-[1.4] text-[#3b2417]">
            <p>
              Many ambitious founders never lack talent. They lack access to the
              environments, relationships, and understanding that shape the
              industry.
            </p>

            <p className="mt-5">Sapēre was built to change that.</p>

            <p className="mt-5">
              Through intelligence, mentorship, strategic guidance, and curated
              access, we help the next generation navigate luxury with greater
              clarity and confidence.
            </p>

            <p
              className="mx-auto mt-7 max-w-[430px] text-[16px] font-thin leading-[1.4]"
              style={{ fontFamily: "'The Seasons', Georgia, serif" }}
            >
              The future leaders of luxury will not simply build brands.
              <br />
              They will shape the future of the industry itself.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeSection;
