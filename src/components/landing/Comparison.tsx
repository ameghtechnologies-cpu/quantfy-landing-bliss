import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const oldWay = [
  "Scattered data across multiple sources",
  "Complicated spreadsheets and confusing ratios",
  "Hours spent making sense of numbers",
  "Difficult to compare companies consistently",
  "Analysis paralysis from information overload",
];

const newWay = [
  "Clean, actionable scores in one place",
  "Simple frameworks you can trust",
  "Research time cut by 5x",
  "Easy comparison across 1400+ stocks",
  "Clarity and confidence in every decision",
];

const Comparison = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-amber/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-sky/5 rounded-full blur-3xl translate-x-1/3" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            What makes Quantfy different?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Stop drowning in data. Start making confident decisions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-card border border-border/80 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive/30 to-transparent" />
            <h3 className="font-sans font-semibold text-lg text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center">
                <X size={16} className="text-destructive" />
              </span>
              The Old Way
            </h3>
            <ul className="space-y-4">
              {oldWay.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <X size={14} className="text-destructive/50 mt-0.5 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quantfy Way */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-brand-sky/5 border border-brand-sky/15 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-sky/50 to-brand-amber/30" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-sky/5 rounded-full blur-2xl" />
            <h3 className="font-sans font-semibold text-lg text-foreground mb-6 flex items-center gap-2 relative z-10">
              <span className="w-8 h-8 rounded-lg bg-brand-sky/10 flex items-center justify-center">
                <Check size={16} className="text-brand-sky" />
              </span>
              The Quantfy Way
            </h3>
            <ul className="space-y-4 relative z-10">
              {newWay.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 text-sm text-foreground"
                >
                  <Check size={14} className="text-brand-sky mt-0.5 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
