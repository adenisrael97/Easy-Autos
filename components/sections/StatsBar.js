"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 12, label: "Years of Experience", suffix: "+" },
  { value: 3500, label: "Vehicles Sold", suffix: "+" },
  { value: 98, label: "Customer Satisfaction", suffix: "%" },
  { value: 24, label: "Support Available", suffix: "/7", literal: "24/7" },
  { value: 5, label: "Premium Brands", suffix: "+" },
];

function useCountUp(target, start, duration = 1500) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let frame = 0;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target, duration]);
  return value;
}

function StatItem({ stat, visible, delay }) {
  const count = useCountUp(stat.value, visible);
  const display = stat.literal
    ? stat.literal
    : `${count.toLocaleString()}${stat.suffix || ""}`;

  return (
    <div
      className={`flex flex-col items-center text-center transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="text-2xl sm:text-3xl md:text-4xl font-black text-accent tracking-tight tabular-nums">
        {display}
      </span>
      <div className="w-8 h-0.5 bg-accent/40 rounded-full my-2" />
      <span className="text-xs sm:text-sm text-faint font-medium tracking-wide leading-snug">
        {stat.label}
      </span>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full bg-surface border-y border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} visible={visible} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
