import WhatIsSecurityWyseCardItem from "@src/components/card/WhatIsSecurityWyseCardItem";
import { Container } from "@src/components/shared/Container";
import { whatIsSecurityWyseContent } from "@src/constants/whatIsSecurityWyseContent";

const WhatIsSecurityWyseSection = () => {
  return (
    <Container className="pt-36">
      <div className="max-sm:min-h-[30vh] min-h-[70vh] sticky top-[30%] max-md:top-0">
        <div className="items-center justify-center text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-black max-md:text-[40px] md:text-[120px]">
          What is SecurityWyse?
        </div>
      </div>

      <div className="flex flex-col gap-50 md:gap-10 mb-48">
        {whatIsSecurityWyseContent.map((item, index) => {
          const top = [
            "max-md:top-30 lg:z-0 md:top-30",
            "max-md:top-40 lg:ml-[35%] lg:z-2 md:top-30 md:ml-[50%] ",
            "max-md:top-50 lg:ml-[70%] lg:z-4 md:top-30",
            "max-md:top-60 lg:ml-[15%] lg:z-1 md:top-120 md:ml-[50%] ",
            "max-md:top-70 lg:ml-[50%] lg:z-3 ",
          ][index];
          return (
            <div className={`sticky ${top} md:w-[30%] min-w-[320px]`}>
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
