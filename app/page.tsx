import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import Testimonials from "@/components/Testimonials";
import SeoBenefits from "@/components/Benefits";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <SeoBenefits />
        <Testimonials />
        
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
