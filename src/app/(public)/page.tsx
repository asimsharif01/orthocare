import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import Stats from "@/components/ui/Stats";
import Services from "@/components/ui/Services";
import Features from "@/components/ui/Features";
import Process from "@/components/ui/Process";
import Testimonials from "@/components/ui/Testimonials";
import CTA from "@/components/ui/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Features />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}