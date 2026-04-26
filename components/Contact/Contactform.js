"use client";

import { FaUser, FaEnvelope, FaPhone, FaTag, FaCommentDots, FaArrowRight, FaCheck } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { useToast } from "@/components/feedback/Toaster";
import { useContactForm } from "@/hooks/useContactForm";

export default function ContactForm() {
  const { form, update, submit, loading, sent, reset, error } = useContactForm();
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    await submit(e);
    if (!error) toast("Message sent — we'll get back within 24 hours.", { variant: "success" });
  };

  return (
    <section className="max-w-3xl mx-auto mt-12 mb-8 px-4">
      <div className="bg-surface rounded-2xl border border-line shadow-card p-6 sm:p-8">
        {sent ? (
          <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
            <div className="w-14 h-14 rounded-full bg-ok/15 flex items-center justify-center">
              <FaCheck className="text-ok text-xl" />
            </div>
            <h3 className="text-fg font-bold text-lg">Message Sent!</h3>
            <p className="text-soft text-sm">Our team will get back to you within 24 hours.</p>
            <Button variant="outline" size="sm" onClick={reset}>Send Another Message</Button>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
                Send a Message
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-fg">We&apos;re ready to help</h2>
              <p className="text-soft text-sm mt-2 max-w-md mx-auto">
                Fill out the form below and our team will reach back to you shortly.
              </p>
            </div>

            {error && (
              <p className="text-xs text-error bg-error/10 border border-error/20 rounded-lg px-3 py-2 mb-4">{error}</p>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field icon={FaUser} label="Name *">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Your full name"
                    className="contact-input"
                  />
                </Field>
                <Field icon={FaEnvelope} label="Email *">
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
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
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="+234 800 000 0000"
                    className="contact-input"
                  />
                </Field>
                <Field icon={FaTag} label="Subject">
                  <input
                    value={form.subject}
                    onChange={(e) => update("subject", e.target.value)}
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
                  onChange={(e) => update("message", e.target.value)}
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
          </>
        )}
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
