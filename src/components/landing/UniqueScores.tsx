import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Activity, TrendingUp, Trophy, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const scores = [
  {
    icon: Award,
    title: "QGVise Score",
    subtitle: "Fundamentals at a Glance",
    description:
      "A composite score out of 100 combining quality, growth, valuation & shareholding from 50+ data points. Instantly understand if a stock deserves your attention.",
    gradient: "from-brand-amber/20 via-brand-amber/5 to-transparent",
    iconColor: "text-brand-amber",
    bgAccent: "bg-brand-amber/8",
    link: "https://qgvise.lovable.app",
  },
  {
    icon: Activity,
    title: "MomentoScope",
    subtitle: "Momentum Demystified",
    description:
      "Track weekly momentum metrics to spot trend shifts and entry/exit opportunities. Combines price action and leaderboard score to get a clear weekly signal.",
    gradient: "from-brand-sky/20 via-brand-sky/5 to-transparent",
    iconColor: "text-brand-sky",
    bgAccent: "bg-brand-sky/8",
    link: "https://momentoscope.lovable.app",
  },
  {
    icon: TrendingUp,
    title: "Price Action Score",
    subtitle: "Price Volume Strength",
    description:
      "Measure a stock's price volume action to quickly gauge that in correlation with Momentum.",
    gradient: "from-brand-amber/20 via-brand-navy/5 to-transparent",
    iconColor: "text-brand-amber",
    bgAccent: "bg-brand-amber/8",
    link: null,
  },
  {
    icon: Trophy,
    title: "Leaderboard Score",
    subtitle: "Market Leadership",
    description:
      "Easily identify Market, Sector and Industry leaders.",
    gradient: "from-brand-sky/20 via-brand-navy/5 to-transparent",
    iconColor: "text-brand-sky",
    bgAccent: "bg-brand-sky/8",
    link: null,
  },
];

const UniqueScores = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = (idx: number) => {
    setDirection(idx > active ? 1 : -1);
    setActive(idx);
  };

  const prev = () => go(active === 0 ? scores.length - 1 : active - 1);
  const next = () => go(active === scores.length - 1 ? 0 : active + 1);

  const score = scores[active];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-brand-sky mb-4 block">
            Proprietary Methods
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Four scores that define every stock
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Unique scoring systems built from the ground up to give you an edge in Indian markets.
          </p>
        </motion.div>

        {/* Carousel Window */}
        <div className="relative rounded-2xl border border-border bg-card overflow-hidden shadow-lg">
          {/* Background gradient accent */}
          <div className={`absolute inset-0 bg-gradient-to-br ${score.gradient} transition-all duration-500`} />

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/80 backdrop-blur border border-border flex items-center justify-center hover:bg-background transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/80 backdrop-blur border border-border flex items-center justify-center hover:bg-background transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Content */}
          <div className="relative z-10 min-h-[320px] md:min-h-[300px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="w-full px-10 md:px-20 py-12 md:py-16"
              >
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-14 h-14 rounded-xl ${score.bgAccent} flex items-center justify-center`}>
                      <score.icon className={`w-7 h-7 ${score.iconColor}`} />
                    </div>
                    <div className="text-left">
                      <h3 className="font-sans font-bold text-foreground text-xl">{score.title}</h3>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        {score.subtitle}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {score.description}
                  </p>
                  {score.link && (
                    <a
                      href={score.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-brand-sky hover:text-brand-amber transition-colors"
                    >
                      Explore {score.title}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="relative z-10 flex items-center justify-center gap-2 pb-6">
            {scores.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-8 h-2.5 bg-brand-sky"
                    : "w-2.5 h-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueScores;
