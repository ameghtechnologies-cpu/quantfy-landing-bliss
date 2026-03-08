import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is Quantfy an app I need to install?",
    a: "No. It is a web app that runs smoothly on any device using your browser. It can be saved as a web app (shortcut) on your device screen with just a click.",
  },
  {
    q: "Does Quantfy give buy/sell tips?",
    a: "No. Quantfy provides quantified scores and analysis to guide YOUR decisions, not recommendations. It helps you understand the fundamentals and momentum of stocks so you can make informed choices.",
  },
  {
    q: "How often is data updated?",
    a: "DROPify scores update quarterly with results. MomentoScope updates every week, giving you fresh momentum insights consistently.",
  },
  {
    q: "Will beginners understand it?",
    a: "Absolutely. Quantfy is designed to be clear and simple while offering professional-grade structure. Whether you're just starting or experienced, it meets you where you are.",
  },
  {
    q: "What does the DROPify Score measure?",
    a: "DROPify transforms over 50 data points spanning balance sheet, income, cash flow & holding statements into a precise numerical score out of 100. It covers Quality, Growth, Valuation, and Shareholding dimensions.",
  },
  {
    q: "What is MomentoScope?",
    a: "MomentoScope simplifies complex technical data by transforming various momentum parameters into a single, actionable MomentoScore. It's updated weekly to help you spot trend shifts.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no hidden fees or lock-in contracts. You can cancel your subscription at any time.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-6 relative overflow-hidden">
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
            Everything you need to know about Quantfy.
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
