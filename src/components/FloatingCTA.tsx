import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
                >
                    {/* WhatsApp / Quick Contact */}
                    <a
                        href="https://wa.me/4915205280748"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-transform group"
                        aria-label="WhatsApp Kontakt"
                    >
                        <MessageSquare className="w-6 h-6" />
                        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-medium whitespace-nowrap px-0 group-hover:px-2">
                            WhatsApp Chat
                        </span>
                    </a>

                    {/* Call CTA */}
                    <a
                        href="tel:+4915205280748"
                        className="flex items-center gap-3 bg-primary text-primary-foreground p-4 rounded-full shadow-2xl hover:scale-105 transition-transform group"
                        aria-label="Jetzt Anrufen"
                    >
                        <Phone className="w-6 h-6" />
                        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-medium whitespace-nowrap px-0 group-hover:px-2">
                            Jetzt Anrufen
                        </span>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingCTA;
