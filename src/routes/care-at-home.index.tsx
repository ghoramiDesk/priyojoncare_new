import { CareAtHomePage } from "@/components/CareAtHomePage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/care-at-home/")({
  component: CareAtHomePage,
});
