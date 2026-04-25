"use client";

import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaTag, FaCommentDots, FaArrowRight } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { useToast } from "@/components/feedback/Toaster";

const initial = { name: "", email: "", phone: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast("Message sent — we'll get back within 24 hours.", { variant: "success" });
      setForm(initial);
    }, 1000);
  }

  return (
    <section className="max-w-3xl mx-auto mt-12 mb-8 px-4">
      <div className="bg-surface rounded-2xl border border-line shadow-card p-6 sm:p-8">
        <div className="text-center mb-6">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
            Send a Message
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-fg">We&apos;re ready to help</h2>
          <p className="text-soft text-sm mt-2 max-w-md mx-auto">
            Fill out the form below and our team will reach back to you shortly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field icon={FaUser} label="Name *">
              <input
                required
                value={form.name}
                onChange={update("name")}
                placeholder="Your full name"
                className="contact-input"
              />
            </Field>
            <Field icon={FaEnvelope} label="Email *">
              <input
                required
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="you@email.com"
                className="contact-input"
              />
            </Field>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field icon={FaPhone} label="Phone">
              <input
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                placeholder="+234 800 000 0000"
                className="contact-input"
              />
            </Field>
            <Field icon={FaTag} label="Subject">
              <input
                value={form.subject}
                onChange={update("subject")}
                placeholder="What's this about?"
                className="contact-input"
              />
            </Field>
          </div>

          <Field icon={FaCommentDots} label="Message *">
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={update("message")}
              placeholder="Tell us how we can help..."
              className="contact-input resize-none"
            />
          </Field>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={loading}
            className="w-full mt-2"
            icon={!loading && <FaArrowRight className="text-xs" />}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>

    </section>
  );
}

function Field({ icon: Icon, label, children }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs text-faint font-medium flex items-center gap-1.5">
        <Icon className="text-accent text-[10px]" />
        {label}
      </span>
      {children}
    </label>
  );
}
