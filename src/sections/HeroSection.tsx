import GradientFillButton from "@src/components/buttons/GradientFillButton";
import Button from "@src/components/buttons/Button";
import { Container } from "@src/components/shared/Container";

const HeroSection = () => (
  <Container>
    <div className="md:w-3xl">
      <div className="text-white font-normal md:text-7xl max-md:text-4xl">
        Stay Safe. Stay Aware. Stay Wyse.
      </div>
      <div className="text-[#A1A1A1] font-normal md:text-[20] max-md:text-[16] mt-4">
        Real-time alerts, verified reports, and smart safety tools for people,
        places, and workplaces.
      </div>
    </div>
    <div className="flex gap-4 my-4">
      <GradientFillButton>Join the Wyse Network</GradientFillButton>
      <Button>Learn More</Button>
    </div>
  </Container>
);

export default HeroSection;
