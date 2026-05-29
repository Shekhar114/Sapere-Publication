import { useState, useEffect } from "react";
import SecureYourPlace from "../app/SecureYourPlace";
import Comingsoon from "../app/Comingsoon";
import Image1 from "../assets/zoeImages/image1.png";
import Image3 from "../assets/zoeImages/image3.png";
import Image5 from "../assets/zoeImages/image5.png";
import Image7 from "../assets/zoeImages/image7.png";

interface PillarData {
  id: number;
  numStr: string;
  label: string;
  isTextOnly: boolean;
  vAlign: "top" | "bottom";
  image?: string;
}

const pillars: PillarData[] = [
  { id: 1, numStr: "01.", label: "EDITORIAL", isTextOnly: false, vAlign: "top", image: Image1 },
  { id: 2, numStr: "02.", label: "MENTORSHIPS", isTextOnly: true, vAlign: "bottom" },
  { id: 3, numStr: "03.", label: "TALENT\nINCUBATOR", isTextOnly: false, vAlign: "top", image: Image3 },
  { id: 4, numStr: "04.", label: "SIGNATURE\nEXPERIENCES", isTextOnly: true, vAlign: "bottom" },
  { id: 5, numStr: "05.", label: "PARTNER\nNETWORK", isTextOnly: false, vAlign: "top", image: Image5 },
  { id: 6, numStr: "06.", label: "PODCAST", isTextOnly: true, vAlign: "bottom" },
  { id: 7, numStr: "07.", label: "MEMBERSHIPS", isTextOnly: false, vAlign: "top", image: Image7 },
];

interface PillarColumnProps {
  pillar: PillarData;
  isMobile: boolean;
}

const PillarColumn = ({ pillar, isMobile }: PillarColumnProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const panelBg = pillar.isTextOnly ? "#ede9da" : "transparent";
  const textColor = pillar.isTextOnly ? "#797c4c" : "#ede9da";

  const getPadding = () => {
    if (isMobile) return "40px 20px";
    return pillar.vAlign === "top" ? "100px 16px 40px 16px" : "40px 16px 140px 16px";
  };

  const hoverTexts: Record<number, string> = {
    1: "Where luxury is broken down beyond the surface. Clarity on how the industry actually works.",
    2: "Where luxury is broken down beyond the surface. Clarity on how the industry actually works.",
    3: "Where luxury is broken down beyond the surface. Clarity on how the industry actually works.",
    4: "Where luxury is broken down beyond the surface. Clarity on how the industry actually works.",
    5: "Where luxury is broken down beyond the surface. Clarity on how the industry actually works.",
    6: "Where luxury is broken down beyond the surface. Clarity on how the industry actually works.",
    7: "Where luxury is broken down beyond the surface. Clarity on how the industry actually works.",
  };

  const hoverDescColor = pillar.isTextOnly
    ? "rgba(121, 124, 76, 0.9)"
    : "rgba(237, 233, 218, 0.9)";

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        flex: isMobile ? "0 0 calc(50% - 10px)" : "1 1 0",
        width: isMobile ? "calc(50% - 10px)" : undefined,
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
        borderRight: isMobile ? "1px solid rgba(237, 233, 218, 0.15)" : "none",
        borderBottom: isMobile ? "1px solid rgba(237, 233, 218, 0.15)" : "none",
        cursor: "pointer",
      }}
    >
      {/* Background image with zoom */}
      {!pillar.isTextOnly && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#201f0d",
            backgroundImage: `url(${pillar.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: isHovered ? "scale(1.08)" : "scale(1)",
            transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s ease",
            zIndex: 1,
          }}
        />
      )}

      {/* Number + Label — apni jagah pe fixed */}
      <div
        style={{
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontWeight: 400,
            fontSize: "15px",
            color: textColor,
            marginBottom: "8px",
            letterSpacing: "0.05em",
            display: "inline-block",
            fontVariantNumeric: "lining-nums",
          }}
        >
          {pillar.numStr.replace(/[^ -~]/g, "")}
        </span>

        <h3
          style={{
            margin: 0,
            fontFamily: "'The Seasons', 'Times New Roman', serif",
            fontWeight: 400,
            fontSize: "14px",
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

      {/* ✅ Hover description — divider line REMOVE kar diya */}
      {!isMobile && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateY(0px)" : "translateY(10px)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
            pointerEvents: "none",
          }}
        >
          {/* ✅ Divider line HATA DIYA */}
          <p
            style={{
              margin: 0,
              fontFamily: "'Crimson Pro', 'Georgia', serif",
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
      )}
    </div>
  );
};

interface OurPillarsProps {
  isLoggedIn: boolean;
}

export default function OurPillars({ isLoggedIn }: OurPillarsProps) {
  const [nextStep, setNextStep] = useState<"secure" | "comingSoon" | null>(null);
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

  if (nextStep === "secure") return <SecureYourPlace />;
  if (nextStep === "comingSoon") return <Comingsoon />;

  return (
    <section
      style={{
        backgroundColor: "#2b2912",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: isMobile ? "40px 20px" : "60px 0",
        boxSizing: "border-box",
      }}
    >
      <div style={{ textAlign: "center", width: "100%", marginBottom: isMobile ? "30px" : "0" }}>
        <h2
          style={{
            margin: 0,
            fontSize: isMobile ? "28px" : "52px",
            color: "#ede9da",
            fontFamily: "'Crimson Pro', serif",
            fontWeight: 400,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          THE PILLARS
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: isMobile ? "wrap" : "nowrap",
          width: "100%",
          margin: "auto",
          boxSizing: "border-box",
          gap: isMobile ? "20px" : "10px",
          padding: isMobile ? "0" : "20px 0",
          justifyContent: isMobile ? "center" : "stretch",
          alignItems: "stretch",
        }}
      >
        {pillars.map((pillar, index) => (
          isMobile ? (
            <PillarColumn key={pillar.id} pillar={pillar} isMobile={isMobile} />
          ) : (
            <div
              key={pillar.id}
              style={{
                flex: "1 1 0",
                borderLeft: index !== 0
                  ? "1px solid rgba(237, 233, 218, 0.15)"
                  : "none",
                display: "flex",
              }}
            >
              <PillarColumn pillar={pillar} isMobile={isMobile} />
            </div>
          )
        ))}
      </div>

      <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: isMobile ? "30px" : "0" }}>
        <button
          onClick={handleActionClick}
          style={{
            padding: "12px 44px",
            backgroundColor: "#ede9da",
            color: "#2b2912",
            border: "none",
            fontSize: "12px",
            fontWeight: "bold",
            fontFamily: "'Akzidenz-Grotesk', sans-serif",
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