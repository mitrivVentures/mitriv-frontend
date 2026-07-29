import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroVilla from "@/assets/hero-villa.jpg";
import listing1 from "@/assets/listing-1.jpg";
import listing2 from "@/assets/listing-2.jpg";
import godrejReserve1 from "@/assets/godrejReserve1.jpg";
import godrejSkyshore1 from "@/assets/godrejSkyshore1.jpg";
import listing3 from "@/assets/listing-3.jpg";
import agent1 from "@/assets/agent-1.jpg";
import agent2 from "@/assets/agent-2.jpg";
import pro2list1 from "@/assets/pro2list1.png";
import pro2list2 from "@/assets/pro2list2.png";
import pro2list3 from "@/assets/pro2list3.png";
import pro1list1 from "@/assets/pro1list1.png";
import pro1list2 from "@/assets/pro1list2.png";
import pro1list3 from "@/assets/pro1list3.png";
import pro1list4 from "@/assets/pro1list4.png";
import pro3list1 from "@/assets/pro3list1.png";
import pro3list2 from "@/assets/pro3list2.png";
import pro3list3 from "@/assets/pro3list3.png";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/pages/Navbar";
import Footer from "@/components/pages/Footer";

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

type Project = {
  developer: string;
  name: string;
  location: string;
  price: string;
  status: string;
  possession: string;
  configuration: string;
  image: string;
};

const testimonials = [
  {
    quote:
      "Mitriv Ventures helped us find our dream home in Mumbai within weeks. Their market knowledge and transparency made the entire process effortless.",
    author: "Rahul Mehta",
    role: "Home Buyer",
  },
  {
    quote:
      "Professional, responsive, and highly knowledgeable. They negotiated a great deal and handled every detail from start to finish.",
    author: "Priya Shah",
    role: "Property Investor",
  },
  {
    quote:
      "The team provided exceptional support during our office space acquisition. Every property shown matched our requirements perfectly.",
    author: "Amit Jain",
    role: "Business Owner",
  },
  {
    quote:
      "From property visits to registration assistance, Mitriv Ventures made the entire journey smooth and stress-free.",
    author: "Sneha Patel",
    role: "First-Time Home Buyer",
  },
];


const projects: Project[] = [
  {
    developer: "Godrej Properties",
    name: "Godrej Horizon",
    location: "Kandivali, Mumbai",
    price: "₹ 9.06 - 15.2",
    status: "New Launch",
    possession: "2028",
    configuration: "2 • 3 • 4 BHK",
    image: godrejReserve1,
  },
  {
    developer: "Godrej Properties",
    name: "Godrej Skyshore",
    location: "Versova, Mumbai",
    price: "₹ 2.76 - 9.4 Cr",
    status: "Under Construction",
    possession: "2027",
    configuration: "3 • 4 BHK",
    image: godrejSkyshore1,
  },
];

type Listing = {
  name: string;
  location: string;
  price: string;
  beds: string;
  baths: string;
  area: string;
  images: string[];
};

const listings: Listing[] = [
  {
    name: "2 BHK Flat In Jk Iris for Rent In Jk Iris Phase 3",
    location: "Wockhardt Hospital, Mira Road, Mumbai",
    price: "₹43,000",
    beds: "2 Bedroom",
    baths: "2 Balcony",
    area: "700 sqft",
    images: [pro2list1, pro2list2, pro2list3],
  },
  {
    name: "2 BHK Flat In Planetaria Complex for Rent In Bhayandar West",
    location: "Bhayandar West, Mira Bhayandar, Maharashtra 401101, India",
    price: "₹39,000",
    beds: "2 Bedroom",
    baths: "4 Balcony",
    area: "970 sqft",
    images: [pro1list1, pro1list2, pro1list3, pro1list4],
  },
  {
    name: "3 BHK Flat In Rashmi Crystal",
    location: "Mira Road East, Mira Bhayandar, Mumbai, Maharashtra, INDIA",
    price: "₹50,000",
    beds: "3 Bedroom",
    baths: "3 Bath",
    area: "1700 sqft",
    images: [pro3list1, pro3list2, pro3list3],
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
const [activeImages, setActiveImages] = useState<Record<string, number>>({});
const [formType, setFormType] = useState("property");
const [showForm, setShowForm] = useState(false);
const [selectedProperty, setSelectedProperty] = useState("");
const [activeTestimonial, setActiveTestimonial] = useState(0);
const [enquiryType, setEnquiryType] = useState("Property");
const [formData, setFormData] = useState({
  name: "",
  phone: "",
  email: "",
});

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch(
     "http://localhost:5000/api/enquiry",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
       body: JSON.stringify({
  ...formData,
  property: selectedProperty,
  enquiryType,
}),
      }
    );

    const data = await response.json();

    if (response.ok) {
      alert("Enquiry Submitted");

      setFormData({
        name: "",
        phone: "",
        email: "",
      });

      setShowForm(false);
    }
  } catch (error) {
    console.error(error);
  }
};

