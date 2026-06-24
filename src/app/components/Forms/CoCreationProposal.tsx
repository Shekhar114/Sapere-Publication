import React from "react";
import Logo from "../../../assets/logo.png"; // replace with your logo path

const CoCreationProposal: React.FC = () => {
  const options = [
    "Editorial Feature / Profile",
    "Podcast Conversation (Sapēre Conversations)",
    "Joint Workshop or Event",
    "Research Partnership",
    "Other",
  ];

  return (
    <section className="min-h-screen w-full bg-[#b7b7b7] text-[#3b3517]">
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

      {/* Header */}
      <header className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-6 pt-[68px] text-[13px] uppercase tracking-[0.26em] text-white md:px-0">
        <a href="#" className="hover:opacity-70">
          Home
        </a>
        <a href="#" className="hover:opacity-70">
          The Sapēre Membership
        </a>
        <a href="#" className="hover:opacity-70">
          The Editorial System
        </a>
      </header>

      {/* Hero */}
      <div className="flex flex-col items-center px-5 pt-[60px] text-center">
        <img
          src={Logo}
          alt="Sapere Logo"
          className="h-[105px] w-[105px] object-contain opacity-45 grayscale"
        />

        <h1
          className="mt-[58px] text-[42px] font-normal uppercase leading-none tracking-[0.22em] text-white md:text-[63px]"
          style={{ fontFamily: `"The Seasons", serif` }}
        >
          CO
          <span className="mx-3 inline-flex translate-y-[-8px] flex-col items-center text-[12px] leading-none tracking-normal">
            <span className="text-[28px] leading-none">✤</span>
            <span className="mt-[-3px] font-sans text-[8px] font-bold uppercase">
              Demo
            </span>
          </span>
          CREATION PROPOSAL
        </h1>

        <p className="mt-[45px] max-w-[790px] text-[18px] font-semibold leading-[1.15] text-white md:text-[20px]">
          At the Eminēo level, you move from participant to contributor.
          <br />
          We welcome ideas for editorial partnerships, speaking engagements,
          collaborations, interviews, or joint projects.
        </p>
      </div>

      {/* Form Card */}
      <main className="mx-auto mt-[75px] w-[calc(100%-32px)] max-w-[1000px] rounded-t-[18px] bg-[#f4f2e9] px-8 pb-[48px] pt-[55px] md:px-[42px]">
        {/* Name */}
        <div>
          <SectionTitle title="NAME" required />

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-7">
            <LineInput label="First Name" />
            <LineInput label="Last Name" />
          </div>
        </div>

        {/* Email */}
        <div className="mt-[42px]">
          <SectionTitle title="EMAIL" required />
          <div className="mt-8">
            <LineInput />
          </div>
        </div>

        {/* Company */}
        <div className="mt-[42px]">
          <h2
            className="text-[28px] font-normal tracking-[0.18em] md:text-[32px]"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            Company<span className="text-[18px]">✤</span> Sector:
          </h2>
          <div className="mt-8">
            <LineInput />
          </div>
        </div>

        {/* Proposal Details */}
        <div className="mt-[42px]">
          <h2
            className="text-[28px] font-normal tracking-[0.18em] md:text-[32px]"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            Proposal details
          </h2>

          <p
            className="mt-8 text-[14px] tracking-[0.22em]"
            style={{ fontFamily: `"The Seasons", serif` }}
          >
            Type of collaboration
          </p>

          <div className="mt-3 space-y-[13px]">
            {options.map((item) => (
              <label
                key={item}
                className="flex cursor-pointer items-center gap-3 text-[14px] font-semibold text-[#403d25]"
              >
                <input
                  type="checkbox"
                  className="h-[20px] w-[20px] appearance-none rounded-[2px] border border-[#898864] bg-transparent checked:bg-[#352b08]"
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        <div className="mt-[24px] space-y-[38px]">
          <FormLine title="Project ✤ idea title;" />
          <FormLine title="Short description ✤What are you proposing?✤:" />
          <FormLine title="Proposed timeline:" />
          <FormLine title="Any additional links ✤ supporting materials:" />
        </div>

        <p className="mx-auto mt-[64px] max-w-[850px] text-center text-[12px] font-extrabold leading-[1.15] text-[#343014]">
          Your request will be reviewed personally within 24–48 hours. We will
          then connect you directly with the most relevant specialist or handle
          the arrangement on your behalf.
        </p>

        <div className="mt-[60px] flex justify-center">
          <button className="h-[58px] w-full max-w-[390px] rounded-[10px] bg-[#302707] text-[14px] font-extrabold uppercase text-white transition hover:opacity-90">
            Submit Co-Creation Proposal
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#272204] px-8 pb-8 pt-[55px] text-[#918f5d] md:px-[36px]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 md:grid-cols-[1.6fr_0.8fr_1.25fr]">
          <div>
            <h3
              className="text-[32px] uppercase tracking-[0.04em] text-white"
              style={{ fontFamily: `"The Seasons", serif` }}
            >
              SAPĒRE
            </h3>
            <p className="mt-4 max-w-[430px] text-[13px] font-semibold leading-[1.2]">
              An educational luxury publication exploring the forces shaping
              the global luxury industry. Through analysis, commentary, and
              lived experience, Sapēre examines the structures, people, and
              ideas that define luxury beyond its surface.
            </p>
          </div>

          <div>
            <h4 className="text-[15px] font-extrabold text-[#b9b582]">
              Explore
            </h4>
            <ul className="mt-4 space-y-3 text-[13px] font-semibold">
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
            <h4 className="text-[15px] font-extrabold text-[#b9b582]">
              Newsletter
            </h4>
            <p className="mt-2 text-[13px] font-semibold">
              Weekly reflections and new essays
            </p>

            <input
              type="email"
              placeholder="Your email"
              className="mt-5 h-[45px] w-full border border-[#48410f] bg-transparent px-4 text-[13px] outline-none placeholder:text-[#6f6b3e]"
            />

            <button className="mt-4 h-[42px] w-full bg-[#969761] text-[13px] font-extrabold text-white">
              Signup for Newsletter
            </button>
          </div>
        </div>

        <div className="mt-[58px] border-t border-[#3d370d] pt-5">
          <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <div className="flex items-center gap-5">
              <img
                src={Logo}
                alt="Sapere Logo"
                className="h-[38px] w-[38px] object-contain opacity-45 grayscale"
              />
              <p className="text-[12px] font-semibold">
                © 2026 Sapēre. All rights reserved.
              </p>
            </div>

            <div className="flex gap-8 text-[12px] font-semibold">
              <a href="#">Instagram</a>
              <a href="#">TikTok</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default CoCreationProposal;

type SectionTitleProps = {
  title: string;
  required?: boolean;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, required }) => {
  return (
    <h2
      className="text-[28px] font-normal uppercase tracking-[0.2em] md:text-[32px]"
      style={{ fontFamily: `"The Seasons", serif` }}
    >
      {title}
      {required && (
        <span className="ml-5 align-middle font-sans text-[14px] font-semibold normal-case tracking-[0.05em]">
          ✤required✤
        </span>
      )}
    </h2>
  );
};

type LineInputProps = {
  label?: string;
};

const LineInput: React.FC<LineInputProps> = ({ label }) => {
  return (
    <label className="block">
      {label && (
        <span className="mb-4 block text-[16px] font-bold text-[#403d25]">
          {label}
        </span>
      )}

      <span className="block text-[20px] leading-none">/</span>
      <input
        type="text"
        className="mt-1 h-[22px] w-full border-0 border-b border-[#7e8054] bg-transparent text-[16px] outline-none"
      />
    </label>
  );
};

type FormLineProps = {
  title: string;
};

const FormLine: React.FC<FormLineProps> = ({ title }) => {
  return (
    <label className="block">
      <span
        className="block text-[18px] tracking-[0.2em] md:text-[21px]"
        style={{ fontFamily: `"The Seasons", serif` }}
      >
        {title}
      </span>

      <span className="mt-5 block text-[20px] leading-none">/</span>
      <input
        type="text"
        className="mt-1 h-[22px] w-full border-0 border-b border-[#7e8054] bg-transparent text-[16px] outline-none"
      />
    </label>
  );
};
