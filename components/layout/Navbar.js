"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { MdDirectionsCar } from "react-icons/md";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { navLinks, contactInfo } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href) => pathname === href;

  return (
    <>
      {/* Top bar — desktop only */}
      <div className="hidden lg:block bg-page border-b border-line">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-2 text-faint hover:text-accent transition-colors duration-200"
            >
              <FaPhone className="text-accent text-xs" />
              {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-2 text-faint hover:text-accent transition-colors duration-200"
            >
              <FaEnvelope className="text-accent text-xs" />
              {contactInfo.email}
            </a>
          </div>
          <p className="text-faint text-xs">Mon – Sat: 8:00 AM – 6:00 PM</p>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 border-b border-line ${
          scrolled ? "glass shadow-card" : "bg-page/95 backdrop-blur-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-[68px]">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group shrink-0 focus-ring"
              aria-label="Easy Autos home"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-accent rounded-xl flex items-center justify-center group-hover:bg-accent-hover transition-colors duration-200 shadow-card">
                <MdDirectionsCar className="text-on-accent text-xl" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base sm:text-lg font-bold text-fg tracking-tight">
                  Easy
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-accent tracking-[0.2em] uppercase">
                  Autos
                </span>
              </div>
            </Link>

            {/* Desktop nav links */}
            <ul className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      isActive(link.href)
                        ? "text-accent bg-accent-soft"
                        : "text-soft hover:text-fg hover:bg-elevated"
                    }`}
                  >
                    {link.name}
                    {isActive(link.href) && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-accent rounded-full"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop right side */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <Link
                href="/contact"
                className="px-4 py-1.5 bg-accent text-on-accent text-sm font-semibold rounded-full border border-accent hover:bg-accent-hover hover:scale-105 active:scale-100 transition-all duration-200 shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile right side */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen((v) => !v)}
                className="w-10 h-10 flex items-center justify-center text-soft hover:text-accent transition-colors rounded-lg hover:bg-elevated cursor-pointer"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden bg-surface border-t border-line overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-4">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                    >
                      <Link
                        href={link.href}
                        className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                          isActive(link.href)
                            ? "bg-accent-soft text-accent border border-accent/20"
                            : "text-soft hover:text-fg hover:bg-elevated"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-4 pt-4 border-t border-line">
                  <Link
                    href="/contact"
                    className="block w-full py-2.5 bg-accent text-on-accent text-sm font-semibold text-center rounded-full border border-accent hover:bg-accent-hover transition-all duration-200 shadow-soft"
                  >
                    Get a Quote
                  </Link>
                </div>

                <div className="mt-4 pt-4 border-t border-line flex flex-col gap-3 text-sm">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center gap-3 text-faint hover:text-accent transition-colors"
                  >
                    <FaPhone className="text-accent text-xs shrink-0" />
                    {contactInfo.phone}
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-3 text-faint hover:text-accent transition-colors"
                  >
                    <FaEnvelope className="text-accent text-xs shrink-0" />
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
