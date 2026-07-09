import Footer from "../Footer";
import OfficeHoursSection from "../Tire1/OfficeHoursSection";
import SapereNetworkSection from "../Tire1/SapereNetworkSection";
import CouncilRecordingSection from "./CouncilRecordingSection";
import FoundersEveningsSection from "./FoundersEveningsSection";
import HeroSection from "./HeroSection";

import SapereConversations from "./SapereConversations";
import WelcomeSection from "../Tire1/WelcomeSection";
import WorkshopAccess from "./WorkShopAccess";

function LandingPage1() {
  return (
    <div>
      <HeroSection />
      <WelcomeSection />
      <SapereConversations />
      <OfficeHoursSection />
      <WorkshopAccess />
      <SapereNetworkSection />
      <FoundersEveningsSection />
      <CouncilRecordingSection />
      <Footer />
    </div>
  );
}

export default LandingPage1;
