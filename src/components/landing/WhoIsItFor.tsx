import { motion } from "framer-motion";
import { TrendingUp, BarChart3, BookOpen, Users, Briefcase } from "lucide-react";

const personas = [
  {
    title: "Retail Investors",
    description: "Make confident stock picks backed by data, not noise.",
    icon: TrendingUp,
    className: "col-span-2 row-span-2",
    gradient: "from-brand-sky/20 to-brand-navy/10",
  },
  {
    title: "Swing Traders",
    description: "Spot momentum shifts early with MomentoScope.",
    icon: BarChart3,
    className: "col-span-1 row-span-1",
    gradient: "from-brand-amber/15 to-brand-amber/5",
  },
  {
    title: "Students & Learners",
    description: "Understand fundamentals through intuitive scores and visuals.",
    icon: BookOpen,
    className: "col-span-1 row-span-1",
    gradient: "from-brand-sky/15 to-accent/5",
  },
  {
    title: "Financial Advisors",
    description: "Screen and shortlist stocks faster for your clients.",
    icon: Briefcase,
    className: "col-span-1 row-span-1",
    gradient: "from-brand-navy/15 to-brand-sky/5",
  },
  {
    title: "Investment Clubs",
    description: "Share analysis and compare picks with your group.",
    icon: Users,
    className: "col-span-2 row-span-1",
    gradient: "from-brand-amber/10 to-brand-sky/10",
  },
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[140px] md:auto-rows-[160px]">
          {personas.map((persona, i) => (
            <motion.div
              key={persona.title}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`${persona.className} relative rounded-2xl border border-border/60 bg-gradient-to-br ${persona.gradient} p-6 flex flex-col justify-end overflow-hidden group cursor-default`}
            >
              <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-background/60 backdrop-blur-sm flex items-center justify-center border border-border/40 group-hover:bg-brand-sky/10 transition-colors">
                <persona.icon size={18} className="text-brand-sky" />
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-sky/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="font-sans font-semibold text-foreground text-base md:text-lg mb-1 relative z-10">
                {persona.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed relative z-10">
                {persona.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
