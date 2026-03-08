import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh K.",
    role: "Retail Investor, Mumbai",
    text: "Quantfy's DROPify score saves me hours of research. I can quickly shortlist quality stocks without drowning in spreadsheets.",
    highlight: "saves me hours",
  },
  {
    name: "Priya S.",
    role: "Swing Trader, Bangalore",
    text: "MomentoScope is a game-changer. I finally have a reliable momentum indicator that's designed for Indian markets.",
    highlight: "game-changer",
  },
  {
    name: "Amit D.",
    role: "Financial Advisor, Delhi",
    text: "The filtering and scoring system is incredibly well thought out. My clients love the clear, quantified approach to stock analysis.",
    highlight: "incredibly well thought out",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-brand-amber mb-4 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Loved by Indian investors
          </h2>
          <p className="text-muted-foreground">Trusted by serious tradevestors across the country.</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-brand-amber/30 transition-all duration-300 hover:shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote size={48} />
              </div>

              <div className="relative z-10">
                <p className="text-sm text-foreground leading-relaxed mb-6">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-sky to-brand-amber flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
