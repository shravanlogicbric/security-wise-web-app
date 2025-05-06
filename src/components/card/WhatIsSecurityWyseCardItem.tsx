import { whatIsSecurityWyseContent } from "@src/constants/whatIsSecurityWyseContent";

interface WhatIsSecurityWyseCardItemProps {
  item: (typeof whatIsSecurityWyseContent)[0];
}
const WhatIsSecurityWyseCardItem = ({
  item,
}: WhatIsSecurityWyseCardItemProps) => {
  return (
    <div className="md:w-[30%]">
      <div
        key={item.title}
        className="relative rounded-2xl  z-10  hover:bg-gradient-to-tr from-[var(--button-gradient-start)]/10 via-black/50 via-70% to-[var(--button-gradient-start)]/20 hover:shadow-sm shadow-[rgb(var(--button-shadow))]/30 bg-transparent/5 border-1 border-white/10"
      >
        <div className="relative group overflow-hidden  p-10 rounded-2xl backdrop-blur-md bg-white/5">
          <div className="relative z-10">
            <img src={item.icon} />
            <div className="text-white text-[28px] mt-12">{item.title}</div>
            <div className="text-[#A1A1A1] text-[18px]">{item.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhatIsSecurityWyseCardItem;
