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
      className="relative group overflow-hidden  p-10 bg-gradient-to-t from-[#050505] to-[#0F0F0F] border-1 border-[#A1A1A1]/20 rounded-2xl"
    >
      <div className="absolute inset-0 z-0 blur-3xl bg-white/5 rounded-2xl" />
      <div className="absolute inset-0 z-0 backdrop-blur-md bg-white/5 group-hover:bg-white/10 transition-all duration-300 rounded-2xl" />

      <div className="relative z-10">
        <img src={item.icon} />
        <div className="text-white text-[28px]">{item.title}</div>
        <div className="text-[#A1A1A1] text-[18px]">{item.description}</div>
      </div>
    </div>
  );
};
export default WhatIsSecurityWyseCardItem;
