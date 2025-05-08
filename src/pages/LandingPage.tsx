import Footer from "@src/sections/Footer";
import Header from "@src/sections/Header";
import HeroSection from "@src/sections/HeroSection";
import JoinPilotProgramSection from "@src/sections/JoinPilotProgramSection";
import KeyFeaturesSection from "@src/sections/KeyFeaturesSection/KeyFeaturesSection";
import NetworkSection from "@src/sections/NetworkSection";
import SecurityOverviewSection from "@src/sections/SecurityOverviewSection";
import SecurityPlansSection from "@src/sections/SecurityPlansSection";
import UnderwriterBenefitsSection from "@src/sections/UnderwriterBenefitsSection";
import WaysSecuritySection from "@src/sections/WaysSecuritySection";
import WhatIsSecurityWyseSection from "@src/sections/WhatIsSecurityWyseSection";

const LandingPage = () => {
  return (
    <div className="mx-auto max-w-[1440px] w-full h-screen">
      <Header />
      <HeroSection />
      <WhatIsSecurityWyseSection />
      <WaysSecuritySection />
      <SecurityPlansSection />
      <KeyFeaturesSection />
      <div className="w-full max-sm:h-1/3 h-10/12 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      <SecurityOverviewSection />
      <UnderwriterBenefitsSection />
      <NetworkSection />
      <JoinPilotProgramSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
