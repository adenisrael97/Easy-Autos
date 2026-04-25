import { FaMapMarkerAlt } from "react-icons/fa";

export default function Map() {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-16">
      <div className="flex items-center gap-2 mb-4">
        <FaMapMarkerAlt className="text-accent" />
        <h3 className="text-fg font-bold">Find us at the showroom</h3>
        <span className="text-faint text-xs ml-1">· 123 Auto Drive, Victoria Island, Lagos</span>
      </div>
      <div className="w-full rounded-2xl overflow-hidden border border-line shadow-card h-[55vh] sm:h-[65vh]">
        <iframe
          title="Easy Autos Location"
          src="https://www.google.com/maps?q=Victoria+Island,+Lagos,+Nigeria&output=embed"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
