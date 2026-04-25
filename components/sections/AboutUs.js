import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const features = [
  "Trusted by thousands of customers since 2009",
  "Award-winning customer service team",
  "100% transparent pricing & financing",
  "Comprehensive after-sales support & warranty",
];

const milestones = [
  { year: "2009", event: "Easy Autos founded in Lagos" },
  { year: "2015", event: "Expanded to 3 showroom locations" },
  { year: "2020", event: "Launched online vehicle marketplace" },
  { year: "2024", event: "3,500+ vehicles sold milestone" },
];

const cards = [
  {
    title: "Our Mission",
    desc: "To deliver premium vehicles and exceptional service, making your car buying journey seamless and enjoyable.",
    accent: true,
  },
  {
    title: "Our Vision",
    desc: "To be the most trusted and innovative auto dealership, setting the gold standard for excellence in the industry.",
    accent: false,
  },
  {
    title: "Our Values",
    desc: "Integrity, customer focus, and continuous improvement drive everything we do at Easy Autos.",
    accent: false,
  },
  {
    title: "Our Promise",
    desc: "We stand by every vehicle we sell, ensuring quality, safety, and complete satisfaction for every customer.",
    accent: true,
  },
];

export default function AboutUs() {
  return (
    <section className="w-full bg-page py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
              About Us
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-fg leading-tight mb-3">
              Driving Excellence
              <br />
              <span className="text-accent">Since 2009</span>
            </h2>
            <p className="text-soft text-sm sm:text-base leading-relaxed mb-6">
              Easy Autos has been a leader in the automotive industry for over a decade, providing
              customers with a handpicked selection of luxury, performance, and reliable vehicles.
              Our commitment to excellence is reflected in every interaction — from your first
              inquiry to long after you drive off the lot.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-soft">
                  <FaCheckCircle className="text-accent mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="group inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-on-accent font-bold text-sm rounded-full border border-accent hover:bg-accent-hover hover:scale-105 active:scale-100 transition-all duration-200 shadow-card"
            >
              Learn Our Story
              <FaArrowRight className="text-xs group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, i) => (
              <div
                key={i}
                className={`rounded-2xl border p-5 flex flex-col gap-2 transition-all duration-300 hover:shadow-card hover:-translate-y-1 ${
                  card.accent
                    ? "bg-accent-soft border-accent/30"
                    : "bg-surface border-line"
                }`}
              >
                <h4
                  className={`font-bold text-sm ${card.accent ? "text-accent" : "text-fg"}`}
                >
                  {card.title}
                </h4>
                <p className="text-xs text-soft leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-14 pt-10 border-t border-line">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest text-center mb-6">
            Our Journey
          </p>
          <div className="flex flex-col sm:flex-row gap-0 sm:gap-0 relative">
            {milestones.map((m, i) => (
              <div key={i} className="flex-1 flex flex-col sm:items-center relative">
                {i < milestones.length - 1 && (
                  <div className="hidden sm:block absolute top-4 left-1/2 w-full h-px bg-line z-0" />
                )}
                <div className="relative z-10 flex sm:flex-col items-start sm:items-center gap-3 sm:gap-2 pb-6 sm:pb-0">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0 shadow-soft">
                    <span className="w-2 h-2 bg-on-accent rounded-full" />
                  </div>
                  <div className="sm:text-center">
                    <p className="text-accent font-black text-sm">{m.year}</p>
                    <p className="text-soft text-xs mt-0.5">{m.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
