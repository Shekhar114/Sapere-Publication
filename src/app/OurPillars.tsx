import { useState, useEffect } from "react";
import SecureYourPlace from "../app/SecureYourPlace";
import Comingsoon from "../app/Comingsoon";

import Image1 from "../assets/zoeImages/image1.png";
import Image3 from "../assets/zoeImages/image3.png";
import Image5 from "../assets/zoeImages/image5.png";
import Image7 from "../assets/zoeImages/image7.png";

import theSeasons from "../assets/fonts/The Seasons/TheSeasons-Regular.ttf";

interface PillarData {
  id: number;
  numStr: string;
  label: string;
  isTextOnly: boolean;
  vAlign: "top" | "bottom";
  image?: string;
}

const pillars: PillarData[] = [
  {
    id: 1,
    numStr: "01.",
    label: "EDITORIAL",
    isTextOnly: false,
    vAlign: "top",
    image: Image1,
  },
  {
    id: 2,
    numStr: "02.",
    label: "MENTORSHIPS",
    isTextOnly: true,
    vAlign: "bottom",
  },
  {
    id: 3,
    numStr: "03.",
    label: "TALENT\nINCUBATOR",
    isTextOnly: false,
    vAlign: "top",
    image: Image3,
  },
  {
    id: 4,
    numStr: "04.",
    label: "SIGNATURE\nEXPERIENCES",
    isTextOnly: true,
    vAlign: "bottom",
  },
  {
    id: 5,
    numStr: "05.",
    label: "PARTNER\nNETWORK",
    isTextOnly: false,
    vAlign: "top",
    image: Image5,
  },
  {
    id: 6,
    numStr: "06.",
    label: "PODCAST",
    isTextOnly: true,
    vAlign: "bottom",
  },
  {
    id: 7,
    numStr: "07.",
    label: "MEMBERSHIPS",
    isTextOnly: false,
    vAlign: "top",
    image: Image7,
  },
];

interface PillarColumnProps {
  pillar: PillarData;
  isMobile: boolean;
}

const PillarColumn = ({ pillar, isMobile }: PillarColumnProps) => {
  const [isActive, setIsActive] = useState(false);

  const panelBg = pillar.isTextOnly ? "#ede9da" : "transparent";
  const textColor = pillar.isTextOnly ? "#797c4c" : "#ede9da";

  const getPadding = () => {
    if (isMobile) {
      return "20px"; // Clean, uniform padding for centered mobile look
    }

    if (pillar.id === 4) {
      return "40px 16px 120px";
    }

    return pillar.vAlign === "top"
      ? "100px 16px 40px 16px"
      : "40px 16px 140px 16px";
  };

  const hoverTexts: Record<number, string> = {
    1: "Where luxury is broken down beyond the surface. Clarity on how the industry actually works.",
    2: "Direct access to those who have built before you. Guidance where it actually matters.",
    3: "Supporting those building something worth watching.",
    4: "Designed to connect you with the right people. Not everything happens online.",
    5: "Strategic partnerships that open the right doors. Chosen carefully.",
    6: "Conversations beyond the surface. What's usually not said, is explored here.",
    7: "Guidance, access, and the right people, for every stage of your journey.",
  };

  const hoverDescColor = pillar.isTextOnly
    ? "rgba(121, 124, 76, 0.9)"
    : "rgba(237, 233, 218, 0.9)";

  // Desktop Hover
  const handleMouseEnter = () => !isMobile && setIsActive(true);
  const handleMouseLeave = () => !isMobile && setIsActive(false);

  // Mobile Click
  const handleClick = () => isMobile && setIsActive(!isActive);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        width: "100%",
        height: isMobile ? "300px" : "580px",
        position: "relative",
        backgroundColor: panelBg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: isMobile
          ? "center"
          : pillar.vAlign === "top"
            ? "flex-start"
            : "flex-end",
        textAlign: "center",
        padding: getPadding(),
        boxSizing: "border-box",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      {/* BACKGROUND IMAGE */}
      {!pillar.isTextOnly && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#201f0d",
            backgroundImage: `url(${pillar.image})`,
            backgroundSize: pillar.id === 5 ? "110% 110%" : "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
            transform: isActive ? "scale(1.08)" : "scale(1)",
            transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            zIndex: 1,
          }}
        />
      )}

      {/* NUMBER + TITLE */}
      <div
        style={{
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          /* CHANGED: Moved h3/text further upwards on mobile click from -60px to -100px */
          transform: isActive
            ? isMobile
              ? "translateY(-100px)"
              : "translateY(-20px)"
            : "translateY(0px)",
          transition: "transform 0.4s ease",
        }}
      >
        <span
          style={{
            fontFamily: `"${theSeasons}"`,
            fontWeight: 600,
            fontSize: isMobile ? "16px" : "16.9px",
            color: textColor,
            letterSpacing: "0.05em",
            display: "inline-block",
            fontVariantNumeric: "lining-nums",
            marginBottom: "6px",
          }}
        >
          {pillar.numStr}
        </span>

        <h3
          style={{
            margin: 0,
            fontFamily: `"${theSeasons}"`,
            fontWeight: 600,
            fontSize: isMobile ? "15px" : "14px",
            letterSpacing: "0.15em",
            color: textColor,
            textTransform: "uppercase",
            lineHeight: 1.4,
            whiteSpace: "pre-wrap",
          }}
        >
          {pillar.label}
        </h3>
      </div>

      {/* HOVER DESCRIPTION */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
          opacity: isActive ? 1 : 0,
          transform: isActive ? "translateY(0px)" : "translateY(15px)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
          pointerEvents: "none",
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: `"${theSeasons}"`,
            fontWeight: 400,
            fontSize: "12px",
            color: hoverDescColor,
            lineHeight: 1.7,
            textAlign: "center",
            letterSpacing: "0.02em",
          }}
        >
          {hoverTexts[pillar.id]}
        </p>
      </div>
    </div>
  );
};

