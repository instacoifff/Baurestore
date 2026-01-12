import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Send, CheckCircle, Upload, X } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [images, setImages] = useState<(File & { preview: string })[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Clean up object URLs to avoid memory leaks
  useEffect(() => {
    return () => {
      images.forEach(file => URL.revokeObjectURL(file.preview));
    };
  }, [images]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileList = Array.from(e.target.files).map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      );
      setImages((prev) => [...prev, ...fileList]);
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    // Add images to form data if any
    images.forEach((file, index) => {
      formData.append(`file-${index}`, file);
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        setImages([]); // Clear images after submission
        toast.success("Anfrage erfolgreich gesendet! Wir melden uns zeitnah bei Ihnen.");
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Netlify Form submission error:", error);
      toast.error("Es gab ein Problem beim Senden Ihrer Anfrage. Bitte versuchen Sie es später erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Telefon",
      value: "+49 152 05280748",
      href: "tel:+4915205280748",
    },
    {
      icon: Mail,
      label: "E-Mail",
      value: "info@baurestore.de",
      href: "mailto:info@baurestore.de",
    },
    {
      icon: MapPin,
      label: "Adresse",
      value: "Friedrich-Ebert-Straße 18A\n68526 Ladenburg\nDeutschland",
      href: "https://maps.google.com/?q=Friedrich-Ebert-Straße+18A,+68526+Ladenburg",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Kontakt
            </span>
            <h2 className="section-title mb-4">
              Professionelle Schadensanalyse anfragen
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Wir reagieren umgehend und melden uns so schnell wie möglich bei Ihnen.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card rounded-xl p-8 text-center border border-border"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Vielen Dank für Ihre Anfrage!
                </h3>
                <p className="text-muted-foreground">
                  Wir haben Ihre Nachricht erhalten und werden uns
                  schnellstmöglich bei Ihnen melden.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-card"
                name="contact"
                data-netlify="true"
                encType="multipart/form-data"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="recipient-email" value="azizafif933@gmail.com" />
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Ihr Name"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefon *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+49 ..."
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-Mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ihre@email.de"
                    required
                    className="bg-background"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="damage-type" className="block text-sm font-medium text-foreground mb-2">
                    Art des Schadens
                  </label>
                  <Select name="damage-type">
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Bitte auswählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="water">Wasserschaden</SelectItem>
                      <SelectItem value="moisture">Feuchtigkeit / Schimmel</SelectItem>
                      <SelectItem value="structural">Sanierung</SelectItem>
                      <SelectItem value="consultation">Beratung</SelectItem>
                      <SelectItem value="other">Sonstiges</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Ihre Nachricht
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                    rows={4}
                    className="bg-background resize-none"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Bilder vom Schaden (Optional)
                  </label>
                  <div
                    className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-border border-dashed rounded-xl hover:border-primary/50 transition-colors cursor-pointer group bg-background"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-muted-foreground group-hover:text-primary transition-colors" />
                      <div className="flex text-sm text-muted-foreground">
                        <span className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/80 focus-within:outline-none">
                          Bilder hochladen
                        </span>
                        <p className="pl-1">oder herüberziehen</p>
                      </div>
                      <p className="text-xs text-muted-foreground">PNG, JPG, GIF bis zu 10MB</p>
                    </div>
                    <input
                      id="image-upload"
                      ref={fileInputRef}
                      name="image-upload"
                      type="file"
                      className="sr-only"
                      multiple
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>

                  {images.length > 0 && (
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mt-4">
                      {images.map((file, index) => (
                        <div key={index} className="relative group aspect-square rounded-lg overflow-hidden border border-border">
                          <img
                            src={file.preview}
                            alt={`Preview ${index}`}
                            className="w-full h-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeImage(index);
                            }}
                            className="absolute top-1 right-1 p-1 bg-destructive text-destructive-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Button variant="cta" size="lg" className="w-full" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Wird gesendet..."
                  ) : (
                    <>
                      Anfrage absenden
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
                </p>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:pl-8"
          >
            <div className="sticky top-32">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Direkt Kontakt aufnehmen
              </h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-card transition-shadow group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      <p className="font-medium text-foreground whitespace-pre-line">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick Trust Elements */}
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                <h4 className="font-display font-semibold text-foreground mb-3">
                  Schnelle Reaktion garantiert
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    24/7 Reaktionszeit
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Kostenlose Erstberatung
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    In der Rhein-Neckar-Region erreichbar
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
