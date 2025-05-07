import { BlackCheckIcon } from "@src/assets/svgs";
import { securityServicePlansContent } from "@src/constants/securityServicePlansContent";

interface SecurityPlansCardItemProps {
  item: (typeof securityServicePlansContent)[0];
}
const SecurityPlansCardItem = ({ item }: SecurityPlansCardItemProps) => {
  return (
    <div
      key={item.title}
      className="bg-gradient-to-b from-[#F2F2F2] to-0 rounded-2xl p-10 min-w-[280px]"
    >
      <img src={item.icon} className="md:w-16" />
      <div className="gap-0.5 mt-10">
        <div className="text-base font-medium md:text-2xl md:font-light">
          {item.title}
        </div>
        <div className="flex flex-col gap-6 mt-8 ">
          {item.benefits.map((text) => {
            return (
              <div key={text} className="flex gap-x-4">
                <img src={BlackCheckIcon} />
                <div className="text-[#747474]">{text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SecurityPlansCardItem;
