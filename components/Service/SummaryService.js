import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function SummaryService() {
  return (
    <div className="px-4 py-12">
      <div className="bg-mesh border border-line rounded-3xl shadow-card p-8 sm:p-12 max-w-4xl mx-auto text-center">
        <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
          Ready When You Are
        </p>
        <h2 className="text-2xl sm:text-3xl font-black text-fg mb-4">
          Premium service, every visit
        </h2>
        <p className="text-soft text-sm sm:text-base mb-8 max-w-2xl mx-auto">
          From expert repairs and inspections to premium detailing and customer support — our
          experienced team ensures your vehicle receives the best care so you can drive with
          confidence and peace of mind.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-accent text-on-accent font-semibold text-sm shadow-soft hover:bg-accent-hover hover:scale-105 active:scale-100 transition-all duration-200"
          >
            Contact Us
            <FaArrowRight className="text-xs group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/Inventory"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-elevated border border-line text-fg font-semibold text-sm hover:border-accent/40 hover:text-accent transition-all duration-200"
          >
            View Inventory
            <FaArrowRight className="text-xs group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
