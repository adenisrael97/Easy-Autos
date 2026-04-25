"use client";

import { useState } from "react";
import { FaUpload, FaArrowRight } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { useToast } from "@/components/feedback/Toaster";

const initial = {
  fullName: "",
  phone: "",
  email: "",
  currentBrand: "",
  currentModel: "",
  currentYear: "",
  currentMileage: "",
  currentCondition: "",
  desiredBrand: "",
  desiredModel: "",
  budget: "",
  location: "",
  notes: "",
  images: [],
};

const fields = [
  { name: "fullName", label: "Full Name", required: true },
  { name: "phone", label: "Phone", required: true, type: "tel" },
  { name: "email", label: "Email (optional)", type: "email" },
  { name: "currentBrand", label: "Current Brand", required: true },
  { name: "currentModel", label: "Current Model", required: true },
  { name: "currentYear", label: "Current Year", required: true, type: "number" },
  { name: "currentMileage", label: "Current Mileage (km)", required: true, type: "number" },
  { name: "currentCondition", label: "Current Condition", required: true },
  { name: "desiredBrand", label: "Desired Brand", required: true },
  { name: "desiredModel", label: "Desired Model", required: true },
  { name: "budget", label: "Budget", required: true },
  { name: "location", label: "Location", required: true },
];

export default function TradeForm() {
  const [form, setForm] = useState(initial);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (name === "images") {
      setForm((f) => ({ ...f, images: Array.from(files) }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  }

  function validate() {
    for (const f of fields) {
      if (f.required && !form[f.name]) return "Please fill in all required fields.";
    }
    return "";
  }

  function handleSubmit(e) {
    e.preventDefault();
    const err = validate();
    if (err) return setError(err);
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast("Trade-in request received — we'll be in touch shortly.", { variant: "success" });
      setForm(initial);
    }, 900);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface rounded-2xl border border-line shadow-card p-6 sm:p-8 max-w-2xl mx-auto w-full"
    >
      <h3 className="text-xl font-bold text-fg mb-1">Trade-In / Swap</h3>
      <p className="text-soft text-sm mb-5">
        Tell us about your current car and what you&apos;re hoping to drive next.
      </p>

      {error && (
        <div className="mb-4 p-3 rounded-lg bg-bad/15 border border-bad/30 text-bad text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {fields.map((f) => (
          <label key={f.name} className="flex flex-col gap-1">
            <span className="text-faint text-xs font-medium">
              {f.label}
              {f.required && " *"}
            </span>
            <input
              name={f.name}
              type={f.type || "text"}
              value={form[f.name]}
              onChange={handleChange}
              placeholder={f.label}
              className="w-full px-3 py-2 rounded-lg bg-elevated text-fg text-sm border border-line placeholder-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
            />
          </label>
        ))}
      </div>

      <label className="flex flex-col gap-1 mt-4">
        <span className="text-faint text-xs font-medium">Notes</span>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          rows={3}
          placeholder="Anything else we should know?"
          className="w-full px-3 py-2 rounded-lg bg-elevated text-fg text-sm border border-line placeholder-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition resize-none"
        />
      </label>

      <label className="flex flex-col gap-1 mt-4">
        <span className="text-faint text-xs font-medium flex items-center gap-2">
          <FaUpload className="text-accent" />
          Upload Images
        </span>
        <input
          name="images"
          type="file"
          multiple
          onChange={handleChange}
          className="block w-full text-sm text-soft file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border file:border-line file:bg-elevated file:text-fg file:font-medium file:cursor-pointer hover:file:bg-strong"
        />
      </label>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={loading}
        className="w-full mt-6"
        icon={!loading && <FaArrowRight className="text-xs" />}
      >
        {loading ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
