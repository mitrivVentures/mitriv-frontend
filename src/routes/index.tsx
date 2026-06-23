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
      { title: "Verschluss — Architectural Real Estate Advisory" },
      {
        name: "description",
        content:
          "Curated residences with verified design pedigree. Private acquisitions, architectural vetting, and editorial-grade presentation across Northern Europe.",
      },
      { property: "og:title", content: "Verschluss — Architectural Real Estate Advisory" },
      {
        property: "og:description",
        content:
          "Quiet architectures. Curated residences. A specialist agency for the architecturally inclined.",
      },
    ],
  }),
  component: Index,
});

type Listing = {
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
    name: "Haus Am See",
    location: "Wannsee, Berlin",
    price: "€2,450,000",
    beds: "3 Bed",
    baths: "2 Bath",
    area: "240 m²",
    image: listing1,
  },
  {
    name: "The Pavillion",
    location: "Nordsjælland, Denmark",
    price: "€1,890,000",
    beds: "2 Bed",
    baths: "1 Bath",
    area: "110 m²",
    image: listing2,
  },
  {
    name: "Concrete Loft",
    location: "Södermalm, Stockholm",
    price: "€3,120,000",
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

function Index() {
  const rootRef = useRevealOnScroll();

  return (
    <div ref={rootRef} className="min-h-screen bg-background text-foreground font-body">
      {/* Nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-background/80 backdrop-blur-md border-b border-border">
        <a href="#top" className="font-display text-2xl tracking-tighter uppercase">
          Verschluss
        </a>
        <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest">
          <a href="#listings" className="hover:text-primary transition-colors">Listings</a>
          <a href="#services" className="hover:text-primary transition-colors">Curated</a>
          <a href="#agents" className="hover:text-primary transition-colors">Advisory</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <a
          href="#contact"
          className="px-4 py-2 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest hover:bg-primary transition-colors"
        >
          Book Private Tour
        </a>
      </nav>

      {/* Hero */}
      <section
        id="top"
        className="relative min-h-[90vh] flex flex-col justify-end px-6 md:px-10 pb-12 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-[0.04] select-none pointer-events-none">
          <span className="font-display text-[35vw] leading-none uppercase">MODERN</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 animate-reveal">
            <h1 className="font-display text-7xl md:text-9xl leading-[0.85] uppercase mb-8 text-balance">
              Quiet <br />
              <span className="text-primary">Architectures.</span>
            </h1>
            <p className="max-w-[45ch] text-lg text-muted-foreground text-pretty">
              A specialist agency facilitating the exchange of historically significant and
              architecturally progressive residences in Northern Europe.
            </p>
          </div>
          <div className="lg:col-span-5 animate-shutter [animation-delay:400ms]">
            <img
              src={heroVilla}
              alt="Brutalist concrete villa with floor-to-ceiling windows at dusk"
              width={832}
              height={1024}
              className="w-full aspect-[4/5] object-cover outline-1 -outline-offset-1 outline-black/5"
            />
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

      {/* Featured listings */}
      <section id="listings" className="px-6 md:px-10 py-24">
        <div className="flex justify-between items-end mb-16" data-reveal>
          <h2 className="font-display text-5xl md:text-6xl uppercase">The Edit</h2>
          <span className="font-mono text-xs text-muted-foreground">Showing 03 of 12</span>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {listings.map((l) => (
            <article
              key={l.name}
              data-reveal
              className="bg-background p-6 group cursor-pointer transition-colors hover:bg-secondary/40"
            >
              <div className="aspect-square mb-6 overflow-hidden">
                <img
                  src={l.image}
                  alt={`${l.name} — ${l.location}`}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-xl">{l.name}</h3>
                <span className="font-mono text-sm text-primary">{l.price}</span>
              </div>
              <p className="text-muted-foreground text-sm mb-6">{l.location}</p>
              <div className="flex gap-4 font-mono text-[10px] uppercase border-t border-border pt-4">
                <span>{l.beds}</span>
                <span>{l.baths}</span>
                <span>{l.area}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Services + Agents */}
      <section id="services" className="px-6 md:px-10 py-24 bg-foreground text-background">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div data-reveal>
            <h2 className="font-display text-5xl md:text-6xl uppercase mb-12">
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
                <div key={s.n} className="border-t border-background/20 pt-6">
                  <span className="font-mono text-primary text-xs mb-2 block">{s.n}</span>
                  <h4 className="text-xl font-bold mb-2">{s.t}</h4>
                  <p className="text-background/60 text-sm">{s.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="agents" className="grid grid-cols-2 gap-4" data-reveal>
            <div className="space-y-4">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={agent1}
                  alt="Erik Sorenson, Principal Partner"
                  width={544}
                  height={672}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-bold">Erik Sorenson</p>
              <p className="text-[10px] font-mono opacity-50 uppercase tracking-widest">
                Principal Partner
              </p>
            </div>
            <div className="space-y-4 mt-12">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={agent2}
                  alt="Lara Vinter, Creative Advisory"
                  width={544}
                  height={672}
                  loading="lazy"
                  className="w-full h-full object-cover"
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
      <section className="py-32 px-6 md:px-10 text-center" data-reveal>
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

      {/* Footer / Contact */}
      <footer id="contact" className="bg-card border-t border-border pt-24 pb-12 px-6 md:px-10">
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
