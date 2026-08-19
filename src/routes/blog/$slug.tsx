import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import Navbar from "@/components/pages/Navbar";
import Footer from "@/components/pages/Footer";
import { blogs } from "@/data/blogs";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogDetail,
});

function BlogDetail() {
  const { slug } = Route.useParams();

  console.log("BLOG SLUG:", slug);

  const blog = blogs.find((item) => item.slug === slug);

  console.log("BLOG:", blog);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-6xl uppercase">
            Article Not Found
          </h1>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 mt-8 text-sm uppercase"
          >
            <ArrowLeft size={16} />
            Back To Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />

      <section className="px-6 md:px-10 pt-24 pb-16">
        <div className="max-w-[1500px] mx-auto">

          <Link
            to="/blog"
            className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em]"
          >
            <ArrowLeft size={14} />
            Back To Insights
          </Link>

          <div className="mt-20 flex gap-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              {blog.category}
            </span>

            <span>•</span>

            <span className="font-mono text-[10px] uppercase">
              {blog.date}
            </span>

            <span>•</span>

            <span className="font-mono text-[10px] uppercase">
              {blog.readTime}
            </span>
          </div>

          <h1 className="font-display text-[15vw] md:text-[125px] uppercase leading-[0.78] mt-8 max-w-[1300px]">
            {blog.title}
          </h1>

          <p className="max-w-3xl ml-auto text-xl md:text-2xl leading-relaxed text-muted-foreground mt-16">
            {blog.intro}
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10">
        <div className="max-w-[1500px] mx-auto">
          <div className="aspect-[16/8] overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-[1500px] mx-auto grid md:grid-cols-12 gap-10">

          <aside className="md:col-span-3">
            <div className="sticky top-32">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                Article
              </span>

              <div className="border-t border-border mt-6 pt-5">
                <p className="font-mono text-[10px] uppercase">
                  By Mitriv Ventures
                </p>
              </div>
            </div>
          </aside>

          <article className="md:col-span-7 md:col-start-5">

            <p className="font-display text-3xl md:text-4xl uppercase leading-tight">
              {blog.description}
            </p>

            {blog.sections.map((section) => (
              <div
                key={section.number}
                className="mt-24 pt-8 border-t border-border"
              >
                <div className="flex gap-6">

                  <span className="font-display text-6xl text-primary/30">
                    {section.number}
                  </span>

                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                      {section.label}
                    </span>

                    <h2 className="font-display text-4xl md:text-6xl uppercase mt-4">
                      {section.title}
                    </h2>
                  </div>
                </div>

                {section.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-muted-foreground leading-8 mt-8"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.image && (
                  <div className="mt-12 aspect-[4/3] overflow-hidden">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            ))}

          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
}