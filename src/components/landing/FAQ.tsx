import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What is Quantfy?",
    a: "Quantfy is a stock analysis platform for the Indian market. It helps you screen, score and compare companies, ETFs and indices using quantified metrics like DROPify Score, Quality, Growth, Valuation, Shareholding and Momentum.",
  },
  {
    q: "What is the DROPify Score?",
    a: "DROPify is a composite score out of 100 that combines Quality, Growth, Valuation and Shareholding metrics into a single number, making it easy to compare stocks at a glance.",
  },
  {
    q: "What is MomentoScope?",
    a: "MomentoScope is our weekly momentum metric that tracks trend shifts over time, helping you identify entry and exit opportunities based on momentum patterns.",
  },
  {
    q: "Which stocks and instruments are covered?",
    a: "Quantfy covers all listed Indian companies across BSE and NSE, along with ETFs and major indices like Nifty 50, Nifty Next 50, Nifty Midcap 150, Nifty Smallcap 250 and more.",
  },
  {
    q: "Can I cancel my subscription?",
    a: "Yes, you can cancel anytime. Your access continues until the end of your current billing period.",
  },
  {
    q: "How often is the data updated?",
    a: "Stock data and scores are updated regularly after each quarterly result season, and MomentoScope is updated weekly.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Frequently asked questions
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-xl px-5 data-[state=open]:bg-card"
            >
              <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
