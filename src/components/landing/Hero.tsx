import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import icon from "@/assets/quantfy-icon.png";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center max-w-2xl"
      >
        <img src={icon} alt="Quantfy" className="w-20 h-20 mb-8" />

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight mb-6">
          Quantfy
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
          Stock analysis at ease.
        </p>

        <p className="text-base text-muted-foreground/80 mb-10 max-w-md leading-relaxed">
          Screen, score & compare Indian stocks with quantified metrics — Quality, Growth, Valuation, Momentum & more.
        </p>

        <a
          href="#pricing"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Get started
          <ArrowRight size={16} />
        </a>
      </motion.div>

      {/* App preview mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 max-w-3xl w-full"
      >
        <div className="bg-card rounded-2xl border border-border shadow-sm p-6 md:p-8">
          {/* Mock stock cards */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-destructive" />
              <div className="w-2 h-2 rounded-full bg-brand-amber" />
              <div className="w-2 h-2 rounded-full bg-brand-sky" />
            </div>
            <div className="text-xs text-muted-foreground font-mono">Universe</div>
          </div>

          <div className="space-y-3">
            {[
              { name: "Aarti Industries", score: 50, quality: "HIGH PRIME", growth: "LAGGARD", pe: "Low (16.1)" },
              { name: "A B Infrabuild Ltd", score: 66, quality: "LOW PRIME", growth: "COMPOUNDER", pe: "High (54.6)" },
              { name: "3M India Ltd", score: 42, quality: "MID PRIME", growth: "ACHIEVER", pe: "Moderate (38.2)" },
            ].map((stock) => (
              <div
                key={stock.name}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-xl bg-background border border-border"
              >
                <div>
                  <p className="font-medium text-sm text-foreground">{stock.name}</p>
                  <div className="flex gap-3 mt-1 text-xs text-muted-foreground">
                    <span className="text-brand-sky">{stock.quality}</span>
                    <span className="text-brand-amber">{stock.growth}</span>
                    <span>{stock.pe}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-muted-foreground">DROPify Score</span>
                  <p className="font-semibold text-foreground">{stock.score}/100</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
