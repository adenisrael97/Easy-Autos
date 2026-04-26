import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import FeaturedCars from "@/components/sections/FeaturedCars";
import Services from "@/components/sections/Services";
import AboutUs from "@/components/sections/AboutUs";

// Client-heavy below-fold sections — code-split so their JS is deferred
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"));

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <FeaturedCars />
      <Services />
      <AboutUs />
      <Testimonials />
      <ContactSection />
    </main>
  );
}
