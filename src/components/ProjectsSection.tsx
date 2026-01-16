import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
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
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";

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

const ProjectDetailsContent = ({ project, onContactClick, onClose, isDesktop }: { project: any, onContactClick: () => void, onClose: () => void, isDesktop: boolean }) => (
    <div className="flex flex-col md:flex-row h-full font-sans relative overflow-hidden">
        {/* Close Button Overlay */}
        <button
            onClick={onClose}
            className="absolute top-4 right-4 z-[100] p-2 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-md text-white transition-all shadow-lg border border-white/20 active:scale-95"
            aria-label="Close"
        >
            <X className="w-5 h-5" />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-[45%] lg:w-[40%] md:h-full relative flex-shrink-0 h-64 sm:h-80 md:max-h-full overflow-hidden">
            {!isDesktop && (
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-90" />
            )}
            <img
                src={project.dialogImage || project.image}
                alt={project.details.title}
                className="w-full h-full object-cover object-center"
            />
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col h-full bg-background relative z-20 -mt-10 md:mt-0 rounded-t-[2.5rem] md:rounded-none shadow-[0_-20px_50px_rgba(0,0,0,0.15)] md:shadow-none border-t border-white/40 md:border-none overflow-hidden">
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 sm:p-10 md:p-12 lg:p-14">
                <DialogHeader className="p-0 text-left space-y-5">
                    <div className="w-16 h-1.5 bg-primary/15 rounded-full mb-2 mx-auto md:hidden" />
                    <div className="hidden md:block w-16 h-1.5 bg-primary rounded-full mb-4" />

                    <DialogTitle className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
                        {project.details.title}
                    </DialogTitle>

                    <DialogDescription className="text-base sm:text-lg lg:text-xl leading-relaxed text-muted-foreground/90 font-medium">
                        {project.details.description}
                    </DialogDescription>
                </DialogHeader>

                <div className="mt-10 sm:mt-12">
                    <h4 className="text-sm font-bold text-foreground uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                        Ihre Vorteile
                    </h4>
                    <ul className="grid gap-4 sm:gap-5">
                        {project.details.expectations.map((expectation: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-5 p-5 rounded-[1.5rem] bg-secondary/30 border border-secondary/50 hover:bg-secondary/60 hover:border-primary/20 transition-all duration-300">
                                <div className="mt-1 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <span className="text-foreground font-semibold text-sm sm:text-base lg:text-lg leading-snug">{expectation}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="p-6 sm:p-10 md:p-12 bg-background/95 backdrop-blur-xl sticky bottom-0 border-t border-border/40 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
                <Button
                    variant="cta"
                    size="lg"
                    className="w-full group shadow-2xl shadow-primary/20 h-16 text-lg rounded-2xl transition-all hover:scale-[1.02] active:scale-95"
                    onClick={onContactClick}
                >
                    Jetzt Kontakt aufnehmen
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </Button>
            </div>
        </div>
    </div>
);

const ProjectsSection = () => {
    const [openDialog, setOpenDialog] = useState<number | null>(null);
    const isDesktop = useMediaQuery("(min-width: 1024px)");

    // Synchronize openDialog state with browser history for Back button support
    useEffect(() => {
        const handlePopState = (event: PopStateEvent) => {
            if (openDialog !== null) {
                setOpenDialog(null);
            }
        };

        if (openDialog !== null) {
            // Use current hash to prevent jumping to top/home on close
            window.history.pushState({ dialogOpen: true }, "", window.location.hash || "#partner");
            window.addEventListener("popstate", handlePopState);
        }

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, [openDialog]);

    const handleClose = () => {
        if (openDialog !== null) {
            setOpenDialog(null);
            // If the current history entry is our dialog state, pop it to go back to previous position
            if (window.history.state?.dialogOpen) {
                window.history.back();
            }
        }
    };

    const handleContactClick = () => {
        setOpenDialog(null);

        // 1. Pop the history if needed
        if (window.history.state?.dialogOpen) {
            window.history.back();
        }

        // 2. Longer delay to ensure history and UI state have fully stabilized
        setTimeout(() => {
            // 3. Force the URL hash to #kontakt immediately
            window.location.hash = "kontakt";

            // 4. Perform the scroll
            const contactSection = document.querySelector("#kontakt");
            if (contactSection) {
                const headerHeight = 80;
                const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth",
                });
            }
        }, 350); // Increased delay for stability
    };

    return (
        <section id="partner" className="section-padding bg-muted/30">
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
                            href="#kontakt"
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

            {/* Responsive Dialog / Drawer */}
            {projects.map((project, index) => (
                isDesktop ? (
                    <Dialog
                        key={index}
                        open={openDialog === index}
                        onOpenChange={(open) => !open && handleClose()}
                    >
                        <DialogContent className="max-w-6xl w-[92vw] h-[85vh] overflow-hidden p-0 gap-0 border-none rounded-[3rem] shadow-elevation-2xl shadow-primary/20 [&>button]:hidden">
                            <ProjectDetailsContent
                                project={project}
                                onContactClick={handleContactClick}
                                onClose={handleClose}
                                isDesktop={true}
                            />
                        </DialogContent>
                    </Dialog>
                ) : (
                    <Drawer
                        key={index}
                        open={openDialog === index}
                        onOpenChange={(open) => !open && handleClose()}
                    >
                        <DrawerContent className="h-[96vh] focus:outline-none p-0 bg-transparent border-none">
                            <DrawerHeader className="hidden">
                                <DrawerTitle>{project.details.title}</DrawerTitle>
                                <DrawerDescription>{project.details.description}</DrawerDescription>
                            </DrawerHeader>
                            <div className="h-full bg-background rounded-t-[2.5rem] overflow-hidden shadow-2xl w-full mx-auto">
                                <ProjectDetailsContent
                                    project={project}
                                    onContactClick={handleContactClick}
                                    onClose={handleClose}
                                    isDesktop={false}
                                />
                            </div>
                        </DrawerContent>
                    </Drawer>
                )
            ))}
        </section>
    );
};

export default ProjectsSection;
