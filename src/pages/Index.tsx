import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Comparison from "@/components/landing/Comparison";
import Features from "@/components/landing/Features";
import UniqueScores from "@/components/landing/UniqueScores";
import WhoIsItFor from "@/components/landing/WhoIsItFor";
import HowItWorks from "@/components/landing/HowItWorks";
import WhyQuantfy from "@/components/landing/WhyQuantfy";
import Stats from "@/components/landing/Stats";
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
      <UniqueScores />
      <WhoIsItFor />
      <HowItWorks />
      <WhyQuantfy />
        <Stats />
        <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
