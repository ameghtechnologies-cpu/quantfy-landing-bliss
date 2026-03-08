import { motion, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1400, suffix: "+", label: "Stocks Covered", sublabel: "Comprehensive coverage across sectors", accent: "text-brand-sky" },
  { value: 52, suffix: "", label: "Weekly Updates", sublabel: "MomentoScope refreshed every week", accent: "text-brand-amber" },
  { value: 4, suffix: "", label: "Quarterly Updates", sublabel: "DROPify scores updated each quarter", accent: "text-brand-sky" },
  { value: 50, suffix: "+", label: "Data Points", sublabel: "Per stock in DROPify analysis", accent: "text-brand-amber" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return <span ref={ref}>{display}{suffix}</span>;
}

const Stats = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/5 via-transparent to-brand-sky/5" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-brand-amber mb-4 block">By the Numbers</span>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            Built for serious analysis
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="text-center p-6 rounded-2xl bg-card border border-border hover:border-brand-sky/30 transition-all duration-300 hover:shadow-lg relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-sky/5 to-brand-amber/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className={`text-3xl md:text-4xl font-serif ${stat.accent} mb-2 relative z-10`}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm font-semibold text-foreground mb-1 relative z-10">{stat.label}</p>
              <p className="text-xs text-muted-foreground relative z-10">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
