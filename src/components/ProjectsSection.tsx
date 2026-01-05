import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, CheckCircle2, Calendar, User, ShieldCheck } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

const projects = [
    {
        title: "Wasserschadensanierung",
        location: "Heidelberg, Wohnanlage",
        description: "Komplettsanierung nach Rohrbruch in einem Mehrfamilienhaus. Inklusive technischer Trocknung und Wiederherstellung des ursprünglichen Zustands unter Einhaltung höchster Qualitätsstandards.",
        image: "/water_damage_restoration_project_1767618702668.png",
        category: "Sanierung",
        features: ["Bautrocknung", "Leckortung", "Sanierung"],
        duration: "3 Wochen",
        client: "Hausverwaltung",
        status: "Abgeschlossen"
    },
    {
        title: "Kellerabdichtung",
        location: "Mannheim, Privatvilla",
        description: "Nachträgliche Außenabdichtung und Horizontalsperre gegen aufsteigende Feuchtigkeit in historischer Bausubstanz. Einsatz modernster Injektionsverfahren für langlebigen Schutz.",
        image: "/basement_sealing_project_1767618724963.png",
        category: "Abdichtung",
        features: ["Injektionsverfahren", "Feuchtigkeitsanalyse", "Garantie"],
        duration: "2 Wochen",
        client: "Privatkunde",
        status: "Abgeschlossen"
    },
    {
        title: "Schimmelsanierung",
        location: "Ludwigshafen, Bürogebäude",
        description: "Großflächige Schimmelpilzbeseitigung unter Schwarz-Weiß-Bedingungen in gewerblich genutzten Räumen. Inklusive Ursachenanalyse und nachhaltigem Präventionskonzept.",
        image: "/mold_remediation_project_1767618744031.png",
        category: "Spezialreinigung",
        features: ["Feinstaubfilterung", "Desinfektion", "Prävention"],
        duration: "10 Tage",
        client: "Gewerbebetrieb",
        status: "Abgeschlossen"
    }
];

const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
                            Projekt anfragen <ArrowRight className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-elevation-lg transition-all duration-300 cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-primary text-xs font-bold uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="bg-white text-primary px-6 py-2 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                        Details ansehen
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                                    <MapPin className="w-4 h-4 text-primary" />
                                    {project.location}
                                </div>
                                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-6">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary text-[10px] font-semibold text-foreground/80 uppercase tracking-wider">
                                            <CheckCircle2 className="w-3 h-3 text-primary" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
                <DialogContent className="max-w-3xl p-0 overflow-hidden bg-card border-none sm:rounded-3xl">
                    {selectedProject && (
                        <div className="flex flex-col md:flex-row h-full">
                            <div className="w-full md:w-1/2 relative bg-muted">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover min-h-[300px] md:min-h-full"
                                />
                                <div className="absolute top-6 left-6">
                                    <span className="px-4 py-1.5 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest">
                                        {selectedProject.category}
                                    </span>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col">
                                <div className="flex items-center gap-2 text-primary font-medium text-sm mb-4">
                                    <MapPin className="w-4 h-4" />
                                    {selectedProject.location}
                                </div>

                                <DialogTitle className="text-3xl font-display font-bold mb-6 text-foreground">
                                    {selectedProject.title}
                                </DialogTitle>

                                <div className="space-y-6 flex-grow">
                                    <div>
                                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                                            Beschreibung
                                        </h4>
                                        <DialogDescription className="text-base text-foreground leading-relaxed">
                                            {selectedProject.description}
                                        </DialogDescription>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 border-y border-border py-6">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-wider">
                                                <Calendar className="w-3.5 h-3.5" />
                                                Dauer
                                            </div>
                                            <p className="font-semibold text-sm">{selectedProject.duration}</p>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-wider">
                                                <User className="w-3.5 h-3.5" />
                                                Kunde
                                            </div>
                                            <p className="font-semibold text-sm">{selectedProject.client}</p>
                                        </div>
                                        <div className="space-y-1 col-span-2">
                                            <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-wider">
                                                <ShieldCheck className="w-3.5 h-3.5" />
                                                Status
                                            </div>
                                            <p className="font-semibold text-sm text-accent flex items-center gap-1.5">
                                                {selectedProject.status}
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                                            Ebrachte Leistungen
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {selectedProject.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-3 text-sm font-medium">
                                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                                                    </div>
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-elevation-md"
                                    >
                                        Schließen
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default ProjectsSection;
