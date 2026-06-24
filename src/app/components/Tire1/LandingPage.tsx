import React from "react";
import HeroSection from "./HeroSection";
import WelcomeSection from "./WelcomeSection";
import AccessLibrarySection from "./AccessLibrarySection";
import SapereNetworkSection from "./SapereNetworkSection";
import FeaturedArticle from "./FeaturedArticle";
import UpcomingEvents from "./UpcomingEvents";
import OfficeHoursSection from "./OfficeHoursSection";
import Footer from "../Footer";
const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <AccessLibrarySection />
      <SapereNetworkSection />
      <FeaturedArticle />
      <UpcomingEvents />
      <OfficeHoursSection />
      <Footer />
    </>
  );
};
export default LandingPage;
