import FinanceSummary from "@/components/Financing/FinanceSummary";
import FinancingForm from "@/components/Financing/FinancingForm";

export const metadata = {
  title: "Financing | Easy Autos",
  description:
    "Flexible auto financing at Easy Autos — calculate payments, compare terms, and apply for pre-approval.",
};

export default function FinancingPage() {
  return (
    <main>
      <FinancingForm />
      <FinanceSummary />
    </main>
  );
}
