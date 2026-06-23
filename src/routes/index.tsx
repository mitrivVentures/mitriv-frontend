import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import heroVilla from "@/assets/hero-villa.jpg";
import listing1 from "@/assets/listing-1.jpg";
import listing2 from "@/assets/listing-2.jpg";
import listing3 from "@/assets/listing-3.jpg";
import agent1 from "@/assets/agent-1.jpg";
import agent2 from "@/assets/agent-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Verschluss — Curated Architectural Real Estate" },
      {
        name: "description",
        content:
          "Verschluss connects visionary homeowners with architectural masterpieces across Berlin, Zurich and Copenhagen. Curated spaces for modern living.",
      },
      { property: "og:title", content: "Verschluss — Curated Architectural Real Estate" },
      {
        property: "og:description",
        content:
          "Curated spaces for modern living. A specialist agency for the architecturally inclined.",
      },
    ],
  }),
  component: Index,
});

type Listing = {
  n: string;
  name: string;
  location: string;
  price: string;
  beds: string;
  baths: string;
  area: string;
  image: string;
};

const listings: Listing[] = [
  {
    n: "01",
    name: "The Monolith House",
    location: "Grunewald, Berlin",
    price: "€4.2M",
    beds: "3 Bed",
    baths: "2 Bath",
    area: "240 m²",
    image: listing1,
  },
  {
    n: "02",
    name: "Glass Pavilion",
    location: "Lake Zurich, Switzerland",
    price: "€8.7M",
    beds: "2 Bed",
    baths: "1 Bath",
    area: "110 m²",
    image: listing2,
  },
  {
    n: "03",
    name: "Concrete Loft",
    location: "Södermalm, Stockholm",
    price: "€3.1M",
    beds: "4 Bed",
    baths: "3 Bath",
    area: "310 m²",
    image: listing3,
  },
];

function useRevealOnScroll() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => {
      el.classList.add("animate-reveal-on-scroll");
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return rootRef;
}

const ArrowRight = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

