import React from "react";
import imgLogo from "../assets/b3a4a46ae6ce743e601e5c2fda9dfb646639c587.png";

const Comingsoon: React.FC = () => {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4 md:px-16"
      style={{ backgroundColor: "#2e2912" }}
    >
      <div className="w-full max-w-[850px] flex flex-col items-center text-center">
        {/* Logo — same size as SecureYourPlace */}
        <div className="mb-8 md:mb-14">
          <img
            src={imgLogo}
            alt="Sapere Crest"
            className="w-[140px] md:w-[220px] h-auto object-contain"
          />
        </div>

        {/* Message — same text sizing as SecureYourPlace heading */}
        <p
          className="text-[#f4f2ea] px-2"
          style={{
            fontFamily: "'Inter'",
            fontSize: "24.3939px",
            lineHeight: "1.2",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: "400",
            margin: 0,
          }}
        >
          Your place is set, we&#39;ll open the doors soon.
        </p>
      </div>
    </div>
  );
};

export default Comingsoon;