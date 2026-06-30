import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/landingpage-ui/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studiqs — Academic Intelligence Platform for Schools" },
      {
        name: "description",
        content:
          "An Academic Intelligence Platform that connects school data, topic gap analysis, AI recommendations, parent engagement, and management foresight into one decision layer. Matric/Stateboard and CBSE Ready.",
      },
      {
        property: "og:title",
        content: "Studiqs | Academic Intelligence Platform",
      },
      {
        property: "og:description",
        content: "Transform school data into academic intelligence. Get topic gap analysis, Matric/Stateboard and CBSE board readiness, and role-based dashboards.",
      },
    ],
  }),
  component: LandingPage,
});
