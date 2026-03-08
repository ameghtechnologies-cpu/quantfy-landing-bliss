import { motion } from "framer-motion";
import { TrendingUp, BarChart3, BookOpen, Users, Briefcase } from "lucide-react";

const personas = [
  {
    title: "Retail Investors",
    description: "Make confident stock picks backed by data, not noise.",
    icon: TrendingUp,
    gradient: "from-brand-sky/20 to-brand-sky/5",
    iconColor: "text-brand-sky",
  },
  {
    title: "Swing Traders",
    description: "Spot momentum shifts early with MomentoScope.",
    icon: BarChart3,
    gradient: "from-brand-amber/20 to-brand-amber/5",
    iconColor: "text-brand-amber",
  },
  {
    title: "Students & Learners",
    description: "Understand fundamentals through intuitive scores and visuals.",
    icon: BookOpen,
    gradient: "from-brand-sky/20 to-brand-sky/5",
    iconColor: "text-brand-sky",
  },
  {
    title: "Financial Advisors",
    description: "Screen and shortlist stocks faster for your clients.",
    icon: Briefcase,
    gradient: "from-brand-amber/20 to-brand-amber/5",
    iconColor: "text-brand-amber",
  },
  {
    title: "Investment Clubs",
    description: "Share analysis and compare picks with your group.",
    icon: Users,
    gradient: "from-brand-sky/20 to-brand-sky/5",
    iconColor: "text-brand-sky",
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {personas.map((persona, i) => (
            <motion.div
              key={persona.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-brand-sky/30 transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${persona.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <persona.icon className={`w-5 h-5 ${persona.iconColor}`} />
                </div>
                <h3 className="font-sans font-semibold text-foreground mb-2">{persona.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{persona.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
