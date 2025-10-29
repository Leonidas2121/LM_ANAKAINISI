import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Heart, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Ποιότητα",
      description: "Χρησιμοποιούμε μόνο τα καλύτερα υλικά και τις πιο σύγχρονες τεχνικές",
    },
    {
      icon: Target,
      title: "Ακρίβεια",
      description: "Σεβόμαστε το χρονοδιάγραμμα και τον προϋπολογισμό κάθε έργου",
    },
    {
      icon: Heart,
      title: "Πάθος",
      description: "Κάθε έργο είναι για εμάς μια ευκαιρία να δημιουργήσουμε κάτι μοναδικό",
    },
    {
      icon: Users,
      title: "Εμπειρία",
      description: "Πάνω από 15 χρόνια εμπειρίας στον χώρο των ανακαινίσεων",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            Σχετικά με Εμάς
          </h1>
          <p className="font-inter text-xl md:text-2xl max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Μετατρέπουμε χώρους σε έργα τέχνης εδώ και 15 χρόνια
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-8 text-center">
              Η Ιστορία μας
            </h2>
            <div className="font-inter text-lg text-muted-foreground space-y-6 leading-relaxed">
              <p>
                Η LM ΑΝΑΚΑΙΝΙΣΗ ιδρύθηκε το 2009 με ένα όραμα: να προσφέρει στους πελάτες μας όχι απλώς μια ανακαίνιση, 
                αλλά έναν πλήρη μετασχηματισμό του χώρου τους που να αντανακλά την προσωπικότητά τους και να βελτιώνει την ποιότητα ζωής τους.
              </p>
              <p>
                Με περισσότερα από 15 χρόνια εμπειρίας στον χώρο των οικοδομικών ανακαινίσεων, έχουμε ολοκληρώσει 
                με επιτυχία εκατοντάδες έργα σε όλη την Αττική. Κάθε έργο αντιμετωπίζεται με τον ίδιο επαγγελματισμό, 
                προσοχή στη λεπτομέρεια και αφοσίωση στην αριστεία, ανεξάρτητα από την κλίμακά του.
              </p>
              <p>
                Η ομάδα μας αποτελείται από έμπειρους τεχνίτες, αρχιτέκτονες και project managers που συνεργάζονται 
                αρμονικά για να φέρουν εις πέρας κάθε έργο με τον καλύτερο δυνατό τρόπο. Πιστεύουμε στη διαφάνεια, 
                την επικοινωνία και τη δημιουργία μακροχρόνιων σχέσεων εμπιστοσύνης με τους πελάτες μας.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-primary mb-4 text-center">
            Οι Αξίες μας
          </h2>
          <p className="font-inter text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Αυτά που μας κάνουν μοναδικούς και καθορίζουν τον τρόπο που εργαζόμαστε
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="text-accent" size={40} />
                    </div>
                    <h3 className="font-playfair text-2xl font-semibold text-primary mb-3">
                      {value.title}
                    </h3>
                    <p className="font-inter text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: "15+", label: "Χρόνια Εμπειρίας" },
              { number: "500+", label: "Ολοκληρωμένα Έργα" },
              { number: "98%", label: "Ικανοποίηση Πελατών" },
              { number: "50+", label: "Συνεργάτες" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-playfair text-5xl md:text-6xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="font-inter text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
