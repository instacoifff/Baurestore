import { motion } from "framer-motion";
import { Droplets, Gauge, Bug } from "lucide-react";
import iconImage from "@/assets/icon.png";

const ProblemSection = () => {
  const problems = [
    {
      icon: Droplets,
      title: "Wasserschaden",
      description: "Wasserschäden entstehen oft plötzlich – durch Rohrbrüche, undichte Leitungen oder Überschwemmungen. Wir setzen auf präzise Leckortung und fachlich fundierte Ursachenanalyse, um den Schaden zuverlässig einzugrenzen. Anschließend erfolgt die fachgerechte Trocknung und Sanierung, damit Ihre Immobilie nachhaltig geschützt bleibt. Mit unserer Fachexpertise und transparenter Dokumentation sorgen wir für Sicherheit und Werterhalt.",
    },
    {
      icon: Gauge,
      image: iconImage,
      title: "Feuchteschaden",
      description: "Feuchtigkeitsschäden entwickeln sich meist schleichend – durch undichte Dächer, mangelhafte Abdichtungen oder Kondensation. Wir analysieren die Ursachen präzise und leiten die passenden Maßnahmen ein: von der fachgerechten Trocknung bis zur nachhaltigen Sanierung. Unsere Fachexpertise garantiert eine Lösung, die zukünftige Schäden verhindert und den Wert Ihrer Immobilie langfristig sichert.",
    },
    {
      icon: Bug,
      title: "Schimmelpilz",
      description: "Schimmelpilz ist nicht nur ein optisches Problem, sondern auch ein Gesundheitsrisiko. Wir gehen der Ursache auf den Grund – mit präziser Analyse. Nach der Ursachenbeseitigung führen wir die Sanierung professionell durch, um Ihre Räume dauerhaft gesund und trocken zu halten. Unsere Fachexpertise sorgt dafür, dass nicht nur die Symptome verschwinden, sondern die Ursache nachhaltig behoben wird.",
    },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            Die Probleme
          </span>
          <h2 className="section-title mb-4">
            Schäden erkennen, bevor sie teuer werden!
          </h2>
          <div className="section-subtitle mx-auto flex flex-col items-center text-center">
            <span>Wasserschäden und Feuchtigkeit brauchen präzise Analyse und professionelle Lösungen –</span>
            <span>nur so vermeiden Sie Folgeschäden und hohe Kosten.</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-engineering group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                {problem.image ? (
                  <img 
                    src={problem.image} 
                    alt={problem.title}
                    className="w-6 h-6 object-contain"
                    style={{ 
                      filter: 'brightness(0) saturate(100%) invert(11%) sepia(95%) saturate(1352%) hue-rotate(195deg) brightness(49%) contrast(100%)'
                    }}
                  />
                ) : (
                  <problem.icon className="w-6 h-6 text-primary" />
                )}
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
