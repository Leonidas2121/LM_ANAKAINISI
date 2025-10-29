import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      title: "Ολική Ανακαίνιση Κατοικίας",
      description: "Πλήρης μετασχηματισμός του χώρου σας, από το σχεδιασμό μέχρι την υλοποίηση",
      features: [
        "Αρχιτεκτονική μελέτη",
        "Κατεδάφιση & ανακατασκευή",
        "Ηλεκτρολογικές & υδραυλικές εγκαταστάσεις",
        "Επιλογή υλικών & φινιρίσματα",
        "Πλήρη επίβλεψη έργου",
      ],
      icon: "🏠",
    },
    {
      title: "Μερική Ανακαίνιση",
      description: "Στοχευμένες παρεμβάσεις για να αναβαθμίσετε συγκεκριμένους χώρους",
      features: [
        "Ανακαίνιση συγκεκριμένων δωματίων",
        "Αλλαγή δαπέδων",
        "Ανακατασκευή τοίχων",
        "Νέες εγκαταστάσεις",
        "Ελαχιστοποίηση όχλησης",
      ],
      icon: "🔨",
    },
    {
      title: "Ανακαίνιση Μπάνιου",
      description: "Μοντέρνα και λειτουργικά μπάνια που συνδυάζουν αισθητική και πρακτικότητα",
      features: [
        "Σύγχρονος σχεδιασμός",
        "Υδραυλικές εγκαταστάσεις",
        "Πλακάκια & είδη υγιεινής",
        "Κρυφός φωτισμός LED",
        "Αδιάβροχα συστήματα",
      ],
      icon: "🛁",
    },
    {
      title: "Ανακαίνιση Κουζίνας",
      description: "Κουζίνες που γίνονται το κέντρο του σπιτιού σας",
      features: [
        "Εργονομικός σχεδιασμός",
        "Έπιπλα κουζίνας",
        "Ηλεκτρικές συσκευές",
        "Πάγκοι εργασίας",
        "Σύγχρονος φωτισμός",
      ],
      icon: "🍳",
    },
    {
      title: "Ενεργειακή Αναβάθμιση",
      description: "Μειώστε το ενεργειακό σας αποτύπωμα και τα κόστη θέρμανσης/ψύξης",
      features: [
        "Θερμομόνωση κτιρίου",
        "Αντικατάσταση κουφωμάτων",
        "Ενεργειακά συστήματα",
        "Ανανεώσιμες πηγές",
        "Πιστοποίηση ΠΕΑ",
      ],
      icon: "🌱",
    },
    {
      title: "Ελαιοχρωματισμοί & Διακόσμηση",
      description: "Επαγγελματικές βαφές και διακοσμητικά φινιρίσματα",
      features: [
        "Εσωτερικοί χρωματισμοί",
        "Εξωτερικοί χρωματισμοί",
        "Ειδικά φινιρίσματα",
        "Διακοσμητικοί τοίχοι",
        "Οικολογικά χρώματα",
      ],
      icon: "🎨",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2070')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            Οι Υπηρεσίες μας
          </h1>
          <p className="font-inter text-xl md:text-2xl max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Ολοκληρωμένες λύσεις ανακαίνισης για κάθε ανάγκη
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h3 className="font-playfair text-3xl font-bold text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="font-inter text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                        <span className="font-inter text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Ενδιαφέρεστε για κάποια από τις υπηρεσίες μας;
          </h2>
          <p className="font-inter text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Επικοινωνήστε μαζί μας για μια δωρεάν προσφορά και ας συζητήσουμε τις ανάγκες σας
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8">
            <Link to="/contact">
              Ζητήστε Προσφορά <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
