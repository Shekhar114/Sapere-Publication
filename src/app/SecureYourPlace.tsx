import { useState } from "react";
import imgLogo from "../assets/b3a4a46ae6ce743e601e5c2fda9dfb646639c587.png";
import Comingsoon from "./Comingsoon";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxS9FxgrWwssXTt3kLzZphi91gnaH92a1iPopJudu3eCX5HfwhgpZRfsVHk4NrsY1Ml/exec";

export default function SecureYourPlace() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
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

  if (submitted) return <Comingsoon />;

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4 md:px-16"
      style={{
        backgroundColor: "#2e2912",
      }}
    >
      <div className="w-full max-w-[850px] flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-8 md:mb-14">
          <img
            src={imgLogo}
            alt="Sapere Crest"
            className="w-[140px] md:w-[220px] h-auto object-contain"
          />
        </div>

        {/* Heading */}
        <h1
          className="text-[#f4f2ea] mb-16 md:mb-36 px-2 text-[20px] sm:text-[26px]"
          style={{
            fontFamily: "'The Seasons', 'Times New Roman', serif",
            fontSize: "clamp(20px, 3.5vw, 36px)",
            lineHeight: "1.2",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: "400",
          }}
        >
          Join the waitlist.
        </h1>

        {/* FORM SECTION */}
        <div className="w-full px-2 sm:px-4 md:px-12">
          {/* Flex row with gap adjustments for small screens */}
          <div
            className="w-full flex flex-row items-center justify-between gap-2 sm:gap-4 pb-2"
            style={{
              borderBottom: "1.5px solid #f4f2ea",
            }}
          >
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              className="bg-transparent outline-none border-none text-left py-2 text-[#f4f2ea] flex-1 min-w-0 text-[14px] md:text-[17px]"
              style={{
                fontFamily:
                  "'Akzidenz-Grotesk', 'Helvetica Neue', sans-serif",
                letterSpacing: "0.02em",
                WebkitTextFillColor: "#f4f2ea",
              }}
            />

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="shrink-0 py-2.5 px-3 sm:px-7 transition-all duration-200 hover:opacity-90 active:scale-[0.98] text-[9px] sm:text-[11px]"
              style={{
                backgroundColor: "#737046",
                color: "#f4f2ea",
                border: "none",
                borderRadius: "999px",
                cursor: "pointer",
                fontFamily:
                  "'Akzidenz-Grotesk', 'Helvetica Neue', sans-serif",
                fontWeight: "500",
                letterSpacing: "0.08em",
                whiteSpace: "nowrap",
                textTransform: "uppercase",
              }}
            >
              {loading ? "SAVING..." : "WELCOME TO SAPĒRE"}
            </button>
          </div>

          {error && (
            <p
              className="mt-3 text-left text-[12px] md:text-[13px]"
              style={{
                color: "#ff6b6b",
                fontFamily:
                  "'Akzidenz-Grotesk', 'Helvetica Neue', sans-serif",
              }}
            >
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}