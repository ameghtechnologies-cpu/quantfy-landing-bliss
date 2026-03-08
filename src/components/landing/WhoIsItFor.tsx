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

        {/* Interlocking L-shape bento grid */}
        <div className="grid grid-cols-12 auto-rows-[120px] gap-3 md:gap-4">

          {/* Retail Investors - large tall card top-left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="col-span-12 sm:col-span-7 row-span-2 rounded-2xl bg-gradient-to-br from-brand-sky/20 via-brand-sky/8 to-accent/5 border border-border/40 p-6 flex flex-col relative overflow-hidden group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-background/60 backdrop-blur-sm flex items-center justify-center border border-border/30 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-5 h-5 text-brand-sky" />
              </div>
              <h3 className="font-sans font-bold text-foreground text-xl">Retail Investors</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">Make confident stock picks backed by data, not noise.</p>
            {/* Image placeholder */}
            <div className="flex-1 rounded-xl bg-background/40 border border-border/20 flex items-center justify-center">
              <span className="text-xs text-muted-foreground/40">Image placeholder</span>
            </div>
          </motion.div>

          {/* Swing Traders - top part of right L (square) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="col-span-12 sm:col-span-5 row-span-2 rounded-2xl bg-gradient-to-br from-brand-amber/20 via-brand-amber/8 to-brand-sky/5 border border-border/40 p-5 flex flex-col relative overflow-hidden group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-background/60 backdrop-blur-sm flex items-center justify-center border border-border/30 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-5 h-5 text-brand-amber" />
              </div>
              <h3 className="font-sans font-bold text-foreground text-lg">Swing Traders</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">Spot momentum shifts early with MomentoScope.</p>
            {/* L-shape image wing - horizontal */}
            <div className="flex-1 rounded-xl bg-background/40 border border-border/20 flex items-center justify-center">
              <span className="text-xs text-muted-foreground/40">Image placeholder</span>
            </div>
          </motion.div>

          {/* Financial Advisors - wide bottom-left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="col-span-12 sm:col-span-7 row-span-1 rounded-2xl bg-gradient-to-br from-brand-amber/18 via-brand-sky/8 to-accent/5 border border-border/40 p-5 flex items-center gap-4 relative overflow-hidden group"
          >
            <div className="w-10 h-10 rounded-xl bg-background/60 backdrop-blur-sm flex items-center justify-center border border-border/30 shrink-0 group-hover:scale-110 transition-transform">
              <Briefcase className="w-5 h-5 text-brand-amber" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-foreground text-lg mb-0.5">Financial Advisors</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Screen and shortlist stocks faster for your clients.</p>
            </div>
          </motion.div>

          {/* Students & Learners - bottom-right, interlocking with Swing Traders above */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="col-span-12 sm:col-span-5 row-span-2 rounded-2xl bg-gradient-to-br from-brand-sky/15 via-accent/8 to-brand-amber/5 border border-border/40 p-5 flex flex-col relative overflow-hidden group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-background/60 backdrop-blur-sm flex items-center justify-center border border-border/30 group-hover:scale-110 transition-transform">
                <BookOpen className="w-5 h-5 text-brand-sky" />
              </div>
              <h3 className="font-sans font-bold text-foreground text-lg">Students & Learners</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">Understand fundamentals through intuitive scores and visuals.</p>
            {/* L-shape image wing - vertical */}
            <div className="flex-1 rounded-xl bg-background/40 border border-border/20 flex items-center justify-center">
              <span className="text-xs text-muted-foreground/40">Image placeholder</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
