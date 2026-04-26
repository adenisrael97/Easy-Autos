export async function submitContactForm(formData) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Submission failed");
  return data;
}

export async function submitFinancingForm(formData) {
  await new Promise((r) => setTimeout(r, 800));
  return { success: true, message: "Financing application received. We'll contact you within 24 hours." };
}

export async function submitSellTradeForm(formData) {
  await new Promise((r) => setTimeout(r, 800));
  return { success: true, message: "Request received. We'll reach out with your quote within 24 hours." };
}
