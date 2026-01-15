import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImageDesktop from "@/assets/i.png";
import heroImageMobile from "@/assets/hero-mobile.jpg";

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
      className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-background"
      aria-label="Hero section"
    >
      {/* Background Overlay & Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" aria-hidden="true" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-[10%] w-72 h-72 bg-primary/10 rounded-full blur-3xl will-change-transform"
        variants={orbVariants}
        initial="animate"
        animate="animate"
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-20 right-[10%] w-96 h-96 bg-accent/10 rounded-full blur-3xl will-change-transform"
        variants={orbVariants2}
        initial="animate"
        animate="animate"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col items-center"
          >
            {/* Header Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-medium mb-6"
            >
              Meistergeführter Ingenieurbetrieb
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: ANIMATION_DELAYS.heading, duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
            >
              <span className="inline-block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent pb-2 text-balance">
                Ingenieurdienstleistungen für Bauschäden & Sanierungsmanagement
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: ANIMATION_DELAYS.description, duration: 0.8, ease: "easeOut" }}
              className="text-base md:text-xl text-muted-foreground mb-10 max-w-3xl leading-relaxed text-balance"
            >
              Ihr verlässlicher Partner für professionelle Schadenanalyse, Leckortung und
              nachhaltige Sanierung von Wasserschäden – alles aus einer Hand.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: ANIMATION_DELAYS.cta, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto"
            >
              <Button
                variant="cta"
                size="lg"
                className="group shadow-xl hover:shadow-primary/20 transition-all px-8 h-14 rounded-2xl"
                asChild
              >
                <a href="#contact">
                  Jetzt Schaden melden
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 h-14 rounded-2xl px-8 hover:bg-secondary transition-all"
                asChild
              >
                <a href="#services">Unsere Leistungen</a>
              </Button>
            </motion.div>

            {/* Featured Image with Rounded Corners */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: ANIMATION_DELAYS.image, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
              <img
                src={heroImageDesktop}
                alt="Bau-Ingenieur bei der Arbeit"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Stats Overlay on Image */}
              <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 z-20 grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: ANIMATION_DELAYS.stats + index * 0.1 }}
                    className="p-3 md:p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 text-white"
                  >
                    <p className="text-xl md:text-3xl font-bold mb-1">{stat.value}</p>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest opacity-80">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