const handleServiceSubmit = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  const response = await fetch(
    "http://localhost:5000/api/service-enquiry",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service: enquiryType,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
      }),
    }
  );

  if (response.ok) {
    alert("Request Submitted");
    setShowForm(false);
  }
};

useEffect(() => {
  const interval = setInterval(() => {
    setActiveTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  }, 5000);

  return () => clearInterval(interval);
}, []);

  return (
    <div ref={rootRef} className="min-h-screen bg-background text-foreground font-body">
      {/* Nav */}
      <Navbar />
      {/* <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-background/80 backdrop-blur-md border-b border-border">
        <a href="#top" className="font-display text-2xl tracking-tighter uppercase">
          Verschluss
        </a>
        <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest">
          <a href="#listings" className="hover:text-primary transition-colors">Listings</a>
          <a href="#services" className="hover:text-primary transition-colors">Curated</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
           <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#agents" className="hover:text-primary transition-colors">Advisory</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <a
          href="#contact"
          className="px-4 py-2 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest hover:bg-primary transition-colors"
        >
          Book Private Tour
        </a>
      </nav> */}

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
            <h1 className="font-display text-7xl md:text-[150px] leading-[0.85] uppercase mb-8 mt-3 text-balance">
              Where  <br />
              <span className="text-primary">Dreams Find an Address.</span>
            </h1>
            <p className="max-w-[45ch] text-lg text-muted-foreground text-pretty">
             Mumbai's trusted real estate partner for buying, selling & renting residential and commercial properties. Trusted by 500+ happy homeowners across Mumbai | RERA-Compliant | 100% Verified Listings
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
              <span>Mumbai Residential Properties</span>
        <span>Commercial Spaces Available</span>
        <span>Verified Property Listings</span>
        <span>Investment Advisory Services</span>
        <span>New Project Launches</span>
        <span>Rental & Resale Solutions</span>
        <span>RERA Compliant Transactions</span>
            </span>
          ))}
        </div>
      </div>

      {/* Featured listings */}
      <section id="listings" className="px-6 md:px-10 py-24">
        <div className="flex justify-between items-end mb-16" data-reveal>
          <h2 className="font-display text-5xl md:text-6xl uppercase">For Rent</h2>
          <span className="font-mono text-xs text-muted-foreground">Showing 03 of 12</span>
        </div>

        {/* <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
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
        </div> */}
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
  {listings.map((l) => {
  const currentImage = activeImages[l.name] ?? 0;

  return (
    <article
      key={l.name}
      data-reveal
      className="bg-background p-6 group cursor-pointer transition-colors hover:bg-secondary/40"
    >
      {/* Image Slider */}
      <div className="aspect-square mb-6 overflow-hidden relative">

        <img
          src={l.images[currentImage]}
          alt={`${l.name} — ${l.location}`}
          width={1024}
          height={1024}
          loading="lazy"
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* Photo Counter */}
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs">
          {currentImage + 1} / {l.images.length}
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">

          {l.images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();

                setActiveImages((prev) => ({
                  ...prev,
                  [l.name]: index,
                }));
              }}
              className={`
                h-2 rounded-full transition-all duration-300
                ${
                  currentImage === index
                    ? "w-8 bg-white"
                    : "w-2 bg-white/50"
                }
              `}
            />
          ))}

        </div>

      </div>

      {/* Property Details */}
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-xl font-display">
          {l.name}
        </h3>

        <span className="font-mono text-sm text-primary">
          {l.price}
        </span>
      </div>

      <p className="text-muted-foreground text-sm mb-6">
        {l.location}
      </p>

      <div className="flex gap-4 font-mono text-[10px] uppercase border-t border-border pt-4">
        <span>{l.beds}</span>
        <span>{l.baths}</span>
        <span>{l.area}</span>
      </div>
      <button
  onClick={() => {
    setSelectedProperty(l.name);
    setFormType("property");
    setShowForm(true);
  }}
  className="
    w-full
    mt-6
    bg-primary
    text-white
    py-3
    uppercase
    tracking-wider
    text-sm
    hover:opacity-90
    transition
  "
