"use client";

import { useState, useMemo } from "react";
import { FaRegCreditCard, FaCheck, FaCalculator, FaArrowRight } from "react-icons/fa";
import {
  CurrencyDollarIcon,
  BanknotesIcon,
  ArrowTrendingDownIcon,
  AdjustmentsHorizontalIcon,
  TagIcon,
} from "@heroicons/react/24/solid";
import Button from "@/components/ui/Button";
import { useToast } from "@/components/feedback/Toaster";

const loanTerms = [24, 36, 48, 60, 72, 84];

function FinancingInfo() {
  return (
    <div className="bg-mesh border border-line p-8 sm:p-10 rounded-2xl mb-8 shadow-card relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
      <div className="relative flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center mb-4">
          <FaRegCreditCard className="text-accent text-xl" />
        </div>
        <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
          Financing
        </p>
        <h2 className="text-2xl sm:text-3xl font-black text-fg mb-3">
          Professional Auto Financing
        </h2>
        <p className="text-soft text-sm sm:text-base max-w-2xl">
          Unlock flexible, transparent, and competitive financing options. Our process is designed
          for your convenience, with expert support every step of the way.
        </p>
      </div>
    </div>
  );
}

function PaymentCalculator() {
  const [vehiclePrice, setVehiclePrice] = useState(35000);
  const [downPayment, setDownPayment] = useState(5000);
  const [interestRate, setInterestRate] = useState(5.5);
  const [tradeIn, setTradeIn] = useState(0);
  const [loanTerm, setLoanTerm] = useState(60);
  const { toast } = useToast();

  const { principal, monthlyPayment, totalPayment } = useMemo(() => {
    const principal = Math.max(vehiclePrice - downPayment - tradeIn, 0);
    const monthlyRate = interestRate / 100 / 12;
    const monthlyPayment =
      loanTerm > 0 && monthlyRate > 0
        ? (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -loanTerm))
        : 0;
    return {
      principal,
      monthlyPayment,
      totalPayment: monthlyPayment * loanTerm,
    };
  }, [vehiclePrice, downPayment, tradeIn, interestRate, loanTerm]);

  const fmt = (n) =>
    n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Calculator */}
      <div className="bg-surface rounded-2xl border border-line shadow-card p-6 sm:p-8">
        <h3 className="text-lg font-bold text-fg mb-6 text-center flex items-center justify-center gap-2">
          <FaCalculator className="text-accent" />
          Payment Calculator
        </h3>

        <SliderField
          icon={TagIcon}
          label="Vehicle Price"
          value={vehiclePrice}
          onChange={setVehiclePrice}
          min={0}
          max={200000}
          step={500}
          prefix="$"
        />
        <SliderField
          icon={BanknotesIcon}
          label="Down Payment"
          value={downPayment}
          onChange={setDownPayment}
          min={0}
          max={vehiclePrice}
          step={500}
          prefix="$"
        />
        <SliderField
          icon={ArrowTrendingDownIcon}
          label="Interest Rate (%)"
          value={interestRate}
          onChange={setInterestRate}
          min={0}
          max={25}
          step={0.1}
          decimals={1}
        />
        <SliderField
          icon={AdjustmentsHorizontalIcon}
          label="Trade-In Value"
          value={tradeIn}
          onChange={setTradeIn}
          min={0}
          max={vehiclePrice}
          step={500}
          prefix="$"
        />

        <div className="mt-4">
          <p className="text-soft text-xs font-semibold mb-2 uppercase tracking-widest">
            Loan Term (months)
          </p>
          <div className="flex flex-wrap gap-2">
            {loanTerms.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => setLoanTerm(term)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                  loanTerm === term
                    ? "bg-accent text-on-accent border-accent shadow-soft"
                    : "bg-elevated text-soft border-line hover:border-accent/40 hover:text-accent"
                }`}
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        <Button
          variant="primary"
          size="lg"
          className="w-full mt-6"
          icon={<FaCheck />}
          onClick={() =>
            toast("Pre-approval request submitted — we'll be in touch.", { variant: "success" })
          }
        >
          Apply for Pre-Approval
        </Button>
      </div>

      {/* Summary */}
      <div className="flex flex-col gap-5">
        <div className="bg-mesh rounded-2xl border border-accent/20 shadow-card p-6 text-center">
          <CurrencyDollarIcon className="w-10 h-10 text-accent mx-auto mb-2" />
          <p className="text-soft text-sm font-medium uppercase tracking-widest mb-1">
            Estimated Monthly Payment
          </p>
          <p className="text-4xl sm:text-5xl font-black text-fg tabular-nums">
            ${fmt(monthlyPayment)}
          </p>
          <p className="text-faint text-sm mt-2 tabular-nums">Total: ${fmt(totalPayment)}</p>
        </div>

        <div className="bg-surface rounded-2xl border border-line shadow-soft p-6">
          <h4 className="text-sm font-bold text-fg mb-4 flex items-center gap-2">
            <span className="w-1 h-4 bg-accent rounded-full" />
            Loan Breakdown
          </h4>
          <div className="flex flex-col gap-2 text-sm">
            <BreakdownRow label="Vehicle Price" value={`$${vehiclePrice.toLocaleString()}`} />
            <BreakdownRow label="Down Payment" value={`$${downPayment.toLocaleString()}`} />
            <BreakdownRow label="Trade-In Value" value={`$${tradeIn.toLocaleString()}`} />
            <BreakdownRow label="Loan Amount" value={`$${fmt(principal)}`} />
            <BreakdownRow label="Interest Rate" value={`${interestRate}%`} />
            <BreakdownRow label="Loan Term" value={`${loanTerm} months`} />
          </div>
        </div>
      </div>
    </div>
  );
}

function SliderField({ icon: Icon, label, value, onChange, min, max, step, prefix = "", decimals = 0 }) {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <label className="text-fg text-sm font-semibold flex items-center gap-2">
        <Icon className="w-4 h-4 text-accent" /> {label}
      </label>
      <div className="flex items-center gap-3">
        <div className="relative w-32">
          {prefix && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-faint text-xs">
              {prefix}
            </span>
          )}
          <input
            type="number"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className={`w-full ${prefix ? "pl-6" : "pl-3"} pr-2 py-1.5 rounded-lg bg-elevated text-fg text-sm border border-line focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent`}
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="flex-1 accent-accent cursor-pointer"
        />
      </div>
    </div>
  );
}

function BreakdownRow({ label, value }) {
  return (
    <div className="flex justify-between text-soft">
      <span>{label}</span>
      <span className="text-fg font-medium tabular-nums">{value}</span>
    </div>
  );
}

export default function FinancingForm() {
  return (
    <div className="px-4 sm:px-6 py-12 max-w-7xl mx-auto w-full">
      <FinancingInfo />
      <PaymentCalculator />
      <div className="w-full flex justify-center mt-10">
        <Button variant="primary" size="lg" icon={<FaArrowRight className="text-xs" />}>
          Apply for Pre-Approval
        </Button>
      </div>
    </div>
  );
}
