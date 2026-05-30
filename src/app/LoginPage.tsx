import { useState } from "react";
import imgLogo from "../assets/b3a4a46ae6ce743e601e5c2fda9dfb646639c587.png";
import LandingPage from "./LandingPage";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxS9FxgrWwssXTt3kLzZphi91gnaH92a1iPopJudu3eCX5HfwhgpZRfsVHk4NrsY1Ml/exec";

export default function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [skipped, setSkipped] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!email.trim()) return;

    setLoading(true);
    setError("");

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          timestamp: new Date().toISOString(),
        }),
      });

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) return <LandingPage isLoggedIn={true} />;
  if (skipped) return <LandingPage isLoggedIn={false} />;

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4 py-8 md:px-6"
      style={{
        backgroundColor: "#2e2a14",
      }}
    >
      {/* Self-contained style block for the luxury glimmer effect */}
      <style>{`
        @keyframes luxuryGlimmer {
          0% { transform: translateX(-200%) skewX(-30deg); }
          15% { transform: translateX(200%) skewX(-30deg); }
          100% { transform: translateX(200%) skewX(-30deg); }
        }
        .animate-logo-glimmer {
          animation: luxuryGlimmer 7s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          animation-delay: 0.8s;
        }
      `}</style>

      <div className="w-full max-w-[900px] flex flex-col items-center text-center">
        {/* Logo Container with Glimmer Effect */}
        <div className="mb-8 md:mb-14">
          <div className="relative overflow-hidden inline-block group">
            <img
              src={imgLogo}
              alt="Sapere Logo"
              className="w-[140px] md:w-[230px] object-contain relative z-10"
            />
            {/* Shimmer Light Layer */}
            <div
              className="absolute top-0 left-0 h-full w-[60%] pointer-events-none z-20 animate-logo-glimmer"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0) 100%)",
              }}
            />
          </div>
        </div>

        {/* Heading */}
        <h1
          className="text-[#f5f3eb] mb-12 md:mb-28 px-2 text-[18px] sm:text-[20px] md:text-[23.7px]"
          style={{
            fontFamily: '"The Seasons", serif',
            lineHeight: "1.4",
            letterSpacing: "0.15em",
          }}
        >
          Your inside view into the world of luxury.
        </h1>

        {/* FORM SECTION */}
        <div className="w-full max-w-[720px] px-2 md:px-0">
          <div
            className="w-full flex flex-row items-center justify-between gap-2 md:gap-5 pb-2 md:pb-4"
            style={{ borderBottom: "1px solid rgba(245,243,235,0.7)" }}
          >
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              className="flex-1 bg-transparent outline-none border-none text-left py-2 text-[#f5f3eb] min-w-0 text-[13px] md:text-[15px]"
              style={{
                fontFamily: "Akzidenz-Grotesk",
                fontWeight: 400,
                letterSpacing: "0.03em",
                WebkitTextFillColor: "#f5f3eb",
              }}
            />

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="shrink-0 py-2.5 px-3 sm:px-6 md:px-14 transition-all duration-200 hover:opacity-90 active:scale-[0.98] text-[9px] md:text-[11px]"
              style={{
                backgroundColor: "#7d7a53",
                color: "#ece8dd",
                border: "none",
                borderRadius: "999px",
                cursor: "pointer",
                fontFamily: "Akzidenz-Grotesk,The Seasons",
                letterSpacing: "0.22em",
                whiteSpace: "nowrap",
              }}
            >
              {loading ? "SAVING..." : "JOIN THE WAITLIST"}
            </button>
          </div>

          {error && (
            <p
              className="mt-3 text-left text-[11px] md:text-[12px]"
              style={{
                color: "#ff6b6b",
                fontFamily: "Akzidenz-Grotesk",
              }}
            >
              {error}
            </p>
          )}

          <div className="mt-6 flex flex-col items-center">
            <button
              onClick={() => setSkipped(true)}
              className="hover:text-white transition-colors duration-200 text-[14px] md:text-[16.1px]"
              style={{
                background: "none",
                border: "none",
                color: "#6f7140",
                cursor: "pointer",
                textDecoration: "underline",
                fontFamily: "Akzidenz-Grotesk,'The Seasons'",
                letterSpacing: "0.05em",
              }}
            >
              skip
            </button>

            <p
              className="mt-6 md:mt-8 max-w-[560px] px-2 md:px-0 opacity-90 text-[13px] md:text-[16.1px]"
              style={{
                color: "#f5f3eb",
                fontFamily: '"Akzidenz-Grotesk", serif',
                lineHeight: "1.7",
                letterSpacing: "0.02em",
              }}
            >
              By subscribing, you agree to receive the Sapēre newsletter.
              Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
