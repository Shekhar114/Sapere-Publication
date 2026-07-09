import React from "react";
import HeroSection from "./HeroSection";
import WelcomeSection from "./WelcomeSection";
import AccessLibrarySection from "./AccessLibrarySection";
import SapereNetworkSection from "./SapereNetworkSection";
import FeaturedArticle from "./FeaturedArticle";
import UpcomingEvents from "./UpcomingEvents";
import OfficeHoursSection from "./OfficeHoursSection";
import Footer from "../Footer";
import RoundtableSection from "./RoundtableSection";
const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <AccessLibrarySection />
      <SapereNetworkSection />
      <FeaturedArticle />
      <RoundtableSection />
      <UpcomingEvents />
      <OfficeHoursSection />
      <Footer />
    </>
  );
};
export default LandingPage;
