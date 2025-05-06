import Header from "@src/sections/Header";
import HeroSection from "@src/sections/HeroSection";
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
    </div>
  );
};

export default LandingPage;
