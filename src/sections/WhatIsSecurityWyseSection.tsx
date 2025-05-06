import WhatIsSecurityWyseCardItem from "@src/components/card/WhatIsSecurityWyseCardItem";
import { Container } from "@src/components/shared/Container";
import { whatIsSecurityWyseContent } from "@src/constants/whatIsSecurityWyseContent";

const WhatIsSecurityWyseSection = () => {
  return (
    <Container>
      <div className="items-center justify-center text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-black max-md:text-[40px] md:text-[120px]">
        What is SecurityWyse?
      </div>
      <div className="grid grid-cols-3 gap-x-[120px] gap-y-11">
        {whatIsSecurityWyseContent.map((item) => {
          return <WhatIsSecurityWyseCardItem item={item} />;
        })}
      </div>
    </Container>
  );
};

export default WhatIsSecurityWyseSection;
