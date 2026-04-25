"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck, FaInfoCircle, FaExclamationTriangle, FaTimes } from "react-icons/fa";

const ToastContext = createContext(null);

const ICONS = {
  success: { Icon: FaCheck, tone: "text-ok" },
  info: { Icon: FaInfoCircle, tone: "text-note" },
  warn: { Icon: FaExclamationTriangle, tone: "text-accent" },
  error: { Icon: FaExclamationTriangle, tone: "text-bad" },
};

let nextId = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const dismiss = useCallback((id) => {
    setToasts((list) => list.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    (message, opts = {}) => {
      const id = ++nextId;
      const variant = opts.variant || "success";
      const duration = opts.duration ?? 2800;
      setToasts((list) => [...list, { id, message, variant }]);
      if (duration > 0) {
        setTimeout(() => dismiss(id), duration);
      }
      return id;
    },
    [dismiss]
  );

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      <div className="fixed bottom-20 right-6 z-50 flex flex-col gap-2 pointer-events-none sm:bottom-6">
        <AnimatePresence>
          {toasts.map((t) => {
            const { Icon, tone } = ICONS[t.variant] || ICONS.info;
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: 32, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 32, scale: 0.95 }}
                transition={{ duration: 0.18 }}
                className="pointer-events-auto flex items-center gap-3 bg-surface border border-line rounded-xl shadow-elevated px-4 py-3 min-w-65 max-w-sm"
              >
                <Icon className={`${tone} shrink-0 text-sm`} />
                <p className="text-sm text-fg flex-1">{t.message}</p>
                <button
                  onClick={() => dismiss(t.id)}
                  aria-label="Dismiss"
                  className="text-faint hover:text-fg transition-colors cursor-pointer"
                >
                  <FaTimes className="text-xs" />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) return { toast: () => {}, dismiss: () => {} };
  return ctx;
}
