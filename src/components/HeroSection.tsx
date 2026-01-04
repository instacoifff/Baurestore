import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-inspection.jpg";

const HeroSection = () => {
  const trustIndicators = [
    { icon: Award, text: "Ingenieur-Expertise" },
    { icon: Shield, text: "Zertifiziert" },
    { icon: Clock, text: "Schnelle Reaktion" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background" />
      
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Professionelle Bauwerksanierung
            </span>
            
            <h1 className="section-title mb-6 text-balance">
              <span className="text-primary">Fachwissen sichert</span>
              <br />
              Ihre Immobilie
            </h1>
            
            <p className="section-subtitle mb-8">
              Von der Schadenfeststellung bis zur vollständigen Wiederherstellung – 
              Ihr Partner für professionelle Bauwerksanalyse und Sanierungsmanagement in Deutschland.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button variant="cta" size="lg" className="group" asChild>
                <a href="#contact">
                  Inspektion anfragen
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#services">Unsere Leistungen</a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6">
              {trustIndicators.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevation-lg">
              <img
                src={heroImage}
                alt="BauRestore Ingenieure bei der Bauwerksinspektion"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-elevation-md border border-border"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">100%</p>
                  <p className="text-sm text-muted-foreground">Transparenz</p>
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
