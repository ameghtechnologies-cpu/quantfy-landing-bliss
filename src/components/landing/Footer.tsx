import { motion } from "framer-motion";
import logo from "@/assets/quantfy-logo.jpg";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/5 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12"
        >
          <div className="flex flex-col items-center md:items-start gap-3">
            <img src={logo} alt="Quantfy" className="h-8" />
            <p className="text-sm text-muted-foreground max-w-xs text-center md:text-left">
              Stock analysis at ease. Quantified scores for smarter investing decisions.
            </p>
          </div>

          <div className="flex gap-8">
            {[
              { label: "Features", href: "#features" },
              { label: "Videos", href: "#videos" },
              { label: "Pricing", href: "#pricing" },
              { label: "FAQ", href: "#faq" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Quantfy. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Proprietary Scoring Logic</span>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground">Built on proven technofunda principles</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
