import { SecurityOverviewPersonImage } from "@src/assets/images";
import { BulletPointIcon } from "@src/assets/svgs";
import Button from "@src/components/buttons/Button";
import { Container } from "@src/components/shared/Container";
import securityOverviewContent from "@src/constants/securityOverviewContent";

const SecurityOverviewSection = () => {
  return (
    <Container className="max-sm:mb-20 mb-52">
      <section className="mt-40 max-sm:mt-20">
        <h2 className="text-white text-6xl max-sm:text-[28px] min-md:text-center font-normal md:mx-[10%]">
          {securityOverviewContent.title}
        </h2>

        <p className="text-[#A1A1A1] text-xl font-light mt-6 max-sm:mt-2 max-sm:text-sm min-md:hidden">
          {securityOverviewContent.description}
        </p>

        <div className="flex flex-row mt-[5%] max-md:flex-col">
          <img
            src={SecurityOverviewPersonImage}
            alt="Security Overview"
            className="w-[25%] h-full max-md:w-full"
          />

          <div className="min-md:ml-[10%]">
            <p className="text-[#A1A1A1] text-xl max-md:hidden font-light">
              {securityOverviewContent.description}
            </p>

            <ul className="space-y-4 text-[#A1A1A1] font-light mt-12">
              {securityOverviewContent.bulletPoints.map((content, index) => (
                <li key={index} className="flex gap-2 items-start">
                  <img src={BulletPointIcon} alt="" className="w-5 h-5 mt-1" />
                  <div>{content}</div>
                </li>
              ))}
              <Button className="mt-6">Explore corporate features</Button>
            </ul>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default SecurityOverviewSection;
