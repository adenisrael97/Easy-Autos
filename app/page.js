import Hero from "@/components/LandingPage/Hero";
import CTA from "@/components/LandingPage/CTA";
import Services from "@/components/LandingPage/Services";
import AboutUs from "@/components/LandingPage/AboutUs";
import TestimonialsClient from "@/components/LandingPage/TestimonialsClient";



export default function HomePage() {
  return (
    <section>
      <Hero />
      <CTA />
      <Services />
      <AboutUs />
      <TestimonialsClient />
    </section>
   
  )
}