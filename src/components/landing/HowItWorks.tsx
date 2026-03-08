import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Screen Smartly",
    description: "Filter 1000+ companies by Quality, Growth, Valuation, or Momentum scores to find opportunities matching your criteria.",
    detail: "Use powerful filters to narrow down from thousands of stocks to a focused shortlist. Set thresholds on DROPify scores, market cap, sector, and more to match your investing style.",
    accent: "brand-sky",
  },
  {
    num: "02",
    title: "Understand Instantly",
    description: "Open any company to see clear DROPify scores and weekly MomentoScope trends at a glance.",
    detail: "Each company page shows a clean dashboard with all four proprietary scores, key financial metrics, and trend indicators — no information overload, just what matters.",
    accent: "brand-amber",
  },
  {
    num: "03",
    title: "Explore Deeply",
    description: "Use structured tabs for detailed fundamentals and momentum analysis when you need more context.",
    detail: "Dive into quarterly results, balance sheet trends, shareholding patterns, and technical charts. Every data point is organized in clear tabs so you find what you need fast.",
    accent: "brand-sky",
  },
  {
    num: "04",
    title: "Monitor with Ease",
    description: "Weekly and quarterly updates keep your watchlist fresh and meaningful without overwhelming you.",
    detail: "Add stocks to your watchlist and get updated scores every week. Quarterly recalculations ensure you're always working with the latest fundamentals.",
    accent: "brand-amber",
  },
];

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState(0);
  const step = steps[activeTab];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-sky/3 via-transparent to-brand-amber/3" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-brand-sky mb-4 block">Process</span>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            How it works
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            From screening to monitoring — four simple steps to smarter investing.
          </p>
        </motion.div>

        {/* Tab buttons */}
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-10">
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`relative flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 rounded-xl border transition-all duration-300 text-sm font-medium ${
                i === activeTab
                  ? `bg-card border-${s.accent}/40 shadow-md text-foreground`
                  : "bg-transparent border-border/50 text-muted-foreground hover:border-border hover:bg-card/50"
              }`}
            >
              <span
                className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-colors duration-300 ${
                  i === activeTab
                    ? `bg-${s.accent}/20 text-${s.accent}`
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {i + 1}
              </span>
              <span className="hidden md:inline">{s.title}</span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="relative rounded-2xl border border-border bg-card overflow-hidden shadow-lg min-h-[260px]">
          <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${step.accent}/40 to-transparent`} />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <span className={`text-5xl font-serif font-bold text-${step.accent}/25`}>
                    {step.num}
                  </span>
                  <h3 className="font-sans font-bold text-foreground text-2xl mt-3 mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">{step.detail}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
