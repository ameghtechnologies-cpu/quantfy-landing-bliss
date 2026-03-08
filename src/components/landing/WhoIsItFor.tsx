import { motion } from "framer-motion";
import { TrendingUp, BarChart3, BookOpen, Briefcase } from "lucide-react";

const WhoIsItFor = () => {
  return (
    <section className="py-16 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-3">
            Who is it for?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Built for anyone who wants clarity in Indian stock markets.
          </p>
        </motion.div>

        {/* Interlocking L-shape grid */}
        <div className="grid grid-cols-12 auto-rows-[130px] gap-0 md:gap-0">

          {/* ===== RETAIL INVESTORS — tall left (row 1-2, col 1-6) ===== */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 sm:col-span-6 row-span-2 rounded-2xl sm:rounded-r-none bg-gradient-to-br from-brand-sky/18 via-brand-sky/8 to-accent/5 border border-border/40 sm:border-r-0 p-6 flex flex-col relative overflow-hidden group m-[1px] sm:m-0"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-background/60 backdrop-blur-sm flex items-center justify-center border border-border/30">
                <TrendingUp className="w-4 h-4 text-brand-sky" />
              </div>
              <h3 className="font-sans font-bold text-foreground text-lg">Retail Investors</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">Make confident stock picks backed by data, not noise.</p>
            <div className="flex-1 rounded-xl bg-background/40 border border-border/20 flex items-center justify-center">
              <span className="text-xs text-muted-foreground/40">Image placeholder</span>
            </div>
          </motion.div>

          {/* ===== SWING TRADERS top wing (row 1, col 7-12) ===== */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="col-span-12 sm:col-span-6 row-span-1 rounded-2xl sm:rounded-bl-none sm:rounded-l-none bg-gradient-to-br from-brand-amber/18 via-brand-amber/8 to-brand-sky/5 border border-border/40 sm:border-l-0 sm:border-b-0 p-5 flex flex-col justify-center relative overflow-hidden group m-[1px] sm:m-0"
          >
            <div className="flex items-center gap-3 mb-1">
              <div className="w-9 h-9 rounded-lg bg-background/60 backdrop-blur-sm flex items-center justify-center border border-border/30">
                <BarChart3 className="w-4 h-4 text-brand-amber" />
              </div>
              <h3 className="font-sans font-bold text-foreground text-lg">Swing Traders</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">Spot momentum shifts early with MomentoScope.</p>
          </motion.div>

          {/* ===== SWING TRADERS image wing — right leg of L (row 2, col 10-12) ===== */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="hidden sm:flex col-span-3 row-span-1 rounded-none rounded-br-2xl bg-gradient-to-br from-brand-amber/12 to-brand-amber/6 border-r border-b border-border/40 items-center justify-center relative overflow-hidden"
          >
            <span className="text-xs text-muted-foreground/40">Image</span>
          </motion.div>

          {/* ===== STUDENTS image wing — left leg of L (row 2, col 7-9) ===== */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="hidden sm:flex col-span-3 row-span-1 rounded-none bg-gradient-to-br from-brand-sky/12 to-brand-sky/6 border-l border-b border-border/40 items-center justify-center relative overflow-hidden"
          >
            <span className="text-xs text-muted-foreground/40">Image</span>
          </motion.div>

          {/* ===== FINANCIAL ADVISORS — wide bottom-left (row 3, col 1-6) ===== */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="col-span-12 sm:col-span-6 row-span-1 rounded-2xl sm:rounded-r-none sm:rounded-t-none bg-gradient-to-br from-brand-amber/15 via-brand-sky/8 to-accent/5 border border-border/40 sm:border-r-0 sm:border-t-0 p-5 flex items-center gap-4 relative overflow-hidden group m-[1px] sm:m-0"
          >
            <div className="w-9 h-9 rounded-lg bg-background/60 backdrop-blur-sm flex items-center justify-center border border-border/30 shrink-0">
              <Briefcase className="w-4 h-4 text-brand-amber" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-foreground text-lg mb-0.5">Financial Advisors</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Screen and shortlist stocks faster for your clients.</p>
            </div>
          </motion.div>

          {/* ===== STUDENTS & LEARNERS bottom wing (row 3, col 7-12) ===== */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="col-span-12 sm:col-span-6 row-span-1 rounded-2xl sm:rounded-l-none sm:rounded-t-none bg-gradient-to-br from-brand-sky/15 via-accent/8 to-brand-amber/5 border border-border/40 sm:border-l-0 sm:border-t-0 p-5 flex flex-col justify-center relative overflow-hidden group m-[1px] sm:m-0"
          >
            <div className="flex items-center gap-3 mb-1">
              <div className="w-9 h-9 rounded-lg bg-background/60 backdrop-blur-sm flex items-center justify-center border border-border/30">
                <BookOpen className="w-4 h-4 text-brand-sky" />
              </div>
              <h3 className="font-sans font-bold text-foreground text-lg">Students & Learners</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">Understand fundamentals through intuitive scores and visuals.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
