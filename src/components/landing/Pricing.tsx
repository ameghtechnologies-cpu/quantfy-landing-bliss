import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "3 Months",
    price: "₹3,000",
    period: "for 3 months",
    features: [
      "Full Universe access",
      "DROPify Score & sub-scores",
      "MomentoScope charts",
      "Smart filters & sorting",
    ],
  },
  {
    name: "6 Months",
    price: "₹5,500",
    period: "for 6 months",
    popular: true,
    features: [
      "Everything in 3-month plan",
      "Deep stock analysis",
      "Shareholding trends",
      "Priority support",
    ],
  },
  {
    name: "1 Year",
    price: "₹10,000",
    period: "for 1 year",
    features: [
      "Everything in 6-month plan",
      "Portfolio & Watchlist tools",
      "Historical data access",
      "Best value — save 17%",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground">No hidden fees. Cancel anytime.</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-6 rounded-2xl border transition-colors ${
                plan.popular
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border"
              }`}
            >
              {plan.popular && (
                <span className="text-[10px] uppercase tracking-widest font-semibold text-brand-amber mb-4 block">
                  Most Popular
                </span>
              )}
              <h3 className="font-sans font-semibold text-lg mb-1">{plan.name}</h3>
              <div className="mb-1">
                <span className="text-3xl font-serif">{plan.price}</span>
              </div>
              <p className={`text-xs mb-6 ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {plan.period}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check size={14} className={`mt-0.5 flex-shrink-0 ${plan.popular ? "text-brand-amber" : "text-brand-sky"}`} />
                    <span className={plan.popular ? "text-primary-foreground/90" : "text-muted-foreground"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2.5 rounded-full text-sm font-medium transition-opacity hover:opacity-90 ${
                  plan.popular
                    ? "bg-primary-foreground text-primary"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                Get started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
