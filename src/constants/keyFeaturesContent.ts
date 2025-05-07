import {
  APIDashboardImage,
  CustomZonesImage,
  SmartAlertImage,
} from "@src/assets/images";
import {
  RiskReportsIcon,
  VerifiedReportsIcon,
  WeeklyUpdatesIcon,
} from "@src/assets/svgs";

const keyFeaturesContent = [
  {
    title: "Smart Alerts",
    description:
      "Get notified about nearby activity (customised by user or site)",
    icon: "",
    image: SmartAlertImage,
  },
  {
    title: "Risk Reports",
    description: "Get summaries of incident patterns and local trends",
    icon: RiskReportsIcon,
  },
  {
    title: "Verified Reports",
    description: "Access crowd-submitted intelligence, reviewed for accuracy",
    icon: VerifiedReportsIcon,
  },
  {
    title: "API & Dashboards",
    description:
      "Integrate with your operations, or track incidents without app usage",
    icon: "",
    image: APIDashboardImage,
  },
  {
    title: "Custom Zones",
    description: "Watch key locations and receive daily/weekly insights",
    icon: "",
    image: CustomZonesImage,
  },

  {
    title: "Weekly Updates",
    description: "Get a snapshot of risk changes in your area",
    icon: WeeklyUpdatesIcon,
  },
];
export const keyFeaturesForMobileViewContent = [
  {
    title: "Smart Alerts",
    description:
      "Get notified about nearby activity (customised by user or site)",
    icon: "",
    image: SmartAlertImage,
  },
  {
    title: "Verified Reports",
    description: "Access crowd-submitted intelligence, reviewed for accuracy",
    icon: VerifiedReportsIcon,
  },
  {
    title: "Custom Zones",
    description: "Watch key locations and receive daily/weekly insights",
    icon: "",
    image: CustomZonesImage,
  },

  {
    title: "Risk Reports",
    description: "Get summaries of incident patterns and local trends",
    icon: RiskReportsIcon,
  },

  {
    title: "API & Dashboards",
    description:
      "Integrate with your operations, or track incidents without app usage",
    icon: "",
    image: APIDashboardImage,
  },

  {
    title: "Weekly Updates",
    description: "Get a snapshot of risk changes in your area",
    icon: WeeklyUpdatesIcon,
  },
];
export default keyFeaturesContent;
