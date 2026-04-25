import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import FeaturedCars from "@/components/sections/FeaturedCars";
import Services from "@/components/sections/Services";
import AboutUs from "@/components/sections/AboutUs";
import Testimonials from "@/components/sections/Testimonials";
import ContactSection from "@/components/sections/ContactSection";

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
