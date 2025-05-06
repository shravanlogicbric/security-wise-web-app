import Button from "@src/components/buttons/Button";
import SecurityPlansCardItem from "@src/components/card/SecurityPlansCardItem";
import { securityServicePlansContent } from "@src/constants/securityServicePlansContent";

const SecurityPlansSection = () => {
  return (
    <div className="bg-white rounded-b-full w-full items-center flex flex-col max-md:min-h-[250px] min-h-[700px] pb-10 md:pb-50">
      {/* Heading */}
      <div className="pt-16 max-md:pt-32">
        <div className="text-7xl max-md:text-3xl text-center font-sans text-black md:px-32">
          Be Wyse. Be aware. Help protect your people, your team, your
          community.
        </div>
      </div>

      {/* Horizontal scroll section */}
      <div className="w-full flex justify-center my-16 max-md:my-5">
        <div className="flex gap-6 w-max overflow-x-auto scrollbar-hide px-4">
          {securityServicePlansContent.map((item, index) => (
            <div key={index} className="min-w-[300px] max-w-[300px]">
              <SecurityPlansCardItem item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <Button className="bg-black">Request Demo</Button>
    </div>
  );
};

export default SecurityPlansSection;
