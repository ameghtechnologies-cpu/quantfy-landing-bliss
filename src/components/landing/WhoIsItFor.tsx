import { motion } from "framer-motion";
import { Bell, BookOpen, TrendingUp, Briefcase } from "lucide-react";

const WhoIsItFor = () => {
  return (
    <section className="py-16 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-3">
            Who is it for?
          </h2>
        </motion.div>

        {/* Interlocking L-shaped grid */}
        <div className="grid grid-cols-12 gap-4" style={{ gridTemplateRows: "160px 160px 160px" }}>

          {/* L-shape 1: Retail Investors (tall left) + Swing Traders (short top-right) */}
          {/* Retail Investors — col 1-5, row 1-2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="col-start-1 col-end-6 row-start-1 row-end-3 rounded-2xl p-5 flex flex-col justify-end overflow-hidden relative"
            style={{
              background: "linear-gradient(135deg, hsl(var(--brand-sky) / 0.25), hsl(var(--brand-navy) / 0.15))",
              border: "1px solid hsl(var(--border) / 0.3)",
            }}
          >
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center border border-border/20">
              <Bell className="w-4 h-4 text-brand-sky" />
            </div>
            <h3 className="font-sans font-bold text-foreground text-xl mb-1">Retail Investors</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Make confident stock picks backed by data, not noise.</p>
          </motion.div>

          {/* Swing Traders — col 6-12, row 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="col-start-6 col-end-13 row-start-1 row-end-2 rounded-2xl p-5 flex flex-col justify-end overflow-hidden relative"
            style={{
              background: "linear-gradient(180deg, hsl(var(--brand-navy) / 0.18), hsl(var(--brand-sky) / 0.15))",
              border: "1px solid hsl(var(--border) / 0.3)",
            }}
          >
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center border border-border/20">
              <TrendingUp className="w-4 h-4 text-brand-sky" />
            </div>
            <h3 className="font-sans font-bold text-foreground text-xl mb-1">Swing Traders</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Spot momentum shifts early with MomentoScope.</p>
          </motion.div>

          {/* L-shape 2: Financial Advisors (short bottom-left) + Students (tall right) */}
          {/* Financial Advisors — col 6-12, row 2 (but shifted to interlock) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="col-start-1 col-end-8 row-start-3 row-end-4 rounded-2xl p-5 flex flex-col justify-end overflow-hidden relative"
            style={{
              background: "linear-gradient(135deg, hsl(var(--brand-amber) / 0.18), hsl(var(--brand-sky) / 0.1))",
              border: "1px solid hsl(var(--border) / 0.3)",
            }}
          >
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center border border-border/20">
              <Briefcase className="w-4 h-4 text-brand-amber" />
            </div>
            <h3 className="font-sans font-bold text-foreground text-xl mb-1">Financial Advisors</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Screen and shortlist stocks faster for your clients.</p>
          </motion.div>

          {/* Students & Learners — col 8-12, row 2-3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="col-start-8 col-end-13 row-start-2 row-end-4 rounded-2xl p-5 flex flex-col justify-end overflow-hidden relative"
            style={{
              background: "linear-gradient(135deg, hsl(var(--brand-amber) / 0.22), hsl(var(--brand-sky) / 0.12))",
              border: "1px solid hsl(var(--border) / 0.3)",
            }}
          >
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center border border-border/20">
              <BookOpen className="w-4 h-4 text-brand-sky" />
            </div>
            <h3 className="font-sans font-bold text-foreground text-lg mb-1">Students & Learners</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Understand fundamentals through intuitive scores and visuals.</p>
          </motion.div>

          {/* Center gap cell (row 2, col 6-7) is intentionally empty for spacing */}

        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
