import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-padding">
        <div className="section-container max-w-3xl">
          <h1 className="section-title mb-8">Impressum</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h2 className="text-foreground font-semibold text-xl mb-2">Angaben gemäß § 5 TMG</h2>
                <p>
                  Oussama Hamami<br />
                  BauRestore<br />
                  Friedrich Ebert Strasse 18a<br />
                  68526 Ladenburg<br />
                  Deutschland
                </p>
              </div>

              <div>
                <h2 className="text-foreground font-semibold text-xl mb-2">Kontakt</h2>
                <p>
                  Tel.: <a href="tel:+4915205280748" className="text-primary hover:underline">+49 152 05280748</a><br />
                  E-Mail: <a href="mailto:info@baurestore.de" className="text-primary hover:underline">info@baurestore.de</a>
                </p>
              </div>

              <div>
                <h2 className="text-foreground font-semibold text-xl mb-2">Umsatzsteuer-ID</h2>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  ------
                </p>
              </div>

              <div>
                <h2 className="text-foreground font-semibold text-xl mb-2">Streitschlichtung</h2>
                <p>
                  Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
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

export default Impressum;
