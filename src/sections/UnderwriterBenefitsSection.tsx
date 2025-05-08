import Button from "@src/components/buttons/Button";
import { Container } from "@src/components/shared/Container";
import underwriterBenefitsContent from "@src/constants/underwriterBenefitsContent";

export default function UnderwriterBenefitsSection() {
  return (
    <Container className="bg-[#F2F2F2] py-48 max-sm:py-12">
      <div className="max-w-7xl mx-auto flex max-md:flex-col gap-x-32 gap-y-6">
        {/* Left Text Block */}
        <div className="md:w-[30%]">
          <div className="lg:text-7xl md:text-5xl max-md:text-3xl font-sans text-black">
            {underwriterBenefitsContent.title}
          </div>
          <p className="pt-4 max-md:pt-2 text-[#747474] text-xl max-md:text-sm font-light mb-5">
            {underwriterBenefitsContent.description}
          </p>
          <Button className="bg-black">Request Early Access</Button>
        </div>

        {/* Right Feature Cards Grid */}
        <div className="grid grid-cols-2 lg:gap-x-32 md:gap-x-16 gap-x-10 gap-y-24 justify-between w-full">
          {underwriterBenefitsContent.listContent.map((item, index) => (
            <div
              key={index}
              className="border-b-1 border-[#A1A1A1] pb-6 min-w-[30%]"
            >
              <img src={item.icon} />
              <h3 className="text-lg font-normal text-black mt-5">
                {item.title}
              </h3>
              <p className="text-sm text-[#747474] mt-3">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
