"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
  FaShare,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaCalendarAlt,
  FaShieldAlt,
  FaCheckCircle,
  FaGasPump,
  FaCog,
  FaTachometerAlt,
  FaCar,
  FaCalendar,
  FaStar,
  FaArrowLeft,
  FaMapMarkerAlt,
  FaTag,
} from "react-icons/fa";
import { MdDirectionsCar, MdSpeed } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { getCarBySlug, getRelatedCars, getGalleryImages } from "@/lib/cars";
import CarCard from "@/components/cards/CarCard";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { useSavedCars } from "@/lib/useSavedCars";
import { useToast } from "@/components/feedback/Toaster";

export default function CarDetailPage() {
  const { slug } = useParams();
  const car = getCarBySlug(slug);
  const { isSaved, toggle } = useSavedCars();
  const { toast } = useToast();

  const [activeImg, setActiveImg] = useState(0);
  const [contactTab, setContactTab] = useState("call");

  if (!car) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 px-4">
        <div className="w-16 h-16 rounded-2xl bg-surface border border-line flex items-center justify-center">
          <FaCar className="text-2xl text-faint" />
        </div>
        <div className="text-center">
          <h1 className="text-xl font-bold text-fg mb-2">Vehicle Not Found</h1>
          <p className="text-soft text-sm">
            This vehicle may have been sold or removed from our inventory.
          </p>
        </div>
        <Link href="/Inventory">
          <Button variant="primary">Browse Inventory</Button>
        </Link>
      </div>
    );
  }

  const saved = isSaved(car.slug);
  const gallery = getGalleryImages(car.brand, car.image);
  const related = getRelatedCars(car, 4);
  const condition = car.year >= 2022 ? "New" : car.year >= 2019 ? "Used" : "Classic";

  const specs = [
    { icon: FaCar, label: "Body Type", value: car.type },
    { icon: FaCalendar, label: "Year", value: car.year },
    { icon: FaGasPump, label: "Fuel Type", value: car.fuelType },
    { icon: FaCog, label: "Transmission", value: car.transmission },
    { icon: FaTachometerAlt, label: "Mileage", value: `${car.mileage.toLocaleString()} km` },
    { icon: MdSpeed, label: "Condition", value: condition },
  ];

  const prevImg = () => setActiveImg((i) => (i - 1 + gallery.length) % gallery.length);
  const nextImg = () => setActiveImg((i) => (i + 1) % gallery.length);

  const onToggleSave = () => {
    const nowSaved = toggle(car.slug);
    toast(
      nowSaved
        ? `${car.brand} ${car.name} added to favourites.`
        : `${car.brand} ${car.name} removed from favourites.`,
      { variant: nowSaved ? "success" : "info" }
    );
  };

  const onShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: `${car.brand} ${car.name}`,
          text: `Check out this ${car.year} ${car.brand} ${car.name} on Easy Autos`,
          url: window.location.href,
        });
        return;
      } catch {
        /* user dismissed */
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      toast("Link copied to clipboard.", { variant: "info" });
    }
  };

  return (
    <>
      <main className="min-h-screen bg-page pb-28 sm:pb-0">
        {/* Breadcrumb */}
        <div className="bg-surface border-b border-line">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 text-xs text-faint">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/Inventory" className="hover:text-accent transition-colors">
              Inventory
            </Link>
            <span>/</span>
            <span className="text-soft truncate max-w-45">
              {car.brand} {car.name}
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <Link
            href="/Inventory"
            className="inline-flex items-center gap-2 text-sm text-soft hover:text-accent transition-colors mb-6 group"
          >
            <FaArrowLeft className="text-xs group-hover:-translate-x-0.5 transition-transform" />
            Back to Inventory
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 xl:gap-12">
            {/* LEFT */}
            <div className="flex flex-col gap-6">
              {/* Gallery */}
              <div className="flex flex-col gap-3">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-surface group shadow-card">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeImg}
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={gallery[activeImg]}
                        alt={`${car.brand} ${car.name} — view ${activeImg + 1}`}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 65vw"
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>

                  <button
                    onClick={prevImg}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer"
                  >
                    <FaChevronLeft className="text-xs" />
                  </button>
                  <button
                    onClick={nextImg}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer"
                  >
                    <FaChevronRight className="text-xs" />
                  </button>

                  <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                    {activeImg + 1} / {gallery.length}
                  </div>

                  <div className="absolute top-3 left-3 flex gap-2">
                    <Badge variant={car.available ? "success" : "danger"}>
                      {car.available ? "Available" : "Sold"}
                    </Badge>
                    <Badge variant="primary">{condition}</Badge>
                  </div>

                  <div className="absolute top-3 right-3 flex gap-2">
                    <button
                      onClick={onToggleSave}
                      aria-label={saved ? "Remove from saved" : "Save car"}
                      aria-pressed={saved}
                      className={`w-9 h-9 rounded-full backdrop-blur-sm flex items-center justify-center transition-all duration-200 cursor-pointer ${
                        saved
                          ? "bg-bad text-white"
                          : "bg-black/60 text-white hover:bg-bad"
                      }`}
                    >
                      <FaHeart className="text-sm" />
                    </button>
                    <button
                      onClick={onShare}
                      aria-label="Share"
                      className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm text-white hover:bg-white/20 flex items-center justify-center transition-all cursor-pointer"
                    >
                      <FaShare className="text-sm" />
                    </button>
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                  {gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      aria-label={`View image ${i + 1}`}
                      className={`relative w-20 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all duration-200 cursor-pointer ${
                        i === activeImg
                          ? "border-accent shadow-soft"
                          : "border-line opacity-60 hover:opacity-100 hover:border-accent/40"
                      }`}
                    >
                      <Image src={img} alt={`Thumbnail ${i + 1}`} fill sizes="80px" className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Title & Quick Info */}
              <div className="bg-surface rounded-2xl border border-line p-5 sm:p-6 shadow-soft">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <p className="text-xs text-faint uppercase tracking-widest font-medium mb-1">
                      {car.brand}
                    </p>
                    <h1 className="text-2xl sm:text-3xl font-black text-fg leading-tight">
                      {car.name}
                    </h1>
                    <div className="flex items-center flex-wrap gap-2 mt-2">
                      <Badge variant="neutral">{car.year}</Badge>
                      <Badge variant="neutral">{car.type}</Badge>
                      <Badge variant="neutral">{car.transmission}</Badge>
                    </div>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-xs text-faint uppercase tracking-widest">Price</p>
                    <p className="text-2xl sm:text-3xl font-black text-accent tabular-nums">
                      ₦{car.price.toLocaleString()}
                    </p>
                    <p className="text-xs text-faint mt-0.5">Or apply for financing</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-line">
                  <FaMapMarkerAlt className="text-accent text-xs" />
                  <span className="text-sm text-soft">Victoria Island, Lagos</span>
                  <span className="text-faint mx-1">·</span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-accent text-xs" />
                    ))}
                    <span className="text-xs text-faint ml-1">(4.9)</span>
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="bg-surface rounded-2xl border border-line p-5 sm:p-6 shadow-soft">
                <h2 className="text-base font-bold text-fg mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 bg-accent rounded-full" />
                  Vehicle Specifications
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {specs.map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="bg-elevated rounded-xl p-4 flex flex-col gap-2 hover:bg-strong transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-accent-soft flex items-center justify-center">
                        <Icon className="text-accent text-sm" />
                      </div>
                      <div>
                        <p className="text-[10px] text-faint uppercase tracking-widest">{label}</p>
                        <p className="text-sm font-semibold text-fg">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              {car.features?.length > 0 && (
                <div className="bg-surface rounded-2xl border border-line p-5 sm:p-6 shadow-soft">
                  <h2 className="text-base font-bold text-fg mb-4 flex items-center gap-2">
                    <span className="w-1 h-4 bg-accent rounded-full" />
                    Key Features
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {car.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 px-3 py-1.5 bg-elevated rounded-xl text-sm text-soft border border-line"
                      >
                        <FaCheckCircle className="text-accent text-xs shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="bg-surface rounded-2xl border border-line p-5 sm:p-6 shadow-soft">
                <h2 className="text-base font-bold text-fg mb-3 flex items-center gap-2">
                  <span className="w-1 h-4 bg-accent rounded-full" />
                  Vehicle Overview
                </h2>
                <p className="text-sm text-soft leading-relaxed">
                  This {car.year} {car.brand} {car.name} is a premium {car.type.toLowerCase()} in{" "}
                  {condition.toLowerCase()} condition, featuring a {car.fuelType.toLowerCase()}{" "}
                  engine paired with a smooth {car.transmission.toLowerCase()} gearbox. With only{" "}
                  {car.mileage.toLocaleString()} km on the odometer, this vehicle offers exceptional
                  value and reliability. Thoroughly inspected and certified by our team of automotive
                  professionals, it comes with our Easy Autos quality guarantee and full after-sales
                  support.
                </p>
                <div className="mt-4 flex items-center gap-2 p-3 bg-accent-soft rounded-xl border border-accent/20">
                  <FaShieldAlt className="text-accent shrink-0" />
                  <p className="text-xs text-soft">
                    <span className="text-accent font-semibold">Certified by Easy Autos</span> —
                    All vehicles undergo a 100-point quality inspection before listing.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-5">
              <div className="lg:sticky lg:top-24 flex flex-col gap-5">
                {/* Seller card */}
                <div className="bg-surface rounded-2xl border border-line p-5 shadow-soft">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shadow-soft">
                      <MdDirectionsCar className="text-on-accent text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-fg font-bold text-sm">Easy Autos</h3>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-accent text-xs" />
                        ))}
                        <span className="text-xs text-faint ml-1">4.9 · 120+ reviews</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-soft mb-4 pb-4 border-b border-line">
                    <FaMapMarkerAlt className="text-accent shrink-0 text-[10px]" />
                    Victoria Island, Lagos · Open today until 6pm
                  </div>

                  <div className="flex gap-1 mb-4 bg-elevated rounded-xl p-1">
                    {[
                      { id: "call", label: "Call" },
                      { id: "whatsapp", label: "WhatsApp" },
                      { id: "email", label: "Email" },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setContactTab(tab.id)}
                        className={`flex-1 text-xs font-semibold py-1.5 rounded-lg transition-all duration-200 cursor-pointer ${
                          contactTab === tab.id
                            ? "bg-accent text-on-accent shadow-soft"
                            : "text-soft hover:text-fg"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {contactTab === "call" && (
                    <a href="tel:+2348001234567">
                      <Button variant="primary" size="lg" className="w-full" icon={<FaPhone />}>
                        +234 800 123 4567
                      </Button>
                    </a>
                  )}
                  {contactTab === "whatsapp" && (
                    <a
                      href={`https://wa.me/2348001234567?text=Hi, I'm interested in the ${car.brand} ${car.name} (${car.year}) listed on Easy Autos.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="success" size="lg" className="w-full" icon={<FaWhatsapp />}>
                        Chat on WhatsApp
                      </Button>
                    </a>
                  )}
                  {contactTab === "email" && (
                    <a
                      href={`mailto:info@easyautos.com?subject=Inquiry: ${car.brand} ${car.name} (${car.year})`}
                    >
                      <Button variant="secondary" size="lg" className="w-full" icon={<FaEnvelope />}>
                        info@easyautos.com
                      </Button>
                    </a>
                  )}

                  <div className="flex gap-2 mt-3">
                    <Link href="/financing" className="flex-1">
                      <Button variant="outline" size="sm" className="w-full" icon={<FaTag />}>
                        Get Financing
                      </Button>
                    </Link>
                    <Link href="/contact" className="flex-1">
                      <Button variant="secondary" size="sm" className="w-full" icon={<FaCalendarAlt />}>
                        Test Drive
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Pricing breakdown */}
                <div className="bg-surface rounded-2xl border border-line p-5 shadow-soft">
                  <h3 className="text-sm font-bold text-fg mb-4 flex items-center gap-2">
                    <span className="w-1 h-4 bg-accent rounded-full" />
                    Pricing Breakdown
                  </h3>
                  <div className="flex flex-col gap-2 text-sm">
                    <Row label="Vehicle Price" value={`₦${car.price.toLocaleString()}`} />
                    <Row label="Documentation Fee" value="₦50,000" />
                    <Row label="Registration" value="₦75,000" />
                    <div className="border-t border-line pt-2 mt-1 flex justify-between font-bold">
                      <span className="text-fg">Total</span>
                      <span className="text-accent tabular-nums">
                        ₦{(car.price + 125000).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <Link href="/financing">
                    <button className="mt-4 w-full py-2 text-xs text-accent border border-accent/30 rounded-xl hover:bg-accent-soft transition-all cursor-pointer">
                      Calculate Monthly Payments →
                    </button>
                  </Link>
                </div>

                {/* Trust badges */}
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { icon: FaShieldAlt, label: "100-Point Inspection" },
                    { icon: FaCheckCircle, label: "Certified Quality" },
                    { icon: FaCalendarAlt, label: "Warranty Available" },
                    { icon: FaPhone, label: "24/7 Support" },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex flex-col items-center gap-1.5 p-3 bg-surface rounded-xl border border-line text-center"
                    >
                      <Icon className="text-accent text-base" />
                      <span className="text-[10px] text-soft leading-tight">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <section className="mt-14 pt-10 border-t border-line">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-accent uppercase tracking-widest font-semibold mb-1">
                    You Might Also Like
                  </p>
                  <h2 className="text-xl sm:text-2xl font-black text-fg">Related Vehicles</h2>
                </div>
                <Link
                  href="/Inventory"
                  className="text-sm text-accent hover:text-accent-hover transition-colors font-semibold"
                >
                  View All →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {related.map((relCar) => (
                  <CarCard key={`${relCar.id}-${relCar.brand}`} car={relCar} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Sticky Mobile CTA */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 glass border-t border-line px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-xs text-faint">Price</p>
            <p className="text-lg font-black text-accent tabular-nums">
              ₦{car.price.toLocaleString()}
            </p>
          </div>
          <a href="tel:+2348001234567" className="flex-1">
            <Button variant="primary" size="md" className="w-full" icon={<FaPhone />}>
              Contact
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between text-soft">
      <span>{label}</span>
      <span className="text-fg font-medium tabular-nums">{value}</span>
    </div>
  );
}
