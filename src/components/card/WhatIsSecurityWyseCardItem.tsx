import { whatIsSecurityWyseContent } from "@src/constants/whatIsSecurityWyseContent";

interface WhatIsSecurityWyseCardItemProps {
  item: (typeof whatIsSecurityWyseContent)[0];
}
const WhatIsSecurityWyseCardItem = ({
  item,
}: WhatIsSecurityWyseCardItemProps) => {
  return (
    <div
      key={item.title}
      className="rounded-3xl z-10 overflow-hidden transition duration-1000 ease-in-out hover:bg-gradient-to-bl from-[var(--button-gradient-end)] via-black from-2% via-20% to-205%    to-[var(--button-gradient-end)] hover:shadow-sm shadow-[rgb(var(--button-shadow))]/40 p-[1px]"
    >
      <div className="group overflow-hidden rounded-3xl  p-10 max-sm:p-4 backdrop-blur-sm bg-[#0F0F0F]/80 border-1 border-[#1e1e1e]">
        <img src={item.icon} />
        <div className="text-white text-[28px] mt-12 max-sm:mt-7 max-sm:text-[20px]">
          {item.title}
        </div>
        <div className="text-[#A1A1A1] text-[18px] max-sm:text-sm">
          {item.description}
        </div>
      </div>
    </div>
  );
};
export default WhatIsSecurityWyseCardItem;
