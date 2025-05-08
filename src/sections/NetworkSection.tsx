import { MapImage } from "@src/assets/images";
import networkContent from "@src/constants/networkContent";

const NetworkSection = () => {
  return (
    <div className="px-24 max-sm:px-4 pt-10">
      <div className="my-10 max-sm:my-0">
        <div className="text-5xl max-sm:text-3xl font-light text-white text-center">
          {networkContent.title}
        </div>
        <p className="mt-6 max-sm:mt-2 text-[#747474] text-xl max-md:text-sm font-light text-center">
          {networkContent.description}
        </p>
      </div>
      <img src={MapImage} />
      <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-8 mt-20 max-sm:mt-5">
        {networkContent.securityData.map((item) => {
          return (
            <div key={item.label}>
              <div className="text-white text-[40px] max-sm:text-[28px] inline-flex">
                {item.value}{" "}
                <strong className="text-[#747474] text-2xl max-sm:text-base font-normal">
                  {item.suffix}
                </strong>
              </div>
              <div className="text-[#747474] text-lg max-sm:text-base mt-8 max-sm:mt-3">
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default NetworkSection;
