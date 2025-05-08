import { Container } from "@src/components/shared/Container";
import GradientOutlineButton from "../components/buttons/GradientOutlineButton";

const Header = () => (
  <Container className="flex justify-between items-center gap-20  mt-10 md:mb-28 mb-20">
    <h1 className="text-[var(--text-color)] font-medium font-[Helvetica] text-2xl max-sm:text-base">
      Securitywise
    </h1>

    <GradientOutlineButton>Request a Demo</GradientOutlineButton>
  </Container>
);

export default Header;
