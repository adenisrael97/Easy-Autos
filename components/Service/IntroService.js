import {
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  TruckIcon,
  SparklesIcon,
  UserGroupIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const services = [
  { icon: WrenchScrewdriverIcon, title: "Auto Repairs", desc: "Comprehensive diagnostics and repairs by certified technicians for all makes and models." },
  { icon: ShieldCheckIcon, title: "Vehicle Inspections", desc: "Thorough safety and performance inspections to ensure your vehicle is road-ready." },
  { icon: CurrencyDollarIcon, title: "Financing Solutions", desc: "Flexible financing options to help you drive away in your dream car with ease." },
  { icon: TruckIcon, title: "Vehicle Delivery", desc: "Convenient home or office delivery for your purchased vehicle, anywhere in the region." },
  { icon: SparklesIcon, title: "Detailing & Cleaning", desc: "Premium detailing services to keep your car looking and feeling like new." },
  { icon: UserGroupIcon, title: "Customer Support", desc: "Friendly, knowledgeable support for all your automotive needs, before and after the sale." },
];

const reasons = [
  { icon: ShieldCheckIcon, title: "Trusted Reputation", desc: "Years of reliable service and countless satisfied customers." },
  { icon: UserGroupIcon, title: "Expert Team", desc: "Certified professionals passionate about cars and dedicated to your needs." },
  { icon: SparklesIcon, title: "Quality Assurance", desc: "Every vehicle and service meets our high standards for safety and performance." },
  { icon: CurrencyDollarIcon, title: "Transparent Pricing", desc: "No hidden fees — just honest, upfront pricing and clear communication." },
  { icon: WrenchScrewdriverIcon, title: "Comprehensive Services", desc: "From sales to service, everything you need for a smooth automotive journey." },
  { icon: ClockIcon, title: "Convenient & Fast", desc: "Quick turnaround times and flexible scheduling to fit your busy life." },
];

export default function IntroService() {
  return (
    <>
      <section className="w-full max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
            What We Do
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-fg mb-3">Our Services</h2>
          <p className="text-soft max-w-2xl mx-auto text-sm sm:text-base">
            A comprehensive suite of automotive services to keep you on the road with confidence —
            from expert repairs to premium detailing.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group bg-surface border border-line rounded-2xl p-6 shadow-soft hover:shadow-card hover:-translate-y-1 hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-on-accent transition-colors">
                  <Icon className="w-6 h-6 text-accent group-hover:text-on-accent transition-colors" />
                </div>
                <h3 className="font-bold text-fg text-base mb-2">{s.title}</h3>
                <p className="text-soft text-sm leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            href="/financing"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent text-on-accent font-semibold text-sm shadow-soft hover:bg-accent-hover hover:scale-105 active:scale-100 transition-all duration-200"
          >
            Explore Financing
            <FaArrowRight className="text-xs group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      <section className="w-full bg-surface border-y border-line py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
              Why Choose Us
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-fg mb-3">
              The Easy Autos Difference
            </h2>
            <p className="text-soft max-w-2xl mx-auto text-sm sm:text-base">
              Integrity, expertise, and customer care come together to deliver an exceptional
              automotive experience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="bg-page border border-line rounded-2xl p-6 shadow-soft hover:shadow-card hover:-translate-y-1 hover:border-accent/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-fg text-base mb-2">{r.title}</h3>
                  <p className="text-soft text-sm leading-relaxed">{r.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
