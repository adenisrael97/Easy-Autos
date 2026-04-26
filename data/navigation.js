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

// ─── Navbar ──────────────────────────────────────────────────────────────────

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Inventory", href: "/Inventory" },
  { name: "Financing", href: "/financing" },
  { name: "Service", href: "/service" },
  { name: "Sell / Trade", href: "/sell-trade" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

export const contactInfo = {
  phone: "+234 800 123 4567",
  email: "info@easyautos.com",
  address: "123 Auto Drive, Victoria Island, Lagos, Nigeria",
  hours: "Mon – Sat: 8:00 AM – 6:00 PM",
};

// ─── Footer ──────────────────────────────────────────────────────────────────

export const footerLinks = {
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

export const socialLinks = [
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaTwitter, label: "Twitter", href: "#" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
  { icon: FaYoutube, label: "YouTube", href: "#" },
];

// ─── Contact Section / Contact Page ──────────────────────────────────────────

export const contactDetails = [
  {
    icon: FaMapMarkerAlt,
    title: "Visit Our Showroom",
    info: "123 Auto Drive, Victoria Island, Lagos, Nigeria",
  },
  {
    icon: FaPhone,
    title: "Call Us Anytime",
    info: "+234 800 123 4567",
    href: "tel:+2348001234567",
  },
  {
    icon: FaEnvelope,
    title: "Email Us",
    info: "info@easyautos.com",
    href: "mailto:info@easyautos.com",
  },
  {
    icon: FaClock,
    title: "Business Hours",
    info: "Mon – Sat: 8:00 AM – 6:00 PM",
  },
];
