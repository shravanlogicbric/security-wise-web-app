import Header from "@src/sections/Header";
import HeroSection from "@src/sections/HeroSection";
import WhatIsSecurityWyseSection from "@src/sections/WhatIsSecurityWyseSection";

const LandingPage = () => {
  return (
    <div className="mx-auto max-w-[1440px] w-full px-4">
      <Header />
      <HeroSection />
      <WhatIsSecurityWyseSection />
    </div>
  );
};

export default LandingPage;
