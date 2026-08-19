import { createFileRoute } from "@tanstack/react-router";
import Blog from "@/components/pages/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      {
        title: "Real Estate Insights | Mitriv Ventures",
      },
      {
        name: "description",
        content:
          "Real estate insights, property investment guides, Mumbai market trends and expert advice from Mitriv Ventures.",
      },
    ],
  }),

  component: Blog,
});