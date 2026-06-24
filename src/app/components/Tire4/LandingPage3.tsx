import Footer from "../Footer";
import SapereNetworkSection from "../Tire1/SapereNetworkSection";
import CouncilRecordingSection from "../Tire2/CouncilRecordingSection";
import FoundersEveningsSection from "../Tire2/FoundersEveningsSection";
import OfficeHoursSection from "../Tire2/OfficeHoursSection";
import SapereConversations from "../Tire2/SapereConversations";
import WorkshopAccess from "../Tire2/WorkShopAccess";
import HeroSection from "../Tire3/HeroSection";
import InnerCircleSection from "../Tire3/InnerCircleSection";
import LiveSessionsSection from "../Tire3/LiveSessionsSection";
import TalentIncubatorSection from "../Tire3/TalentIncubatorSection";
import CoCreationSection from "./CoCreationSection";
import ConciergeNetwork from "./ConciergeNetwork";
import EditorialFeatureSection from "./EditorialFeatureSection";
import SummitSection from "./SummitSection";
import SummitsSection from "./SummitsSection";
import WelcomeSection from "./WelcomeSection";

function LandingPage3(){

    return(
        <>
            <HeroSection  />
            <WelcomeSection />
            <InnerCircleSection />
            <TalentIncubatorSection />
            <CoCreationSection  />
            <EditorialFeatureSection   />
            <ConciergeNetwork   />
            <SapereConversations />
            <WorkshopAccess />
            <SapereNetworkSection />
            <CouncilRecordingSection />
            <LiveSessionsSection />
            <FoundersEveningsSection />
            <SummitsSection />
            <SummitSection />
            <OfficeHoursSection />
            <Footer />

            

        </>
    );
}
export default LandingPage3;