import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const canDo = [
  { title: "See the full picture, instantly", desc: "Combine fundamentals, momentum, price action, and market leadership in a single view. No fragmentation. No guesswork." },
  { title: "Build high-conviction watchlists", desc: "Identify stocks that meet multiple criteria across growth, strength, and leadership within seconds." },
  { title: "Track sector and industry leadership", desc: "Spot where capital is moving. Identify emerging leaders and rotation early." },
  { title: "Make clear entry and exit decisions", desc: "Reduce hesitation. Act with structured, data-backed signals across stocks and ETFs." },
  { title: "Monitor what actually matters", desc: "Stay updated on changes in growth trends and shareholding patterns without manual tracking." },
];

const dontNeed = [
  { title: "No deep technical analysis required", desc: "Skip complex chart reading and indicators." },
  { title: "No deep fundamental analysis required", desc: "No need to dissect balance sheets, ratios, or lengthy reports." },
  { title: "No switching between multiple platforms", desc: "Everything is integrated into one system." },
  { title: "No manual tracking of results or concalls", desc: "Key changes are already captured and simplified." },
  { title: "No daily market overload", desc: "Focus only on what is relevant. Ignore the noise." },
];

const outcomes = [
  "Clarity over confusion.",
  "System over guesswork.",
  "Confidence over hesitation.",
];

const WhyQuantfy = () => {
  return (
    <section className="py-12 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-brand-sky mb-3 block">Why QuanTfy</span>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            What you can do — and what you don't need to
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* What You Can Do */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <h3 className="font-sans font-bold text-foreground text-lg mb-5 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-brand-sky/15 flex items-center justify-center">
                <Check className="w-4 h-4 text-brand-sky" />
              </span>
              What You Can Do
            </h3>
            <div className="space-y-4">
              {canDo.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-sky/10 flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3 text-brand-sky" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* What You Don't Need To Do */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <h3 className="font-sans font-bold text-foreground text-lg mb-5 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-destructive/15 flex items-center justify-center">
                <X className="w-4 h-4 text-destructive" />
              </span>
              What You Don't Need To Do
            </h3>
            <div className="space-y-4">
              {dontNeed.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5 shrink-0">
                    <X className="w-3 h-3 text-destructive" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Outcome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center rounded-2xl border border-brand-sky/20 bg-gradient-to-r from-brand-sky/5 via-card to-brand-amber/5 p-8"
        >
          <h3 className="font-sans font-bold text-foreground text-lg mb-4">Outcome</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {outcomes.map((o, i) => (
              <span key={i} className="text-sm font-semibold text-brand-sky">
                {o}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyQuantfy;
