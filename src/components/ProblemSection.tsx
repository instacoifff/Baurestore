import { motion } from "framer-motion";
import { Droplets, Bug, HelpCircle, Users, CircleDollarSign } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Droplets,
      title: "Wasserschäden",
      description: "Unentdeckte Leckagen führen zu schwerwiegenden Bauschäden und hohen Folgekosten.",
    },
    {
      icon: Bug,
      title: "Feuchtigkeit & Schimmel",
      description: "Feuchtigkeit in Gebäuden verursacht Schimmelbefall und gesundheitliche Risiken.",
    },
    {
      icon: HelpCircle,
      title: "Unklare Ursachen",
      description: "Ohne professionelle Analyse bleiben die wahren Schadensursachen oft unerkannt.",
    },
    {
      icon: Users,
      title: "Koordinationsprobleme",
      description: "Viele Gewerke, fehlende Abstimmung – das führt zu Verzögerungen und Fehlern.",
    },
    {
      icon: CircleDollarSign,
      title: "Versteckte Kosten",
      description: "Ungeplante Mehrkosten durch mangelhafte Planung und unerwartete Schäden.",
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
          <h2 className="section-title mb-4">
            Kennen Sie diese Probleme?
          </h2>
          <p className="section-subtitle mx-auto">
            Bauwerkschäden sind komplex. Ohne Fachwissen wird die Sanierung 
            schnell zum unüberschaubaren Projekt.
          </p>
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
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive" />
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
