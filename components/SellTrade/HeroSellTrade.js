import { FaCalculator, FaCalendarCheck, FaHandshake, FaMoneyBillWave } from "react-icons/fa";

const steps = [
  {
    icon: FaCalculator,
    title: "Get an Instant Quote",
    desc: "Provide your vehicle details online or in-store to receive a fast, competitive offer.",
  },
  {
    icon: FaCalendarCheck,
    title: "Schedule an Inspection",
    desc: "Book a convenient time for a quick, professional inspection of your car.",
  },
  {
    icon: FaHandshake,
    title: "Accept the Offer",
    desc: "Review and accept our offer — no pressure, no obligation, just a fair deal.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Get Paid or Trade Up",
    desc: "Choose cash payment or apply your value toward a new vehicle from our inventory.",
  },
];

export default function HeroSellTrade() {
  return (
    <div className="w-full bg-mesh py-16 px-4 border-b border-line">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
          Sell or Trade
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-fg mb-4">
          Sell & Trade Your Car
        </h1>
        <p className="text-soft text-base max-w-2xl mx-auto">
          Get the best value for your vehicle — fast, fair, and hassle-free. Whether you want to
          sell outright or trade in for something new, our process is designed to be simple and
          rewarding.
        </p>
      </div>

      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-xl sm:text-2xl font-black text-fg mb-2">How It Works</h2>
        <p className="text-soft text-sm">Four simple steps to your best deal.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className="bg-surface border border-line rounded-2xl p-6 flex flex-col items-start shadow-soft hover:shadow-card hover:-translate-y-1 hover:border-accent/30 transition-all duration-300 relative"
            >
              <span className="absolute top-4 right-4 text-xs font-black text-accent/40 tabular-nums">
                0{i + 1}
              </span>
              <div className="w-11 h-11 rounded-xl bg-accent-soft flex items-center justify-center mb-3">
                <Icon className="text-accent text-lg" />
              </div>
              <h3 className="font-bold text-fg text-base mb-2">{s.title}</h3>
              <p className="text-soft text-sm leading-relaxed">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
