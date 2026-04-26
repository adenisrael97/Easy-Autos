"use client";

import { useCallback, useState } from "react";
import { submitContactForm } from "@/services/contactService";

const defaultForm = { name: "", email: "", phone: "", subject: "", message: "" };

export function useContactForm() {
  const [form, setForm] = useState(defaultForm);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const update = useCallback((field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  }, []);

  const reset = useCallback(() => {
    setForm(defaultForm);
    setSent(false);
    setError("");
  }, []);

  const submit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);
      setError("");
      try {
        await submitContactForm(form);
        setSent(true);
        setForm(defaultForm);
      } catch (err) {
        setError(err.message || "Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    },
    [form]
  );

  return { form, update, submit, loading, sent, error, reset };
}
