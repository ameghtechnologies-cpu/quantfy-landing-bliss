import { motion } from "framer-motion";
import { TrendingUp, BarChart3, BookOpen, Briefcase } from "lucide-react";

const personas = [
  {
    title: "Retail Investors",
    description: "Make confident stock picks backed by data, not noise.",
    icon: TrendingUp,
    gradient: "from-[hsl(199,89%,48%)]/30 to-[hsl(199,89%,48%)]/10",
  },
  {
    title: "Swing Traders",
    description: "Spot momentum shifts early with MomentoScope.",
    icon: BarChart3,
    gradient: "from-[hsl(38,92%,50%)]/25 to-[hsl(38,92%,50%)]/10",
  },
  {
    title: "Students & Learners",
    description: "Understand fundamentals through intuitive scores and visuals.",
    icon: BookOpen,
    gradient: "from-[hsl(199,89%,48%)]/20 to-[hsl(260,60%,50%)]/15",
  },
  {
    title: "Financial Advisors",
    description: "Screen and shortlist stocks faster for your clients.",
    icon: Briefcase,
    gradient: "from-[hsl(38,92%,50%)]/20 to-[hsl(199,89%,48%)]/15",
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

        {/* Bento zigzag grid inspired by reference */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[160px]">
          {/* Row 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className={`col-span-12 md:col-span-5 rounded-2xl bg-gradient-to-br ${personas[0].gradient} border border-border/50 p-6 flex flex-col justify-end relative overflow-hidden group`}
          >
            <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-background/60 backdrop-blur-sm flex items-center justify-center border border-border/40 group-hover:scale-110 transition-transform">
              <personas[0].icon className="w-5 h-5 text-brand-sky" />
            </div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-brand-sky/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="font-sans font-semibold text-foreground text-lg mb-1 relative z-10">{personas[0].title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{personas[0].description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className={`col-span-12 md:col-span-7 rounded-2xl bg-gradient-to-br ${personas[1].gradient} border border-border/50 p-6 flex flex-col justify-end relative overflow-hidden group`}
          >
            <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-background/60 backdrop-blur-sm flex items-center justify-center border border-border/40 group-hover:scale-110 transition-transform">
              <personas[1].icon className="w-5 h-5 text-brand-amber" />
            </div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-brand-amber/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="font-sans font-semibold text-foreground text-lg mb-1 relative z-10">{personas[1].title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{personas[1].description}</p>
          </motion.div>

          {/* Row 2 - reversed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className={`col-span-12 md:col-span-7 rounded-2xl bg-gradient-to-br ${personas[2].gradient} border border-border/50 p-6 flex flex-col justify-end relative overflow-hidden group`}
          >
            <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-background/60 backdrop-blur-sm flex items-center justify-center border border-border/40 group-hover:scale-110 transition-transform">
              <personas[2].icon className="w-5 h-5 text-brand-sky" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-brand-sky/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="font-sans font-semibold text-foreground text-lg mb-1 relative z-10">{personas[2].title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{personas[2].description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className={`col-span-12 md:col-span-5 rounded-2xl bg-gradient-to-br ${personas[3].gradient} border border-border/50 p-6 flex flex-col justify-end relative overflow-hidden group`}
          >
            <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-background/60 backdrop-blur-sm flex items-center justify-center border border-border/40 group-hover:scale-110 transition-transform">
              <personas[3].icon className="w-5 h-5 text-brand-amber" />
            </div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-brand-amber/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="font-sans font-semibold text-foreground text-lg mb-1 relative z-10">{personas[3].title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{personas[3].description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
