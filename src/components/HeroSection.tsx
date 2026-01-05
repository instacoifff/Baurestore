import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Award, CheckCircle2, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-inspection.jpg";

const HeroSection = () => {
  const trustIndicators = [
    { icon: Award, text: "Ingenieur-Expertise", value: "15+ Jahre" },
    { icon: Shield, text: "Zertifiziert", value: "DIN EN ISO" },
    { icon: Clock, text: "Schnelle Reaktion", value: "< 24h" },
  ];

  const stats = [
    { value: "500+", label: "Projekte" },
    { value: "98%", label: "Zufriedenheit" },
    { value: "15+", label: "Jahre Erfahrung" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/30 via-background to-background" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
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
        className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      {/* Content */}
      <div className="section-container relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
            >
              <CheckCircle2 className="w-4 h-4" />
              Professionelle Bauwerksanierung
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight"
            >
              <span className="block text-foreground mb-2">Fachwissen</span>
              <span className="block bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                sichert Ihre Immobilie
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl"
            >
              Von der Schadenfeststellung bis zur vollständigen Wiederherstellung – 
              Ihr Partner für professionelle Bauwerksanalyse und Sanierungsmanagement in Deutschland.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button variant="cta" size="lg" className="group shadow-lg hover:shadow-xl transition-all" asChild>
                <a href="#contact">
                  Inspektion anfragen
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-2 hover:bg-primary/5 hover:border-primary/50 transition-all" asChild>
                <a href="#services">Unsere Leistungen</a>
              </Button>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 mb-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all"
                >
                  <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {trustIndicators.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.text}</p>
                    <p className="text-xs text-muted-foreground">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50">
              <motion.img
                src={heroImage}
                alt="BauRestore Ingenieure bei der Bauwerksinspektion"
                className="w-full h-auto object-cover aspect-[4/3]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-primary/10 to-transparent" />
              
              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
              className="absolute -bottom-8 -left-8 bg-card rounded-2xl p-6 shadow-2xl border border-border/50 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">100%</p>
                  <p className="text-sm text-muted-foreground font-medium">Transparenz</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Achievement Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, type: "spring", stiffness: 100 }}
              className="absolute -top-6 -right-6 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-4 shadow-xl border border-primary/20"
            >
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6" />
                <div>
                  <p className="text-sm font-semibold">Bewährt</p>
                  <p className="text-xs opacity-90">Seit 2009</p>
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

