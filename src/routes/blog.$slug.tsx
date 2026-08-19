import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogDetail,
});

function BlogDetail() {
  const { slug } = Route.useParams();

  console.log("🔥 BLOG DETAIL COMPONENT");
  console.log("SLUG:", slug);

  return (
    <div>
      BLOG DETAIL: {slug}
    </div>
  );
}