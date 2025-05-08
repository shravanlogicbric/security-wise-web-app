import { JoinPilotProgramBG } from "@src/assets/svgs";
import GradientFillButton from "@src/components/buttons/GradientFillButton";

const JoinPilotProgramSection = () => {
  return (
    <div className="relative overflow-hidden flex max-sm:mt-20">
      <img
        src={JoinPilotProgramBG}
        alt="Join Pilot Program Background"
        className="w-full h-full md:-mt-60 max-sm:-mt-20"
      />
      <div className="absolute z-100 w-full h-full flex flex-col items-center justify-center px-28 max-sm:px-4">
        <div className="font-normal text-white text-center text-6xl max-sm:text-[28px] mb-10 max-sm:mb-5">
          Join Our Exclusive Pilot Program Only 5 Underwriter Groups Accepted!
        </div>
        <GradientFillButton>Request Early Access</GradientFillButton>
      </div>
    </div>
  );
};

export default JoinPilotProgramSection;