function Index() {
  const rootRef = useRevealOnScroll();

  return (
    <div ref={rootRef} className="min-h-screen bg-background text-foreground font-body">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-24 py-6 bg-background/75 backdrop-blur-md border-b border-border">
        <a href="#top" className="font-display text-2xl tracking-tighter uppercase">
          Verschluss
        </a>
        <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.25em]">
          <a href="#listings" className="hover:text-primary transition-colors">Holdings</a>
          <a href="#services" className="hover:text-primary transition-colors">Standard</a>
          <a href="#agents" className="hover:text-primary transition-colors">Advisory</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-primary transition-colors"
        >
          Book Tour
        </a>
      </nav>

      {/* Hero */}
      <section
        id="top"
        className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 lg:px-24 pb-20 pt-32 overflow-hidden"
      >
        {/* Giant background wordmark */}
        <div className="absolute top-0 right-0 opacity-[0.04] pointer-events-none select-none overflow-hidden">
          <h2 className="font-display text-[40vw] leading-none uppercase translate-x-1/4">
            VERSCHLUSS
          </h2>
        </div>

        {/* Floating hero image — parallax-feeling */}
        <div className="absolute right-6 md:right-12 lg:right-24 top-28 w-[36vw] max-w-[420px] aspect-[3/4] hidden md:block animate-shutter [animation-delay:300ms]">
          <img
            src={heroVilla}
            alt="Brutalist concrete villa with floor-to-ceiling windows at dusk"
            width={832}
            height={1024}
            className="w-full h-full object-cover"
          />
          <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 font-mono text-[10px] uppercase tracking-widest">
            New Acquisition · Berlin
          </div>
        </div>

        <div className="relative z-10 max-w-7xl animate-reveal">
          <div className="flex items-center gap-4 mb-8 group">
            <div className="w-12 h-px bg-primary transition-all duration-500 group-hover:w-24" />
            <span className="uppercase tracking-[0.25em] text-[11px] font-bold">
              Est. 2024 — Architecture &amp; Real Estate
            </span>
          </div>

          <h1 className="font-display text-7xl md:text-9xl lg:text-[11rem] leading-[0.85] uppercase tracking-tighter mb-12 text-balance">
            Curated <span className="text-primary">Spaces</span>
            <br />
            for Modern Living
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-end max-w-5xl">
            <p className="text-lg md:text-xl text-muted-foreground max-w-md font-light leading-relaxed text-pretty">
              Verschluss connects visionary homeowners with architectural masterpieces that
              redefine the boundaries of domestic space and light.
            </p>
            <div className="flex gap-4">
              <a
                href="#listings"
                className="group inline-flex items-center gap-3 bg-foreground text-background pl-7 pr-3 py-3 rounded-full transition-all hover:bg-primary"
              >
                <span className="uppercase text-xs tracking-[0.25em] font-bold">
                  View Portfolio
                </span>
                <span className="grid place-items-center w-10 h-10 rounded-full bg-background/15">
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Market marquee */}
      <div className="border-y border-border py-4 overflow-hidden bg-foreground text-background whitespace-nowrap">
        <div className="inline-flex gap-12 font-mono text-xs uppercase tracking-tighter animate-marquee will-change-transform">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-12 pr-12">
              <span>Market Insight: Berlin +4.2%</span>
              <span>Copenhagen High Demand</span>
              <span>Minimalist Inventory Low</span>
              <span>Private Sales Active</span>
              <span>Verschluss Curated 2024</span>
              <span>Stockholm +3.1%</span>
              <span>Off-Market Index Rising</span>
            </span>
          ))}
        </div>
      </div>

      {/* Featured Holdings */}
      <section id="listings" className="px-6 md:px-12 lg:px-24 py-32 border-t border-border">
        <div
          className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-6"
          data-reveal
        >
          <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter">
            Featured <br /> Holdings
          </h2>
          <p className="max-w-xs text-sm uppercase tracking-[0.25em] font-bold text-muted-foreground">
            Exclusive listings in the heart of Berlin, Zurich, and Copenhagen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-24 lg:gap-16">
          {listings.slice(0, 2).map((l, idx) => (
            <article
              key={l.name}
              data-reveal
              className={`group relative ${idx === 1 ? "lg:mt-48" : ""}`}
            >
              <div className="overflow-hidden bg-secondary aspect-[4/5] relative">
                <img
                  src={l.image}
                  alt={`${l.name} — ${l.location}`}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] scale-105 group-hover:scale-100"
                />
                <div className="absolute top-8 left-8 z-10 text-background mix-blend-difference">
                  <span className="font-display text-6xl opacity-60">{l.n}</span>
                </div>
                <a
                  href="#contact"
                  className="absolute bottom-0 right-0 bg-primary text-primary-foreground p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                  aria-label={`Enquire about ${l.name}`}
                >
                  <ArrowRight className="w-7 h-7" />
                </a>
              </div>
              <div className="mt-8 flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-light mb-2">{l.name}</h3>
                  <p className="text-muted-foreground uppercase tracking-[0.25em] text-[11px] font-bold">
                    {l.location}
                  </p>
                </div>
                <span className="text-xl font-bold">{l.price}</span>
              </div>
              <div className="mt-4 flex gap-6 font-mono text-[10px] uppercase text-muted-foreground border-t border-border pt-4">
                <span>{l.beds}</span>
                <span>{l.baths}</span>
                <span>{l.area}</span>
              </div>
            </article>
          ))}
        </div>

        {/* third listing — full-width editorial card */}
        <article
          data-reveal
          className="group relative mt-32 grid lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-7 overflow-hidden bg-secondary aspect-[16/10] relative">
            <img
              src={listings[2].image}
              alt={`${listings[2].name} — ${listings[2].location}`}
              width={1600}
              height={1000}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] scale-105 group-hover:scale-100"
            />
            <div className="absolute top-8 left-8 text-background mix-blend-difference">
              <span className="font-display text-6xl opacity-60">{listings[2].n}</span>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <p className="text-muted-foreground uppercase tracking-[0.25em] text-[11px] font-bold">
              {listings[2].location}
            </p>
            <h3 className="font-display text-5xl md:text-6xl uppercase tracking-tight">
              {listings[2].name}
            </h3>
            <p className="text-muted-foreground max-w-md font-light leading-relaxed">
              A 1954 industrial loft restored with surgical restraint — exposed concrete, oak,
              and 4-meter ceilings above the rooftops of Södermalm.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xl font-bold">{listings[2].price}</span>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] group/btn"
              >
                Request Dossier
                <span className="grid place-items-center w-10 h-10 rounded-full border border-border group-hover/btn:bg-primary group-hover/btn:text-primary-foreground group-hover/btn:border-primary transition-all">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>
        </article>
      </section>

      {/* Services + Agents */}
      <section
        id="services"
        className="px-6 md:px-12 lg:px-24 py-32 bg-foreground text-background"
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div data-reveal>
            <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter mb-12">
              The Agency <br /> Standard.
            </h2>
            <div className="space-y-8">
              {[
                {
                  n: "01",
                  t: "Architectural Vetting",
                  d: "We only list properties with verified design pedigree and structural integrity.",
                },
                {
                  n: "02",
                  t: "Private Acquisition",
                  d: "Access to off-market inventory through our global network of collectors.",
                },
                {
                  n: "03",
                  t: "Editorial Presentation",
                  d: "Photography, narrative, and viewings produced with the rigor of a publication.",
                },
                {
                  n: "04",
                  t: "Estate Stewardship",
                  d: "Long-term advisory for heritage properties, from restoration to resale.",
                },
              ].map((s) => (
                <div
                  key={s.n}
                  className="border-t border-background/20 pt-6 group hover:border-primary transition-colors"
                >
                  <span className="font-mono text-primary text-xs mb-2 block">{s.n}</span>
                  <h4 className="text-xl font-bold mb-2">{s.t}</h4>
                  <p className="text-background/60 text-sm">{s.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="agents" className="grid grid-cols-2 gap-6" data-reveal>
            <div className="space-y-4">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={agent1}
                  alt="Erik Sorenson, Principal Partner"
                  width={544}
                  height={672}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                />
              </div>
              <p className="font-bold">Erik Sorenson</p>
              <p className="text-[10px] font-mono opacity-50 uppercase tracking-widest">
                Principal Partner
              </p>
            </div>
            <div className="space-y-4 mt-16">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={agent2}
                  alt="Lara Vinter, Creative Advisory"
                  width={544}
                  height={672}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                />
              </div>
              <p className="font-bold">Lara Vinter</p>
              <p className="text-[10px] font-mono opacity-50 uppercase tracking-widest">
                Creative Advisory
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 px-6 md:px-12 lg:px-24 text-center" data-reveal>
        <div className="max-w-3xl mx-auto">
          <span className="font-mono text-xs text-primary mb-8 block uppercase tracking-[0.3em]">
            Endorsement
          </span>
          <p className="text-3xl md:text-5xl font-display uppercase leading-tight text-balance">
            &ldquo;Verschluss understands that a home is not just an asset, but a cultural
            vessel. Their curation is unmatched in Europe.&rdquo;
          </p>
          <p className="mt-8 font-mono text-xs text-muted-foreground italic">
            — Architectural Digest, Nov 2023
          </p>
        </div>
      </section>

      {/* Visual transition divider */}
      <div className="h-32 flex items-center justify-center">
        <div className="w-px h-24 bg-primary animate-pulse" />
      </div>

      {/* Footer / Contact */}
      <footer
        id="contact"
        className="bg-card border-t border-border pt-24 pb-12 px-6 md:px-12 lg:px-24"
      >
        <div className="grid lg:grid-cols-2 gap-12 mb-24" data-reveal>
          <div>
            <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tighter mb-8 leading-none">
              Let&apos;s Talk.
            </h2>
            <a
              href="mailto:hello@verschluss.com"
              className="text-xl md:text-2xl font-bold underline decoration-primary decoration-2 underline-offset-8 hover:text-primary transition-colors"
            >
              hello@verschluss.com
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
              <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-foreground transition-colors">Vimeo</a>
            </div>
            <div className="flex flex-col gap-4">
              <span>
                Berlin Studio
                <br />
                Köpenicker Str. 126
              </span>
              <span>
                Copenhagen
                <br />
                Bredgade 34
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-end border-t border-border pt-12">
          <span className="font-display text-3xl md:text-4xl uppercase tracking-tighter">
            Verschluss
          </span>
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            © 2024 Verschluss Advisory Group. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
