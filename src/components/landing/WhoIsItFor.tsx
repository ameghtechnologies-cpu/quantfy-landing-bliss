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

        {/* Non-overlapping bento grid */}
        <div className="grid grid-cols-12 gap-3" style={{ gridTemplateRows: "180px 180px" }}>

          {/* Card 1: Retail Investors — top-left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="col-span-4 row-span-2 rounded-2xl p-5 flex flex-col justify-end overflow-hidden relative"
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

          {/* Card 2: Swing Traders — top-right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="col-span-8 rounded-2xl p-5 flex flex-col justify-end overflow-hidden"
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

          {/* Card 3: Financial Advisors — bottom-left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="col-span-7 rounded-2xl p-5 flex flex-col justify-end overflow-hidden"
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

          {/* Card 4: Students & Learners — bottom-right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="col-span-5 rounded-2xl p-5 flex flex-col justify-end overflow-hidden"
            style={{
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
            <p className="text-sm text-muted-foreground leading-relaxed">Understand fundamentals through intuitive scores and visuals.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
