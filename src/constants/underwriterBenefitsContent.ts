import {
  APICustomIntegrationsIcon,
  InstantClaimsValidationIcon,
  RealTimeRiskScoringIcon,
  VerifiedSecurityReportsIcon,
} from "@src/assets/svgs";

const title = "Exclusive Underwriter Benefits";
const description =
  "Gain a competitive edge with advanced security insights tailored for underwriters.";

const listContent = [
  {
    icon: RealTimeRiskScoringIcon,
    title: "Real-Time Risk Scoring",
    description: "AI-driven threat analysis",
  },
  {
    icon: VerifiedSecurityReportsIcon,
    title: "Verified Security Reports",
    description: "Human-vetted intelligence",
  },
  {
    icon: InstantClaimsValidationIcon,
    title: "Instant Claims Validation",
    description: "48-hour turnaround",
  },
  {
    icon: APICustomIntegrationsIcon,
    title: "API & Custom Integrations",
    description: "Seamless workflow",
  },
];
const underwriterBenefitsContent = {
  title,
  description,
  listContent,
};
export default underwriterBenefitsContent;
