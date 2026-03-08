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

        {/* Interlocking grid: Retail(tall-left) + Swing(short-top-right) | Financial(short-bottom-left) + Students(tall-right) */}
        <div className="grid grid-cols-12 grid-rows-[140px_140px_140px] gap-3">

          {/* Retail Investors — Row 1-2, Col 1-7 (tall left) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="col-span-12 sm:col-span-7 sm:row-span-2 rounded-2xl bg-gradient-to-br from-brand-sky/14 via-brand-sky/6 to-accent/4 border border-border/50 p-6 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-background/80 flex items-center justify-center border border-border/30">
                <TrendingUp className="w-4 h-4 text-brand-sky" />
              </div>
              <h3 className="font-sans font-bold text-foreground text-lg">Retail Investors</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">Make confident stock picks backed by data, not noise.</p>
          </motion.div>

          {/* Swing Traders — Row 1, Col 8-12 (short top-right) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="col-span-12 sm:col-span-5 sm:row-span-1 rounded-2xl bg-gradient-to-br from-brand-amber/14 via-brand-amber/6 to-brand-sky/4 border border-border/50 p-6 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-background/80 flex items-center justify-center border border-border/30">
                <BarChart3 className="w-4 h-4 text-brand-amber" />
              </div>
              <h3 className="font-sans font-bold text-foreground text-lg">Swing Traders</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">Spot momentum shifts early with MomentoScope.</p>
          </motion.div>

          {/* Students & Learners — Row 2-3, Col 8-12 (tall right) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="col-span-12 sm:col-span-5 sm:row-span-2 rounded-2xl bg-gradient-to-br from-brand-sky/12 via-accent/6 to-brand-amber/4 border border-border/50 p-6 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-background/80 flex items-center justify-center border border-border/30">
                <BookOpen className="w-4 h-4 text-brand-sky" />
              </div>
              <h3 className="font-sans font-bold text-foreground text-lg">Students & Learners</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">Understand fundamentals through intuitive scores and visuals.</p>
          </motion.div>

          {/* Financial Advisors — Row 3, Col 1-7 (short bottom-left) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="col-span-12 sm:col-span-7 sm:row-span-1 rounded-2xl bg-gradient-to-br from-brand-amber/12 via-brand-sky/6 to-accent/4 border border-border/50 p-6 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-background/80 flex items-center justify-center border border-border/30">
                <Briefcase className="w-4 h-4 text-brand-amber" />
              </div>
              <h3 className="font-sans font-bold text-foreground text-lg">Financial Advisors</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">Screen and shortlist stocks faster for your clients.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
