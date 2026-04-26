import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { companyValues as values, companyMilestones as milestones, teamMembers as team } from "@/data/about";

export default function ValueAbout() {
  return (
    <>
      <section className="w-full max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
            Our Compass
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-fg mb-4">Our Values</h2>
          <p className="text-soft text-sm md:text-base max-w-2xl mx-auto">
            Rooted in trust, innovation, fairness, and community — these principles shape our culture
            and ensure exceptional experiences for every client, every day.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="bg-surface border border-line rounded-2xl p-6 flex flex-col items-center text-center shadow-soft hover:shadow-card hover:-translate-y-1 hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center mb-3">
                  <Icon className="text-accent text-xl" />
                </div>
                <h3 className="text-base font-bold text-fg mb-1">{v.title}</h3>
                <p className="text-soft text-xs leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="w-full bg-surface border-y border-line py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
              Our Journey
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-fg">
              Milestones that shaped us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {milestones.map((m) => (
              <div
                key={m.step}
                className="bg-page border border-line rounded-2xl p-5 shadow-soft hover:shadow-card transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="w-9 h-9 rounded-full bg-accent text-on-accent text-xs font-black flex items-center justify-center shadow-soft">
                    {m.step}
                  </span>
                  <span className="text-xs font-bold text-accent tabular-nums">{m.year}</span>
                </div>
                <h3 className="text-fg font-bold text-base mb-1">{m.title}</h3>
                <p className="text-soft text-xs leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
            The People
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-fg mb-3">Meet Our Team</h2>
          <p className="text-soft text-sm md:text-base max-w-2xl mx-auto">
            Expertise, passion, and a relentless commitment to excellence — meet the people who
            drive Easy Autos forward every day.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m) => (
            <div
              key={m.name}
              className="bg-surface border border-line rounded-2xl p-6 flex flex-col items-center text-center shadow-soft hover:shadow-card hover:-translate-y-1 hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-accent text-on-accent flex items-center justify-center font-black text-lg mb-3 shadow-soft">
                {m.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <p className="text-fg font-bold">{m.name}</p>
              <p className="text-accent text-xs uppercase tracking-widest mb-2">{m.role}</p>
              <p className="text-soft text-sm">{m.desc}</p>
              <div className="flex gap-2 mt-4">
                <a
                  href="#"
                  aria-label={`${m.name} on Instagram`}
                  className="w-8 h-8 rounded-lg bg-elevated flex items-center justify-center text-soft hover:bg-accent hover:text-on-accent transition-all"
                >
                  <FaInstagram size={14} />
                </a>
                <a
                  href="#"
                  aria-label={`${m.name} on LinkedIn`}
                  className="w-8 h-8 rounded-lg bg-elevated flex items-center justify-center text-soft hover:bg-accent hover:text-on-accent transition-all"
                >
                  <FaLinkedinIn size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-4 pb-16">
        <div className="max-w-4xl mx-auto bg-surface border border-line rounded-3xl shadow-card p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-fg mb-3">
            Ready to Experience Easy Autos?
          </h2>
          <p className="text-soft text-sm md:text-base mb-8 max-w-2xl mx-auto">
            Discover a new standard in automotive excellence. Whether you&apos;re searching for your
            next vehicle or want to visit our showroom, our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/Inventory"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-accent text-on-accent font-bold text-sm shadow-soft hover:bg-accent-hover hover:scale-105 active:scale-100 transition-all duration-200"
            >
              Browse Inventory
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-elevated border border-line text-fg font-bold text-sm hover:border-accent/40 hover:text-accent transition-all duration-200"
            >
              Visit Showroom
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
