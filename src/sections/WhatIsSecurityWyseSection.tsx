import WhatIsSecurityWyseCardItem from "@src/components/card/WhatIsSecurityWyseCardItem";
import { Container } from "@src/components/shared/Container";
import { whatIsSecurityWyseContent } from "@src/constants/whatIsSecurityWyseContent";

const WhatIsSecurityWyseSection = () => {
  const positions = [
    {
      align: "justify-start",
      zIndex: "md:z-0",
    },
    {
      align: "justify-center",
      zIndex: "md:z-10",
    },
    {
      align: "justify-end",
      zIndex: "md:z-20",
    },
  ];

  return (
    <Container>
      <div className="sticky top-[35%] max-md:top-0 items-center justify-center text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-black max-md:text-[40px] md:text-[120px]">
        What is SecurityWyse?
      </div>

      <div className="min-h-[200vh] flex flex-col items-center gap-y-20 pb-50 md:pb-70">
        {whatIsSecurityWyseContent.map((item, index) => {
          const position = positions[index % 3];
          const top = [
            "max-md:top-50",
            "max-md:top-60",
            "max-md:top-70",
            "max-md:top-80",
            "max-md:top-90",
          ];
          const ml = ![0, 1, 2].includes(index) ? "md:ml-[30%]" : "md:ml-0";

          return (
            <div
              key={index}
              className={`sticky top-50 ${ml} w-full ${position.align} flex mt-4 ${position.zIndex} ${top[index]}`}
            >
              <div className="md:w-[30%]">
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
