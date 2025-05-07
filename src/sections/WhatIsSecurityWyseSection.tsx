import WhatIsSecurityWyseCardItem from "@src/components/card/WhatIsSecurityWyseCardItem";
import { Container } from "@src/components/shared/Container";
import { whatIsSecurityWyseContent } from "@src/constants/whatIsSecurityWyseContent";

const WhatIsSecurityWyseSection = () => {
  return (
    <Container className="pt-36">
      <div className="max-sm:min-h-[30vh] min-h-[70vh] sticky top-[35%] max-md:top-0">
        <div className="items-center justify-center text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-black max-md:text-[40px] md:text-[120px]">
          What is SecurityWyse?
        </div>
      </div>

      <div className="flex flex-col gap-50 md:gap-10 mb-48">
        {whatIsSecurityWyseContent.map((item, index) => {
          const top = [
            "max-sm:top-30 md:z-0 md:top-30",
            "max-sm:top-40 md:ml-[35%] md:z-2 md:top-30",
            "max-sm:top-50 md:ml-[70%] md:z-4 md:top-30",
            "max-sm:top-60 md:ml-[15%] md:z-1 md:top-120",
            "max-sm:top-70 md:ml-[50%] md:z-3 ",
          ][index];
          return (
            <div className={`sticky ${top} md:w-[30%]`}>
              <div className="w-full h-full">
                <WhatIsSecurityWyseCardItem item={item} />
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default WhatIsSecurityWyseSection;
