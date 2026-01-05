import { motion } from "framer-motion";

const TrustBar = () => {
    // Placeholder logos or text-based logos for common industry partners
    const partners = [
        "VHV Versicherungen",
        "Allianz",
        "DEKRA",
        "TÜV SÜD",
        "AXA",
        "HUK-Coburg"
    ];

    return (
        <div className="py-8 bg-card border-y border-border overflow-hidden">
            <div className="section-container">
                <p className="text-center text-sm font-medium text-muted-foreground mb-6 uppercase tracking-widest">
                    Zusammenarbeit mit führenden Versicherungen & Prüforganisationen
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {partners.map((partner) => (
                        <motion.div
                            key={partner}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-xl md:text-2xl font-bold font-display text-muted-foreground/80"
                        >
                            {partner}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustBar;
