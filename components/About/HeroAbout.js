import { aboutPageStats as stats, aboutStoryCards as cards } from "@/data/about";

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
