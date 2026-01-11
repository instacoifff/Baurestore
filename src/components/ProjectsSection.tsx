import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import buroImage from "@/assets/buro.png";
import appartementsImage from "@/assets/appartements.png";
import withoutTextVImage from "@/assets/without-text-v.png";
import withoutTextImage from "@/assets/without-text.png";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const projects = [
    {
        title: "Hausverwaltungen",
        image: appartementsImage,
        dialogImage: withoutTextImage,
        details: {
            title: "Hausverwaltungen",
            description: "Die Betreuung mehrerer Objekte erfordert schnelle und effiziente Lösungen – wir kennen diese Herausforderung. Hausverwaltungen erwarten kurze Reaktionszeiten, klare Kommunikation und verlässliche Kostenübersichten, um Mieterausfälle und Folgeschäden zu vermeiden. BauRestore bietet präzise Schadenanalyse, fachgerechte Trocknung und nachhaltige Sanierung – alles aus einer Hand. Jeder Schritt wird transparent dokumentiert, damit Sie jederzeit den Überblick behalten.",
            expectations: [
                "Schnelle Reaktionszeit",
                "Kostenkontrolle und klare Abläufe",
                "Minimierung von Mieterausfällen",
                "Transparente Kommunikation",
            ],
        },
    },
    {
        title: "Versicherungen",
        image: buroImage,
        dialogImage: withoutTextVImage,
        details: {
            title: "Versicherungen",
            description: "Wir wissen, dass Versicherungen auf detaillierte und nachvollziehbare Schadensdokumentation angewiesen sind, um Fälle korrekt zu bewerten und effizient zu regulieren. Deshalb liefern wir strukturierte Berichte, die alle relevanten Informationen enthalten – von der Schadenanalyse bis zur Sanierung. Unser Ziel: klare Prozesse, verlässliche Daten und eine reibungslosere Regulierung.",
            expectations: [
                "Vollständige und präzise Dokumentation",
                "Transparente Kostenübersichten",
                "Effiziente Schadensabwicklung",
                "Verlässliche Kommunikation",
            ],
        },
    },
];

const ProjectsSection = () => {
    const [openDialog, setOpenDialog] = useState<number | null>(null);

    const handleContactClick = () => {
        setOpenDialog(null);
        setTimeout(() => {
            const contactSection = document.querySelector("#contact");
            if (contactSection) {
                const headerHeight = 80;
                const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth",
                });
            }
        }, 100);
    };

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
                            Partner
                        </span>
                        <h2 className="section-title mb-4">
                            Hausverwaltungen & Versicherungen
                        </h2>
                        <p className="section-subtitle mb-0">
                            BauRestore – verlässlicher Partner für Hausverwaltungen und Versicherungen.
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
                            className="group bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-elevation-lg transition-all duration-300 cursor-pointer"
                            onClick={() => setOpenDialog(index)}
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

            {projects.map((project, index) => (
                <Dialog
                    key={index}
                    open={openDialog === index}
                    onOpenChange={(open) => setOpenDialog(open ? index : null)}
                >
                    <DialogContent className="max-w-4xl w-[95vw] sm:w-full h-[95vh] sm:h-[90vh] max-h-[95vh] sm:max-h-[90vh] overflow-hidden p-0 flex flex-col md:flex-row">
                        <div className="w-full md:flex-1 aspect-[4/3] md:aspect-auto md:h-full h-auto max-h-[40vh] sm:max-h-[50vh] md:max-h-full overflow-hidden relative flex-shrink-0">
                            <img
                                src={project.dialogImage || project.image}
                                alt={project.details.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4 sm:p-6 overflow-y-auto md:w-96 flex-shrink-0 md:h-full flex-1">
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-display font-bold">
                                    {project.details.title}
                                </DialogTitle>
                                <DialogDescription className="text-base leading-relaxed pt-4">
                                    {project.details.description}
                                </DialogDescription>
                            </DialogHeader>
                            <div className="mt-6">
                                <h4 className="text-lg font-semibold mb-4">
                                    Erwartungen, die wir erfüllen:
                                </h4>
                                <ul className="space-y-3">
                                    {project.details.expectations.map((expectation, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="text-primary font-bold mt-1">✔</span>
                                            <span className="text-muted-foreground">{expectation}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-8">
                                <Button
                                    variant="cta"
                                    size="lg"
                                    className="w-full group"
                                    onClick={handleContactClick}
                                >
                                    Jetzt Kontakt aufnehmen
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            ))}
        </section>
    );
};

export default ProjectsSection;
