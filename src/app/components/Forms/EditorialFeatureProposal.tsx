import React from "react";
import Logo from "../../../assets/logo.png";

const EditorialFeatureProposal: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#b6b6b4] text-[#302b12]">
      {/* Top Header */}
      <header className="mx-auto flex max-w-[1180px] items-center justify-between px-8 pt-16 text-[13px] uppercase tracking-[0.32em] text-white">
        <a href="#" className="hover:opacity-70">
          Home
        </a>

        <a href="#" className="hover:opacity-70">
          The Sapère Membership
        </a>

        <a href="#" className="hover:opacity-70">
          The Editorial System
        </a>
      </header>

      {/* Hero */}
      <div className="mx-auto flex max-w-[980px] flex-col items-center px-6 pt-14 text-center">
        <img
          src={Logo}
          alt="Sapere Logo"
          className="mb-16 h-[92px] w-[92px] object-contain opacity-45 grayscale"
        />

        <h1
          className="text-center text-[44px] font-normal uppercase leading-[1.55] tracking-[0.32em] text-white md:text-[58px]"
          style={{ fontFamily: `"Times New Roman", serif` }}
        >
          Editorial Feature
          <br />
          Proposal
        </h1>

        <p className="mt-8 max-w-[930px] text-[16px] font-semibold leading-[1.35] text-white md:text-[18px]">
          Twice a year, we select Émineō members to be featured in Sapère’s
          publication through in-depth profiles, conversations, or business case
          studies.
        </p>
      </div>

      {/* Form Card */}
      <div className="mx-auto mt-20 max-w-[1000px] px-5">
        <form className="rounded-[16px] bg-[#f4f2e8] px-10 py-12 md:px-12">
          {/* Name */}
          <div>
            <h2
              className="mb-8 text-[31px] uppercase tracking-[0.18em]"
              style={{ fontFamily: `"Times New Roman", serif` }}
            >
              Name{" "}
              <span className="align-middle text-[14px] lowercase tracking-[0.12em]">
                *required*
              </span>
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <label className="mb-5 block text-[16px] font-bold">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="/"
                  className="w-full border-b-2 border-[#8b8a60] bg-transparent pb-2 text-[20px] outline-none placeholder:text-[#302b12]"
                />
              </div>

              <div>
                <label className="mb-5 block text-[16px] font-bold">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="/"
                  className="w-full border-b-2 border-[#8b8a60] bg-transparent pb-2 text-[20px] outline-none placeholder:text-[#302b12]"
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="mt-10">
            <h2
              className="mb-6 text-[31px] uppercase tracking-[0.18em]"
              style={{ fontFamily: `"Times New Roman", serif` }}
            >
              Email{" "}
              <span className="align-middle text-[14px] lowercase tracking-[0.12em]">
                *required*
              </span>
            </h2>

            <input
              type="email"
              placeholder="/"
              className="w-full border-b-2 border-[#8b8a60] bg-transparent pb-2 text-[20px] outline-none placeholder:text-[#302b12]"
            />
          </div>

          {/* Company */}
          <div className="mt-10">
            <label
              className="mb-6 block text-[31px] tracking-[0.18em]"
              style={{ fontFamily: `"Times New Roman", serif` }}
            >
              Company / Sector:
            </label>

            <input
              type="text"
              placeholder="/"
              className="w-full border-b-2 border-[#8b8a60] bg-transparent pb-2 text-[20px] outline-none placeholder:text-[#302b12]"
            />
          </div>

          {/* Feature Proposal */}
          <div className="mt-10">
            <h2
              className="mb-5 text-[31px] tracking-[0.12em]"
              style={{ fontFamily: `"Times New Roman", serif` }}
            >
              Feature Proposal
            </h2>

            <p
              className="mb-3 text-[15px] tracking-[0.18em]"
              style={{ fontFamily: `"Times New Roman", serif` }}
            >
              Proposed feature type
            </p>

            <div className="space-y-3 text-[14px] font-bold">
              {[
                "Founder Profile",
                "Brand Journey / Case Study",
                "Expert Conversation",
                "Other",
              ].map((item) => (
                <label key={item} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="h-[18px] w-[18px] appearance-none border border-[#8b8a60] bg-transparent checked:bg-[#302b12]"
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Line Inputs */}
          <div className="mt-6 space-y-9">
            {[
              "Working title or topic:",
              "Why does your story or perspective matter right now?",
              "Key themes or insights you’d like to share:",
              "Any additional links & supporting materials:",
            ].map((label) => (
              <div key={label}>
                <label
                  className="mb-3 block text-[20px] tracking-[0.18em]"
                  style={{ fontFamily: `"Times New Roman", serif` }}
                >
                  {label}
                </label>

                <input
                  type="text"
                  placeholder="/"
                  className="w-full border-b-2 border-[#8b8a60] bg-transparent pb-2 text-[20px] outline-none placeholder:text-[#302b12]"
                />
              </div>
            ))}
          </div>

          {/* Submit */}
          <div className="mt-16 flex justify-center">
            <button
              type="submit"
              className="h-[60px] w-full max-w-[390px] rounded-[10px] bg-[#302703] text-[14px] font-extrabold uppercase text-white transition hover:opacity-90"
            >
              Submit Feature Proposal
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-0 bg-[#282200] text-[#8f8a61]">
        <div className="mx-auto grid max-w-[1250px] grid-cols-1 gap-12 px-8 py-12 md:grid-cols-[1.5fr_1fr_1.4fr]">
          <div>
            <h2
              className="mb-5 text-[27px] uppercase tracking-[0.06em] text-[#f4f2e8]"
              style={{ fontFamily: `"Times New Roman", serif` }}
            >
              Sapère
            </h2>

            <p className="max-w-[430px] text-[13px] leading-[1.25]">
              An educational luxury publication exploring the forces shaping the
              global luxury industry. Through analysis, commentary, and lived
              experience, Sapère examines the structures, people, and ideas that
              define luxury beyond its surface.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-[15px] font-bold text-[#b6b17e]">
              Explore
            </h3>

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

          <div>
            <h3 className="mb-2 text-[15px] font-bold text-[#b6b17e]">
              Newsletter
            </h3>

            <p className="mb-5 text-[13px]">
              Weekly reflections and new essays
            </p>

            <input
              type="email"
              placeholder="Your email"
              className="mb-4 h-[42px] w-full border border-[#4e4620] bg-transparent px-4 text-[13px] outline-none placeholder:text-[#716b41]"
            />

            <button className="h-[42px] w-full bg-[#8f8f54] text-[13px] font-bold text-white">
              Signup for Newsletter
            </button>
          </div>
        </div>

        <div className="border-t border-[#3b3310]">
          <div className="mx-auto flex max-w-[1250px] flex-col gap-5 px-8 py-5 text-[11px] md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-5">
              <img
                src={Logo}
                alt="Sapere Logo"
                className="h-[38px] w-[38px] object-contain opacity-40 grayscale"
              />

              <p>© 2026 Sapère. All rights reserved.</p>
            </div>

            <div className="flex gap-8">
              <span>Instagram</span>
              <span>TikTok</span>
              <span>LinkedIn</span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default EditorialFeatureProposal;