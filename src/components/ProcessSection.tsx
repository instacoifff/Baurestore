import { motion } from "framer-motion";
import { FileSearch, FileText, Wind, ClipboardList, Users } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: FileSearch,
      number: "01",
      title: "Schadenanalyse",
      description: "Präzise Ursachenanalyse inklusive Leckortung sowie fachgerechte Dokumentation des Schadensbildes.",
    },
    {
      icon: FileText,
      number: "02",
      title: "Trocknungskonzept",
      description: "Entwicklung eines individuellen, fachlichen Trocknungskonzepts zur effizienten Feuchtigkeitsbeseitigung.",
    },
    {
      icon: Wind,
      number: "03",
      title: "Trocknung",
      description: "Fachgerechte Umsetzung des Trocknungskonzepts mit kontinuierlicher Überwachung der Trocknungsparameter.",
    },
    {
      icon: ClipboardList,
      number: "04",
      title: "Sanierungskonzept",
      description: "Entwicklung geeigneter Sanierungslösungen inklusive Kostenabschätzung und Terminplanung als Entscheidungsgrundlage.",
    },
    {
      icon: Users,
      number: "05",
      title: "Sanierungsmanagement",
      description: "Koordination und Steuerung aller beteiligten Partnerunternehmen, Überwachung der Ausführung sowie transparente Abschlussdokumentation.",
    },
  ];

  return (
    <section id="process" className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Ablauf
          </span>
          <h2 className="section-title mb-4">
            So arbeiten wir zusammen
          </h2>
          <p className="section-subtitle mx-auto">
            Ein strukturierter Prozess für maximale Transparenz und Effizienz – 
            von der ersten Kontaktaufnahme bis zur Projektabnahme.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative text-center lg:text-center"
              >
                {/* Number Circle */}
                <div className="relative z-10 mx-auto w-16 h-16 rounded-full bg-card border-4 border-border flex items-center justify-center mb-4 shadow-card">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Step Number */}
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3 relative z-10">
                  Schritt {step.number}
                </span>

                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