>
  Enquire Now
</button>
    </article>
  );
})}
</div>
      </section>

      {/* Services + Agents */}
      {/* <section id="about" className="px-6 md:px-10 py-24 bg-foreground text-background">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div data-reveal>
            <h2 className="font-display text-5xl md:text-6xl uppercase mb-12">
              About Us<br />
            </h2>
            <div className="space-y-8">
              {[
                {
                  n: "01",
                  t: "Who We Are",
                  d: "Mitriv Ventures is a Mumbai-based real estate consultancy specializing in *residential and commercial properties across Mumbai and the Mumbai Metropolitan Region (MMR)*. From compact city apartments to luxury sea-facing homes, from upcoming residential projects to high-yield commercial spaces, we offer end-to-end real estate solutions tailored to every client's needs and budget. Our team brings together deep local market knowledge, verified property listings, and a client-first approach — ensuring every transaction is backed by trust, transparency, and integrity.",
                },
                {
                  n: "02",
                  t: "What We Do",
                 d: (
    <>
      Residential Property Sales & Resale – Apartments, villas, and bungalows
      across prime Mumbai locations.
      <br />
      <br />
      Commercial Real Estate – Office spaces, retail shops, and warehouses for
      businesses and investors.
      <br />
      <br />
      Rental Solutions – Verified rental properties for tenants and landlords.
      <br />
      <br />
      Investment Advisory – Expert guidance on real estate investment
      opportunities in Mumbai's growing micro-markets.
      <br />
      <br />
      Legal & Documentation Support – Hassle-free paperwork, RERA-compliant
      transactions, and end-to-end assistance.
    </>
  ),
                },
                {
                  n: "03",
                  t: "Why Choose Mitriv Ventures",
                  d: (<>
                  Local Expertise – In-depth knowledge of Mumbai's real estate landscape, from South Mumbai to the Western and Central suburbs
                  <br/>
                  <br/>
                  Verified Listings – Every property is vetted for authenticity and legal clarity
                  <br/>
                  <br/>
                  Client-Centric Approach – Personalized property recommendations based on your lifestyle, budget, and goals 
                  <br/>
                  <br/>
                  Transparent Process – No hidden costs, no last-minute surprises
                  <br/>
                  <br/>
                  End-to-End Support – From property search to final registration, we're with you every step of the way
                  </>),
                },
                {
                  n: "04",
                  t: "Our Mission",
                  d: "To redefine real estate experiences in Mumbai by combining honesty, professionalism, and personalized service — helping every client find not just a property, but a place where their dreams truly find an address.",
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
      </section> */}

      <section id="about" className="px-6 md:px-10 py-24 bg-foreground text-background">
        <div data-reveal>

  <span className="text-primary text-xs uppercase tracking-[0.3em]">
    About Mitriv Ventures
  </span>

  <h2 className="font-display text-5xl md:text-7xl uppercase mt-4">
    Trusted Real Estate
    <br />
    Advisors In Mumbai
  </h2>

  <p className="max-w-2xl mt-8 text-background/70 leading-relaxed">
    Mitriv Ventures is a Mumbai-based real estate consultancy specializing
    in residential and commercial properties across Mumbai and MMR.
    We help clients buy, sell, rent and invest with confidence through
    verified listings, local expertise and end-to-end guidance.
  </p>

  <div className="mt-12 border-l-2 border-primary pl-6">
    <p className="text-background/90 text-lg italic">
      "Our mission is to help every client find not just a property,
      but a place where their dreams truly find an address."
    </p>
  </div>

