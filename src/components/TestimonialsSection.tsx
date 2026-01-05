import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Hans Müller",
      role: "Hausbesitzer, Heidelberg",
      content: "BauRestore hat unseren Wasserschaden im Keller professionell analysiert. Durch die präzise Leckortung konnten wir die Sanierungskosten deutlich senken. Absolute Empfehlung!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Sabine Weber",
      role: "Hausverwaltung, Mannheim",
      content: "Wir arbeiten seit Jahren mit den Ingenieuren von BauRestore zusammen. Die Kombination aus technischem Sachverstand und zuverlässigem Projektmanagement ist einzigartig.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=47",
    },
    {
      name: "Dr. Thomas Klein",
      role: "Immobilieninvestor",
      content: "Die Sanierungskonzepte sind fundiert und transparent. Man merkt sofort, dass hier Ingenieure am Werk sind, die ihr Handwerk verstehen.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=33",
    },
    {
      name: "Maria Schneider",
      role: "Geschäftsführerin, Immobilien GmbH",
      content: "Die schnelle Reaktionszeit und die detaillierte Dokumentation haben uns sehr beeindruckt. BauRestore hat unsere Erwartungen übertroffen.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=45",
    },
    {
      name: "Peter Hoffmann",
      role: "Bauherr, Karlsruhe",
      content: "Professionelle Beratung von Anfang bis Ende. Die Ingenieure haben uns bei jedem Schritt unterstützt und alle Fragen kompetent beantwortet.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=51",
    },
    {
      name: "Andrea Fischer",
      role: "Eigentümerin, Wohnanlage",
      content: "Die Feuchtigkeitsanalyse war sehr gründlich. Dank der präzisen Messungen konnten wir die Ursache schnell finden und beheben.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Michael Bauer",
      role: "Projektleiter, Baufirma",
      content: "Als Baufirma schätzen wir die Zusammenarbeit mit BauRestore sehr. Die Gutachten sind immer fundiert und praxisnah umsetzbar.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=68",
    },
  ];

  // Double the testimonials to create a seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="section-container pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Referenzen
          </span>
          <h2 className="section-title mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="section-subtitle mx-auto">
            Vertrauen Sie auf die Erfahrung aus hunderten erfolgreichen Sanierungsprojekten.
          </p>
        </motion.div>
      </div>

      <div className="relative flex overflow-hidden py-10">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{
            x: [0, "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }}
          style={{ width: "max-content" }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="w-[350px] md:w-[450px] p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-lg transition-all group flex flex-col justify-between whitespace-normal relative"
            >
              <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Person Info at Top */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/20 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-display font-semibold text-foreground text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-muted-foreground italic leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </motion.div>

        {/* Gradient overlays for smooth fading at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
