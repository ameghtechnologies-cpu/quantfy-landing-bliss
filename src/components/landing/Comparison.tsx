import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isQuantfy, setIsQuantfy] = useState(false);

  return (
    <section className="py-16 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-amber/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-sky/5 rounded-full blur-3xl translate-x-1/3" />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            What makes Quantfy different?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Stop drowning in data. Start making confident decisions.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="relative flex bg-muted rounded-full p-1 border border-border">
            <motion.div
              className="absolute top-1 bottom-1 rounded-full bg-background shadow-md border border-border/60"
              initial={false}
              animate={{
                left: isQuantfy ? "50%" : "4px",
                right: isQuantfy ? "4px" : "50%",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
            <button
              onClick={() => setIsQuantfy(false)}
              className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                !isQuantfy ? "text-destructive" : "text-muted-foreground"
              }`}
            >
              The Old Way
            </button>
            <button
              onClick={() => setIsQuantfy(true)}
              className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                isQuantfy ? "text-brand-sky" : "text-muted-foreground"
              }`}
            >
              The Quantfy Way
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait">
            {!isQuantfy ? (
              <motion.div
                key="old"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-2xl bg-card border border-border/80 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive/30 to-transparent" />
                <ul className="space-y-4">
                  {oldWay.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <X size={14} className="text-destructive/60 mt-0.5 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ) : (
              <motion.div
                key="new"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-2xl bg-brand-sky/5 border border-brand-sky/15 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-sky/50 to-brand-amber/30" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-sky/5 rounded-full blur-2xl" />
                <ul className="space-y-4 relative z-10">
                  {newWay.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <Check size={14} className="text-brand-sky mt-0.5 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
