import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Shield, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/i.png";

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
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Animated Background Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/30 via-background to-background"
        aria-hidden="true"
      />

      {/* Animated Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
      >
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

      {/* Floating Orbs - Optimized with variants */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl will-change-transform"
        variants={orbVariants}
        initial="animate"
        animate="animate"
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl will-change-transform"
        variants={orbVariants2}
        initial="animate"
        animate="animate"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="section-container relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: ANIMATION_DELAYS.badge, duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
            >
              <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
              Ganzheitliche Schadensanalyse und Sanierung
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: ANIMATION_DELAYS.heading, duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight"
            >
              <span className="block text-foreground mb-2">Fundierte Schadenanalyse</span>
              <span className="block bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                Nachhaltiger Werterhalt
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: ANIMATION_DELAYS.description, duration: 0.6, ease: "easeOut" }}
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl"
            >
              Mit Ingenieur-Expertise sind wir Ihr verlässlicher Partner für
              professionelle Schadenanalyse, präzise Leckortung, fachgerechte
              Trocknung, nachhaltige und fachgerechte Sanierung sowie
              verlässliche Dokumentation von Wasserschäden,
              Feuchtigkeitsschäden und Schimmelbefall – alles aus einer Hand,
              zuverlässig und transparent.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: ANIMATION_DELAYS.cta, duration: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button
                variant="cta"
                size="lg"
                className="group shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a href="#contact" aria-label="Kontaktformular öffnen">
                  Jetzt Schaden melden
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 hover:bg-primary/5 hover:border-primary/50 transition-all"
                asChild
              >
                <a href="#services" aria-label="Zu unseren Leistungen scrollen">
                  Unsere Leistungen
                </a>
              </Button>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: ANIMATION_DELAYS.stats, duration: 0.6, ease: "easeOut" }}
              className="grid grid-cols-3 gap-4 mb-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: ANIMATION_DELAYS.stats + 0.1 + index * 0.1,
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                  className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all"
                >
                  <p className="text-2xl md:text-3xl font-bold text-primary mb-1" aria-label={`${stat.value} ${stat.label}`}>
                    {stat.value}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: ANIMATION_DELAYS.image, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50">
              <motion.img
                src={heroImage}
                alt="BauRestore Ingenieure bei der professionellen Bauwerksinspektion und Schadensanalyse"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="eager"
                fetchPriority="high"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-primary/30 via-primary/10 to-transparent"
                aria-hidden="true"
              />

              {/* Decorative Corner Accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full"
                aria-hidden="true"
              />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                delay: ANIMATION_DELAYS.floatingCard,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              className="absolute -bottom-8 -left-8 bg-card rounded-2xl p-6 shadow-2xl border border-border/50 backdrop-blur-sm"
              aria-label="100% Transparenz"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20"
                  aria-hidden="true"
                >
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">100%</p>
                  <p className="text-sm text-muted-foreground font-medium">Transparenz</p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