</div>
       <div className="grid md:grid-cols-3 gap-6 mt-20">

  <div className="group border border-background/10 p-8 hover:border-primary transition-all duration-500">
    <span className="font-display text-6xl text-primary/20 group-hover:text-primary/40 transition">
      01
    </span>

    <h3 className="font-display text-3xl uppercase mt-6 leading-none">
      Local
      <br />
      Expertise
    </h3>

    <div className="w-12 h-[2px] bg-primary mt-6" />

    <p className="text-background/60 mt-6 leading-relaxed">
      Deep market intelligence across Mumbai's prime residential,
      luxury and commercial micro-markets.
    </p>
  </div>

  <div className="group border border-background/10 p-8 hover:border-primary transition-all duration-500">
    <span className="font-display text-6xl text-primary/20 group-hover:text-primary/40 transition">
      02
    </span>

    <h3 className="font-display text-3xl uppercase mt-6 leading-none">
      Verified
      <br />
      Inventory
    </h3>

    <div className="w-12 h-[2px] bg-primary mt-6" />

    <p className="text-background/60 mt-6 leading-relaxed">
      Every listing is reviewed for ownership,
      legal compliance and documentation accuracy.
    </p>
  </div>

  <div className="group border border-background/10 p-8 hover:border-primary transition-all duration-500">
    <span className="font-display text-6xl text-primary/20 group-hover:text-primary/40 transition">
      03
    </span>

    <h3 className="font-display text-3xl uppercase mt-6 leading-none">
      End-To-End
      <br />
      Advisory
    </h3>

    <div className="w-12 h-[2px] bg-primary mt-6" />

    <p className="text-background/60 mt-6 leading-relaxed">
      From discovery and negotiation to registration,
      financing and final possession support.
    </p>
  </div>

</div>
      </section>



<section id="projects" className="px-6 md:px-10 py-32 text-black">
  <div className="mb-20">
    <span className="font-mono text-xs uppercase tracking-[0.4em] text-primary">
      New Developments
    </span>

    <h2 className="font-display text-6xl md:text-8xl uppercase mt-4 text-black">
      Latest
      <br />
      Launches
    </h2>
  </div>

  <div className="space-y-2">
    {projects.map((project, index) => (
      <article
        key={project.name}
        className="group border-t border-white/10 overflow-hidden"
      >
        {/* Row */}
        <div className="grid lg:grid-cols-12 gap-6 items-center py-8 cursor-pointer">

          <div className="lg:col-span-1">
            <span className="font-display text-4xl text-white/20">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-2">
              Developer
            </p>

            <h3 className="font-semibold">
              {project.developer}
            </h3>
          </div>

          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl md:text-5xl uppercase group-hover:text-primary transition-colors">
              {project.name}
            </h2>

            <p className="text-black/50 mt-2">
              {project.location}
            </p>
          </div>

          <div className="lg:col-span-3 flex items-center justify-end gap-6">

  <p className="text-2xl font-bold text-primary">
    {project.price}
  </p>

  <Link
    to="/project-detail/$slug"
    params={{
      slug: project.name.toLowerCase().replace(/\s+/g, "-"),
    }}
    className="
      w-16 h-16
      rounded-full
      border border-black/20
      flex items-center justify-center
      transition-all duration-500
      hover:bg-primary
      hover:border-primary
      hover:text-white
      hover:rotate-45
    "
  >
    <ArrowUpRight size={24} />
  </Link>

</div>

        </div>

        {/* Expand Image */}
        <div
          className="
            max-h-0
            overflow-hidden
            transition-all
            duration-700
            ease-in-out
            group-hover:max-h-[600px]
          "
        >
          <div className="relative h-[500px]">

            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute bottom-0 left-0 p-10">

              <span className="bg-primary text-white px-4 py-2 text-xs uppercase tracking-[0.3em]">
                {project.status}
              </span>

              <h3 className="font-display text-6xl uppercase text-black mt-6">
                {project.name}
              </h3>

              <p className="text-black/70 mt-3 text-lg">
                {project.location}
              </p>

              <div className="flex gap-10 mt-8">

                <div>
                  <p className="text-black/40 text-xs uppercase">
                    Configuration
                  </p>
                  <p>{project.configuration}</p>
                </div>

                <div>
                  <p className="text-black/40 text-xs uppercase">
                    Possession
                  </p>
                  <p>{project.possession}</p>
                </div>

                <div>
                  <p className="text-white/40 text-xs uppercase">
                    Starting From
                  </p>
                  <p className="text-primary">
                    {project.price}
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </article>
    ))}
  </div>
</section>




