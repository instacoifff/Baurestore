import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Datenschutz = () => {
  const pdfPath = "/Strato_Homepage-Datenschutz.pdf";
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-padding">
        <div className="section-container max-w-5xl">
          <h1 className="section-title mb-8">Datenschutzerklärung</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-muted-foreground">
              <p>
                Unsere Datenschutzerklärung finden Sie in dem folgenden Dokument:
              </p>
              
              <div className="mt-8">
                <div className="w-full border border-border rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src={pdfPath}
                    className="w-full h-[800px]"
                    title="Datenschutzerklärung PDF"
                    type="application/pdf"
                  />
                </div>
                
                <div className="mt-4 text-center">
                  <a
                    href={pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    PDF in neuem Tab öffnen
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <h2 className="text-foreground font-semibold text-xl mb-4">Kontakt</h2>
                <p>
                  Bei Fragen zum Datenschutz können Sie uns jederzeit kontaktieren:
                </p>
                <p className="mt-4">
                  <strong>BauRestore</strong><br />
                  Friedrich Ebert Strasse 18a<br />
                  68526 Ladenburg<br />
                  Deutschland
                </p>
                <p className="mt-4">
                  Tel.: <a href="tel:+4915205280748" className="text-primary hover:underline">+49 152 05280748</a><br />
                  E-Mail: <a href="mailto:info@baurestore.de" className="text-primary hover:underline">info@baurestore.de</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
