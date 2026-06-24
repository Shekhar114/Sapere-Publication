import React from "react";
import Logo from "../../../assets/b3a4a46ae6ce743e601e5c2fda9dfb646639c587.png";

const WelcomeSection = () => {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-[#ffffff] text-[#3b2417]"
      // style={{
      //   backgroundImage:
      //     "repeating-linear-gradient(90deg, #f4dedc 0px, #f4dedc 68px, #f8f8f5 68px, #f8f8f5 80px)",
      // }}
    >
      {/* Top Menu */}
      <div
        className="relative z-10 flex w-full items-start justify-between px-6 pt-8 text-[20px]/[1.2] font-medium uppercase tracking-[0.02em] md:px-6"
        style={{ fontFamily: `"Inter", sans-serif` }}
      >
        <span>|</span>

        <span className="hidden md:block">Editorial System</span>
        <span className="hidden md:block">|</span>

        <div className="flex flex-col items-center gap-7">
          <span>Access Ascendo</span>
          <span>Events</span>
        </div>

        <span className="hidden md:block">|</span>

        <span className="hidden md:block">Access Proficio</span>
        <span className="hidden md:block">|</span>

        <div className="flex flex-col items-center gap-7">
          <span>Access Emineo</span>
          <span>Book Office Hours</span>
        </div>

        <span>|</span>
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex min-h-[680px] flex-col items-center justify-center px-5 text-center my-10">
        {/* Logo */}
        <div className="mb-6 flex h-[145px] w-[136px] items-center justify-center">
          <div className="flex  items-center justify-center overflow-hidden">
            <img
              src={Logo}
              alt="Logo"
              className="object-contain brightness-0"
            />
          </div>
        </div>
        {/* Heading */}
        <h1
          className="font-serif text-[76px]/[1.58] letter-spacing-[16px] font-normal leading-[1.9] tracking-[0.22em] text-[#3b2417] md:text-[62px]"
          style={{ fontFamily: "'The Seasons', Georgia, serif" }}
        >
          WELCOME TO
          <br />
          SAPERE
        </h1>

        {/* Paragraphs */}
        <div className="mt-7 max-w-[780px] text-[20px]/[1.2] font-medium leading-[1.2] text-[#3b2417] md:text-[16px]">
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

          <p className="mx-auto mt-7 max-w-[430px] text-[16px]/[1.2] font-bold leading-[1.2]">
            The future leaders of luxury will not simply build brands.
            <br />
            They will shape the future of the industry itself.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
