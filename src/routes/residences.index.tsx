import { ResidencesPage } from "@/components/ResidencePage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/residences/")({
  component: ResidencesPage,
});
