import Testimonials from "@/components/SellTrade/Testimonial";
import SellTradeHero from "@/components/SellTrade/HeroSellTrade";
import SellTradeForm from "@/components/SellTrade/SellTradeForm";
import WhyUs from "@/components/SellTrade/WhyUs";

export const metadata = {
  title: "Sell or Trade | Easy Autos",
  description:
    "Sell your car or trade it in for something new at Easy Autos — fast, fair, transparent.",
};

export default function SellTrade() {
  return (
    <main>
      <SellTradeHero />
      <SellTradeForm />
      <WhyUs />
      <Testimonials />
    </main>
  );
}
