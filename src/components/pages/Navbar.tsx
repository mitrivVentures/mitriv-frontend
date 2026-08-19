// import { Link } from "@tanstack/react-router";

// export default function Navbar() {
//   return (
//     <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-background/80 backdrop-blur-md border-b border-border">
      
//       <a
//         href="#top"
//         className="font-display text-2xl tracking-tighter uppercase"
//       >
//         Verschluss
//       </a>

//       <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest">
//         <a
//           href="#listings"
//           className="hover:text-primary transition-colors"
//         >
//           Listings
//         </a>

//         <a
//           href="#services"
//           className="hover:text-primary transition-colors"
//         >
//           Curated
//         </a>

//         <a
//           href="#projects"
//           className="hover:text-primary transition-colors"
//         >
//           Projects
//         </a>

//         <a
//           href="#services"
//           className="hover:text-primary transition-colors"
//         >
//           Services
//         </a>

//         <a
//           href="#agents"
//           className="hover:text-primary transition-colors"
//         >
//           Advisory
//         </a>

//         <a
//           href="#contact"
//           className="hover:text-primary transition-colors"
//         >
//           Contact
//         </a>
//       </div>

//       <a
//         href="#contact"
//         className="px-4 py-2 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest hover:bg-primary transition-colors"
//       >
//         Book Private Tour
//       </a>

//     </nav>
//   );
// }


// import { Link } from "@tanstack/react-router";
// import MitrivLogo from "@/assets/MitrivLogo.png";
// import MitrivLogo1 from "@/assets/mitriv2.png";
// import { useState } from "react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   return (
//     <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-background/80 backdrop-blur-md border-b border-border">

//       <Link
//         to="/"
//         className="font-display text-2xl tracking-tighter uppercase"
//       >
//         <img
//           src={MitrivLogo1}
//           alt="Mitriv"
//           className="h-20 w-20 w-auto"
//         />
//       </Link>

//       <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest">

//         <Link
//           to="/"
//           className="hover:text-primary transition-colors"
//         >
//           Home
//         </Link>

//         <a
//           href="/#projects"
//           className="hover:text-primary transition-colors"
//         >
//           Projects
//         </a> 

//          <a
//           href="/#about"
//           className="hover:text-primary transition-colors"
//         >
//           About
//         </a>

//         <Link
//           to="/contact"
//           className="hover:text-primary transition-colors"
//         >
//           Contact
//         </Link>

//       </div>
// <button
//   onClick={() => setMenuOpen(!menuOpen)}
//   className="md:hidden text-2xl"
// >
//   ☰
// </button>
//       <Link
//         to="/contact"
//         className="px-4 py-2 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest hover:bg-primary transition-colors"
//       >
//         Book Private Tour
//       </Link>
// {menuOpen && (
//   <div className="md:hidden absolute top-full left-0 w-full bg-background border-t border-border z-50">

//     <div className="flex flex-col p-6 gap-6 text-sm font-bold uppercase tracking-widest">

//       <Link
//         to="/"
//         onClick={() => setMenuOpen(false)}
//       >
//         Home
//       </Link>

//       <a
//         href="/#projects"
//         onClick={() => setMenuOpen(false)}
//       >
//         Projects
//       </a>

//       <a
//         href="/#about"
//         onClick={() => setMenuOpen(false)}
//       >
//         About
//       </a>

//       <Link
//         to="/contact"
//         onClick={() => setMenuOpen(false)}
//       >
//         Contact
//       </Link>

//       <Link
//         to="/contact"
//         onClick={() => setMenuOpen(false)}
//         className="
//           bg-foreground
//           text-background
//           px-4
//           py-3
//           text-center
//         "
//       >
//         Book Private Tour
//       </Link>

//     </div>

//   </div>
// )}
//     </nav>
//   );
// }

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import MitrivLogo1 from "@/assets/mitriv2.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="
        sticky
        top-0
        z-50
        flex
        items-center
        justify-between
        px-6
        md:px-10
        py-4
        bg-background/90
        backdrop-blur-md
        border-b
        border-border
        relative
      "
    >
      {/* Logo */}
      <Link
        to="/"
        className="font-display text-2xl tracking-tighter uppercase"
      >
        <img
          src={MitrivLogo1}
          alt="Mitriv Ventures"
          className="h-16 md:h-20 w-auto"
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest">
        <Link
          to="/"
          className="hover:text-primary transition-colors"
        >
          Home
        </Link>

        <a
          href="/#projects"
          className="hover:text-primary transition-colors"
        >
          Projects
        </a>

        <a
          href="/#about"
          className="hover:text-primary transition-colors"
        >
          About
        </a>

        <Link
          to="/blog"
          className="hover:text-primary transition-colors"
        >
          Blogs
        </Link>

        <Link
          to="/contact"
          className="hover:text-primary transition-colors"
        >
          Contact
        </Link>
      </div>

      {/* Desktop CTA */}
      <Link
        to="/contact"
        className="
          hidden md:block
          px-4
          py-2
          bg-foreground
          text-background
          text-[10px]
          font-bold
          uppercase
          tracking-widest
          hover:bg-primary
          transition-colors
        "
      >
        Book Private Tour
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-3xl font-light"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
            absolute
            top-full
            left-0
            w-full
            bg-background
            border-t
            border-border
            md:hidden
            shadow-lg
          "
        >
          <div className="flex flex-col p-6 gap-6 text-sm font-bold uppercase tracking-widest">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-primary"
            >
              Home
            </Link>

            <a
              href="/#projects"
              onClick={() => setMenuOpen(false)}
              className="hover:text-primary"
            >
              Projects
            </a>

            <a
              href="/#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-primary"
            >
              About
            </a>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-primary"
            >
              Contact
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="
                mt-2
                bg-foreground
                text-background
                py-4
                text-center
                uppercase
                tracking-widest
              "
            >
              Book Private Tour
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}