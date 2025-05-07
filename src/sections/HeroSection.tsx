import GradientFillButton from "@src/components/buttons/GradientFillButton";
import Button from "@src/components/buttons/Button";
import { Container } from "@src/components/shared/Container";
import { HeroSectionPhoneHandImage } from "@src/assets/images";

const HeroSection = () => (
  <Container className="flex flex-col relative xl:mb-100">
    <div>
      <div className="text-white font-normal md:text-7xl max-md:text-4xl md:max-w-3xl">
        Stay Safe. Stay Aware. Stay Wyse.
      </div>
      <div className="text-[#A1A1A1] font-normal md:text-[20] max-md:text-[16] mt-4">
        Real-time alerts, verified reports, and smart safety tools for people,
        places, and workplaces.
      </div>
    </div>
    <div className="flex gap-4 my-4 ">
      <GradientFillButton>Join the Wyse Network</GradientFillButton>
      <Button>Learn More</Button>
    </div>
    <div className="-mx-4 md:px-[var(--main-x-padding)] transition duration-1000 md:-mx-[var(--main-x-padding)] xl:absolute -z-10 xl:-mt-20 w-screen overflow-hidden">
      <img
        src={HeroSectionPhoneHandImage}
        alt="Hero Phone Hand"
        className="max-sm:scale-[2] max-sm:my-[25%] max-sm:-ml-[40%]"
      />
    </div>
  </Container>
);

export default HeroSection;
