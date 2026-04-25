import Link from "next/link";
import { MdDirectionsCar } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const footerLinks = {
  services: [
    { label: "Car Sales", href: "/Inventory" },
    { label: "Maintenance & Repairs", href: "/service" },
    { label: "Financing", href: "/financing" },
    { label: "Sell / Trade-In", href: "/sell-trade" },
    { label: "Vehicle Detailing", href: "/service" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQs", href: "#" },
    { label: "Warranty", href: "#" },
    { label: "Customer Support", href: "#" },
    { label: "After-Sales Service", href: "#" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Testimonials", href: "#" },
    { label: "Blog", href: "/blog" },
  ],
};

const socials = [
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaTwitter, label: "Twitter", href: "#" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
  { icon: FaYoutube, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-surface border-t border-line text-faint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-line">
          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 w-fit group">
              <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center group-hover:bg-accent-hover transition-colors shadow-soft">
                <MdDirectionsCar className="text-on-accent text-xl" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold text-fg tracking-tight">Easy</span>
                <span className="text-[10px] font-semibold text-accent tracking-[0.2em] uppercase">
                  Autos
                </span>
              </div>
            </Link>

            <p className="text-sm text-soft max-w-xs leading-relaxed">
              Premium vehicles, exceptional service. Experience luxury, reliability, and trust with
              Easy Autos — your journey starts here.
            </p>

            <div className="flex gap-2.5 mt-1">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-elevated flex items-center justify-center text-faint hover:bg-accent hover:text-on-accent transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>

            <ul className="flex flex-col gap-2 text-sm mt-2">
              <li className="flex items-start gap-2.5 text-soft">
                <FaMapMarkerAlt className="text-accent mt-0.5 shrink-0 text-xs" />
                <span>123 Auto Drive, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-2.5 text-soft">
                <FaPhone className="text-accent shrink-0 text-xs" />
                <a href="tel:+2348001234567" className="hover:text-accent transition-colors">
                  +234 800 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-soft">
                <FaEnvelope className="text-accent shrink-0 text-xs" />
                <a href="mailto:info@easyautos.com" className="hover:text-accent transition-colors">
                  info@easyautos.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-soft">
                <FaClock className="text-accent shrink-0 text-xs" />
                <span>Mon – Sat: 8am – 6pm</span>
              </li>
            </ul>
          </div>

          <FooterColumn title="Services" items={footerLinks.services} />
          <FooterColumn title="Support" items={footerLinks.support} />
          <FooterColumn title="Company" items={footerLinks.company} />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 gap-3 text-xs text-faint">
          <span>&copy; {new Date().getFullYear()} Easy Autos. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-fg uppercase tracking-widest mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {items.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-faint hover:text-accent transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