<section className="py-24 px-6 md:px-10 bg-[#F8F5F0]">
  <div className="max-w-7xl mx-auto">

    <span className="font-mono text-xs uppercase tracking-[0.4em] text-[#C47A3A]">
      Professional Services
    </span>

    <h2 className="font-display text-6xl md:text-8xl uppercase leading-none mt-4 text-[#1E1E1E]">
      Beyond
      <br />
      Property
    </h2>

    <p className="max-w-3xl mt-8 text-[#666] text-lg">
      End-to-end real estate solutions from property acquisition and finance support
      to registrations and international investment opportunities.
    </p>

    <div className="grid lg:grid-cols-2 gap-8 mt-20">

      {/* CARD COMPONENT STYLE (repeated) */}

      {/* 01 Property */}
      <div className="group bg-white rounded-3xl p-10 border border-[#EAEAEA]
        hover:bg-[#F5EFE6] hover:border-[#C47A3A]
        hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">

        <div className="flex justify-between mb-8">
          <span className="text-6xl font-display text-[#C47A3A]/30 group-hover:text-[#C47A3A] transition">
            01
          </span>

          <span className="text-xs uppercase tracking-[0.3em] text-[#C47A3A]">
            Service
          </span>
        </div>

        <h3 className="font-display text-4xl uppercase mb-5">
          Property
          <br />
          Consultant
        </h3>

        <p className="text-gray-600 mb-8 leading-relaxed">
          Expert guidance for residential, commercial and investment properties tailored to your goals.
        </p>

        <button
          onClick={() => {
            setSelectedProperty("Property Consultant");
            setEnquiryType("Property Consultant");
            setFormType("service");
            setShowForm(true);
          }}
          className="px-6 py-3 bg-[#C47A3A] text-white uppercase tracking-wider text-sm
          hover:bg-[#A85F2D] transition"
        >
          Get Consultation
        </button>
      </div>

      {/* 02 Finance */}
      <div className="group bg-white rounded-3xl p-10 border border-[#EAEAEA]
        hover:bg-[#F5EFE6] hover:border-[#C47A3A]
        hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">

        <div className="flex justify-between mb-8">
          <span className="text-6xl font-display text-[#C47A3A]/30 group-hover:text-[#C47A3A] transition">
            02
          </span>

          <span className="text-xs uppercase tracking-[0.3em] text-[#C47A3A]">
            Service
          </span>
        </div>

        <h3 className="font-display text-4xl uppercase mb-5">
          Finance
          <br />
          Consultant
        </h3>

        <p className="text-gray-600 mb-8 leading-relaxed">
          Complete loan assistance, bank comparison and financing support.
        </p>

        <button
          onClick={() => {
            setSelectedProperty("Finance Consultant");
            setEnquiryType("Finance Consultant");
            setFormType("service");
            setShowForm(true);
          }}
          className="px-6 py-3 bg-[#C47A3A] text-white uppercase tracking-wider text-sm
          hover:bg-[#A85F2D] transition"
        >
          Apply For Loan
        </button>
      </div>

      {/* 03 Registration */}
      <div className="group bg-white rounded-3xl p-10 border border-[#EAEAEA]
        hover:bg-[#F5EFE6] hover:border-[#C47A3A]
        hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">

        <div className="flex justify-between mb-8">
          <span className="text-6xl font-display text-[#C47A3A]/30 group-hover:text-[#C47A3A] transition">
            03
          </span>

          <span className="text-xs uppercase tracking-[0.3em] text-[#C47A3A]">
            Service
          </span>
        </div>

        <h3 className="font-display text-4xl uppercase mb-5">
          Registration
          <br />
          Services
        </h3>

        <p className="text-gray-600 mb-8 leading-relaxed">
          Agreement registration, leave & licence, stamp duty and legal support.
        </p>

        <button
          onClick={() => {
            setSelectedProperty("Registration Services");
            setEnquiryType("Registration Services");
            setFormType("service");
            setShowForm(true);
          }}
          className="px-6 py-3 bg-[#C47A3A] text-white uppercase tracking-wider text-sm
          hover:bg-[#A85F2D] transition"
        >
          Start Registration
        </button>
      </div>

      {/* 04 UAE */}
      <div className="group bg-white rounded-3xl p-10 border border-[#EAEAEA]
        hover:bg-[#F5EFE6] hover:border-[#C47A3A]
        hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">

        <div className="flex justify-between mb-8">
          <span className="text-6xl font-display text-[#C47A3A]/30 group-hover:text-[#C47A3A] transition">
            04
          </span>

          <span className="text-xs uppercase tracking-[0.3em] text-[#C47A3A]">
            Service
          </span>
        </div>

        <h3 className="font-display text-4xl uppercase mb-5">
          International
          <br />
          Property Agent
        </h3>

        <p className="text-gray-600 mb-8 leading-relaxed">
          Dubai and UAE investment opportunities, off-plan projects and luxury homes.
        </p>

        <button
          onClick={() => {
            setSelectedProperty("International Property Agent");
            setEnquiryType("International Property Agent");
            setFormType("service");
            setShowForm(true);
          }}
          className="px-6 py-3 bg-[#C47A3A] text-white uppercase tracking-wider text-sm
          hover:bg-[#A85F2D] transition"
        >
          Explore UAE
        </button>
      </div>

    </div>
  </div>
</section>


      {/* Testimonial */}
      {/* <section className="py-32 px-6 md:px-10 text-center" data-reveal>
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
      </section> */}
  <section
  className="py-32 px-6 md:px-10 bg-[#F8F5F0] text-center overflow-hidden"
  data-reveal
>
  <div className="max-w-5xl mx-auto">

    <div
      key={activeTestimonial}
      className="animate-[fadeIn_0.8s_ease]"
    >
    

      <p className="text-2xl md:text-4xl font-display leading-relaxed max-w-4xl mx-auto">
        {testimonials[activeTestimonial].quote}
      </p>

      <div className="mt-14">
        <h4 className="text-xl font-semibold">
          {testimonials[activeTestimonial].author}
        </h4>

        <p className="text-black/50 uppercase tracking-[0.25em] text-xs mt-3">
          {testimonials[activeTestimonial].role}
        </p>
      </div>
    </div>

  </div>
</section>

      {/* Footer / Contact */}
      {/* <footer id="contact" className="bg-card border-t border-border pt-24 pb-12 px-6 md:px-10">
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
              <a href="https://www.instagram.com/mitrivventures?igsh=Ym13MGpram95djhz" className="hover:text-foreground transition-colors">Instagram</a>
              <a href="https://www.facebook.com/share/18ihWFLxZ8/" className="hover:text-foreground transition-colors">FaceBook</a>
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
            <img src=""></img>
          </span>
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            © 2026 Mitriv Ventures Group. All rights reserved.
          </span>
        </div>
      </footer> */}

<Footer />

      {showForm && (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">

    <div className="bg-[#F7F5F2] max-w-2xl w-full relative border border-black/10 shadow-2xl">

      {/* Close Button */}
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-5 right-5 text-2xl text-black/50 hover:text-black transition"
      >
        ✕
      </button>

      {/* Header */}
      <div className="p-8 border-b border-black/10">

        <span className="text-[11px] uppercase tracking-[0.4em] text-[#E7662B]">
          Inquiry · 01
        </span>

        <h2 className="font-display text-4xl uppercase mt-4 leading-none">
          Enquire For
          <br />
          {selectedProperty}
        </h2>

        <p className="text-black/60 mt-4">
          Share your details and our advisor will contact you shortly.
        </p>

      </div>

      {/* Form */}
      <form
         onSubmit={
    formType === "service"
      ? handleServiceSubmit
      : handleSubmit
  }
        className="p-8 space-y-5"
      >

        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
          className="
            w-full
            h-12
            px-4
            border
            border-black/10
            bg-white
            focus:border-[#E7662B]
            outline-none
          "
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) =>
            setFormData({
              ...formData,
              phone: e.target.value,
            })
          }
          className="
            w-full
            h-12
            px-4
            border
            border-black/10
            bg-white
            focus:border-[#E7662B]
            outline-none
          "
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
          className="
            w-full
            h-12
            px-4
            border
            border-black/10
            bg-white
            focus:border-[#E7662B]
            outline-none
          "
        />

        <button
          type="submit"
          className="
            w-full
            h-12
            bg-[#E7662B]
            text-white
            uppercase
            tracking-[0.15em]
            text-sm
            font-semibold
            hover:opacity-90
            transition
          "
        >
          Send Inquiry
        </button>

      </form>

    </div>

  </div>
)}
    </div>
  );
}
