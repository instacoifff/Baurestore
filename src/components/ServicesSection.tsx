import { motion } from "framer-motion";
import { Search, Wind, Wrench, ClipboardList } from "lucide-react";
import serviceAnalysis from "@/assets/service-analysis.jpg";
import serviceDrying from "@/assets/service-drying.jpg";
import serviceConcept from "@/assets/service-concept.jpg";
import serviceManagement from "@/assets/service-management.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: "Schadenanalyse",
      description: "Fachgerechte Analyse von Bauschäden durch Wasser und Feuchtigkeit sowie daraus resultierendem Schimmelbefall, mit präziser Leckortung, fundierter Ursachenbestimmung und verlässlicher Dokumentation.",
      image: serviceAnalysis,
      benefits: ["Präzise Leckortung", "Ursachenforschung", "Dokumentation"],
    },
    {
      icon: Wind,
      title: "Trocknungskonzepte",
      description: "Auswahl geeigneter Trocknungsverfahren mit klar definiertem Ablauf und Dauer, inklusive laufender Kontrolle und fachlicher Begleitung.",
      image: serviceDrying,
      benefits: ["Optimale Verfahren", "Zeitplanung", "Monitoring"],
    },
    {
      icon: Wrench,
      title: "Sanierungskonzepte",
      description: "Festlegung der Sanierungsziele, Entwicklung technischer Lösungsvarianten und Erstellung einer groben Kosten- und Terminabschätzung zur Bewertung der Umsetzbarkeit.",
      image: serviceConcept,
      benefits: ["Zieldefinition", "Kostenübersicht", "Lösungsvarianten"],
    },
    {
      icon: ClipboardList,
      title: "Sanierungsmanagement",
      description: "Koordination aller Beteiligten, Termin-, Kosten- und Qualitätskontrolle sowie Bauüberwachung/Bauleitung bei fachlich gesteuerter Ausführung durch Partnerunternehmen.",
      image: serviceManagement,
      benefits: ["Projektsteuerung", "Qualitätssicherung", "Koordination"],
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Unsere Leistungen
          </span>
          <h2 className="section-title mb-4">
            Professionelle Ingenieurdienstleistungen
          </h2>
          <p className="section-subtitle mx-auto">
            Von der ersten Analyse bis zur vollständigen Sanierung – 
            strukturiert, transparent und fachlich fundiert.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-engineering overflow-hidden group"
            >
              <div className="aspect-[16/10] rounded-lg overflow-hidden mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit) => (
                      <span
                        key={benefit}
                        className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
