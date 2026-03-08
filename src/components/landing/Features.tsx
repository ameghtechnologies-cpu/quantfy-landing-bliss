import { motion } from "framer-motion";
import { Search, BarChart3, TrendingUp, Filter, PieChart, Shield, Sparkles, Zap } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Universe Search",
    description: "Browse and search across all listed Indian companies, ETFs & indices in one place.",
    gradient: "from-brand-sky/20 to-brand-sky/5",
    iconColor: "text-brand-sky",
  },
  {
    icon: BarChart3,
    title: "DROPify Score",
    description: "A composite score out of 100 combining quality, growth, valuation & shareholding from 50+ data points.",
    gradient: "from-brand-amber/20 to-brand-amber/5",
    iconColor: "text-brand-amber",
  },
  {
    icon: TrendingUp,
    title: "MomentoScope",
    description: "Track weekly momentum metrics to spot trend shifts and entry/exit opportunities.",
    gradient: "from-brand-sky/20 to-brand-sky/5",
    iconColor: "text-brand-sky",
  },
  {
    icon: Filter,
    title: "Smart Filters",
    description: "Filter by index, sector, industry, PE bands, quality tiers, growth labels and more.",
    gradient: "from-brand-amber/20 to-brand-amber/5",
    iconColor: "text-brand-amber",
  },
  {
    icon: PieChart,
    title: "Deep Analysis",
    description: "Profitability, solvency, cash flow, balance sheet, income quality — all in one view.",
    gradient: "from-brand-sky/20 to-brand-sky/5",
    iconColor: "text-brand-sky",
  },
  {
    icon: Shield,
    title: "Shareholding Insights",
    description: "Promoter, FII, DII & public holding trends with pledge tracking across quarters.",
    gradient: "from-brand-amber/20 to-brand-amber/5",
    iconColor: "text-brand-amber",
  },
];

const keyBenefits = [
  {
    icon: Sparkles,
    title: "Converts Chaos into Clarity",
    description: "No more jumping between websites or building complex spreadsheets. Everything you need is quantified and ready.",
  },
  {
    icon: Zap,
    title: "Saves Massive Time",
    description: "Understand a company's fundamentals and momentum profile in minutes, not hours.",
  },
  {
    icon: BarChart3,
    title: "Complete Techno-Funda View",
    description: "The one of its kind tool combining fundamental quality and momentum strength in one structured format.",
  },
  {
    icon: Search,
    title: "For Everyone",
    description: "Whether you're just starting or you're experienced, Quantfy meets you where you are with a warm, guided experience.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-brand-sky mb-4 block">Features</span>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Everything you need to analyse stocks
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Quantified scores and filters so you can quickly find candidates for further analysis.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-brand-sky/30 transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`w-5 h-5 ${feature.iconColor}`} />
                </div>
                <h3 className="font-sans font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-brand-amber mb-4 block">Key Benefits</span>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            Simple. Structured. Powerful.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {keyBenefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-brand-amber/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-amber/10 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-5 h-5 text-brand-amber" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
