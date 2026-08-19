import { Link } from "@tanstack/react-router";
import Navbar from "@/components/pages/Navbar";
import Footer from "@/components/pages/Footer";
import { ArrowUpRight } from "lucide-react";
import { blogs } from "@/data/blogs";
import heroVilla from "@/assets/hero-villa.jpg";
import listing1 from "@/assets/listing-1.jpg";
import listing2 from "@/assets/listing-2.jpg";
import listing3 from "@/assets/listing-3.jpg";

// const blogs = [
//   {
//     slug: "mumbai-real-estate-market-2026",
//     category: "Market Insights",
//     date: "12 AUG 2026",
//     title: "Mumbai Real Estate Market in 2026",
//     description:
//       "A closer look at Mumbai's property market, emerging locations and what buyers and investors should know.",
//     image: listing1,
//   },
//   {
//     slug: "best-areas-to-invest-in-mumbai",
//     category: "Investment",
//     date: "08 AUG 2026",
//     title: "Best Areas to Invest in Mumbai",
//     description:
//       "Explore the Mumbai locations attracting strong demand, infrastructure growth and long-term investment interest.",
//     image: listing2,
//   },
//   {
//     slug: "first-time-home-buyers-guide",
//     category: "Buying Guide",
//     date: "04 AUG 2026",
//     title: "First-Time Home Buyer's Guide",
//     description:
//       "Everything you should consider before buying your first home, from budget planning to documentation.",
//     image: listing3,
//   },
//   {
//     slug: "rent-or-buy-property-mumbai",
//     category: "Property Advice",
//     date: "30 JUL 2026",
//     title: "Should You Rent or Buy in Mumbai?",
//     description:
//       "Understand the financial and practical factors that can help you decide whether renting or buying makes more sense.",
//     image: heroVilla,
//   },
// ];

export default function Blog() {
  const featured = blogs[0];
  const latest = blogs.slice(1);

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />

      {/* HERO */}
      <section className="px-6 md:px-10 pt-24 pb-20">
        <div className="max-w-[1500px] mx-auto">

          <span className="font-mono text-xs uppercase tracking-[0.4em] text-primary">
            Insights · Mitriv Ventures
          </span>

          <h1 className="font-display text-[18vw] md:text-[150px] uppercase leading-[0.78] tracking-tight mt-8">
            Real Estate
            <br />
            <span className="text-primary">Insights.</span>
          </h1>

          <div className="flex flex-col md:flex-row justify-between gap-8 mt-16">
            <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
              Market intelligence, property guides and practical advice to
              help you make better real estate decisions across Mumbai and MMR.
            </p>

            <span className="font-mono text-xs uppercase tracking-widest">
              01 — 04
            </span>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-[1500px] mx-auto">

          <div className="border-t border-border pt-6 mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Featured Article
            </span>
          </div>

          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            className="group block"
          >
            <div className="grid lg:grid-cols-12 gap-8 items-end">

              <div className="lg:col-span-8 overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full aspect-[16/9] object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </div>

              <div className="lg:col-span-4 pb-4">

                <div className="flex justify-between items-center mb-8">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                    {featured.category}
                  </span>

                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {featured.date}
                  </span>
                </div>

                <h2 className="font-display text-4xl md:text-5xl uppercase leading-[0.9]">
                  {featured.title}
                </h2>

                <p className="text-muted-foreground mt-6 leading-relaxed">
                  {featured.description}
                </p>

                <div className="mt-10 flex items-center gap-4 text-xs uppercase tracking-[0.2em] font-semibold">
                  Read Article

                  <span className="w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:border-primary group-hover:text-white group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </span>
                </div>

              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* LATEST */}
      <section className="px-6 md:px-10 py-24 bg-[#F8F5F0]">
        <div className="max-w-[1500px] mx-auto">

          <div className="flex justify-between items-end border-b border-black/10 pb-6">
            <h2 className="font-display text-5xl md:text-7xl uppercase">
              Latest
              <br />
              Articles
            </h2>

            <span className="font-mono text-xs uppercase tracking-widest text-black/50">
              Journal / 2026
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-black/10 mt-12 border border-black/10">

            {latest.map((blog) => (
              <Link
                key={blog.slug}
                to="/blog/$slug"
                params={{ slug: blog.slug }}
                className="group bg-[#F8F5F0] p-5 hover:bg-white transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden mb-7">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                    {blog.category}
                  </span>

                  <span className="font-mono text-[10px] text-black/40">
                    {blog.date}
                  </span>
                </div>

                <h3 className="font-display text-3xl uppercase leading-none mt-5">
                  {blog.title}
                </h3>

                <p className="text-black/55 text-sm leading-relaxed mt-5">
                  {blog.description}
                </p>

                <div className="flex items-center justify-between mt-8 border-t border-black/10 pt-5">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">
                    Read More
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-32 bg-foreground text-background">
        <div className="max-w-[1500px] mx-auto">

          <span className="font-mono text-xs uppercase tracking-[0.4em] text-primary">
            Need Advice?
          </span>

          <h2 className="font-display text-6xl md:text-8xl uppercase leading-[0.85] mt-6">
            Talk To A
            <br />
            <span className="text-primary">Property Expert.</span>
          </h2>

          <p className="max-w-xl text-background/60 mt-8 leading-relaxed">
            Whether you're buying, selling, renting or investing,
            our team can help you make the right decision.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-4 mt-10 px-7 py-4 bg-primary text-white uppercase tracking-[0.15em] text-xs font-semibold hover:opacity-90 transition"
          >
            Talk To Us
            <ArrowUpRight size={17} />
          </Link>

        </div>
      </section>

      <Footer />
    </div>
  );
}