import { motion } from "framer-motion";
import { TrendingUp, BarChart3, BookOpen, Briefcase, Bell } from "lucide-react";

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

        {/* Scattered bento layout matching reference */}
        <div className="relative w-full" style={{ height: "clamp(500px, 70vw, 700px)" }}>

          {/* Card 1: Retail Investors — top-left, smaller square-ish */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="absolute rounded-2xl p-5 flex flex-col justify-end overflow-hidden"
            style={{
              top: "8%",
              left: "0%",
              width: "32%",
              height: "42%",
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

          {/* Card 2: Built for... — top-center-right, wide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="absolute rounded-2xl p-6 flex flex-col justify-start overflow-hidden"
            style={{
              top: "0%",
              left: "35%",
              width: "40%",
              height: "35%",
              background: "linear-gradient(135deg, hsl(var(--brand-sky) / 0.2), hsl(var(--brand-amber) / 0.12))",
              border: "1px solid hsl(var(--border) / 0.3)",
            }}
          >
            <h3 className="font-sans font-bold text-foreground text-lg mb-2">Built for anyone who wants clarity in Indian stock markets.</h3>
            {/* Decorative circles */}
            <div className="flex items-center gap-[-8px] mt-auto">
              <div className="w-10 h-10 rounded-full bg-brand-sky/20 border-2 border-background/40" />
              <div className="w-10 h-10 rounded-full bg-brand-amber/20 border-2 border-background/40 -ml-3" />
              <div className="w-10 h-10 rounded-full bg-brand-sky/30 border-2 border-background/40 -ml-3" />
              <div className="w-10 h-10 rounded-full bg-brand-amber/30 border-2 border-background/40 -ml-3" />
            </div>
          </motion.div>

          {/* Card 3: Swing Traders — center, tall */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="absolute rounded-2xl p-5 flex flex-col overflow-hidden"
            style={{
              top: "30%",
              left: "25%",
              width: "32%",
              height: "45%",
              background: "linear-gradient(180deg, hsl(var(--brand-navy) / 0.18), hsl(var(--brand-sky) / 0.15))",
              border: "1px solid hsl(var(--border) / 0.3)",
            }}
          >
            <div className="mt-auto">
              <h3 className="font-sans font-bold text-foreground text-xl mb-1">Swing Traders</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Spot momentum shifts early with MomentoScope.</p>
            </div>
          </motion.div>

          {/* Card 4: Financial Advisors — right, smaller */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="absolute rounded-2xl p-5 flex flex-col justify-start overflow-hidden"
            style={{
              top: "38%",
              left: "60%",
              width: "38%",
              height: "30%",
              background: "linear-gradient(135deg, hsl(var(--brand-amber) / 0.18), hsl(var(--brand-sky) / 0.1))",
              border: "1px solid hsl(var(--border) / 0.3)",
            }}
          >
            <h3 className="font-sans font-bold text-foreground text-xl mb-1">Financial Advisors</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Screen and shortlist stocks faster for your clients.</p>
          </motion.div>

          {/* Card 5: Students & Learners — bottom-left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="absolute rounded-2xl p-5 flex flex-col justify-end overflow-hidden"
            style={{
              top: "58%",
              left: "0%",
              width: "30%",
              height: "40%",
              background: "linear-gradient(135deg, hsl(var(--brand-amber) / 0.22), hsl(var(--brand-sky) / 0.12))",
              border: "1px solid hsl(var(--border) / 0.3)",
            }}
          >
            <div className="flex gap-1 mb-3">
              <div className="w-8 h-8 rounded-lg bg-background/20 backdrop-blur-sm flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-brand-sky" />
              </div>
            </div>
            <h3 className="font-sans font-bold text-foreground text-lg mb-1">Students & Learners</h3>
          </motion.div>

          {/* Card 6: Extra accent — bottom-center-right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="absolute rounded-2xl p-5 flex flex-col justify-end overflow-hidden"
            style={{
              top: "72%",
              left: "33%",
              width: "42%",
              height: "28%",
              background: "linear-gradient(135deg, hsl(var(--brand-sky) / 0.15), hsl(var(--brand-amber) / 0.18))",
              border: "1px solid hsl(var(--border) / 0.3)",
            }}
          >
            <h3 className="font-sans font-bold text-foreground text-lg mb-1">& many more</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Understand fundamentals through intuitive scores and visuals.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
