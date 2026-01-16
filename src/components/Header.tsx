import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "#start" },
    { name: "Leistungen", href: "#leistungen" },
    { name: "Ablauf", href: "#ablauf" },
    { name: "Partner", href: "#partner" },
    { name: "Warum wir", href: "#warum-wir" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  // Smooth scroll function with optimized speed
  // Duration: 600ms - Fast and responsive, feels snappy without being jarring
  const smoothScrollTo = (targetId: string, duration: number = 600) => {
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    const headerHeight = 80; // Account for fixed header
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    // Ease-out cubic for smooth deceleration (feels natural)
    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3);
    };

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  // Handle scroll and update URL hash
  useEffect(() => {
    const sections = navLinks.map(link => link.href);
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Trigger when section is in top half of viewport
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = `#${entry.target.id}`;
          // Update URL without adding to history (avoid back button hell)
          if (window.location.hash !== id) {
            window.history.replaceState(null, "", id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach(href => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });

    const handlePopState = (event: PopStateEvent) => {
      const hash = window.location.hash || "#start";

      // If the state indicates a dialog was involved, or if the hash is already correct,
      // we don't want to trigger a jumpy smooth scroll.
      if (event.state?.dialogOpen) return;

      smoothScrollTo(hash);
    };

    window.addEventListener("popstate", handlePopState as any);
    return () => {
      sections.forEach(href => {
        const section = document.querySelector(href);
        if (section) observer.unobserve(section);
      });
      window.removeEventListener("popstate", handlePopState as any);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    // If we're not on the home page, navigate there first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation and DOM to be ready before scrolling
      const scrollToSection = () => {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          smoothScrollTo(href, 600);
          window.history.pushState(null, "", href);
        } else {
          // Retry if element not found yet
          setTimeout(scrollToSection, 50);
        }
      };
      setTimeout(scrollToSection, 150);
    } else {
      smoothScrollTo(href, 600);
      window.history.pushState(null, "", href);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20 w-full">
          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <a href="#start" onClick={(e) => handleNavClick(e, "#start")} className="flex items-center">
              <Logo className="[&>img]:!h-10 sm:[&>img]:!h-12 md:[&>img]:!h-16" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 px-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex-1 flex items-center justify-end gap-2 sm:gap-4">
            <Button variant="cta" className="hidden sm:flex items-center gap-2" asChild>
              <a href="tel:+4915205280748">
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">Anrufen</span>
              </a>
            </Button>
            <button
              className="md:hidden p-2 -mr-2 text-foreground hover:bg-secondary rounded-md transition-colors"
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
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block px-4 py-2 text-foreground hover:bg-secondary rounded-md transition-colors cursor-pointer"
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
