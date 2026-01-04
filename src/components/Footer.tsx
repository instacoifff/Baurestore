import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="section-container py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo className="mb-4 [&_img]:h-16 [&_img]:brightness-0 [&_img]:invert" />
            <p className="text-background/70 max-w-sm mb-4">
              Ingenieurdienstleistungen für Bauschäden & Sanierungsmanagement. 
              Alles aus einer Hand – von der Schadenfeststellung bis zur Wiederherstellung.
            </p>
            <a 
              href="https://www.baurestore.de" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-background hover:text-background/80 transition-colors font-medium"
            >
              www.baurestore.de
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+4915205280748" 
                  className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +49 152 05280748
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@baurestore.de" 
                  className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@baurestore.de
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.google.com/?q=Friedrich-Ebert-Straße+18A,+68526+Ladenburg" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-background/70 hover:text-background transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    Friedrich-Ebert-Straße 18A<br />
                    68526 Ladenburg<br />
                    Deutschland
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Rechtliches</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  AGB
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm text-center md:text-left">
              © {currentYear} BauRestore. Alle Rechte vorbehalten.
            </p>
            <p className="text-background/60 text-sm">
              Ingenieurdienstleistungen für Bauschäden & Sanierungsmanagement
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
