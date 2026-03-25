"use client";

import React from "react";

export default function ToggleButtons({ active, setActive }) {
  return (
    <div className="flex justify-center gap-4 mb-8">
      <button
        className={`px-6 py-2 rounded-full font-semibold shadow transition-colors duration-200 border-2 text-base
          ${active === "sell" ? "bg-yellow-500 border-yellow-500 text-white" : "bg-white border-gray-300 text-gray-800 hover:bg-yellow-100"}`}
        onClick={() => setActive("sell")}
        type="button"
      >
        Sell Your Car
      </button>
      <button
        className={`px-6 py-2 rounded-full font-semibold shadow transition-colors duration-200 border-2 text-base
          ${active === "trade" ? "bg-yellow-500 border-yellow-500 text-white" : "bg-white border-gray-300 text-gray-800 hover:bg-yellow-100"}`}
        onClick={() => setActive("trade")}
        type="button"
      >
        Trade-In / Swap
      </button>
    </div>
  );
}
