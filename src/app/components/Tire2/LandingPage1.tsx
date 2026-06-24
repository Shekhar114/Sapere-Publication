import Footer from "../Footer";
import SapereNetworkSection from "../Tire1/SapereNetworkSection";
import CouncilRecordingSection from "./CouncilRecordingSection";
import FoundersEveningsSection from "./FoundersEveningsSection";
import HeroSection from "./HeroSection";
import OfficeHoursSection from "./OfficeHoursSection";
import SapereConversations from "./SapereConversations";
import WelcomeSection from "./WelcomeSection";
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