interface OurPillarsProps {
  isLoggedIn: boolean;
}

export default function OurPillars({ isLoggedIn }: OurPillarsProps) {
  const [nextStep, setNextStep] = useState<"secure" | "comingSoon" | null>(
    null,
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleActionClick = () => {
    if (isLoggedIn) {
      setNextStep("comingSoon");
    } else {
      setNextStep("secure");
    }
  };

  if (nextStep === "secure") {
    return <SecureYourPlace />;
  }

  if (nextStep === "comingSoon") {
    return <Comingsoon />;
  }

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
        backgroundColor: "#2b2912",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: isMobile ? "40px 16px" : "60px 48px",
        boxSizing: "border-box",
      }}
    >
      {/* TITLE */}
      <div
        style={{
          textAlign: "center",
          width: "100%",
          marginBottom: isMobile ? "20px" : "0",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: isMobile ? "28px" : "52px",
            color: "#ede9da",
            fontFamily: `"${theSeasons}"`,
            fontWeight: 400,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          THE PILLARS
        </h2>
      </div>

      {/* PILLARS CSS GRID CONTAINER */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(7, 1fr)",
          width: "100%",
          margin: "0 auto",
          boxSizing: "border-box",
          gap: isMobile ? "16px" : "10px",
          padding: isMobile ? "10px 0" : "40px 0",
          alignItems: "stretch",
        }}
      >
        {pillars.map((pillar, index) => (
          <div
            key={pillar.id}
            style={{
              borderLeft:
                !isMobile && index !== 0
                  ? "1px solid rgba(237, 233, 218, 0.15)"
                  : "none",
              display: "flex",
              width: "100%",
              minWidth: 0,
            }}
          >
            <PillarColumn pillar={pillar} isMobile={isMobile} />
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: isMobile ? "20px" : "20px",
        }}
      >
        <button
          onClick={handleActionClick}
          style={{
            padding: "12px 44px",
            backgroundColor: "#ede9da",
            color: "#2b2912",
            border: "none",
            fontSize: "12px",
            fontWeight: "bold",
            fontFamily: `"${theSeasons}"`,
            cursor: "pointer",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            transition: "opacity 0.2s ease",
            textDecoration: "underline",
            width: isMobile ? "auto" : "350px",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Secure Your Place
        </button>
      </div>
    </section>
  );
}
