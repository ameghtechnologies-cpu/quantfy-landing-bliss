import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rajesh K.",
    role: "Retail Investor, Mumbai",
    text: "Quantfy's DROPify score saves me hours of research. I can quickly shortlist quality stocks without drowning in spreadsheets.",
  },
  {
    name: "Priya S.",
    role: "Swing Trader, Bangalore",
    text: "MomentoScope is a game-changer. I finally have a reliable momentum indicator that's designed for Indian markets.",
  },
  {
    name: "Amit D.",
    role: "Financial Advisor, Delhi",
    text: "The filtering and scoring system is incredibly well thought out. My clients love the clear, quantified approach to stock analysis.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Loved by Indian investors
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <p className="text-sm text-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
