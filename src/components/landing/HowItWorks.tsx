import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Screen Smartly",
    description: "Filter 1000+ companies by Quality, Growth, Valuation, or Momentum scores to find opportunities matching your criteria.",
    accent: "from-brand-sky/30",
  },
  {
    num: "02",
    title: "Understand Instantly",
    description: "Open any company to see clear DROPify scores and weekly MomentoScope trends at a glance.",
    accent: "from-brand-amber/30",
  },
  {
    num: "03",
    title: "Explore Deeply",
    description: "Use structured tabs for detailed fundamentals and momentum analysis when you need more context.",
    accent: "from-brand-sky/30",
  },
  {
    num: "04",
    title: "Monitor with Ease",
    description: "Weekly and quarterly updates keep your watchlist fresh and meaningful without overwhelming you.",
    accent: "from-brand-amber/30",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-sky/3 via-transparent to-brand-amber/3" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-brand-sky mb-4 block">Process</span>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            How it works
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            From screening to monitoring — four simple steps to smarter investing.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative group"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%+0.5rem)] w-[calc(100%-1rem)] h-px bg-gradient-to-r from-border to-transparent" />
              )}

              <div className="relative p-5 rounded-2xl bg-card border border-border/50 group-hover:border-brand-sky/30 group-hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${step.accent} to-transparent`} />
                <motion.span
                  className="text-5xl font-serif font-bold bg-gradient-to-b from-brand-sky/30 to-transparent bg-clip-text text-transparent"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {step.num}
                </motion.span>
                <h3 className="font-sans font-semibold text-foreground mt-4 mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
