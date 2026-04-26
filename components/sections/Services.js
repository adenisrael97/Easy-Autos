import { homeServices as services } from "@/data/homeServices";

export default function Services() {
  return (
    <section className="w-full bg-surface py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
            What We Offer
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-fg mb-4">Our Services</h2>
          <p className="text-soft text-sm sm:text-base leading-relaxed">
            At Easy Autos, we are committed to delivering a seamless automotive experience — from
            helping you find your dream car to providing ongoing support and protection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="group bg-page rounded-2xl border border-line p-6 hover:border-accent/40 hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-accent-soft flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-accent group-hover:text-on-accent transition-all duration-200">
                  <Icon className="text-xl text-accent group-hover:text-on-accent transition-colors" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-fg mb-2">{service.title}</h3>
                  <p className="text-sm text-soft leading-relaxed">{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
