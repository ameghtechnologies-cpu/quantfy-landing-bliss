import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. J Delwadiya",
    role: "Morbi",
    text: "QuanTfy's QGVise score saves me hours of research. I can shortlist quality stocks without drowning in spreadsheets.",
    accent: "from-brand-sky to-brand-sky/60",
  },
  {
    name: "Dr. Kalpesh Shah",
    role: "Ahmedabad",
    text: "MomentoScope is a game-changer. A reliable momentum indicator built for Indian markets.",
    accent: "from-brand-amber to-brand-amber/60",
  },
  {
    name: "Suresh Agarwal",
    role: "Lucknow",
    text: "The scoring system is incredibly well thought out. A clear, quantified approach I can trust.",
    accent: "from-brand-sky to-brand-amber",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-sky/5 via-transparent to-brand-amber/5" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-brand-amber/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
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
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-brand-amber/30 transition-all duration-300 hover:shadow-lg relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${t.accent}`} />
              <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote size={48} />
              </div>

              <div className="relative z-10">
                <p className="text-sm text-foreground leading-relaxed mb-6">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.accent} flex items-center justify-center text-primary-foreground text-sm font-semibold`}>
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
