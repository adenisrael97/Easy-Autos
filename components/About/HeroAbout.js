import { FaCalendarAlt, FaUsers, FaSmile, FaGlobe } from "react-icons/fa";

const stats = [
  { icon: FaCalendarAlt, label: "Years in Business", value: "10+" },
  { icon: FaUsers, label: "Happy Clients", value: "5,000+" },
  { icon: FaSmile, label: "Satisfaction Rate", value: "98%" },
  { icon: FaGlobe, label: "Countries Served", value: "50+" },
];

const cards = [
  {
    title: "Our Story",
    desc: "Easy Autos was founded with a vision to transform the automotive experience. What began as a small team of passionate car enthusiasts has grown into a trusted name, known for integrity, innovation, and a relentless commitment to our clients.",
  },
  {
    title: "Driven By Excellence",
    desc: "Our journey is defined by our pursuit of excellence in every aspect of our business. We believe in building lasting relationships, delivering exceptional service, and exceeding expectations at every turn.",
  },
  {
    title: "Our Growth",
    desc: "From our humble beginnings to serving clients in over 50 countries, our story is one of growth, dedication, and a passion for making a difference. We are proud of our achievements and grateful for the trust our clients place in us every day.",
  },
];

export default function HeroAbout() {
  return (
    <section className="relative bg-mesh py-20 sm:py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
            Who We Are
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-fg leading-tight">
            Built on trust,
            <br />
            <span className="text-accent">driven by passion.</span>
          </h1>
          <p className="mt-4 text-soft text-base max-w-2xl mx-auto">
            For over a decade, Easy Autos has helped thousands of customers find premium vehicles
            with confidence — backed by transparency, expertise, and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-surface rounded-2xl border border-line p-6 shadow-soft hover:shadow-card hover:-translate-y-1 hover:border-accent/30 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-accent mb-2">{c.title}</h3>
              <p className="text-sm text-soft leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="bg-surface border border-line rounded-2xl p-5 flex flex-col items-center text-center shadow-soft hover:scale-[1.03] hover:border-accent/30 transition-all duration-300"
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent-soft mb-3">
                  <Icon className="text-lg text-accent" />
                </span>
                <div className="text-2xl md:text-3xl font-black text-accent tabular-nums">
                  {s.value}
                </div>
                <div className="text-soft text-xs sm:text-sm font-medium tracking-wide mt-1">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
