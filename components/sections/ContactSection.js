"use client";

import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaArrowRight, FaCheck } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { useToast } from "@/components/feedback/Toaster";

const contactDetails = [
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

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      toast("Message sent — we'll be in touch within 24 hours.", { variant: "success" });
    }, 1100);
  };

  return (
    <section className="w-full bg-page py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
            Get in Touch
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-fg mb-3">
            Ready to Find Your Dream Car?
          </h2>
          <p className="text-soft text-sm sm:text-base">
            Our team is standing by to help you find the perfect vehicle. Reach out and we&apos;ll
            respond within hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Form */}
          <div className="bg-surface rounded-2xl border border-line p-6 sm:p-8 shadow-card">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-10 gap-4">
                <div className="w-14 h-14 rounded-full bg-ok/15 flex items-center justify-center">
                  <FaCheck className="text-ok text-xl" />
                </div>
                <h3 className="text-fg font-bold text-lg">Message Sent!</h3>
                <p className="text-soft text-sm text-center">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <Button variant="outline" size="sm" onClick={() => setSent(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Full Name *">
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="form-input"
                    />
                  </Field>
                  <Field label="Email Address *">
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="form-input"
                    />
                  </Field>
                </div>
                <Field label="Phone Number">
                  <input
                    type="tel"
                    placeholder="+234 800 000 0000"
                    className="form-input"
                  />
                </Field>
                <Field label="Subject">
                  <select className="form-input">
                    <option value="">Select a topic...</option>
                    <option value="purchase">Vehicle Purchase</option>
                    <option value="financing">Financing Inquiry</option>
                    <option value="trade">Sell / Trade-In</option>
                    <option value="service">Vehicle Service</option>
                    <option value="other">Other</option>
                  </select>
                </Field>
                <Field label="Your Message *">
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us what you're looking for..."
                    className="form-input resize-none"
                  />
                </Field>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={loading}
                  className="w-full mt-1"
                  icon={!loading && <FaArrowRight className="text-xs" />}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4">
            {contactDetails.map((item, i) => {
              const Icon = item.icon;
              const inner = (
                <div className="flex items-start gap-4 bg-surface rounded-2xl border border-line p-5 hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-200 shadow-soft">
                  <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center shrink-0">
                    <Icon className="text-base text-accent" />
                  </div>
                  <div>
                    <h4 className="text-fg font-semibold text-sm mb-0.5">{item.title}</h4>
                    <p className="text-soft text-sm">{item.info}</p>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={i} href={item.href} className="block">
                  {inner}
                </a>
              ) : (
                <div key={i}>{inner}</div>
              );
            })}

            <div className="flex-1 rounded-2xl border border-line overflow-hidden min-h-36 bg-surface flex items-center justify-center shadow-soft">
              <div className="text-center text-faint p-6">
                <FaMapMarkerAlt className="text-2xl text-accent/60 mx-auto mb-2" />
                <p className="text-xs">123 Auto Drive, Victoria Island</p>
                <p className="text-xs">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs text-faint font-medium">{label}</label>
      {children}
    </div>
  );
}
