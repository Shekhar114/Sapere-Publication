import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import LandingPage from "./components/LandingPage";
import OurPillars from "./components/OurPillars";
import ContributorsPage from "./components/Contributors/ConstributorPage";
import AboutSapere from "./components/About";
import Landing from "./components/Tire1/LandingPage";
import Landing1 from "./components/Tire2/LandingPage1";
import Landing2 from "./components/Tire3/LandingPage2";
import Landing3 from "./components/Tire4/LandingPage3";
import RsvpPage from "./components/Forms/RsvpPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/pillars" element={<OurPillars />} />
        <Route path="/contributors" element={<ContributorsPage />} />
        <Route path="/about" element={<AboutSapere />} />
        <Route path="/landingpage" element={<Landing />} />
        <Route path="/landingpage1" element={<Landing1 />} />
        <Route path="/landingpage2" element={<Landing2 />} />
        <Route path="/landingpage3" element={<Landing3 />} />
        <Route path="/rsvpForm" element={<RsvpPage />} />

      </Routes>
    </BrowserRouter>
  );
}
