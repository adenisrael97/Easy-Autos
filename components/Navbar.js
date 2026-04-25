

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { MdDirectionsCar } from "react-icons/md";

/* ============================================================
   NAVIGATION LINKS
   ============================================================
   Edit this array to add/remove/modify navigation links.
   Each link has: name (display text) and href (URL path)
   ============================================================ */
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Inventory", href: "/Inventory" },
  { name: "Financing", href: "/financing" },
  
  { name: "Service", href: "/service" },
  { name: "Sell-trade", href: "/sell-trade" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

/* ============================================================
   CONTACT INFO (shown in top bar)
   ============================================================ */
const contactInfo = {
  phone: "+234 800 123 4567",
  email: "info@temsgroup.com",
};

/* ============================================================
   MAIN NAVBAR COMPONENT
   ============================================================ */
export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect - navbar becomes solid on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu handler
  const closeMenu = () => setIsOpen(false);

  // Check if link is active
  const isActive = (path) => pathname === path;

  return (
    <>
      {/* ==================== TOP BAR (Desktop Only) ==================== */}
      <div className="hidden lg:block bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-sm">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-6">
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
            >
              <FaPhone className="text-yellow-500 text-xs" />
              {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
            >
              <FaEnvelope className="text-yellow-500 text-xs" />
              {contactInfo.email}
            </a>
          </div>

          {/* Right: Working Hours */}
          <p className="text-gray-400">
            Mon - Fri: 8:00 AM - 6:00 PM
          </p>
        </div>
      </div>

      {/* ==================== MAIN NAVBAR ==================== */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-black shadow-lg"
            : "bg-black/95 backdrop-blur-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* ===== LOGO ===== */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
              {/* Logo Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors shadow">
                <MdDirectionsCar className="text-black text-xl sm:text-2xl" />
              </div>
              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-white leading-tight tracking-wide">
                  Easy
                </span>
                <span className="text-xs sm:text-sm font-medium text-yellow-500 leading-tight tracking-widest">
                  AUTOS
                </span>
              </div>
            </Link>

            {/* ===== DESKTOP NAVIGATION ===== */}
            <ul className="hidden lg:flex items-center gap-2">
              {navLinks.map((link, idx) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-3 py-1.5 text-sm md:text-base font-normal rounded-lg transition-colors ${
                      isActive(link.href)
                        ? "text-yellow-500 bg-gray-900"
                        : "text-white hover:text-yellow-500 hover:bg-gray-800"
                    } shadow-sm hover:shadow-md`}
                  >
                    {link.name}
                    {/* Active Indicator */}
                    {isActive(link.href) && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-yellow-500 rounded-full"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* ===== CTA BUTTON (Desktop) ===== */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contact"
                className="px-3 py-1 bg-linear-to-r from-yellow-400 to-yellow-600 text-black text-sm md:text-base font-normal rounded-full border border-yellow-500 hover:from-yellow-500 hover:to-yellow-700 active:bg-yellow-700 transition-all shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                style={{ minWidth: '60px', letterSpacing: '0.02em' }}
              >
                Get Quote
              </Link>
            </div>

            {/* ===== MOBILE MENU BUTTON ===== */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-yellow-500 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </nav>

        {/* ==================== MOBILE MENU ==================== */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-black border-t border-gray-800 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-4">
                {/* Mobile Links */}
                <ul className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`block px-3 py-2 rounded-lg text-sm md:text-base font-normal transition-colors ${
                          isActive(link.href)
                            ? "bg-yellow-500/20 text-yellow-600"
                            : "text-white hover:text-yellow-500 hover:bg-gray-900"
                        } shadow-sm hover:shadow-md`}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile CTA */}
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="block w-full py-1 bg-linear-to-r from-yellow-400 to-yellow-600 text-black text-sm md:text-base text-center font-normal rounded-full border border-yellow-500 hover:from-yellow-500 hover:to-yellow-700 active:bg-yellow-700 transition-all shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    style={{ minWidth: '60px', letterSpacing: '0.02em' }}
                  >
                    Get Quote
                  </Link>
                </div>

                {/* Mobile Contact Info */}
                <div className="mt-4 pt-4 border-t border-gray-800 flex flex-col gap-3 text-sm">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    <FaPhone className="text-yellow-500" />
                    {contactInfo.phone}
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    <FaEnvelope className="text-yellow-500" />
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