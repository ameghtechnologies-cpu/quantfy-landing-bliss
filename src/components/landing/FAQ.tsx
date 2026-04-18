import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is QuanTfy an app I need to install?",
    a: "No. It's a web app that runs on any browser. Save it as a shortcut on your device.",
  },
  {
    q: "Does QuanTfy give buy/sell tips?",
    a: "No. It provides scores and analysis to guide YOUR decisions, not recommendations.",
  },
  {
    q: "How often is data updated?",
    a: "QGVise updates quarterly. MomentoScope updates weekly.",
  },
  {
    q: "Will beginners understand it?",
    a: "Yes. Designed to be clear and simple while offering professional-grade structure.",
  },
  {
    q: "What does QGVise Score measure?",
    a: "A score (0-100) from 50+ data points covering quality, growth, valuation, and shareholding.",
  },
  {
    q: "What is MomentoScope?",
    a: "Transforms momentum parameters into a single actionable score. Updated weekly.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-amber/3 via-transparent to-brand-sky/3" />
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-brand-sky/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-brand-sky mb-4 block">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about QuanTfy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <AccordionItem
                  value={`faq-${i}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-brand-sky/30 data-[state=open]:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
