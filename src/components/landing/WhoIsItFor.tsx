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

        {/* Bento mosaic grid - inspired by reference image */}
        <div className="grid grid-cols-12 grid-rows-[140px_140px_140px] gap-3 md:gap-4">
          {/* Row 1-2, Col 1-5: Retail Investors (tall left card) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="col-span-12 sm:col-span-5 row-span-2 rounded-2xl bg-gradient-to-br from-brand-sky/25 via-brand-sky/10 to-accent/5 border border-border/40 p-6 flex flex-col justify-end relative overflow-hidden group"
          >
            <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-background/60 backdrop-blur-sm flex items-center justify-center border border-border/30 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-5 h-5 text-brand-sky" />
            </div>
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-brand-sky/8 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="font-sans font-bold text-foreground text-xl mb-1 relative z-10">Retail Investors</h3>
            <p className="text-sm text-muted-foreground leading-relaxed relative z-10">Make confident stock picks backed by data, not noise.</p>
          </motion.div>

          {/* Row 1, Col 6-12: Swing Traders (wide top-right) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="col-span-12 sm:col-span-7 row-span-1 rounded-2xl bg-gradient-to-br from-brand-amber/20 via-brand-amber/10 to-brand-sky/5 border border-border/40 p-6 flex flex-col justify-end relative overflow-hidden group"
          >
            <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-background/60 backdrop-blur-sm flex items-center justify-center border border-border/30 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-5 h-5 text-brand-amber" />
            </div>
            <div className="absolute -top-8 -left-8 w-28 h-28 bg-brand-amber/8 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="font-sans font-bold text-foreground text-xl mb-1 relative z-10">Swing Traders</h3>
            <p className="text-sm text-muted-foreground leading-relaxed relative z-10">Spot momentum shifts early with MomentoScope.</p>
          </motion.div>

          {/* Row 2, Col 6-12: Students & Learners (wide mid-right) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="col-span-12 sm:col-span-7 row-span-1 rounded-2xl bg-gradient-to-br from-brand-sky/15 via-accent/10 to-brand-amber/5 border border-border/40 p-6 flex flex-col justify-end relative overflow-hidden group"
          >
            <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-background/60 backdrop-blur-sm flex items-center justify-center border border-border/30 group-hover:scale-110 transition-transform">
              <BookOpen className="w-5 h-5 text-brand-sky" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-brand-sky/8 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="font-sans font-bold text-foreground text-xl mb-1 relative z-10">Students & Learners</h3>
            <p className="text-sm text-muted-foreground leading-relaxed relative z-10">Understand fundamentals through intuitive scores and visuals.</p>
          </motion.div>

          {/* Row 3, Col 1-7: Financial Advisors (wide bottom-left) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="col-span-12 sm:col-span-7 row-span-1 rounded-2xl bg-gradient-to-br from-brand-amber/20 via-brand-sky/10 to-accent/5 border border-border/40 p-6 flex flex-col justify-end relative overflow-hidden group"
          >
            <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-background/60 backdrop-blur-sm flex items-center justify-center border border-border/30 group-hover:scale-110 transition-transform">
              <Briefcase className="w-5 h-5 text-brand-amber" />
            </div>
            <div className="absolute -top-8 -left-8 w-28 h-28 bg-brand-amber/8 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="font-sans font-bold text-foreground text-xl mb-1 relative z-10">Financial Advisors</h3>
            <p className="text-sm text-muted-foreground leading-relaxed relative z-10">Screen and shortlist stocks faster for your clients.</p>
          </motion.div>

          {/* Row 3, Col 8-12: Empty accent card / spacer with subtle branding */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
            className="hidden sm:flex col-span-5 row-span-1 rounded-2xl bg-gradient-to-br from-brand-sky/10 to-brand-amber/10 border border-border/30 p-6 items-center justify-center relative overflow-hidden"
          >
            <p className="text-sm font-medium text-muted-foreground/60 text-center italic">& many more...</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
