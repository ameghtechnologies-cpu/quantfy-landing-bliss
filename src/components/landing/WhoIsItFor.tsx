import { motion } from "framer-motion";
import { TrendingUp, BarChart3, BookOpen, Briefcase } from "lucide-react";

const personas = [
  {
    title: "Retail Investors",
    description: "Make confident stock picks backed by data, not noise.",
    icon: TrendingUp,
    gradient: "from-brand-sky/30 to-brand-sky/10",
    iconColor: "text-brand-sky",
  },
  {
    title: "Swing Traders",
    description: "Spot momentum shifts early with MomentoScope.",
    icon: BarChart3,
    gradient: "from-brand-amber/25 to-brand-amber/10",
    iconColor: "text-brand-amber",
  },
  {
    title: "Students & Learners",
    description: "Understand fundamentals through intuitive scores and visuals.",
    icon: BookOpen,
    gradient: "from-brand-sky/20 to-accent/15",
    iconColor: "text-brand-sky",
  },
  {
    title: "Financial Advisors",
    description: "Screen and shortlist stocks faster for your clients.",
    icon: Briefcase,
    gradient: "from-brand-amber/20 to-brand-sky/15",
    iconColor: "text-brand-amber",
  },
];

// Zigzag: row1 [5,7], row2 [7,5]
const layout = [
  { indices: [0, 1], spans: ["col-span-12 md:col-span-5", "col-span-12 md:col-span-7"] },
  { indices: [2, 3], spans: ["col-span-12 md:col-span-7", "col-span-12 md:col-span-5"] },
];

const WhoIsItFor = () => {
  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Who is it for?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Built for anyone who wants clarity in Indian stock markets.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-4">
          {layout.map((row, rowIdx) =>
            row.indices.map((idx, colIdx) => {
              const persona = personas[idx];
              const Icon = persona.icon;
              return (
                <motion.div
                  key={persona.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (rowIdx * 2 + colIdx) * 0.08 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`${row.spans[colIdx]} rounded-2xl bg-gradient-to-br ${persona.gradient} border border-border/50 p-6 min-h-[160px] flex flex-col justify-end relative overflow-hidden group`}
                >
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-background/60 backdrop-blur-sm flex items-center justify-center border border-border/40 group-hover:scale-110 transition-transform">
                    <Icon className={`w-5 h-5 ${persona.iconColor}`} />
                  </div>
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-brand-sky/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="font-sans font-semibold text-foreground text-lg mb-1 relative z-10">{persona.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{persona.description}</p>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
