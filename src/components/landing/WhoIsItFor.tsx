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

        <div className="grid grid-cols-12 auto-rows-[130px] gap-4">

          {/* Retail Investors — tall left (row 1-2, col 1-6) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="col-span-12 sm:col-span-6 row-span-2 rounded-2xl bg-gradient-to-br from-brand-sky/15 via-brand-sky/5 to-accent/5 border border-border/50 p-6 flex flex-col relative overflow-hidden group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-background/80 flex items-center justify-center border border-border/30">
                <TrendingUp className="w-4 h-4 text-brand-sky" />
              </div>
              <h3 className="font-sans font-bold text-foreground text-lg">Retail Investors</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">Make confident stock picks backed by data, not noise.</p>
            <div className="flex-1 rounded-xl bg-background/50 border border-border/20 flex items-center justify-center">
              <span className="text-xs text-muted-foreground/40">Image placeholder</span>
            </div>
          </motion.div>

          {/* Swing Traders — top-right text (row 1, col 7-12) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="col-span-12 sm:col-span-6 row-span-2 rounded-2xl bg-gradient-to-br from-brand-amber/15 via-brand-amber/5 to-brand-sky/5 border border-border/50 p-6 flex flex-col relative overflow-hidden group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-background/80 flex items-center justify-center border border-border/30">
                <BarChart3 className="w-4 h-4 text-brand-amber" />
              </div>
              <h3 className="font-sans font-bold text-foreground text-lg">Swing Traders</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">Spot momentum shifts early with MomentoScope.</p>
            <div className="flex-1 rounded-xl bg-background/50 border border-border/20 flex items-center justify-center">
              <span className="text-xs text-muted-foreground/40">Image placeholder</span>
            </div>
          </motion.div>

          {/* Financial Advisors — bottom-left (row 3, col 1-6) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="col-span-12 sm:col-span-6 row-span-1 rounded-2xl bg-gradient-to-br from-brand-amber/12 via-brand-sky/5 to-accent/5 border border-border/50 p-5 flex items-center gap-4 relative overflow-hidden group"
          >
            <div className="w-9 h-9 rounded-lg bg-background/80 flex items-center justify-center border border-border/30 shrink-0">
              <Briefcase className="w-4 h-4 text-brand-amber" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-foreground text-lg mb-0.5">Financial Advisors</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Screen and shortlist stocks faster for your clients.</p>
            </div>
          </motion.div>

          {/* Students & Learners — bottom-right (row 3, col 7-12) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="col-span-12 sm:col-span-6 row-span-1 rounded-2xl bg-gradient-to-br from-brand-sky/12 via-accent/5 to-brand-amber/5 border border-border/50 p-5 flex items-center gap-4 relative overflow-hidden group"
          >
            <div className="w-9 h-9 rounded-lg bg-background/80 flex items-center justify-center border border-border/30 shrink-0">
              <BookOpen className="w-4 h-4 text-brand-sky" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-foreground text-lg mb-0.5">Students & Learners</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Understand fundamentals through intuitive scores and visuals.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
