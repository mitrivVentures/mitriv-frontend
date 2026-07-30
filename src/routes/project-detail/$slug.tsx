import axios from "axios";
import { createFileRoute } from "@tanstack/react-router";
import listing1 from "@/assets/listing-1.jpg";
import Navbar from "@/components/pages/Navbar";
import { projects } from "@/data/projects";
import { useState } from "react";


export const Route = createFileRoute(
  "/project-detail/$slug"
)({
  component: ProjectDetail,
});

function ProjectDetail() {
  const { slug } = Route.useParams();

const project = projects.find(
  (p) => p.slug === slug
);

const [showBrochureModal, setShowBrochureModal] = useState(false);

const [brochureData, setBrochureData] = useState({
  name: "",
  email: "",
  phone: "",
});

if (!project) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl">Project Not Found</h1>
    </div>
  );
}

const handleBrochureDownload = async () => {
  try {
    await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/contact`,
      {
        ...brochureData,
        project: project.name,
        enquiryType: "brochure",
      }
    );

    window.open(project.brochure, "_blank");

    setShowBrochureModal(false);

    setBrochureData({
      name: "",
      email: "",
      phone: "",
    });

  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className="bg-background text-black">

      {/* Hero */}
<Navbar />
      <section className="relative h-screen">

       <img
  src={project.image}
  alt={project.name}
  className="absolute inset-0 w-full h-full object-cover"
/>

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex items-end px-10 pb-20">

          <div>

            <span className="text-primary uppercase tracking-[0.3em]">
              Luxury Development
            </span>

            <h1 className="font-display text-7xl uppercase text-white mt-4">
              {project.name}
            </h1>

            <p className="text-white/70 mt-4 text-xl">
              {project.location}
            </p>

          </div>

        </div>

      </section>

      {/* Overview */}

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-32">

        <div className="grid lg:grid-cols-2 gap-20">

          <div>
            <span className="text-primary uppercase tracking-[0.3em]">
              Overview
            </span>

            <h2 className="font-display text-6xl uppercase mt-6">
              Architectural
              <br />
              Excellence
            </h2>
          </div>

          <div>
            <p className="text-black/70 leading-relaxed text-lg">
            {project.description}
            </p>
          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="border-y border-black/10">

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-4 gap-10">

          <div>
            <p className="text-black/40 uppercase text-xs">
              Configuration
            </p>

            <h3 className="text-3xl font-bold">
             {project.configuration}
            </h3>
          </div>

          <div>
            <p className="text-black/40 uppercase text-xs">
              Possession
            </p>

            <h3 className="text-3xl font-bold">
            {project.possession}
            </h3>
          </div>

          <div>
            <p className="text-black/40 uppercase text-xs">
              Price
            </p>

            <h3 className="text-3xl font-bold text-primary">
              {project.price}
            </h3>
          </div>

          <div>
            <p className="text-black/40 uppercase text-xs">
              Status
            </p>

            <h3 className="text-3xl font-bold">
            {project.status}
            </h3>
          </div>

        </div>

      </section>

      {/* Gallery */}

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-32">

        <h2 className="font-display text-6xl uppercase mb-16">
          Gallery
        </h2>

       <div className="grid md:grid-cols-2 gap-6">
  {project.gallery.map((image, index) => (
    <img
      key={index}
      src={image}
      alt={`${project.name} ${index + 1}`}
      className="h-[500px] w-full object-cover"
    />
  ))}
</div>

      </section>

      {/* CTA */}

      <section className="bg-black text-white py-32 text-center">

        <h2 className="font-display text-6xl uppercase">
          Schedule
          <br />
          A Site Visit
        </h2>

        <button
          className="
            mt-10
            px-10
            py-4
            bg-primary
            uppercase
            tracking-wider
          "
        >
          Enquire Now
        </button>
        <button
  onClick={() => setShowBrochureModal(true)}
  className="
    px-10
    py-4
    border
    border-white
    uppercase
    tracking-wider
  "
>
  Download Brochure
</button>
      </section>
{showBrochureModal && (
  <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6">

    <div className="bg-white text-black w-full max-w-md p-8">

      <h3 className="text-3xl font-display uppercase mb-8">
        Download Brochure
      </h3>

      <div className="space-y-5">

        <input
          type="text"
          placeholder="Full Name"
          value={brochureData.name}
          onChange={(e) =>
            setBrochureData({
              ...brochureData,
              name: e.target.value,
            })
          }
          className="w-full border-b py-3 outline-none"
        />

        <input
          type="email"
          placeholder="Email Address"
          value={brochureData.email}
          onChange={(e) =>
            setBrochureData({
              ...brochureData,
              email: e.target.value,
            })
          }
          className="w-full border-b py-3 outline-none"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={brochureData.phone}
          onChange={(e) =>
            setBrochureData({
              ...brochureData,
              phone: e.target.value,
            })
          }
          className="w-full border-b py-3 outline-none"
        />

      </div>

      <div className="flex gap-4 mt-8">

        <button
          onClick={() => setShowBrochureModal(false)}
          className="flex-1 border border-black py-4 uppercase"
        >
          Cancel
        </button>

        <button
          onClick={handleBrochureDownload}
          className="flex-1 bg-black text-white py-4 uppercase"
        >
          Download
        </button>

      </div>

    </div>

  </div>
)}
    </div>
  );
}