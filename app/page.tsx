import React, { useCallback, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CircleDot,
  Clock,
  Gauge,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const LOGO_IMAGE_SRC = "/fourstones-logo.png";

const SERVICES = [
  {
    title: "Repairs & Servicing",
    text: "Routine servicing, repairs, brakes, suspension, MOT preparation and general maintenance to keep your car running properly.",
    Icon: Wrench,
  },
  {
    title: "Diagnostics",
    text: "Fault finding, warning lights and vehicle health checks using diagnostic equipment and practical mechanical experience.",
    Icon: Gauge,
  },
  {
    title: "Tyres",
    text: "Tyre fitting, checks, replacement advice and support with keeping your vehicle safe on the road.",
    Icon: CircleDot,
  },
];

function runComponentChecks() {
  console.assert(SERVICES.length === 3, "Expected exactly three service cards.");
  console.assert(
    SERVICES.some((service) => service.title === "Repairs & Servicing"),
    "Expected Repairs & Servicing service to exist."
  );
  console.assert(
    SERVICES.some((service) => service.title === "Diagnostics"),
    "Expected Diagnostics service to exist."
  );
  console.assert(
    SERVICES.some((service) => service.title === "Tyres"),
    "Expected Tyres service to exist."
  );
  console.assert(
    LOGO_IMAGE_SRC.length > 0,
    "Expected a local logo image path to be set."
  );

  if (typeof document !== "undefined") {
    console.assert(
      document.getElementById("contact") !== null,
      "Expected contact section to exist for smooth scrolling."
    );
  }
}

export default function FourstonesAutomotiveLanding() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const services = useMemo(() => SERVICES, []);

  const scrollToSection = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();

    const section = document.getElementById(sectionId);

    if (!section) {
      console.warn(`Could not find section with id: ${sectionId}`);
      return;
    }

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  },
  []
);

  if (typeof window !== "undefined") {
    runComponentChecks();
  }

  return (
    <>
      <main className="min-h-screen bg-[#120f14] text-white">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,25,31,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,25,31,0.12),transparent_35%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:44px_44px] opacity-30" />

          <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff1d25] shadow-lg shadow-red-950/40">
                <span className="text-2xl font-black italic tracking-tighter">F</span>
              </div>
              <div>
                <p className="text-lg font-black tracking-wide">Fourstones</p>
                <p className="-mt-1 text-xs uppercase tracking-[0.35em] text-white/55">
                  Automotive
                </p>
              </div>
            </div>

            <a
              href="#contact"
              onClick={(event) => scrollToSection(event, "contact")}
              className="hidden rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-[#ff1d25] md:inline-flex"
            >
              Book an enquiry
            </a>
          </nav>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-12 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:pb-28 md:pt-20">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex rounded-full border border-[#ff1d25]/30 bg-[#ff1d25]/10 px-4 py-2 text-sm font-semibold text-red-100">
                Repairs · Diagnostics · Tyres
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                Reliable garage services with a sharp, modern edge.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
                Fourstones Automotive provides practical, honest vehicle repairs,
                servicing, diagnostics and tyre support. A straightforward garage
                for drivers who want clear advice, tidy work and no unnecessary
                hassle.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  onClick={(event) => scrollToSection(event, "contact")}
                  className="group inline-flex items-center justify-center rounded-2xl bg-[#ff1d25] px-7 py-4 font-bold text-white shadow-xl shadow-red-950/40 transition hover:-translate-y-0.5 hover:bg-red-600"
                >
                  Contact the garage
                  <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
                </a>

                <a
                  href="tel:+440000000000"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-bold text-white/90 backdrop-blur transition hover:bg-white/10"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call now
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-[#ff1d25]/20 blur-3xl" />

              <div className="relative rounded-[2rem] border border-white/10 bg-[#19151c]/90 p-7 shadow-2xl backdrop-blur">
                <div className="aspect-square rounded-[1.5rem] border border-white/10 bg-[#0d0b0f] p-8 shadow-inner">
                  <div className="flex h-full items-center justify-center">
                    <img
                      src={LOGO_IMAGE_SRC}
                      alt="Fourstones Automotive logo"
                      className="h-56 w-56 object-contain drop-shadow-[0_18px_45px_rgba(255,29,37,0.32)] md:h-72 md:w-72"
                    />
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <Clock className="mb-3 h-5 w-5 text-[#ff1d25]" />
                    <p className="font-bold">Fast enquiries</p>
                    <p className="mt-1 text-sm text-white/55">
                      Send a message and get a call back.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <ShieldCheck className="mb-3 h-5 w-5 text-[#ff1d25]" />
                    <p className="font-bold">Clear advice</p>
                    <p className="mt-1 text-sm text-white/55">
                      No confusing garage jargon.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#ff1d25]">
              What we do
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Garage services made simple.
            </h2>
            <p className="mt-4 leading-7 text-white/62">
              A short, direct overview of the main services so customers know
              exactly what they can contact the garage about.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.Icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-[#ff1d25]/45 hover:bg-white/[0.07]"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff1d25] shadow-lg shadow-red-950/30">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black">{service.title}</h3>
                  <p className="mt-3 leading-7 text-white/60">{service.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0d0b0f]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-3 md:px-8">
            <div>
              <p className="text-3xl font-black text-[#ff1d25]">01</p>
              <h3 className="mt-2 font-bold">Tell us the issue</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">
                Use the form to describe the fault, service request or tyre
                issue.
              </p>
            </div>

            <div>
              <p className="text-3xl font-black text-[#ff1d25]">02</p>
              <h3 className="mt-2 font-bold">Get clear advice</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">
                The garage can advise on the next practical step before work
                begins.
              </p>
            </div>

            <div>
              <p className="text-3xl font-black text-[#ff1d25]">03</p>
              <h3 className="mt-2 font-bold">Book it in</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">
                Arrange a suitable time to bring the vehicle in for inspection
                or repair.
              </p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[0.85fr_1.15fr] md:px-8"
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#ff1d25]">
              Contact
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Need your car looked at?
            </h2>
            <p className="mt-5 leading-7 text-white/62">
              Send an enquiry with your vehicle details and a short description
              of the problem. Replace the placeholder contact details below with
              the garage phone number, email and address.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-white/75">
                <Phone className="h-5 w-5 text-[#ff1d25]" />
                00000 000000
              </div>
              <div className="flex items-center gap-3 text-white/75">
                <Mail className="h-5 w-5 text-[#ff1d25]" />
                info@fourstonesautomotive.co.uk
              </div>
              <div className="flex items-center gap-3 text-white/75">
                <MapPin className="h-5 w-5 text-[#ff1d25]" />
                Garage address goes here
              </div>
            </div>
          </div>

          <form
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl md:p-8"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-white/70">Name</span>
                <input
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0d0b0f] px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-[#ff1d25]"
                  placeholder="Your name"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-white/70">Phone</span>
                <input
                  value={form.phone}
                  onChange={(event) => setForm({ ...form, phone: event.target.value })}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0d0b0f] px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-[#ff1d25]"
                  placeholder="Best number"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="text-sm font-semibold text-white/70">Email</span>
              <input
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0d0b0f] px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-[#ff1d25]"
                placeholder="you@example.com"
              />
            </label>

            <label className="mt-5 block">
              <span className="text-sm font-semibold text-white/70">Message</span>
              <textarea
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                rows={5}
                className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-[#0d0b0f] px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-[#ff1d25]"
                placeholder="Tell us what you need help with. Include your car make/model if possible."
              />
            </label>

            <button className="mt-6 w-full rounded-2xl bg-[#ff1d25] px-7 py-4 font-black text-white shadow-xl shadow-red-950/30 transition hover:-translate-y-0.5 hover:bg-red-600">
              Send enquiry
            </button>

            <p className="mt-4 text-center text-xs text-white/40">
              This form is a front-end mock-up. Connect it to Formspree,
              EmailJS, Supabase, or a server route before launch.
            </p>
          </form>
        </section>
      </main>
    </>
  );
}
