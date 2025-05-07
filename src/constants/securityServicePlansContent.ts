import {
  CommunityGroupsPlanIcon,
  IndividualPersonPlanIcon,
  OrganizationsPlanIcon,
} from "@src/assets/svgs";

export const securityServicePlansContent = [
  {
    icon: IndividualPersonPlanIcon,
    title: "Individuals",
    benefits: ["Local alerts", "Safe Routes", "Report Incidents"],
  },
  {
    icon: OrganizationsPlanIcon,
    title: "Organizations",
    benefits: [
      "Monitor Areas",
      "View Incident Trends",
      "Add “Watch Zones”",
      "Receive Weekly Summaries",
    ],
  },
  {
    icon: CommunityGroupsPlanIcon,
    title: "Community Groups",
    benefits: [
      "Collaborate on safety projects",
      "Raise public awareness",
      "Help map safer spaces",
      "Partner with us to improve public safety",
    ],
  },
];
