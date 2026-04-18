import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const canDo = [
  { title: "See the full picture instantly", desc: "Fundamentals + momentum + price action in one view." },
  { title: "Build conviction-backed watchlists in seconds", desc: "Identify stocks meeting multiple criteria within seconds." },
  { title: "Track sector and industry rotation early", desc: "Spot where capital is moving and identify emerging leaders." },
  { title: "Make clear entry and exit decisions", desc: "Act with structured, data-backed signals." },
  { title: "Monitor what actually matters without manual tracking", desc: "Stay updated on key changes automatically." },
];

const dontNeed = [
  { title: "Deep technical or fundamental analysis", desc: "Skip complex chart reading and balance sheet dissection." },
  { title: "Switch between multiple platforms", desc: "Everything is integrated into one system." },
  { title: "Manually track results and earnings calls", desc: "Key changes are already captured and simplified." },
  { title: "Sift through daily market noise", desc: "Focus only on what is relevant." },
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
          <h3 className="font-sans font-bold text-foreground text-lg mb-4">Outcome After QuanTfy</h3>
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
