"use client";

import { useCallback, useEffect, useState } from "react";

const KEY = "easy-autos-saved-cars";

function read() {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(window.localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

function write(list) {
  window.localStorage.setItem(KEY, JSON.stringify(list));
  window.dispatchEvent(new CustomEvent("easy-autos:saved-changed"));
}

export function useSavedCars() {
  const [saved, setSaved] = useState(read);

  useEffect(() => {
    const sync = () => setSaved(read());
    window.addEventListener("easy-autos:saved-changed", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("easy-autos:saved-changed", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const isSaved = useCallback((slug) => saved.includes(slug), [saved]);

  const toggle = useCallback((slug) => {
    const next = read().includes(slug)
      ? read().filter((s) => s !== slug)
      : [...read(), slug];
    write(next);
    setSaved(next);
    return next.includes(slug);
  }, []);

  return { saved, isSaved, toggle, count: saved.length };
}
