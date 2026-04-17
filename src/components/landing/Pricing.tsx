import { motion } from "framer-motion";
import { Star } from "lucide-react";

const plans = [
  {
    name: "3 Months",
    price: "₹3,000",
    period: "for 3 months",
    perMonth: "₹1,000/mo",
  },
  {
    name: "6 Months",
    price: "₹5,500",
    period: "for 6 months",
    perMonth: "₹917/mo",
  },
  {
    name: "1 Year",
    price: "₹10,000",
    period: "for 1 year",
    perMonth: "₹833/mo",
    popular: true,
    savings: "Save 17%",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-sky/3 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-brand-amber/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-brand-sky mb-4 block">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground">All plans include every feature. Pick the duration that suits you.</p>
        </motion.div>

        {/* Plan cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`relative p-6 pt-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "bg-card border-brand-sky/40 shadow-lg shadow-brand-sky/10 scale-[1.02] ring-1 ring-brand-sky/20 mt-4"
                  : "bg-card border-border hover:border-brand-sky/30 overflow-hidden"
              }`}
            >
              {plan.popular && (
                <>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-sky via-brand-amber to-brand-sky" />
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-semibold bg-brand-amber text-foreground px-4 py-1.5 rounded-full shadow-md">
                      <Star size={10} /> Best Value
                    </span>
                  </div>
                </>
              )}

              <h3 className="font-sans font-semibold text-lg mb-1">{plan.name}</h3>
              <div className="mb-1">
                <span className="text-3xl font-serif">{plan.price}</span>
              </div>
              <p className="text-xs mb-1 text-muted-foreground">{plan.period}</p>
              <p className={`text-xs mb-4 font-medium ${plan.popular ? "text-brand-amber" : "text-brand-sky"}`}>
                {plan.perMonth}
              </p>
              {plan.savings && (
                <p className="text-xs font-semibold text-brand-amber mb-4">{plan.savings}</p>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  plan.popular
                    ? "bg-brand-sky text-foreground hover:shadow-md hover:shadow-brand-sky/20"
                    : "bg-primary text-primary-foreground hover:shadow-md hover:shadow-primary/20"
                }`}
              >
                Get started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
