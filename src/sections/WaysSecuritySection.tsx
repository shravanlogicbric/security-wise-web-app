import { WaysSecurityPersonImage } from "@src/assets/svgs";
import SecurityWaysCardItem from "@src/components/card/SecurityWaysCardItem";
import { securityWaysContent } from "@src/constants/securityWaysContent";

const WaysSecuritySection = () => {
  const positions = [
    {
      className: "",
    },

    {
      className: "",
    },
    {
      className: "md:-ml-20 md:mr-20",
    },
    {
      className: "md:ml-20 md:-mr-20",
    },
  ];
  return (
    <>
      <div className="bg-gray-100 rounded-t-full w-full items-center flex flex-col max-md:min-h-[250px] min-h-[700px] relative ">
        <div className=" pt-50 max-md:pt-14 px-14">
          <div className="text-7xl max-md:text-3xl text-center font-sans text-black md:px-96">
            The Wyse Ways of Security
          </div>
          <p className="pt-4 max-md:pt-2 text-[#747474] text-xl max-md:text-sm font-light md:px-72 text-center">
            We believe the future of safety is shared. Everyone should have the
            tools to see risk coming and help each other avoid it
          </p>
        </div>
        <div className="relative w-full items-center flex flex-col mt-6">
          <div className="gap-4 mt-4 px-12 grid md:grid-cols-2 md:gap-x-96 md:px-36 md:absolute md:top-30">
            {securityWaysContent.map((item, index) => {
              const position = positions[index];
              return (
                <div key={item.title} className={` ${position.className}`}>
                  <SecurityWaysCardItem item={item} />
                </div>
              );
            })}
          </div>
          <img src={WaysSecurityPersonImage} className="md:w-xl" />
        </div>
      </div>
    </>
  );
};
export default WaysSecuritySection;
