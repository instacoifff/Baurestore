import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroZoomed from "@/assets/hero-zoomed.png";

// Animation variants for better performance
const orbVariants: Variants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.5, 0.3],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const orbVariants2: Variants = {
  animate: {
    scale: [1, 1.3, 1],
    opacity: [0.2, 0.4, 0.2],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1,
    },
  },
};

// Animation delays
const ANIMATION_DELAYS = {
  badge: 0.2,
  heading: 0.3,
  description: 0.4,
  cta: 0.5,
  stats: 0.6,
  image: 0.3,
  floatingCard: 0.8,
} as const;

const HeroSection = () => {
  const stats = useMemo(
    () => [
      { value: "100 %", label: "Fachexpertise" },
      { value: "+10", label: "Jahre Erfahrung" },
      { value: "24/7", label: "Reaktionszeit" },
    ],
    []
  );

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pt-24 pb-12 overflow-hidden bg-background"
      aria-label="Hero section"
    >
      {/* Background Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="section-container relative z-10 w-full">
        {/* The Hero Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10 group aspect-[4/5] sm:aspect-[16/10] md:aspect-[16/11] lg:aspect-[16/10]"
        >
          {/* Background Image with Fading Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroZoomed}
              alt="Meistergeführter Ingenieurbetrieb"
              className="w-full h-full object-cover object-[center_right] transition-transform duration-1000 group-hover:scale-105"
            />
            {/* White side gradients */}
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/80 via-white/20 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/80 via-white/20 to-transparent z-10 pointer-events-none" />
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 z-20 flex flex-col items-start justify-center text-left px-6 sm:px-12 md:pl-20 max-w-4xl lg:max-w-5xl pointer-events-none">
            {/* Header Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[10px] sm:text-xs md:text-sm font-semibold mb-4 sm:mb-8 pointer-events-auto"
            >
              Meistergeführter Ingenieurbetrieb
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8 tracking-tight pointer-events-auto text-primary"
            >
              Ingenieurdienstleistungen für Bauschäden & Sanierungsmanagement
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-[11px] sm:text-sm md:text-base lg:text-lg text-primary/90 mb-8 sm:mb-16 md:mb-10 max-w-2xl lg:max-w-3xl leading-relaxed font-semibold pointer-events-auto"
            >
              Mit Ingenieur-Expertise sind wir Ihr verlässlicher Partner für professionelle Schadenanalyse,
              präzise Leckortung, fachgerechte Trocknung, nachhaltige und fachgerechte Sanierung sowie
              verlässliche Dokumentation von Wasserschäden, Feuchtigkeitsschäden und Schimmelbefall –
              alles aus einer Hand, zuverlässig und transparent.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-6 w-full sm:w-auto pointer-events-auto"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/30 px-6 sm:px-10 py-5 sm:py-7 text-sm sm:text-base font-bold group h-12 sm:h-16 rounded-2xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Jetzt Schaden melden
                <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-primary/5 border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 px-6 sm:px-10 py-5 sm:py-7 text-sm sm:text-base font-bold h-12 sm:h-16 rounded-2xl shadow-lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Unsere Leistungen
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section - Now below the Hero Card on all versions */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
              className="flex-1 min-w-[140px] max-w-[240px] px-6 py-6 sm:py-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-primary/10 text-primary shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight mb-1">{stat.value}</p>
              <p className="text-[10px] sm:text-xs uppercase font-bold tracking-[0.2em] opacity-80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
