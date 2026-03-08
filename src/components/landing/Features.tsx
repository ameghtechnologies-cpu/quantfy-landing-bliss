import { motion } from "framer-motion";
import { Search, BarChart3, TrendingUp, Filter, PieChart, Shield } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Universe Search",
    description: "Browse and search across all listed Indian companies, ETFs & indices in one place.",
  },
  {
    icon: BarChart3,
    title: "DROPify Score",
    description: "A single composite score out of 100 combining quality, growth, valuation & shareholding.",
  },
  {
    icon: TrendingUp,
    title: "MomentoScope",
    description: "Track weekly momentum metrics to spot trend shifts and entry/exit opportunities.",
  },
  {
    icon: Filter,
    title: "Smart Filters",
    description: "Filter by index, sector, industry, PE bands, quality tiers, growth labels and more.",
  },
  {
    icon: PieChart,
    title: "Deep Analysis",
    description: "Profitability, solvency, cash flow, balance sheet, income quality — all in one view.",
  },
  {
    icon: Shield,
    title: "Shareholding Insights",
    description: "Promoter, FII, DII & public holding trends with pledge tracking across quarters.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Everything you need to analyse stocks
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Quantified scores and filters so you can quickly find candidates for further analysis.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-brand-sky/30 transition-colors"
            >
              <feature.icon className="w-5 h-5 text-brand-sky mb-4" />
              <h3 className="font-sans font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
