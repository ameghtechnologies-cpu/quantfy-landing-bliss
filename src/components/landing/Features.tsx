import { motion } from "framer-motion";
import { Search, BarChart3, TrendingUp, Filter, PieChart, Shield, Sparkles, Zap } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Universe Search",
    description: "Browse and search across all listed Indian companies, ETFs & indices in one place.",
    className: "col-span-2 row-span-2",
    gradient: "from-brand-sky/20 to-brand-navy/10",
    iconColor: "text-brand-sky",
  },
  {
    icon: BarChart3,
    title: "DROPify Score",
    description: "A composite score out of 100 combining quality, growth, valuation & shareholding from 50+ data points.",
    className: "col-span-1 row-span-1",
    gradient: "from-brand-amber/15 to-brand-amber/5",
    iconColor: "text-brand-amber",
  },
  {
    icon: TrendingUp,
    title: "MomentoScope",
    description: "Track weekly momentum metrics to spot trend shifts and entry/exit opportunities.",
    className: "col-span-1 row-span-1",
    gradient: "from-brand-sky/15 to-accent/5",
    iconColor: "text-brand-sky",
  },
  {
    icon: Filter,
    title: "Smart Filters",
    description: "Filter by index, sector, industry, PE bands, quality tiers, growth labels and more.",
    className: "col-span-1 row-span-1",
    gradient: "from-brand-navy/15 to-brand-sky/5",
    iconColor: "text-brand-amber",
  },
  {
    icon: PieChart,
    title: "Deep Analysis",
    description: "Profitability, solvency, cash flow, balance sheet, income quality — all in one view.",
    className: "col-span-2 row-span-1",
    gradient: "from-brand-amber/10 to-brand-sky/10",
    iconColor: "text-brand-sky",
  },
  {
    icon: Shield,
    title: "Shareholding Insights",
    description: "Promoter, FII, DII & public holding trends with pledge tracking across quarters.",
    className: "col-span-1 row-span-1",
    gradient: "from-brand-sky/20 to-brand-sky/5",
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

        {/* Bento grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[140px] md:auto-rows-[160px] mb-20">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`${feature.className} relative rounded-2xl border border-border/60 bg-gradient-to-br ${feature.gradient} p-6 flex flex-col justify-end overflow-hidden group cursor-default`}
            >
              <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-background/60 backdrop-blur-sm flex items-center justify-center border border-border/40 group-hover:bg-brand-sky/10 transition-colors">
                <feature.icon size={18} className={feature.iconColor} />
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-sky/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="font-sans font-semibold text-foreground text-base md:text-lg mb-1 relative z-10">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-brand-amber/30 hover:shadow-md transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-10 h-10 rounded-xl bg-brand-amber/10 flex items-center justify-center flex-shrink-0"
              >
                <benefit.icon className="w-5 h-5 text-brand-amber" />
              </motion.div>
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
