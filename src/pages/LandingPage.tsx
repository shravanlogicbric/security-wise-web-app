import Footer from "@src/sections/Footer";
import Header from "@src/sections/Header";
import HeroSection from "@src/sections/HeroSection";
import KeyFeaturesSection from "@src/sections/KeyFeaturesSection/KeyFeaturesSection";
import SecurityPlansSection from "@src/sections/SecurityPlansSection";
import WaysSecuritySection from "@src/sections/WaysSecuritySection";
import WhatIsSecurityWyseSection from "@src/sections/WhatIsSecurityWyseSection";

const LandingPage = () => {
  return (
    <div className="mx-auto max-w-[1440px] w-full">
      <Header />
      <HeroSection />
      <WhatIsSecurityWyseSection />
      <WaysSecuritySection />
      <SecurityPlansSection />
      <KeyFeaturesSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
