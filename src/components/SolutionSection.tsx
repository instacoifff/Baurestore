import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  const solutions = [
    {
      title: "Eine zentrale Anlaufstelle für Ihr gesamtes Sanierungsprojekt",
      description: "Von der Ursachenanalyse und präzisen Leckortung bis zur vollständigen Wiederherstellung.",
    },
    {
      title: "Ingenieur-Know-how für objektive und fachgerechte Lösungen",
      description: "Unabhängig, transparent und ausschließlich auf Ihren Werterhalt ausgerichtet.",
    },
    {
      title: "Strukturierter Prozess mit klarer Dokumentation",
      description: "Jeder Schritt nachvollziehbar – für maximale Sicherheit und Vertrauen.",
    },
    {
      title: "Verbindliche Kosten- und Terminplanung",
      description: "Sicherheit für eine effiziente und wirtschaftliche Umsetzung.",
    },
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
              Die Probleme
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
                  <div className="flex flex-col">
                    <span className="font-bold text-foreground mb-1">{solution.title}</span>
                    <span className="font-normal text-foreground">{solution.description}</span>
                  </div>
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
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
