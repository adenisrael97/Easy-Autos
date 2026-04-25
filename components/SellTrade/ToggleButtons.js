"use client";

export default function ToggleButtons({ active, setActive }) {
  const tabs = [
    { id: "sell", label: "Sell Your Car" },
    { id: "trade", label: "Trade-In / Swap" },
  ];
  return (
    <div className="inline-flex bg-surface border border-line rounded-full p-1 mx-auto mb-8 w-full max-w-md shadow-soft">
      {tabs.map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={() => setActive(t.id)}
          className={`flex-1 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
            active === t.id
              ? "bg-accent text-on-accent shadow-soft"
              : "text-soft hover:text-fg"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
