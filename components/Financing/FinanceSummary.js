import {
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

const benefits = [
  {
    icon: CurrencyDollarIcon,
    title: "Flexible Payment Options",
    desc: "Choose from a variety of plans tailored to your budget and lifestyle, with competitive rates and terms.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Trusted & Transparent",
    desc: "No hidden fees, no surprises. We provide clear terms and honest guidance every step of the way.",
  },
  {
    icon: ClockIcon,
    title: "Fast Approval Process",
    desc: "Get pre-approved quickly with our streamlined application and responsive team.",
  },
  {
    icon: UserGroupIcon,
    title: "Personalized Support",
    desc: "Our finance experts work with you to find the best solution for your unique needs and goals.",
  },
];

export default function FinanceSummary() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
          Why Easy Autos
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-fg mb-3">
          Why Finance with Easy Autos?
        </h2>
        <p className="text-soft max-w-2xl mx-auto text-sm sm:text-base">
          A seamless, transparent, and customer-focused financing journey — drive away in your
          dream car with confidence and peace of mind.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {benefits.map((b) => {
          const Icon = b.icon;
          return (
            <div
              key={b.title}
              className="bg-surface border border-line rounded-2xl p-6 flex flex-col items-center text-center shadow-soft hover:shadow-card hover:-translate-y-1 hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center mb-3">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-fg text-base mb-2">{b.title}</h3>
              <p className="text-soft text-sm leading-relaxed">{b.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
