import { FaCoins, FaBolt, FaShieldAlt, FaHandsHelping } from "react-icons/fa";

const cards = [
  {
    icon: FaCoins,
    title: "Best Value Offers",
    desc: "Competitive, market-based offers so you get the most for your vehicle — no haggling, no hassle.",
  },
  {
    icon: FaBolt,
    title: "Fast & Easy Process",
    desc: "Streamlined steps mean you can sell or trade quickly, with minimal paperwork and maximum convenience.",
  },
  {
    icon: FaShieldAlt,
    title: "Trusted Transparency",
    desc: "Honest and upfront at every step — you always know what to expect, no surprises.",
  },
  {
    icon: FaHandsHelping,
    title: "Personalized Support",
    desc: "Our friendly team is here to guide you, answer your questions, and help you make the best decision.",
  },
];

export default function WhyUs() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
          Why Easy Autos
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-fg mb-3">
          Why Sell & Trade With Us?
        </h2>
        <p className="text-soft max-w-2xl mx-auto text-sm sm:text-base">
          A simple, transparent, and rewarding way to part with your car — backed by a team that
          puts your needs first.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <div
              key={c.title}
              className="bg-surface border border-line rounded-2xl p-6 flex flex-col items-center text-center shadow-soft hover:shadow-card hover:-translate-y-1 hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center mb-3">
                <Icon className="text-accent text-xl" />
              </div>
              <h4 className="font-bold text-fg text-base mb-2">{c.title}</h4>
              <p className="text-soft text-sm leading-relaxed">{c.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
