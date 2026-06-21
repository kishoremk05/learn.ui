import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/landingpage-ui/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studiqs — AI-Powered Student Intelligence & School ERP" },
      {
        name: "description",
        content:
          "Run your entire school from one intelligent platform — admissions, academics, attendance, fees, transport and analytics, supporting CBSE, IB, and international standards.",
      },
      { property: "og:title", content: "Studiqs — AI-Powered School ERP" },
      {
        property: "og:description",
        content: "One platform. Complete control. Better outcomes.",
      },
    ],
  }),
  component: LandingPage,
});
