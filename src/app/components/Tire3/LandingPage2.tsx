import Footer from "../Footer";
import OfficeHoursSection from "../Tire1/OfficeHoursSection";
import SapereNetworkSection from "../Tire1/SapereNetworkSection";
import CouncilRecordingSection from "../Tire2/CouncilRecordingSection";
import FoundersEveningsSection from "../Tire2/FoundersEveningsSection";

import SapereConversations from "../Tire2/SapereConversations";
import WelcomeSection from "../Tire1/WelcomeSection";
import WorkshopAccess from "../Tire2/WorkShopAccess";
import HeroSection from "./HeroSection";
import InnerCircleSection from "./InnerCircleSection";
import LiveSessionsSection from "./LiveSessionsSection";
import TalentIncubatorSection from "./TalentIncubatorSection";

function LandingPage3() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <InnerCircleSection />
      <TalentIncubatorSection />
      <SapereConversations />
      <WorkshopAccess />
      <SapereNetworkSection />
      <FoundersEveningsSection />
      <CouncilRecordingSection />
      <LiveSessionsSection />
      <OfficeHoursSection />
      <Footer />
    </>
  );
}

export default LandingPage3;
