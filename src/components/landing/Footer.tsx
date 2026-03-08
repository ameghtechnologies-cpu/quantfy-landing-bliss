import logo from "@/assets/quantfy-logo.jpg";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <img src={logo} alt="Quantfy" className="h-6" />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Quantfy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
