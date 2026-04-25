"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./testimonial-swiper.css";
import { FaUserCircle, FaBriefcase, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  { name: "Chinedu Okafor", job: "Software Engineer", text: "Easy Autos made selling my car so easy! The process was fast and transparent. Highly recommended.", icon: FaUserCircle },
  { name: "Aisha Bello", job: "Banker", text: "I traded in my old car and got a great deal. The staff were friendly and professional.", icon: FaUserCircle },
  { name: "Emeka Umeh", job: "Entrepreneur", text: "Best value for my car and no stress at all. I will definitely use Easy Autos again.", icon: FaBriefcase },
  { name: "Ngozi Nwosu", job: "Doctor", text: "The trade-in process was smooth and I found my dream car. Thank you Easy Autos!", icon: FaUserCircle },
  { name: "Tunde Balogun", job: "Civil Engineer", text: "Very professional team and excellent customer service. I got a fair price for my car.", icon: FaBriefcase },
  { name: "Funke Adeyemi", job: "Fashion Designer", text: "I loved how easy it was to sell my car. The staff explained everything clearly.", icon: FaUserCircle },
];

export default function Testimonials() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
          What Customers Say
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-fg">
          Real stories from real owners
        </h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        className="pb-12!"
      >
        {testimonials.map((t, i) => {
          const Icon = t.icon;
          return (
            <SwiperSlide key={i}>
              <div className="bg-surface border border-line rounded-2xl p-6 sm:p-7 h-full shadow-soft hover:shadow-card transition-all duration-300 relative overflow-hidden">
                <FaQuoteLeft className="absolute top-4 right-4 text-2xl text-accent/15" />
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-10 h-10 text-accent" />
                  <div>
                    <p className="text-fg font-bold text-sm">{t.name}</p>
                    <p className="text-faint text-xs">{t.job}</p>
                  </div>
                </div>
                <p className="text-soft text-sm leading-relaxed">&quot;{t.text}&quot;</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-accent text-on-accent font-semibold text-sm shadow-soft hover:bg-accent-hover hover:scale-105 active:scale-100 transition-all duration-200"
        >
          Contact Us
        </Link>
        <Link
          href="/Inventory"
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-elevated border border-line text-fg font-semibold text-sm hover:border-accent/40 hover:text-accent transition-all duration-200"
        >
          View Inventory
        </Link>
      </div>
    </section>
  );
}
