import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  const solutions = [
    "Eine zentrale Anlaufstelle für Ihr gesamtes Sanierungsprojekt Von der Ursachenanalyse und präzisen Leckortung bis zur vollständigen Wiederherstellung.",
    "Ingenieur-Know-how für objektive und fachgerechte Lösungen Unabhängig, transparent und ausschließlich auf Ihren Werterhalt ausgerichtet.",
    "Strukturierter Prozess mit klarer Dokumentation Jeder Schritt nachvollziehbar – für maximale Sicherheit und Vertrauen.",
    "Verbindliche Kosten- und Terminplanung Sicherheit für eine effiziente und wirtschaftliche Umsetzung.",
  ];

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              Die Lösung
            </span>
            
            <h2 className="section-title mb-6">
              <span className="text-primary">Alles aus einer Hand</span> –<br />
              von der Schadenfeststellung bis zur Wiederherstellung
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8">
              BauRestore steht für Fachexpertise und strukturiertes Projektmanagement. Wir
              analysieren, entwickeln, koordinieren und dokumentieren – damit Sie jederzeit den
              Überblick behalten und sich auf eine nachhaltige Lösung verlassen können.
            </p>

            <ul className="space-y-4 mb-8">
              {solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{solution}</span>
                </motion.li>
              ))}
            </ul>

            <Button variant="cta" className="group" asChild>
              <a href="#services">
                Leistungen entdecken
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                  <p className="text-4xl font-bold mb-2">100 %</p>
                  <p className="text-sm opacity-90">Fachexpertise</p>
                </div>
                <div className="bg-secondary rounded-2xl p-6">
                  <p className="text-4xl font-bold text-foreground mb-2">+10</p>
                  <p className="text-sm text-muted-foreground">Jahre Erfahrung</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
                  <p className="text-4xl font-bold text-primary mb-2">24/7</p>
                  <p className="text-sm text-muted-foreground">Reaktionszeit</p>
                </div>
                <div className="bg-[#f0f9ff] rounded-[3rem] p-10 flex flex-col justify-center relative overflow-hidden">
                  <span className="text-6xl font-bold text-[#00adef] leading-none mb-3">DE</span>
                  <span className="text-xl text-[#5a6b81] font-medium">Deutschland-weit</span>
                  <div className="absolute right-10 top-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 rounded-full bg-[#4ade80]"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
