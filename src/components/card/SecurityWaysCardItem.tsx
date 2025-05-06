import { securityWaysContent } from "@src/constants/securityWaysContent";

interface SecurityWaysCardItemProps {
  item: (typeof securityWaysContent)[0];
}
const SecurityWaysCardItem = ({ item }: SecurityWaysCardItemProps) => {
  return (
    <div
      key={item.title}
      className="bg-white border border-[#E4E4E4] rounded-2xl flex flex-row p-2 gap-0.5 items-center"
    >
      <img src={item.icon} className="md:w-16" />
      <div className="gap-0.5">
        <div className="text-base font-medium md:text-2xl md:font-light">
          {item.title}
        </div>
        <div className="text-[#747474] text-sm font-light md:text-base">
          {item.description}
        </div>
      </div>
    </div>
  );
};
export default SecurityWaysCardItem;
