import { motion } from "framer-motion";
import { GraduationCap, Layers, Eye, HeartHandshake, Shuffle, User } from "lucide-react";

const WhyUsSection = () => {
  const reasons = [
    {
      icon: GraduationCap,
      title: "Erfahrung",
      description: "Langjährige Erfahrung in fachgerechter Analyse und nachhaltiger Instandsetzung von Gebäuden.",
    },
    {
      icon: Layers,
      title: "Ganzheitlichkeit",
      description: "Alle Leistungen aus einer Hand – von der Diagnose bis zur Fertigstellung.",
    },
    {
      icon: Eye,
      title: "Fachlich fundierte Expertise",
      description: "Ingenieurwissen als Grundlage für alle Entscheidungen und Empfehlungen.",
    },
    {
      icon: Shuffle,
      title: "Struktur",
      description: "Klare Prozesse, definierte Abläufe und transparente Kommunikation.",
    },
    {
      icon: Eye,
      title: "Transparenz",
      description: "Offene Kostenübersicht und verständliche Dokumentation aller Schritte.",
    },
    {
      icon: HeartHandshake,
      title: "Persönliche Betreuung",
      description: "Ihr Ansprechpartner begleitet Sie durch das gesamte Projekt.",
    },
    {
      icon: Shuffle,
      title: "Flexibilität",
      description: "Maßgeschneiderte Lösungen für Ihre individuellen Anforderungen.",
    },
    {
      icon: User,
      title: "Ein Ansprechpartner",
      description: "Eine Kontaktperson für alle Fragen – direkt und unkompliziert.",
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-primary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-4">
            Warum wie
          </span>
          <h2 className="section-title text-primary-foreground mb-4">
            Das macht uns aus
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Wir verbinden technisches Know-how mit persönlicher Betreuung – 
            für Ergebnisse, auf die Sie sich verlassen können.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 hover:bg-primary-foreground/15 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center mb-4">
                <reason.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
