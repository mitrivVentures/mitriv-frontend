import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/pages/Navbar";
import Footer from "@/components/pages/Footer";
import { blogs } from "@/data/blogs";

export const Route = createFileRoute("/blog_/$slug")({
  head: ({ params }) => {
    const blog = blogs.find((item) => item.slug === params.slug);
    if (!blog) {
      return {
        meta: [
          {
            title: "Blog Not Found | Mitriv Ventures",
          },
          {
            name: "robots",
            content: "noindex, nofollow",
          },
        ],
      };
    }
   return {
      meta: [
        // Basic SEO
        {
          title: `${blog.metaTitle} | Mitriv Ventures`,
        },

        {
          name: "description",
          content: blog.metaDescription,
        },

        // Keywords
        {
          name: "keywords",
          content: [
            blog.primaryKeyword,
            ...blog.secondaryKeywords,
          ].join(", "),
        },

        // Author
        {
          name: "author",
          content: "Mitriv Ventures",
        },

        // Robots
        {
          name: "robots",
          content:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },

        // Open Graph
        {
          property: "og:type",
          content: "article",
        },

        {
          property: "og:title",
          content: blog.metaTitle,
        },

        {
          property: "og:description",
          content: blog.metaDescription,
        },

        {
          property: "og:image",
          content: blog.image,
        },

        {
          property: "og:image:alt",
          content: blog.imageAlt,
        },

        {
          property: "og:site_name",
          content: "Mitriv Ventures",
        },

        // Article
        {
          property: "article:section",
          content: blog.category,
        },

  
        // Twitter / X
        {
          name: "twitter:card",
          content: "summary_large_image",
        },

        {
          name: "twitter:title",
          content: blog.metaTitle,
        },

        {
          name: "twitter:description",
          content: blog.metaDescription,
        },

        {
          name: "twitter:image",
          content: blog.image,
        },

        {
          name: "twitter:image:alt",
          content: blog.imageAlt,
        },
      ],
    };
  },

  component: BlogDetail,
});

