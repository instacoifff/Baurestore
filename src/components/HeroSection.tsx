import { useMemo, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroInspectionHD from "@/assets/hero-inspection-hd.png";
import serviceAnalysisHD from "@/assets/service-analysis-hd.png";
import serviceDryingHD from "@/assets/service-drying-hd.png";
import serviceConceptHD from "@/assets/service-concept-hd.png";
import serviceManagementHD from "@/assets/service-management-hd.png";

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = useMemo(() => [
    { src: heroInspectionHD, alt: "Baurestore Ingenieurdienstleistungen" },
    { src: serviceAnalysisHD, alt: "Schadenanalyse" },
    { src: serviceDryingHD, alt: "Trocknung" },
    { src: serviceConceptHD, alt: "Sanierungskonzept" },
    { src: serviceManagementHD, alt: "Sanierungsmanagement" },
  ], []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

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
      id="start"
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
          className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10 group aspect-[3/4] sm:aspect-[16/10] md:aspect-[16/11] lg:aspect-[16/10]"
        >
          {/* Slider Background */}
          <div className="absolute inset-0 z-0">
            <AnimatePresence initial={false}>
              <motion.img
                key={currentImageIndex}
                src={heroImages[currentImageIndex].src}
                alt={heroImages[currentImageIndex].alt}
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover object-[center_right]"
              />
            </AnimatePresence>
            {/* Overall Bluish Overlay for better text clarity - Adjusted to 35% for subtle depth */}
            <div className="absolute inset-0 bg-primary/35 z-10 pointer-events-none" />

            {/* Bluish side gradients - Slightly darkened for better text separation */}
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-primary/75 via-primary/35 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary/50 via-primary/20 to-transparent z-10 pointer-events-none" />
          </div>

          {/* Slider Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImageIndex === index
                  ? "bg-white w-6"
                  : "bg-white/30 hover:bg-white/50"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 z-20 flex flex-col items-start justify-center text-left px-6 sm:px-12 md:pl-20 max-w-4xl lg:max-w-5xl pointer-events-none pt-12 pb-6 sm:pb-16">


            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8 tracking-tight pointer-events-auto text-white"
            >
              Ingenieurdienstleistungen für Bauschäden & Sanierungsmanagement
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-[11px] sm:text-sm md:text-base lg:text-lg text-white/90 mb-8 sm:mb-16 md:mb-10 max-w-2xl lg:max-w-3xl leading-relaxed font-semibold pointer-events-auto"
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
                className="bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/30 px-6 sm:px-10 py-5 sm:py-7 text-sm sm:text-base font-bold group rounded-2xl"
                onClick={() => {
                  const target = document.getElementById('kontakt');
                  if (target) {
                    const headerHeight = 80;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                    window.history.pushState(null, "", "#kontakt");
                  }
                }}
              >
                Jetzt Schaden melden
                <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 px-6 sm:px-10 py-5 sm:py-7 text-sm sm:text-base font-bold rounded-2xl shadow-lg"
                onClick={() => {
                  const target = document.getElementById('leistungen');
                  if (target) {
                    const headerHeight = 80;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                    window.history.pushState(null, "", "#leistungen");
                  }
                }}
              >
                Unsere Leistungen
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section - Now below the Hero Card on all versions */}
        <div className="relative z-20 mt-6 sm:mt-12 px-2 sm:px-4 grid grid-cols-3 gap-2 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
              className="flex flex-col items-center justify-center text-center px-2 py-4 sm:py-8 rounded-2xl bg-white/80 backdrop-blur-xl border border-primary/10 text-primary shadow-xl hover:shadow-2xl hover:scale-[1.02] sm:hover:scale-105 transition-all duration-300"
            >
              <p className="text-base sm:text-3xl md:text-4xl font-black leading-tight">{stat.value}</p>
              <p className="text-[7px] xs:text-[9px] sm:text-xs uppercase font-bold tracking-wider opacity-80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
