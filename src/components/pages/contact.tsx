import { createFileRoute } from "@tanstack/react-router";
import Navbar from "./Navbar";
import { useState } from "react";


export default function ContactPage() {
    const [contactData, setContactData] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
});
const handleContactSubmit = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "http://localhost:5000/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      }
    );

    if (response.ok) {
      alert("Message Sent");

      setContactData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  } catch (error) {
    console.error(error);
  }
};

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background text-foreground">

        {/* Hero */}
        <section className="px-6 md:px-10 pt-32 pb-20 border-b border-border">
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-primary">
            Contact
          </span>

          <h1 className="font-display text-6xl md:text-8xl uppercase mt-6 leading-[0.9]">
            Let's
            <br />
            Talk
          </h1>

          <p className="max-w-2xl mt-8 text-muted-foreground text-lg">
            Whether you're buying, selling, investing, or exploring new
            developments, our advisory team is available to assist you.
          </p>
        </section>

        {/* Contact Grid */}
        <section className="px-6 md:px-10 py-24">
          <div className="grid lg:grid-cols-2 gap-20">

            {/* Left */}
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Contact Details
              </span>

              <div className="mt-10 space-y-10">

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
                    Email
                  </p>
                  <p className="text-2xl font-semibold">
                    hello@verschluss.com
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
                    Phone
                  </p>
                  <p className="text-2xl font-semibold">
                    +91 98765 43210
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
                    Office
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Mumbai, Maharashtra
                    <br />
                    India
                  </p>
                </div>

              </div>
            </div>

            {/* Right Form */}
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Send Inquiry
              </span>

              <form  onSubmit={handleContactSubmit} className="mt-10 space-y-6">

                <input
                value={contactData.name}
onChange={(e) =>
  setContactData({
    ...contactData,
    name: e.target.value,
  })
}
                  type="text"
                  placeholder="Full Name"
                  className="
                    w-full
                    border-b
                    border-border
                    bg-transparent
                    py-4
                    outline-none
                    text-lg
                  "
                />

                <input
                value={contactData.email}
onChange={(e) =>
  setContactData({
    ...contactData,
    email: e.target.value,
  })
}
                  type="email"
                  placeholder="Email Address"
                  className="
                    w-full
                    border-b
                    border-border
                    bg-transparent
                    py-4
                    outline-none
                    text-lg
                  "
                />

                <input
                value={contactData.phone}
onChange={(e) =>
  setContactData({
    ...contactData,
    phone: e.target.value,
  })
}
                  type="tel"
                  placeholder="Phone Number"
                  className="
                    w-full
                    border-b
                    border-border
                    bg-transparent
                    py-4
                    outline-none
                    text-lg
                  "
                />

                <textarea
                value={contactData.message}
onChange={(e) =>
  setContactData({
    ...contactData,
    message: e.target.value,
  })
}
                  rows={6}
                  placeholder="Tell us about your requirement..."
                  className="
                    w-full
                    border-b
                    border-border
                    bg-transparent
                    py-4
                    outline-none
                    resize-none
                    text-lg
                  "
                />

                <button
                  type="submit"
                  className="
                    mt-6
                    px-8
                    py-4
                    bg-foreground
                    text-background
                    uppercase
                    tracking-[0.25em]
                    text-xs
                    hover:bg-primary
                    transition-colors
                  "
                >
                  Send Message
                </button>

              </form>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-10 py-24 border-t border-border">
          <div className="max-w-5xl">

            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Private Advisory
            </span>

            <h2 className="font-display text-5xl md:text-7xl uppercase mt-6 leading-none">
              Book A
              <br />
              Private Consultation
            </h2>

            <p className="mt-8 text-muted-foreground max-w-2xl">
              Schedule a one-on-one consultation with our property advisors
              to discuss investment opportunities, premium residences,
              commercial assets, and new launches.
            </p>

          </div>
        </section>

      </main>
    </>
  );
}