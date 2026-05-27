import React, { useState } from "react";
import imgLogo from "../assets/b3a4a46ae6ce743e601e5c2fda9dfb646639c587.png";
import OurPillars from "./OurPillars";
import bgImage from "../assets/zoeImages/bg.png";

interface LandingPageProps {
  isLoggedIn: boolean;
}

const LandingPage = ({ isLoggedIn }: LandingPageProps) => {
  const [showPillars, setShowPillars] = useState(false);

  // Pass the login status down to the OurPillars component
  if (showPillars) {
    return <OurPillars isLoggedIn={isLoggedIn} />;
  }

  return (
    <div style={styles.container}>
      <style>{`
        @media (max-width: 768px) {
          .content-wrapper-layout {
            display: flex !important;
            flex-direction: column !important;
            /* Mobile par content left align rakhne ke liye */
            align-items: flex-start !important;
            text-align: left !important;
            // margin-top: 20px !important;
          }
          .logo-layout {
            position: static !important;
            /* Logo ko sabse niche bhejne ke liye */
            order: 99 !important; 
            /* Button se gap kam karne ke liye margin ko 3rem se 1.5rem kiya */
            // margin-top: 1.5rem !important;
            margin-bottom: 0 !important;
            /* Logo ko mobile me left align rakhne ke liye */
            align-self: flex-start !important; 
          }
          .text-block-layout {
            align-items: flex-start !important;
          }
        }
      `}</style>

      <div style={styles.overlay} />

      <main className="content-wrapper-layout" style={styles.contentWrapper}>
        {/* Logo component layout shifts to bottom and left-aligns on mobile */}
        <img 
          src={imgLogo} 
          alt="Logo" 
          className="logo-layout"
          style={styles.logo} 
        />

        <h1 style={styles.mainHeading}>
          LUXURY <br />
          FINALLY <br />
          UNDERSTOOD.
        </h1>

        <div className="text-block-layout" style={styles.textBlock}>
          <p style={styles.paragraph}>
            Luxury is often talked about, but rarely understood. <br />
            Sapēre was built for those creating in this industry, where access, structure, and relationships define what is possible.
          </p>
          
          <p style={styles.paragraph}>
            It brings together the elements required to build: insights, guidance, and real access, not as separate pieces, but as one system.
          </p>

          <p style={styles.paragraph}>
            Because building in luxury is different. <br />
            And those who understand that, build differently.
          </p>
        </div>

        <h2 style={styles.subHeading}>
          TO THE FUTURE LEADERS <br />
          OF LUXURY!
        </h2>

        <div style={styles.btnContainer}>
          <button 
            style={styles.button} 
            onClick={() => setShowPillars(true)}
          >
            EXPLORE PILLARS
          </button>
        </div>
      </main>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    position: "relative",
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#1a1813", 
    backgroundImage: `url(${bgImage})`, 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#EAE6DF", 
    padding: "6% 8%",
    boxSizing: "border-box",
    overflowX: "hidden",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(34, 31, 23, 0.75)", 
    zIndex: 1,
  },
  contentWrapper: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "2.5rem",
  },
  logo: {
    position: "absolute",
    top: "0",
    right: "0",
    width: "175px",
    height: "164px",
    opacity: 0.85,
  },
  mainHeading: {
    fontFamily: '"The Seasons", serif',
    fontSize: "58px",
    lineHeight: "1.4",
    letterSpacing: "0.06em",
    margin: 0,
    color: "#EAE6DF",
  },
  textBlock: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    maxWidth: "900px",
  },
  paragraph: {
    fontFamily: '"Akzidenz-Grotesk", sans-serif',
    fontSize: "18px",
    lineHeight: "1.6",
    letterSpacing: "0.02em",
    margin: 0,
    opacity: 0.9,
    fontWeight: "300",
  },
  subHeading: {
    fontFamily: '"The Seasons", serif',
    fontSize: "22px",
    fontWeight: "400",
    lineHeight: "1.4",
    letterSpacing: "0.15em",
    margin: "1rem 0 0 0",
    color: "#D0C9BC",
  },
  btnContainer: {
    marginTop: "0.5rem",
  },
  button: {
    fontFamily: '"Akzidenz-Grotesk", sans-serif',
    backgroundColor: "#EAE6DF",
    color: "#1A1813",
    border: "none",
    padding: "12px 36px",
    fontSize: "14.7px",
    fontWeight: "700",
    letterSpacing: "0.4em",
    cursor: "pointer",
  },
};

export default LandingPage;