function BlogDetail() {
  const { slug } = Route.useParams();

  const blog = blogs.find((item) => item.slug === slug);

  /* =========================================
     404
  ========================================= */

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#F8F5F0] text-[#1E1E1E]">
        <Navbar />

        <main className="min-h-[80vh] flex items-center justify-center px-6">
          <div className="text-center">
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-[#E7662B]">
              Error 404
            </span>

            <h1 className="font-display text-6xl md:text-8xl uppercase mt-6">
              Blog Not Found
            </h1>

            <p className="text-black/50 mt-6 max-w-md mx-auto">
              The article you're looking for doesn't exist or may have been
              removed.
            </p>

            <Link
              to="/blog"
              className="
                inline-flex
                items-center
                gap-3
                mt-10
                px-6
                py-3
                bg-[#E7662B]
                text-white
                uppercase
                tracking-[0.15em]
                text-xs
                hover:bg-[#C95420]
                transition
              "
            >
              <ArrowLeft size={15} />
              Back To Blogs
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#1E1E1E]">
      <Navbar />

      {/* =========================================
          HERO
      ========================================= */}

      <section className="px-6 md:px-10 pt-32 md:pt-40 pb-20">
        <div className="max-w-[1400px] mx-auto">

          {/* Back */}
          <Link
            to="/blog"
            className="
              inline-flex
              items-center
              gap-3
              text-xs
              uppercase
              tracking-[0.25em]
              text-black/50
              hover:text-[#E7662B]
              transition
              mb-16
            "
          >
            <ArrowLeft size={15} />
            Back To Insights
          </Link>

          {/* Category */}
          <div className="flex items-center gap-4 mb-8">
            <span className="
              font-mono
              text-xs
              uppercase
              tracking-[0.35em]
              text-[#E7662B]
            ">
              {blog.category}
            </span>

            <span className="w-10 h-px bg-black/20" />

            <span className="
              font-mono
              text-xs
              uppercase
              tracking-[0.2em]
              text-black/40
            ">
              {blog.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="
            font-display
            text-6xl
            sm:text-7xl
            md:text-[110px]
            lg:text-[100px]
            leading-[0.95]
            uppercase
            tracking-[-0.04em]
            max-w-[1200px]
          ">
            {blog.title}
          </h1>

          {/* Meta */}
          <div className="
            flex
            flex-col
            md:flex-row
            md:items-center
            gap-4
            md:gap-8
            mt-12
          ">
            <span className="
              font-mono
              text-xs
              uppercase
              tracking-[0.2em]
              text-black/50
            ">
              {blog.date}
            </span>

            <span className="
              hidden
              md:block
              w-1
              h-1
              rounded-full
              bg-[#E7662B]
            " />

            <span className="text-sm text-black/50">
              Mitriv Ventures
            </span>
          </div>
        </div>
      </section>

      {/* =========================================
          HERO IMAGE
      ========================================= */}

      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-[1400px] mx-auto">

          <div className="relative overflow-hidden group">
            <img
              src={blog.image}
              alt={blog.title}
              className="
                w-full
                h-[400px]
                md:h-[600px]
                lg:h-[750px]
                object-cover
                transition-transform
                duration-[1200ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                group-hover:scale-[1.02]
              "
            />

            <div className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/40
              via-transparent
              to-transparent
              pointer-events-none
            " />

            <div className="
              absolute
              bottom-6
              left-6
              md:bottom-10
              md:left-10
            ">
              <span className="
                bg-[#E7662B]
                text-white
                px-4
                py-2
                font-mono
                text-[10px]
                uppercase
                tracking-[0.3em]
              ">
                Mitriv Insights
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          ARTICLE CONTENT
      ========================================= */}

      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-[1000px] mx-auto">

          {/* Article Header */}
          <div className="
            flex
            items-center
            gap-6
            mb-16
            border-b
            border-black/10
            pb-8
          ">
            <span className="
              font-display
              text-7xl
              text-[#E7662B]/20
              leading-none
            ">
             {blog.number}
            </span>

            <div>
              <p className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-[#E7662B]
              ">
                Mitriv Ventures
              </p>

              <p className="
                text-sm
                text-black/40
                mt-2
              ">
                Real Estate Insights
              </p>
            </div>
          </div>

          {/* =====================================
              HTML CONTENT
          ===================================== */}

          <article
            className="
              blog-content

              [&>p]:text-lg
              [&>p]:md:text-xl
              [&>p]:leading-[1.9]
              [&>p]:text-black/65
              [&>p]:mb-8

              [&>h2]:font-display
              [&>h2]:text-4xl
              [&>h2]:md:text-6xl
              [&>h2]:uppercase
              [&>h2]:leading-[0.95]
              [&>h2]:mt-20
              [&>h2]:mb-8

              [&>h3]:font-display
              [&>h3]:text-3xl
              [&>h3]:md:text-4xl
              [&>h3]:uppercase
              [&>h3]:mt-14
              [&>h3]:mb-6

              [&>img]:w-full
              [&>img]:h-auto
              [&>img]:object-contain
              [&>img]:my-14
              [&>img]:md:my-20

              [&>ul]:my-10
              [&>ul]:space-y-4
              [&>ul]:text-lg
              [&>ul]:text-black/60
              [&>ul]:list-none

              [&>ol]:my-10
              [&>ol]:space-y-4
              [&>ol]:text-lg
              [&>ol]:text-black/60

              [&>li]:border-l-2
              [&>li]:border-[#E7662B]
              [&>li]:pl-5

              [&_strong]:font-semibold
              [&_strong]:text-[#1E1E1E]

              [&_a]:text-[#E7662B]
              [&_a]:underline
              [&_a]:underline-offset-4
              [&_a]:hover:text-[#C95420]

              [&_blockquote]:border-l-4
              [&_blockquote]:border-[#E7662B]
              [&_blockquote]:pl-6
              [&_blockquote]:my-12
              [&_blockquote]:text-2xl
              [&_blockquote]:italic
              [&_blockquote]:text-black/60
            "
            dangerouslySetInnerHTML={{
              __html: blog.content,
            }}
          />
        </div>
      </section>

      {/* =========================================
          CTA
      ========================================= */}

      <section className="
        bg-[#1E1E1E]
        text-white
        px-6
        md:px-10
        py-28
        md:py-40
      ">
        <div className="max-w-[1200px] mx-auto">

          <div className="
            grid
            md:grid-cols-12
            gap-10
            items-end
          ">

            <div className="md:col-span-8">
              <span className="
                font-mono
                text-xs
                uppercase
                tracking-[0.4em]
                text-[#E7662B]
              ">
                Need Property Advice?
              </span>

              <h2 className="
                font-display
                text-6xl
                md:text-8xl
                uppercase
                leading-[0.85]
                mt-6
              ">
                Let's Find
                <br />
                Your Address.
              </h2>
            </div>

            <div className="md:col-span-4">

              <p className="
                text-white/50
                leading-relaxed
                mb-8
              ">
                Looking to buy, sell, rent or invest? Talk to the Mitriv
                Ventures team for personalised real estate guidance.
              </p>

              <Link
                to="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-4
                  bg-[#E7662B]
                  text-white
                  px-7
                  py-4
                  uppercase
                  tracking-[0.15em]
                  text-xs
                  hover:bg-[#C95420]
                  transition
                "
              >
                Contact Us

                <ArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:rotate-45
                  "
                />
              </Link>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}