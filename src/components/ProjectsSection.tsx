import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import buroImage from "@/assets/buro.png";
import appartementsImage from "@/assets/appartements.png";

const projects = [
    {
        title: "Hausverwaltungen",
        image: appartementsImage,
    },
    {
        title: "Versicherungen",
        image: buroImage,
    },
];

const ProjectsSection = () => {
    return (
        <section id="projekte" className="section-padding bg-muted/30">
            <div className="section-container">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                            Referenzprojekte
                        </span>
                        <h2 className="section-title mb-4">
                            Erfolgreich abgeschlossene Sanierungen
                        </h2>
                        <p className="section-subtitle mb-0">
                            Ein Auszug aus unserer täglichen Arbeit für private und gewerbliche Kunden in der Region.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all underline-offset-4 hover:underline"
                        >
                            Termin vereinbaren <ArrowRight className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-elevation-lg transition-all duration-300"
                        >
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-16 bg-card rounded-2xl border border-border shadow-card p-8 md:p-12"
                >
                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                        Hausverwaltungen & Versicherungen
                    </h3>
                    <p className="text-lg font-semibold text-primary mb-6">
                        BauRestore – verlässlicher Partner für Hausverwaltungen und Versicherungen.
                    </p>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                        BauRestore steht für Fachexpertise und transparente Prozesse. Wir kennen die
                        Anforderungen von Hausverwaltungen und Versicherungen: schnelle Reaktionszeiten,
                        klare Kommunikation und lückenlose Dokumentation. Mit unserer langjährigen
                        Erfahrung sorgen wir für präzise Schadenanalyse, fachgerechte Trocknung und
                        nachhaltige Sanierung – alles aus einer Hand. Jeder Schritt wird strukturiert
                        dokumentiert, damit Sie jederzeit den Überblick behalten. Vertrauen Sie auf klare
                        Abläufe, verbindliche Kostenübersichten und eine professionelle Umsetzung, die Ihre
                        Prozesse vereinfacht und beschleunigt.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <span className="text-primary font-bold mt-1">•</span>
                            <span className="text-muted-foreground">Fachexpertise für fundierte Entscheidungen</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary font-bold mt-1">•</span>
                            <span className="text-muted-foreground">Klare Dokumentation für Schadensregulierung</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary font-bold mt-1">•</span>
                            <span className="text-muted-foreground">Effiziente Koordination aller Beteiligten</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary font-bold mt-1">•</span>
                            <span className="text-muted-foreground">Verbindliche Termin- und Kostenplanung</span>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;
