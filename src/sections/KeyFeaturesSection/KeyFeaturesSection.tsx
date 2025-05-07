import { Container } from "@src/components/shared/Container";
import CardsSectionView from "./CardsSectionView";

const KeyFeaturesSection = () => {
  return (
    <Container>
      <div className="max-sm:mt-20 mt-40">
        <div className="text-white text-6xl max-sm:text-[28px] text-center font-normal">
          SecurityWyse Key Features
        </div>
        <div className="text-[#A1A1A1] text-xl max-sm:text-base text-center font-normal max-sm:mt-2 mt-6">
          We believe the future of safety is shared.
        </div>
      </div>
      <CardsSectionView />
    </Container>
  );
};

export default KeyFeaturesSection;
