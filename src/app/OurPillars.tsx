import { useState, useEffect } from "react";
import SecureYourPlace from "./SecureYourPlace";  
import Comingsoon from "./Comingsoon"; 
import Image1 from "../assets/zoeImages/image1.png";
import Image2 from "../assets/zoeImages/image2.png";
import Image3 from "../assets/zoeImages/image3.png";
import Image4 from "../assets/zoeImages/image4.png";


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
  { id: 3, numStr: "03.", label: "TALENT\nINCUBATOR", isTextOnly: false, vAlign: "top", image: Image2 },
  { id: 4, numStr: "04.", label: "SIGNATURE\nEXPERIENCES", isTextOnly: true, vAlign: "bottom" },
  { id: 5, numStr: "05.", label: "PARTNER\nNETWORK", isTextOnly: false, vAlign: "top", image: Image3 },
  { id: 6, numStr: "06.", label: "PODCAST", isTextOnly: true, vAlign: "bottom" },
  { id: 7, numStr: "07.", label: "MEMBERSHIPS", isTextOnly: false, vAlign: "top", image: Image4 },
];

interface PillarColumnProps {
  pillar: PillarData;
  isMobile: boolean;
}

const PillarColumn = ({ pillar, isMobile }: PillarColumnProps) => {
  const panelBg = pillar.isTextOnly ? "#ede9da" : "transparent";
  const textColor = pillar.isTextOnly ? "#2b2912" : "#ede9da";

  const getPadding = () => {
    if (isMobile) return "40px 20px";
    return pillar.vAlign === "top" ? "100px 20px 40px 20px" : "40px 20px 140px 20px";
  };

  return (
    <div
      style={{
        flex: isMobile ? "0 0 calc(50% - 10px)" : 1,
        width: isMobile ? "calc(50% - 10px)" : "auto",
        height: isMobile ? "300px" : "580px",
        position: "relative",
        backgroundColor: panelBg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: isMobile ? "center" : (pillar.vAlign === "top" ? "flex-start" : "flex-end"),
        textAlign: "center",
        padding: getPadding(),
        boxSizing: "border-box",
        overflow: "hidden",
        borderRight: isMobile ? "1px solid rgba(237, 233, 218, 0.15)" : "1px solid rgba(237, 233, 218, 0.15)",
        borderBottom: isMobile ? "1px solid rgba(237, 233, 218, 0.15)" : "none",
      }}
    >
      {!pillar.isTextOnly && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#201f0d",
            backgroundImage: `url(${pillar.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5,
            zIndex: 1,
          }}
        />
      )}

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
            fontFamily: "'Crimson Pro', serif",
            fontSize: "15px",
            fontWeight: 400,
            color: textColor,
            marginBottom: "6px",
            letterSpacing: "0.05em",
          }}
        >
          {pillar.numStr}
        </span>

        <h3
          style={{
            margin: 0,
            fontFamily: "'Crimson Pro', serif",
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

  // Simple routing logic on button click
  const handleActionClick = () => {
    if (isLoggedIn) {
      // If user logged in on page 1, skip Page 4 (Secure) and go to Page 5 (Coming Soon)
      setNextStep("comingSoon");
    } else {
      // If user skipped on page 1, take them to Page 4 (Secure)
      setNextStep("secure");
    }
  };

  // Render the components purely based on state. 
  // No props are passed to SecureYourPlace because it handles its own internal data.
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
        padding: isMobile ? "40px 20px" : "60px 0 60px 0",
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
          flexDirection: isMobile ? "row" : "row",
          flexWrap: isMobile ? "wrap" : "nowrap",
          width: "100%",
          maxWidth: "1440px",
          margin: "auto",
          boxSizing: "border-box",
          gap: isMobile ? "20px" : "0px",
          padding: isMobile ? "0" : "20px 40px",
          justifyContent: isMobile ? "center" : "flex-start",
        }}
      >
        {pillars.map((pillar) => (
          <PillarColumn key={pillar.id} pillar={pillar} isMobile={isMobile} />
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
            fontFamily: "'Work Sans', sans-serif",
            fontWeight: 600,
            fontSize: "12px",
            cursor: "pointer",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            transition: "opacity 0.2s ease",
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