import { motion } from "framer-motion";
import { Award, Activity, TrendingUp, Trophy } from "lucide-react";

const scores = [
  {
    icon: Award,
    title: "DROPify Score",
    subtitle: "Quality at a Glance",
    description:
      "A composite score out of 100 combining quality, growth, valuation & shareholding from 50+ data points. Instantly understand if a stock deserves your attention.",
    gradient: "from-brand-amber/15 to-brand-amber/5",
    iconColor: "text-brand-amber",
    borderHover: "hover:border-brand-amber/40",
  },
  {
    icon: Activity,
    title: "MomentoScope",
    subtitle: "Momentum Intelligence",
    description:
      "Track weekly momentum metrics to spot trend shifts and entry/exit opportunities. Combines price action, volume, and relative strength into a clear weekly signal.",
    gradient: "from-brand-sky/15 to-brand-sky/5",
    iconColor: "text-brand-sky",
    borderHover: "hover:border-brand-sky/40",
  },
  {
    icon: TrendingUp,
    title: "Price Action Score",
    subtitle: "Technical Strength",
    description:
      "Measures a stock's technical health using moving averages, breakout patterns, and trend consistency. A quick gauge of whether price momentum supports fundamentals.",
    gradient: "from-brand-amber/15 to-brand-navy/5",
    iconColor: "text-brand-amber",
    borderHover: "hover:border-brand-amber/40",
  },
  {
    icon: Trophy,
    title: "Leaderboard Score",
    subtitle: "Relative Ranking",
    description:
      "Ranks every stock against its peers combining all scores into a single leaderboard position. See where a company stands in its sector and across the entire market.",
    gradient: "from-brand-sky/15 to-brand-navy/5",
    iconColor: "text-brand-sky",
    borderHover: "hover:border-brand-sky/40",
  },
];

const UniqueScores = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-brand-sky mb-4 block">
            Proprietary Methods
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Four scores that define every stock
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Unique scoring systems built from the ground up to give you an edge in Indian markets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scores.map((score, i) => (
            <motion.div
              key={score.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className={`group relative rounded-2xl border border-border bg-card ${score.borderHover} transition-all duration-300 hover:shadow-lg overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${score.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Content */}
              <div className="relative z-10 p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <score.icon className={`w-6 h-6 ${score.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-foreground text-lg">{score.title}</h3>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      {score.subtitle}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {score.description}
                </p>

                {/* Placeholder for screenshot */}
                <div className="mt-5 rounded-xl bg-muted/50 border border-border/50 h-40 flex items-center justify-center">
                  <span className="text-xs text-muted-foreground/60">Screenshot coming soon</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueScores;
