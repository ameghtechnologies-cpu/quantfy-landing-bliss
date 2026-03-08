import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Comparison from "@/components/landing/Comparison";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Stats from "@/components/landing/Stats";
import Videos from "@/components/landing/Videos";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Comparison />
      <Features />
      <HowItWorks />
      <Stats />
      <Videos />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
