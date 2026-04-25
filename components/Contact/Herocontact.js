"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const images = [
  "/images/bmw/bmw2.avif",
  "/images/bmw/bmw3.avif",
  "/images/bmw/bmw4.avif",
];

const details = [
  { icon: FaMapMarkerAlt, label: "Address", value: "123 Auto Drive, Victoria Island, Lagos" },
  { icon: FaPhone, label: "Phone", value: "+234 800 123 4567", href: "tel:+2348001234567" },
  { icon: FaEnvelope, label: "Email", value: "info@easyautos.com", href: "mailto:info@easyautos.com" },
  { icon: FaClock, label: "Hours", value: "Mon – Sat · 8:00 AM – 6:00 PM" },
];

const socials = [
  { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/2348001234567" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaFacebookF, label: "Facebook", href: "#" },
];

export default function Herocontact() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="relative h-[55vh] sm:h-[60vh] w-full overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt="Easy Autos showroom"
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/45 to-black/80" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
            Let&apos;s talk about your next car.
          </h1>
          <p className="max-w-xl text-base sm:text-lg text-gray-200">
            We&apos;re here to help you find, finance, and trade your perfect vehicle.
          </p>
        </div>
      </div>

      <div className="relative z-20 max-w-5xl mx-auto -mt-16 px-4">
        <div className="bg-surface rounded-2xl shadow-card border border-line p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {details.map((d) => {
            const Icon = d.icon;
            const inner = (
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-on-accent transition-colors">
                  <Icon className="text-accent text-base group-hover:text-on-accent transition-colors" />
                </div>
                <div>
                  <p className="text-faint text-[10px] uppercase tracking-widest font-semibold">
                    {d.label}
                  </p>
                  <p className="text-fg text-sm font-medium leading-tight mt-0.5 group-hover:text-accent transition-colors">
                    {d.value}
                  </p>
                </div>
              </div>
            );
            return d.href ? (
              <a key={d.label} href={d.href} className="block">
                {inner}
              </a>
            ) : (
              <div key={d.label}>{inner}</div>
            );
          })}
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-xl bg-surface border border-line flex items-center justify-center text-soft hover:bg-accent hover:text-on-accent hover:border-accent transition-all"
              >
                <Icon size={14} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
