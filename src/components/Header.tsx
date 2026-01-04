import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Leistungen", href: "#services" },
    { name: "Ablauf", href: "#process" },
    { name: "Warum Wir", href: "#why-us" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <div className="flex gap-0.5">
                <div className="w-1 h-6 bg-primary rounded-full" />
                <div className="w-1 h-8 bg-primary rounded-full" />
                <div className="w-1 h-8 bg-primary rounded-full" />
                <div className="w-1 h-6 bg-primary rounded-full" />
              </div>
              <div className="w-8 h-0.5 bg-primary mt-1" />
            </div>
            <div>
              <span className="font-display text-xl font-bold text-primary">BauRestore</span>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Ingenieurdienstleistungen
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button variant="cta" className="hidden sm:flex items-center gap-2" asChild>
              <a href="tel:+4915205280748">
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">Anrufen</span>
              </a>
            </Button>
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-4 py-2 text-foreground hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <Button variant="cta" className="w-full mt-4" asChild>
                  <a href="tel:+4915205280748">
                    <Phone className="w-4 h-4 mr-2" />
                    Jetzt Anrufen
                  </a>
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
