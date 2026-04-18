import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import icon from "@/assets/quantfy-icon.png";

const YOUTUBE_ID = "BVTDBnDzu8g";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const checkpoints = [
  "Fundamentals Simplified",
  "Momentum Demystified",
  "Leaders Identified",
  "Price Action Clarified",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-brand-sky/5 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-[10%] w-96 h-96 rounded-full bg-brand-amber/5 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center max-w-3xl"
      >
        {/* Animated logo */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.img
            src={icon}
            alt="QuanTfy"
            className="w-20 h-20"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-sky/10 border border-brand-sky/20 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-sky animate-pulse" />
          <span className="text-xs font-medium text-brand-sky">Your Technofunda Edge</span>
        </motion.div>

        {/* Title with gradient */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-6"
        >
          <span className="text-foreground">Stock Analysis</span>
          <br />
          <span className="bg-gradient-to-r from-brand-sky via-brand-amber to-brand-red bg-clip-text text-transparent">
            at Ease !
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed"
        >
          Quantified analysis, designed for confident investing & trading decisions.
        </motion.p>

        {/* Checkpoints */}
        <motion.div variants={itemVariants} className="flex flex-col items-start gap-3 mb-10">
          {checkpoints.map((cp, i) => (
            <motion.div
              key={cp}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.15 }}
              className="flex items-center gap-3"
            >
              <div className="w-5 h-5 rounded-full bg-brand-sky/10 flex items-center justify-center flex-shrink-0">
                <Check size={12} className="text-brand-sky" />
              </div>
              <span className="text-sm text-muted-foreground">{cp}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
          >
            Get started
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Explore features
          </a>
        </motion.div>
      </motion.div>

      {/* Embedded demo video */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        className="relative z-10 mt-20 max-w-5xl w-full"
      >
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-b from-brand-sky/10 via-transparent to-brand-amber/10 rounded-3xl blur-2xl" />
          <div className="relative bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
                title="QuanTfy demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
