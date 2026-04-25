"use client";

import { useState } from "react";
import ToggleButtons from "@/components/SellTrade/ToggleButtons";
import SellForm from "@/components/SellTrade/SellForm";
import TradeForm from "@/components/SellTrade/TradeForm";

export default function SellTradePage() {
  const [active, setActive] = useState("sell");
  return (
    <div className="w-full bg-page py-14 px-4">
      <div className="max-w-3xl mx-auto">
        <ToggleButtons active={active} setActive={setActive} />
        <div className="transition-all duration-500">
          {active === "sell" ? <SellForm /> : <TradeForm />}
        </div>
      </div>
    </div>
  );
}
