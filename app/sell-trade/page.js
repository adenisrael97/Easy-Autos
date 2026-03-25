import Testimonials from "@/components/SellTrade/Testimonial";
import SellTradeHero from "@/components/SellTrade/HeroSellTrade";
import SellTradeForm from "@/components/SellTrade/SellTradeForm";
import WhyUs from "@/components/SellTrade/WhyUs";

export default function SellTrade () {
    return (
        <section>
            <SellTradeHero />
            <SellTradeForm />
            <WhyUs />
            <Testimonials />
        </section>
    )
}